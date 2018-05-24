# DHIS2 Translated app

Sample application featuring translations with d2-i18n. Built on React and Webpack. Offers no styling, only the bare minimum required to build and start developing a DHIS2 app, translated with d2-i18n.

## Features

* Built with `React` and `Webpack`
* Linted with `eslint`, formatted with `prettier`
* Runs on your local `DHIS2` instance during development
* Compiles translations with `d2-i18n` on prestart and build

## Installation

```sh
git clone git@github.com:kjesvale/dhis2-translated-app.git
cd dhis2-translated-app
yarn
```

## Development

```sh
yarn start
```

### Linting and formatting

Install `ESLint` and `Prettier` globally:

```sh
yarn global add eslint prettier
```

### Editor

VSCode is recommended with the `ESLint` and `Prettier – Code formatter` extentions.

Add the following to your user/workspace settings to enable *formatting on save* with Prettier:

```json
"[javascript]": {
    "editor.formatOnSave": true
}
```
