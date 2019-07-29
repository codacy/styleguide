.DEFAULT-GOAL := help
.SETUP_AWS_REGION:
    export AWS_DEFAULT_REGION=us-east-1

# Variables
OWNER="codacy"
ENVIRONMENT="codacy"
DEPLOYMENT_TYPE?=website-legacy            # website-legacy            | react-website
PROJECT_NAME?="styleguide-website-legacy"  # styleguide-website-legacy | styleguide-react-website

# Commands
PARAMETERS:=(\
		'Domain (example: styleguide.dev.codacy.org)|DOMAIN' \
	)

help:
	@echo
	@echo "build and deploy help"
	@echo
	@grep -E '^[a-zA-Z_/%\-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo

.PHONY: create-package-bucket
create-package-bucket: .SETUP_AWS_REGION
	sceptre launch ${DEPLOYMENT_TYPE} -y

.PHONY: get-s3-bucket-name
get-package-s3-bucket-name: .SETUP_AWS_REGION
	$(eval S3_BUCKET:=$(shell sceptre list outputs -e envvar ${DEPLOYMENT_TYPE}/package-bucket.yaml | grep SCEPTRE_S3Bucket | cut -d= -f2))

.PHONY: package-static-page
package-static-page-cf: .SETUP_AWS_REGION create-package-bucket get-package-s3-bucket-name
	aws cloudformation package \
	--template-file templates/static-page.yaml \
	--s3-bucket $(S3_BUCKET) \
	--output-template-file templates/packaged-static-page.yaml

.PHONY: aws-create-stack
aws-create-stack: .SETUP_AWS_REGION package-static-page-cf ## deploy the environment to aws (DEPLOYMENT_TYPE mandatory)
	aws cloudformation deploy \
	--template-file ./templates/packaged-static-page.yaml \
	--stack-name ${PROJECT_NAME} \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameter-overrides \
	DomainParameter=/${ENVIRONMENT}/${PROJECT_NAME}/DOMAIN \
	HostedZoneIdParameter=/${ENVIRONMENT}/DNS/Public/HostedZoneId

.PHONY: create-ssm-parameters
create-ssm-parameters: ## Create the necessary secrets and parameters in the SSM parameter storage of the target account
	@echo "Set/update SSM secrets and parameters: /${ENVIRONMENT}/${PROJECT_NAME}/"

	@readonly parameters=$(PARAMETERS); \
	for fields in "$${parameters[@]}"; \
	do \
		IFS=$$'|' read -r description parameter_name <<< "$$fields" ; \
		read -p "$$description (<ENTER> will keep existing on /${ENVIRONMENT}/${PROJECT_NAME}/$$parameter_name): " VALUE ; \
		[ -z "$$VALUE" ] || aws ssm put-parameter \
		--name "/${ENVIRONMENT}/${PROJECT_NAME}/$$parameter_name" \
		--description "$$description" \
		--type "String" \
		--value "$$VALUE" \
		--overwrite ; \
	done

.PHONY: upload-react-website
upload-react-website: .SETUP_AWS_REGION ## Upload react website
	PAGES_S3_BUCKET=$$(aws cloudformation describe-stacks --stack-name ${PROJECT_NAME} --output text --query 'Stacks[0].Outputs[?OutputKey==`WebsiteBucketName`].OutputValue') ;\
	aws s3 sync ../website/build/ s3://$$PAGES_S3_BUCKET/ ;\
	aws s3 sync ./login_resources/ s3://$$PAGES_S3_BUCKET

.PHONY: upload-website-legacy
upload-website-legacy: .SETUP_AWS_REGION ## Upload website legacy
	PAGES_S3_BUCKET=$$(aws cloudformation describe-stacks --stack-name ${PROJECT_NAME} --output text --query 'Stacks[0].Outputs[?OutputKey==`WebsiteBucketName`].OutputValue') ;\
	aws s3 sync ../website-legacy/assets/ s3://$$PAGES_S3_BUCKET/assets ;\
	aws s3 sync ../website-legacy/images/ s3://$$PAGES_S3_BUCKET/images ;\
	aws s3 sync ../website-legacy/dist/ s3://$$PAGES_S3_BUCKET/dist ;\
	aws s3 sync ../website-legacy/ s3://$$PAGES_S3_BUCKET/ --exclude "*" --include "index.html" ;\
	aws s3 sync ./login_resources/ s3://$$PAGES_S3_BUCKET
