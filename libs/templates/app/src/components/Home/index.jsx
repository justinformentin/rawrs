import React, { Component } from 'react';
import TextBlock from '../TextBlock';
import CodeBlock from '../Codeblock';
import H1 from '../H1'

class Home extends Component {
  render () {
    return (
      <TextBlock>
          <H1>Welcome to your Rawrs app</H1>
          <br />
          <p>This is an app created by Rawrs, a command-line tool to jump start creating a React application. Rawrs stands for React App With Routing and Styled Components.</p>
          <br />
          <p>This application is being served by <a href="https://parceljs.org/">ParcelJS</a>, a fast web app bundler that has zero configuration. If you’d like to dive a bit deeper and really learn about all of ParcelJS’s features and function, a good place to start is their <a href="https://parceljs.org/getting_started.html">documentation</a>.</p>
          <br />
          <p>Rawrs utilizes <a href="https://www.styled-components.com/">Styled Components</a>, <a href="https://github.com/ReactTraining/react-router">React Router</a>, and optionally, <a href="https://redux.js.org/">Redux</a> Go ahead and open the project in any editor and make changes.</p>
          <br />
          <H1>Using Rawrs</H1>
          <br />
          <p>Rawrs’ command line tool gives you the ability to quickly add components to your project. Create functional or class components, with the option of adding redux.</p>
          <br />
          <pre>
            <CodeBlock>
          cd components<br />
          rawrs g TodoList<br />
          rawrs g TodoItem -f<br />
          rawrs g ItemCheckbox -f<br />
            </CodeBlock>
          </pre>
        <br />
        <p>For a more in-depth usage guide, see the <a href="/usage">Usage</a> page.</p>
      </TextBlock>
    );
  }
}

export default Home;
