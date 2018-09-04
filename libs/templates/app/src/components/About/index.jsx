import React, { Component } from 'react';
import TextBlock from '../TextBlock';
import H1 from '../H1';

class About extends Component {
  render () {
    return (
      <TextBlock>
        <H1>About this App</H1>
        <br />
        <p>This app is just a placeholder, but it has all the functionality you need to start building an app. Add functionality, delete, edit, do whatever you like to build your own app.</p>
        <br />
        <p>Included are examples of state management, styled-components implementation, functional components, routing, lifecycle functions, actions passed as props, and more.</p>
        <br />
        <p>This app is set up following modern React “best practices”. Small components, single use class names, and splitting containers and components. Rawrs is set up  so you can build React apps effectively and efficiently with DRY and reusable code.</p>
        <br />
        <H1>What is Rawrs?</H1>
        <br />
        <p>Rawrs is my attempt to improve the React Ecosystem, especially for new developers. Trying very hard not to “re-invent the wheel”, I’ve scanned github for different boilerplates.</p>
        <br />
        <p>First, create-react-app is great, but it doesn’t even have routing. It’s as barebones as you can get while still being a functional react app, and that may not be entirely helpful to beginners who have a working knowledge of React.</p>
        <br />
        <p>On the other end of the spectrum, you get scaffolds that throw in the kitcen sink, so many are so heavy. Those boilerplates are great if you really need to build a app that has very specific functionality, but their package.json files are as long as CVS receipts.</p>
        <br />
        <p>I wanted to create a boilerplate that had just enough to get you going, and then you can add whatever you need later as it comes up. Which is a philosophy as true in life as it is in programming; don’t add stuff before it’s absolutely necessary.</p>
      </TextBlock>
    );
  }
}

export default About;