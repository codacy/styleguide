# Codacy Styleguide AWS Scripts

This modules holds the script to create the styleguide website.
It is used to publish:

- https://legacy.styleguide.codacy.org
- https://react.styleguide.codacy.org

## Requirements

- sceptre 2
- AWS CLI
- Yarn

## Structure

- [src](./src) - Contains the authentication Lambda.Edge code that allows,
  only `codacy.com` email holders, through Google OAuth to access the websites
- [login_resources](./login_resources) - static page resources needed by the Lambda.Edge OAuth
- [config](./config) - sceptre configurations for both websites
- [templates](./templates) - aws templates to create the CloudFront, S3 buckets and Lambda.Edge

### Usage

#### AWS

Run `make help` for all the commands available

#### Lambda.Edge code

```sh
cd src
yarn
yarn build
yarn test
```
