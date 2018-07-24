# start_pack
A basic start pack for a general React app. Utilizes Webpack, React, Redux, and Express.

---

## Getting Started

1. Clone it down

---

## Prerequisites

This starter pack requires NodeJS to run. Follow the instructions bellow to get started:

**Install Homebrew**

``` /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ```

You'll be using this to install any major tech such as Node or Postgres.

**Install node via Homebrew**

``` brew install node```

This will add node and npm. Neat~

**DEFAULT PORT IS 1337**

---

## Installing

A step by step series of examples that tell you how to get a development env running

After forking and cloning to your local computer:

1. Install dependencies with ``` npm install```
2. Build the bundle with webpack ```npm run prod-build``` for production ```npm run dev-build``` for development
3. Start the server with ```npm start``` for production or ```npm run server``` for development

---

## DIRECTORY STRUCTURE
````
.
├──client
|  ├──actions
|  |  └──index.js
|  ├──actionTypes
|  |  └──index.js
|  ├──components
|  |  └──App.jsx
|  ├──containers
|  ├──reducers
|  |  └──index.js
|  ├──store
|  |  └──index.js
|  └──index.jsx
├──database
├──public
|  ├──assets
|  ├──dist
|  ├──index.html
|  └──styles.css
├──server
|  ├──app.js
|  └──server.js
├──.eslintrc.js
├──.gitignore
├──package.json
├──README.md
└──webpack.config.js
````

---

## COMES WITH

* [Node](http://www.nodejs.org) - The server language
* [Express](https://www.expressjs.com) - The server framework
* [React](https://www.reactjs.org/) - Dependency Management
* [Redux](https://redux.js.org) - Global store management
* [Webpack](https://webpack.js.org) - "Module builder"

---

## STYLE GUIDE
**AIRBNB**

---

## Authors

* **Makan Azarshahy** - *Initial work*

If you would like to contribute please see the **Contributing** section above
