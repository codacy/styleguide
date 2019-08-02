# Codacy Stylesheets

This repository contains the stylesheets used by Codacy.

In this project we include some vendor code,
like bootstrap, bootstrap-select and bootstrap-tagsinput due to legacy reasons.

## Resources

This package publishes a some resources to be used:

* `dist/out/css/template.{.min.css,css}` - Codacy stylesheet based on Bootstrap 3
* `dist/out/scss/_variables.scss` - Useful variables used in the stylesheet to create new inline elements
* `dist/out/css/clear-sans-font-face.css` - Clear Sans Font Face (already included in the template)
* `style/**/*.scss` and `images/**/*.svg` -  Sources of the stylesheets

## Use

### Install dependencies and build

```sh
yarn
```

### Build

```sh
yarn build
```
