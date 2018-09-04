import React, { Component } from 'react';
import TextBlock from '../TextBlock';
import CodeBlock from '../Codeblock';
import H1 from '../H1'

class Home extends Component {
  render () {
    return (
      <TextBlock>
          <H1>Create</H1>
          <br />
          <p>Create a new app using Rawrs.</p>
          <br />
          <p>Rawrs was made with rapid development in mind. Your app will be set up with example routes, Styled Components implementation, and support for advanced JavaScript features like async/await, and optionally Redux.</p>
          <br />
          <table>
              <tr>
                <th width="25%">Option</th>
                <th>Description</th>
              </tr> 
              <tr>
                <td>-r, --redux</td>
                <td>Include redux dependencies and files, and create App as a working redux aware container</td>
              </tr> 
              <tr>
                <td>--no-git</td>
                <td>Skip git setup, does not init repository or add a .gitignore file to application</td>
              </tr>
          </table>
          <br />
          <p>Here's an example of creating an app that handles all the bindings that comes with React + Redux, and generating a redux component.</p>
          <br />
          <pre>
            <CodeBlock>
              cd ~/project<br />
              rawrs create my-new-app --redux <br />
              cd my-new-app/src <br />
              rawrs generate components/ContactUs --redux <br />
              parcel index.html <br />
            </CodeBlock>
          </pre>
          <br />
          <p>This will create an app with redux support, build and serve the application at http://localhost:1234 with hot module reloading, and add a new redux-aware component for a contact page.</p>
          <br />
          <br />
          <H1>Generate</H1>
          <br />
          <p>Create a file - either component, redux component, or ES6 class using current best-practices.</p>
          <br />
          <table>
              <tr>
                <th width="25%">Option</th>
                <th>Description</th>
              </tr> 
              <tr>
                <td>-f, --functional</td>
                <td>Creates a functional rather than the default class based component</td>
              </tr>
              <tr> 
                <td>-r, --redux</td>
                <td>Add redux and react-redux bindings and handle component connect</td>
              </tr> 
              <tr>
                <td>--content</td>
                <td>	Content to put into the render block. Line breaks will be respected and can just be entered like so: <pre class="inline">&lt;/h2&gt;\n&lt;p&gt;</pre></td>
              </tr>
              <tr>
                <td>--imports</td>
                <td>	Pre-written import statements to include in the head. Again, line breaks are respected.</td>
              </tr>
          </table>
          <br />
          <pre>
            <CodeBlock>
              rawrs generate component components/Menu
            </CodeBlock>
          </pre>
          <br />
          <p>As the generate command is aliased to g, and the file type is optional and defaults to component, the following is identical.</p>
          <br />
          <pre>
            <CodeBlock>
              rawrs g components/Menu
            </CodeBlock>
          </pre>
          <br />
          <p>A .jsx is appended to the filename automatically and is not required, but is harmless and will not duplicate if accidentally added. As long as a directory already exists, you can create a component in any directory structure.</p>
          <br />
          <pre>
            <CodeBlock>
              rawrs g components/ui/Header/NavBar
            </CodeBlock>
          </pre>
          <br />
          <br />
          <H1>Destroy</H1>
          <br />
          <p>The opposite of generate, using the destroy command will delete files. This is a destructive command and full responsibility should be taken when using it. It is nevertheless a useful command when quickly making structures:</p>
          <br />
          <pre>
            <CodeBlock>
              rawrs g Aboutus //whoops, not right <br />
              rawrs destroy Aboutus <br />
              rawrs g components/AboutUs -f <br />
            </CodeBlock>
          </pre>
          <br />
          <p>Be very warned, though. rawrs will delete any file it's told to delete</p>
          <br />
          <pre>
            <CodeBlock>
              rawrs destroy App.jsx <br />
              rawrs destroy index <br />
            </CodeBlock>
          </pre>
          <br />
      </TextBlock>
    );
  }
}

export default Home;
