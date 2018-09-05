[![npm](https://img.shields.io/npm/v/rawrs.svg)](https://www.npmjs.com/package/rawrs)

# Rawrs

React App With Routing and Styled-components.

## Overview

Rawrs is a command line utility for React. It was made in an attempt to add to and improve the React ecosystem. It has much more functionality than Create React App, but much less than other, application specific boilerplates. This makes Rawrs the perfect choice for developers that are new to React.

Rawrs has 5 main features.

1. [React-Routing](https://github.com/ReactTraining/react-router)- Such a necessary feature in many applications, Rawrs has routing implemented with example routes in the example scaffolding.
2. [Styled-Components](https://www.styled-components.com/docs)- While other options such as SCSS are great, Styled Components enforces best practices- Small components, single use class names, splitting components and containers.
3. Code Generation- Rawrs allows you to create components in the command line. This is something that other frameworks/libraries have, but is rare in the React ecosystem for some reason.
4. [ParcelJS](https://parceljs.org/)- Rawrs is set up using ParcelJS, a zero configuration web application bundler that is much more user-friendly than webpack.
5. [Redux](https://redux.js.org/)- Getting started with Redux is often difficult for beginners, so Rawrs has an option to build your app with Redux, helping by setting up the basic structure.

## Install
```
npm install -g rawrs
```

## Dependencies

You need to have ParcelJS installed to be able to serve and build your app.
```
npm install -g parcel-bundler
```

## Basic usage
```
rawrs create firstapp
cd firstapp/src
parcel index.html
```
And that's all it takes to go from zero to working app.

## Usage

### Create

Create a new app using Rawrs.

Rawrs was made with rapid development in mind. Your app will be set up with example routes, Styled Components implementation, and support for advanced JavaScript features like async/await, and optionally Redux.

| Option           | Description | 
| ---------------- |-------------| 
| `-r, --redux` | Adds redux setup, installing dependencies and setting up the store |
| `--no-git ` |  Skip git support, don't initialise repo |

Here's an example of creating an app that handles all the bindings that comes with React + Redux, and generating a redux component.

```
cd ~/project
rawrs create new-app --redux
cd new-app/src
rawrs generate components/About --redux
parcel index.html
```

This will create an app with redux support, build and serve the application at http://localhost:1234 with hot module reloading, and add a new redux-aware component for a about page.

### Generate

Create a file - either component, redux component, or ES6 class using current best-practices.

| Option           | Description | 
| ---------------- |-------------| 
| `-f, --functional` | Creates a functional rather than class based component |
| `-r, --redux` | Adds redux setup to the component (ignored by functional component) |
| `--content <string>` | Content to put into the render block. Line breaks will be respected and can just be entered like so: `</h2>\n<p>`|
| `--imports <string>` | Pre-written import statements to include in the head. Again, line breaks are respected. |

```
rawrs generate component components/Menu
```

The `generate` command is aliased to `g`, and the file type is optional and defaults to component, the following is identical.

```
rawrs g components/Menu
```

A .jsx is appended to the filename automatically and is not required, but is harmless and will not duplicate if accidentally added. As long as a directory already exists, you can create a component in any directory structure.

```
rawrs g components/ui/Header/NavBar
```

Full example of creating an AboutUs class component and adding an import and content:

```
rawrs g components/AboutUs -f --imports "import { Link } from 'react-router-dom';" --content "<h2>About Us</h2>\n\n<p>Some text about company<Link to='/history'>Learn More</Link></p>"
```

Note: You can put anything in the import/content. Rawrs doesn't validate it.


### Destroy

The opposite of generate, using the destroy command **will delete** files. This is a destructive command and full responsibility should be taken when using it. It is nevertheless a useful command when quickly making structures:

```
rawrs g Aboutus //whoops, not right
rawrs destroy Aboutus
rawrs g components/AboutUs -f
```

Be warned, though. Rawrs **will** delete any file it's told to delete.

```
rawrs destroy App.js
rawrs destroy index
```

### Serve / Build

To run your application in development mode, navigate to the main directory, in the example app's case it's /you-app/src, and run 
```
parcel index.html
```

To build your app for production, run
```
parcel build index.html
```

Parcel will list the files it just built. Take the files and serve them however you would any other app with an index.html entry point.


