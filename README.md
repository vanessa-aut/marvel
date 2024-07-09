# Marvel

## Table of contents

- [Marvel](#marvel)
  - [Requirements](#requirements)
  * [1 - Create an account](#1---create-an-account)
  * [2 - Get your Keys](#2---get-your-keys)
  * [3 - Set your keys](#3---set-your-keys)
- [Development server](#development-server)
  - [1 - Install dependencies](#1---install-dependencies)
  - [2 - Start the application](#2---start-the-application)
  - [3 - Navigate](#3---navigate)
- [Build](#build)
- [Running unit tests](#running-unit-tests)
- [Running e2e tests](#running-e2e-tests)
- [Running e2e UI testing suite](#running-e2e-ui-testing-suite)
- [Production](#production)

## Requirements

To use this project, you'll need a Marvel developer account.

### 1 - Create an account

Go to [Marvel Developer website](https://developer.marvel.com/)

### 2 - Get your Keys

Go to [your account information](https://developer.marvel.com/account)

### 3 - Set your keys

- Copy the `.env.example` and rename it to `.env.local`
- Fill in the variables with your Marvel account data

## Development server

### 1 - Install dependencies

Run `npm install`

### 2 - Start the application

Run `npm run dev` for a dev server.

The application will automatically reload if you change any of the source files.

### 3 - Navigate

`http://localhost:4200/`

## Build

Run `npm run build` to build the project.

The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests.

## Running e2e tests

Run `npm run test:e2e` to execute the e2e tests.

## Running e2e UI testing suite

Run `npm run test:e2e:ui` to execute the UI testing suite.

## Production

Visit [the deployed version in Vercel](https://marvel-eight-eta.vercel.app/)
