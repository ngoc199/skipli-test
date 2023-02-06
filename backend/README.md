# Skipli Test Backend

This is the Backend of [Skipli First-round Interview Test Project](https://docs.google.com/document/d/1miM6OzTwrSgwupInCigF_hJjUbBCsgTRt33-tzfeUUQ/edit?usp=sharing).

## Features

The backend has the following features:

- Create new user using phone number
- Verify user's phone number
- Search Github users
- Like Github users
- Provide the user's profile with phone number and user's favorite Github users

## Installation

Run the command `npm install` in this directory to install all the dependencies of this project.

If you don't have NodeJS installed on your computer, [install NodeJS](https://nodejs.org/en/) version 18.13.0 or above. The Node version used to build this project is specified in the [.nvmrc file](./.nvmrc).

## Run Project

Run the command `npm start` in this directory to start the backend of Skipli Test Project.

## Test Project

If you want to run the integration test of this project, you have to do the following steps:

1. Run the command `npm run db:up` to start the Firestore emulator. Firestore emulator is the local Firestore. All the data in this local Firestore will be deleted after testing.
2. Run the command `npm run test:integration` to start testing.

```
**Notice:** The integration tests in this project only test the success condition, a.k.a. the happy path. This is due to the limited time and I only need to ensure some core features work as expected.

In other words, the validation might not work properly and the errors might not be handled.
```

## Technologies

The backend of the Skipli Test Project uses:

- [ExpressJS](https://expressjs.com/)
- [Twilio](https://www.twilio.com/) to send SMS
- Firestore of [Firebase](https://firebase.google.com/) to store data

## Author

[Ngoc Nguyen](ngocoder.com): [email](mailto:ngoc@ngocoder.com)
