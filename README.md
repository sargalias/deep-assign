# Deep assign

Deep assign is a small JavaScript utility to deeply assign an object.
Subtypes of object (such as arrays, funcitons or Date) are ignored.

## Table of contents


- [Table of contents](#table-of-contents)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the project for development](#running-the-project-for-development)
- [Usage](#usage)
  - [Starting the project](#starting-the-project)
  - [Building the project](#building-the-project)
  - [Running the tests](#running-the-tests)
  - [Code formatting and linting](#code-formatting-and-linting)
- [Built with](#built-with)
- [License](#license)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- NPM

Installation requires [NPM](https://www.npmjs.com/) which is included with [Node](https://nodejs.org/). You can install Node by downloading the installer from the website.

To update NPM to the latest version:

```
npm install -g npm@latest
```

### Installation

1. Clone the repo

```
git clone https://github.com/sargalias/deep-assign.git
```

2. Install NPM packages

```
npm install
```

### Running the project for development

```
npm start
```

## Usage

### Starting the project

- Start the project on a local server: `npm start`

### Building the project

- Build the project for production: `npm run build`
- Build the project for development (linting errors won't fail the build): `npm run build:dev`
- Run the build in watch mode: `npm run build:watch`

### Running the tests

- Run Jest tests with coverage: `npm test`
- Run Jest tests without coverage: `npm run test:no-coverage`
- Run Jest tests in watch mode: `npm run test:watch`

### Code formatting and linting

- Format code with [Prettier](https://prettier.io) code formatter: `npm run format`
- Run lint check: `npm run lint`
- Run lint check in fix mode: `npm run lint:fix`


## Built with

- [Webpack](https://github.com/webpack/webpack) - To bundle code
  - [webpack-merge](https://github.com/survivejs/webpack-merge) - To help us create multiple webpack configs
  - [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) - To clean the destination directory for every build
  - [eslint-loader](https://github.com/webpack-contrib/eslint-loader) - For using ESLint with webpack
- [Jest](https://github.com/facebook/jest) - Test framework
  - [jest-extended](https://github.com/jest-community/jest-extended) - More awesome assertions for Jest
  - [jest-each](https://github.com/facebook/jest/tree/master/packages/jest-each) - Compact way to run the same test with multiple inputs
  - [ts-jest](https://github.com/kulshekhar/ts-jest) - Allows you to use TypScript in your jest tests
- [ESLint](https://github.com/eslint/eslint) - JavaScript static code analysis
  - [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Aribnb's base .eslintrc
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - For using Prettier with ESLint
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Helps validate proper imports
  - [eslint-plugin-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack) - Import resolver for webpack
  - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) - Rules and globals for Jest
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Runs prettier as an ESLint rule
  - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) - Allows ESLint to work with TS files
- [Babel](https://github.com/babel/babel) - To transpile code
  - [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) - To transpile code in tests
  - [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest) - For Jest to transpile code
- [Prettier](https://github.com/prettier/prettier) - Code formatting
- [TypeScript](https://github.com/microsoft/TypeScript) - Types for JavaScript
- And lots of types from the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) project


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
