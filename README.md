# Codacy Styleguide

[![Codacy Quality Badge](https://api.codacy.com/project/badge/Grade/2610c28e63ba4f5d9c0c697dca040f7c)](https://www.codacy.com/app/Codacy/styleguide?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=codacy/styleguide&amp;utm_campaign=Badge_Grade)
[![Circle CI](https://circleci.com/gh/codacy/styleguide.svg?style=svg)](https://circleci.com/gh/codacy/styleguide)
[![npm version](http://img.shields.io/npm/v/@codacy/stylesheets.svg?style=flat)](https://npmjs.org/package/@codacy/stylesheets "View this project on npm")

This is the Codacy awesome styleguide repository.
It will include components, code snippets and how to use them.

## Use

### SBT

```scala
"org.webjars.npm" % "codacy__stylesheets" % "<VERSION>"
```

### NPM

```json
"dependencies": {
    // ...
    "@codacy/stylesheets": "<VERSION>",
    "@codacy/react-components": "<VERSION>"
}
```

### Website

- https://legacy.styleguide.dev.codacy.org
- https://react.styleguide.dev.codacy.org

## Structure

- [.aws](./.aws) - Deployment scripts and configurations
- [components](./components) - Custom react components
- [stylesheets](./stylesheets) - Codacy stylesheets
- [website](./website) - Codacy styleguide react website
- [website-legacy](./website-legacy) - Codacy styleguide legacy website

## Develop

### Install Dependencies

```sh
yarn
yarn bolt:install
```

### React Website

```sh
# yarn start:website # Just rebuilds the website without updating on dependency changes
yarn start:website-and-dependencies
```

### Legacy Website

```sh
# yarn start:website-legacy # Just rebuilds the website without updating on dependency changes
yarn start:website-legacy-and-dependencies
```

### React Components

```sh
yarn build:components
```

### Stylesheets

```sh
yarn build:stylesheets
```

### Others

Check section `scripts` in [package.json](./package.json)

## What is Codacy

[Codacy](https://www.codacy.com/) is an Automated Code Review Tool that monitors your technical debt,
helps you improve your code quality, teaches best practices to your developers, and helps you save time in Code Reviews.

### Among Codacy features

- Identify new Static Analysis issues
- Commit and Pull Request Analysis with GitHub, BitBucket/Stash, GitLab (and also direct git repositories)
- Auto-comments on Commits and Pull Requests
- Integrations with Slack, Jira, YouTrack
- Track issues Code Style, Security, Error Proneness, Performance, Unused Code and other categories

Codacy also helps keep track of Code Coverage, Code Duplication, and Code Complexity.

Codacy supports PHP, Python, Ruby, Java, JavaScript, and Scala, among others.

### Free for Open Source

Codacy is free for Open Source projects.
