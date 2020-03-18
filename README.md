# webpack-js-boilerplate

A boilerplate to create Javascript libraries. Includes all needed development dependencies to start.

## Installation

Install the all dependencies.

```sh
$ cd web-ui-boilerplate
$ npm install
```

## How to build

```sh
    npm run build          // to build for production
    npm run build:dev      // to build for development
```

## How to run tests

```sh
    npm run test            // to run tests
    npm run test:watch      // to run tests in watch mode
```

**_Note: watch mode requires an initialized git in project's directory!_**

## Dependencies

To be able to build and run test we need these development dependencies:

| Dependency                              | Definition                                                                                                                                                                 |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **jest**                                | javascript test library                                                                                                                                                    |
| **babel-jest**                          | jest plugin to use babel for transformation.                                                                                                                               |
| **@babel/core**                         | babel compiler core                                                                                                                                                        |
| **babel-loader**                        | babel module loader for webpack                                                                                                                                            |
| **webpack-cli**                         | cconfigure and interact with build                                                                                                                                         |
| **@babel/preset-env**                   | allows us to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s) |
| **@babel/plugin-transform-modules-umd** | transforms ES2015 modules to UMD                                                                                                                                           |
