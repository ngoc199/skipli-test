# Skipli Test Frontend

This is the Frontend of [Skipli First-round Interview Test Project](https://docs.google.com/document/d/1miM6OzTwrSgwupInCigF_hJjUbBCsgTRt33-tzfeUUQ/edit?usp=sharing).

## Features

The frontend has the following features:

- Create new user using phone number
- Authenticate user
- Search Github users
- Like Github users
- Display the user's profile with phone number and user's favorite Github users

## Installation

Run the command `npm install` in this directory to install all the dependencies of this project.

If you don't have NodeJS installed on your computer, [install NodeJS](https://nodejs.org/en/) version 18.13.0 or above. The Node version used to build this project is specified in the [.nvmrc file](./.nvmrc).

## Run Project

Run the command `npm start` in this directory to start the frontend of Skipli Test Project.

The website will be run at [localhost:3001](http://localhost:3001).

In order for the frontend to work correctly, the [backend](../backend/README.md) should be started first.

**Notice:** There are 3 routes in this project:

1. "/": the search page
2. "/login": the login page
3. "/profile": the profile page

The search page and the profile page are protected. Only the authenticated users can access those pages.

If you are redirected to the login page, you might not be authenticated.

## Technologies

The frontend of the Skipli Test Project uses:

- [ReactJS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios) to send requests to the backend
- [Bootstrap](https://getbootstrap.com/) for styling

## Things That Can Be Improved

- Add loading screen to let the user know what is happening
- Use a library like [React Query](https://www.npmjs.com/package/react-query) to make requests for better data processing and caching
- Create page layouts to make the website have consistent looking
- Handle errors

## Problems with Github REST API

Since the backend project using Github REST API, the latest change to the `public_repos` and `followers` properties causes a exceed rate-limit problem. You can read more about it in the [backend directory](../backend/README.md)

If the Github users are not loaded to the screen, it might be caused by this issue.

## Author

[Ngoc Nguyen](ngocoder.com): [email](mailto:ngoc@ngocoder.com)

