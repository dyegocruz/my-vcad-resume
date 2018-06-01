# My Vcard Resume

I've made this project to training my skills with ReactJS and yours tools with Firebase to get some information about my resume.

## Requirements

For development, you will only need Node.js installed on your environement.

And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).

You should be able to run the following command after the installation procedure below.

## Install

$ git clone https://github.com/dyegocruz/my-vcad-resume
$ cd my-vcad-resume
$ npm install

### Configure app

Copy `.env.local-sample.js` to `.env.local.js` then edit it with the url where you have setup:
- firebase config (change and import file firebase-json-sample.json to your firebase)
- github user

## Start & watch

$ npm start

## Simple build for production

$ npm run build

## Languages & tools

### JavaScript

-  [React](http://facebook.github.io/react) is used for UI.
- [jQuery](https://jquery.com/) is used for support on effects scroll with [jQuery-easing](https://jqueryui.com/easing/).
-  [ESLint](https://eslint.org/) is used to provide a pluggable linting utility for JavaScript.
- [Jest](https://facebook.github.io/jest/) is used to javascript and React tests.
-  [Firebase](https://firebase.google.com/?hl=pt-br) is used to store data to can get used for front-end apps.

### CSS

-  [Sass](https://sass-lang.com/) is used to describe the style of a document cleanly and structurally, with more power than flat CSS allows.

### Static server with Livereload

The app embed for development a static connect server with livereload plugged.

So each time you start the app, you get automatic refresh in the browser whenever you update a file.
