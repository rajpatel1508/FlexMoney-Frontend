# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Project Description

This Website offers functionality to register user for Yoga class. The website contains the form which takes user information and payment details and register them if payment is successful.
Website is developed on MERN stack i.e. React for front-end and Node,Express and MongoDB for Back-end. 

## Dependencies

react : React is a JavaScript library for creating user interfaces.

react-router-dom : package contains bindings for using React Router in web applications.
```bash
npm i react-router-dom
```
react-toastify : React-Toastify allows you to add custom notifications to your app.
```bash
npm i react-toastify
```
axios : Axios is a simple promise based HTTP client for the browser and node.js.
```bash
npm i axios
```

## Front-end functionality

The homepage is to contain basic information about the website and organisation.
The register button on homepage redirects to register form.
The register form contains folowing fields.

- First Name : First Name of User
- Last Name : Last Name of User
- Contact Number : Contact Number of User
- Age : Age of User (must be between 18 to 65)
- Batch : Batch in which user want to join class
- Card Number : Credit/Debit Card Number for Payment
- CVV : CVV of card for payment
- Expiry Date : Date of Expiry of card
- Amount : A Fixed field containing amount to be payed.

All the data first go through Validation before sending to back-end. If any data is not valid an error message is sent to front-end.

