# Codacy Styleguide

This is the Codacy awesome styleguide repository.
It will include components, code snippets and how to use them.

## Structure

- [.aws](./.aws) - Deployment scripts and configurations
- [components](./components) - Custom react components
- [stylesheets](./stylesheets) - Codacy stylesheets
- [website](./website) - Codacy styleguide react website
- [website-legacy](./website-legacy) - Codacy styleguide legacy website

### Develop

#### Install Dependencies

```sh
yarn
yarn bolt:install
```

#### React Website

```sh
# yarn start:website # Just rebuilds the website without updating on dependency changes
yarn start:website-and-dependencies
```

#### Legacy Website

```sh
# yarn start:website-legacy # Just rebuilds the website without updating on dependency changes
yarn start:website-legacy-and-dependencies
```

#### React Components

```sh
yarn build:components
```

#### Stylesheets

```sh
yarn build:stylesheets
```

#### Others

Check section `scripts` in [package.json](./package.json)
