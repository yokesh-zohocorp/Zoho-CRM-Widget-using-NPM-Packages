# NPM Packages in Zoho CRM Widgets

Demo Link : https://zwdrive.com/00wY5A

Welcome to an enhanced Zoho CRM experience! This README.md provides a comprehensive guide on seamlessly integrating and leveraging NPM packages within Zoho CRM widgets. Elevate the functionality and customization of your Zoho CRM project with these straightforward steps.

## Step 1: Create Zoho CRM Project

Initiate a Zoho CRM project with the following command and navigate to the project folder:

```bash
$ zet init
```

## Step 2: Install NPM Packages

Choose your desired NPM packages and install them using the following command:

```bash
$ npm install dayjs
```

## Step 3: Install Webpack

Ensure Webpack is installed by running the following commands:

```bash
$ npm install webpack webpack-cli --save-dev
```

## Step 4: Update Package.json

Add the "dev":"webpack --watch" key in the scripts object in your package.json file.

## Step 5: Configure Webpack

Create a webpack configuration file (`webpack.config.js`) with the following content:

```javascript
const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'app')
  }
};
```

## Step 6: Write Your Business Logic

Craft your business logic in the `index.js` file; it will be compiled and made available in the `bundle.js` file. Remember to include `bundle.js` in your `widget.html` file.

## Step 7: Validate and Pack

Run the following commands to validate and pack your project:

```bash
$ zet validate
$ zet pack
```

## Step 8: Upload Packed Files

Your packed files will be located in the `dist` folder. Upload the generated file in Zoho CRM, and you're all set!


If you're curious about incorporating React into your widgets, You can find a demonstration [here](https://github.com/Athulpreman/React-project-zipping)


Happy Coding!!! 🚀
