/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { ExternalLink } from '@utahdts/utah-design-system';
import React from 'react';
import { Link } from 'react-router-dom';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';
import pageUrls from '../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function GettingStarted() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Getting Started</h1>
      <p className="lead-in">The following code examples will help you get started quickly with using the Utah Design System and the Utah Header.</p>
      <hr />
      <p id="h2-other-resources" className="mb-auto">Other resources to get help with getting started:</p>
      <ul>
        <li>
          <ExternalLink href="https://utahdesignsystem.slack.com">Please join our Design System Slack Channel!</ExternalLink>
          <br />You can automatically join with your utah.gov email address.
        </li>
        <li>Send us an email: <ExternalLink href="mailto:dts_ui@utah.gov">dts_ui@utah.gov</ExternalLink></li>
        <li><ExternalLink href="https://github.com/utahdts/utah-design-system">GitHub Repository</ExternalLink></li>
      </ul>
      <hr />

      <h2 id="h2-getting-started-developers">Getting started for developers</h2>

      <h3 id="h3-utah-header">Utah Header</h3>
      <p>There are multiple ways to integrate the Utah Header within your website or application.
        You can use the javascript and css directly from a CDN, or you can use NPM to pull the code into a project as a dependency.
      </p>
      <p>
        You can view these demonstrations in the <code>examples</code> folder of the <ExternalLink href="https://github.com/utahdts/utah-design-system">Utah Design System GitHub Repository</ExternalLink>.
      </p>

      <h4>General Font Dependency</h4>
      <p>The Utah Header depends on the awesome font <code>Source Sans Pro</code>. You should load this font in order for the &quot;Utah, an official website&quot;, menus, and other elements to render correctly.</p>
      <PreCodeForCodeString
        codeRaw={`
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap" rel="stylesheet">
        `}
        allowScrollOverflow
        showBackgroundColor
      />

      <h4>Option 1: Universal Module Definition (UMD)</h4>
      <p>This option uses a CDN to include both the javascript and css in the <code>&lt;head&gt;</code>.
        The header is configured when the <code>utahHeaderLoaded</code> event fires.
        You can learn more about configuring the header on the <Link to={pageUrls.utahHeader}>Utah Header page</Link>.
      </p>
      <PreCodeForCodeString
        codeRaw={`
          <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css">
          <script src="https://unpkg.com/@utahdts/utah-design-system-header/dist/utah-design-system-header.umd.js"></script>
          <script>
            //wait for the utah header to be ready
            document.addEventListener('utahHeaderLoaded', () => {
                //set up the utah header
                window["@utahdts/utah-design-system-header"].setUtahHeaderSettings({title: 'My utah.gov Site'});
              });
          </script>
        `}
        allowScrollOverflow
        showBackgroundColor
      />

      <h4>Option 2: ES Module</h4>
      <p>This option uses a CDN to import the utah header from a CDN ES Module.
        The header is configured when you call <code>setUtahHeaderSettings</code> after importing the Utah Header code.
        You can learn more about configuring the header on the <Link to={pageUrls.utahHeader}>Utah Header page</Link>.
      </p>
      <PreCodeForCodeString
        codeRaw={`
          <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css">
          <script type="module">
            import { setUtahHeaderSettings } from 'https://unpkg.com/@utahdts/utah-design-system-header/dist/utah-design-system-header.es.js';
            setUtahHeaderSettings({title: 'My Utah.gov Site (ES)'});
          </script>
        `}
        allowScrollOverflow
        showBackgroundColor
      />

      <h4>Option 3: Create React App</h4>
      <p>
        This option pulls the <ExternalLink href="https://www.npmjs.com/package/@utahdts/utah-design-system-header">Utah Design System Header package</ExternalLink> from npm and imports it in to an application created with <ExternalLink href="https://create-react-app.dev/">Create React App</ExternalLink>.
        Here were the steps used to create the application and integrate the header:
      </p>
      <ol>
        <li>
          Create a react app with <ExternalLink href="https://create-react-app.dev/docs/getting-started">Create React App</ExternalLink><br />
          <PreCodeForCodeString
            codeRaw="npx create-react-app cra-utah-header-example"
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Install the <ExternalLink href="https://www.npmjs.com/package/@utahdts/utah-design-system-header">Utah Header Dependency</ExternalLink><br />
          <PreCodeForCodeString
            codeRaw="npm i @utahdts/utah-design-system-header"
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Import the header (js/css) in to the application code&apos;s App.js (see the <ExternalLink href="https://github.com/utahdts/utah-design-system">Utah Design System&apos;s GitHub repository&apos;s</ExternalLink> <code>examples/utah-header/create-react-app</code> folder)<br />
          <PreCodeForCodeString
            codeRaw={`
                import '@utahdts/utah-design-system-header/css';
                import {setUtahHeaderSettings} from '@utahdts/utah-design-system-header';
              `}
            allowScrollOverflow
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Load header settings to show the header in the application code&apos;s App.js (see the <ExternalLink href="https://github.com/utahdts/utah-design-system">Utah Design System&apos;s GitHub repository&apos;s</ExternalLink> <code>examples/utah-header/create-react-app</code> folder)<br />
          <PreCodeForCodeString
            codeRaw={`
                import { useEffect } from 'React';
                function App() {
                  useEffect(
                    () => {
                      setUtahHeaderSettings({});
                    },
                    []
                  );

                  // The CSS for the Utah Design System is scoped to the 
                  // 'utah-design-system' class and is optional if you
                  // prefer cooking your own.
                  return (
                    <div className="App utah-design-system">
                    ...
                    </div>
                  );
                }
              `}
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Run the application to see the header<br />
          <PreCodeForCodeString
            codeRaw="npm start"
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
      </ol>
      <h4>Option 4: Vite Plain JS App</h4>
      <p>
        This option pulls the <ExternalLink href="https://www.npmjs.com/package/@utahdts/utah-design-system-header">Utah Design System Header package</ExternalLink> from npm and imports it in to a plain JS application created with <ExternalLink href="https://vitejs.dev/guide/">Vite</ExternalLink>.
        Here were the steps used to create the application and integrate the header:
      </p>
      <ol>
        <li>
          Create a plain JS app with <ExternalLink href="https://vitejs.dev/guide">Vite</ExternalLink><br />
          <PreCodeForCodeString
            codeRaw="npm init vite@latest"
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Install the <ExternalLink href="https://www.npmjs.com/package/@utahdts/utah-design-system-header">Utah Header Dependency</ExternalLink><br />
          <PreCodeForCodeString
            codeRaw="npm i @utahdts/utah-design-system-header"
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Import the header (js/css) in to the application code&apos;s main.js (see the <ExternalLink href="https://github.com/utahdts/utah-design-system">Utah Design System&apos;s GitHub repository&apos;s</ExternalLink> <code>examples/utah-header/vite</code> folder)<br />
          <PreCodeForCodeString
            codeRaw={`
                import '@utahdts/utah-design-system-header/css';
                import {setUtahHeaderSettings} from '@utahdts/utah-design-system-header';
              `}
            allowScrollOverflow
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Load header settings to show the header in the application code&apos;s main.js (see the <ExternalLink href="https://github.com/utahdts/utah-design-system">Utah Design System&apos;s GitHub repository&apos;s</ExternalLink> <code>examples/utah-header/vite</code> folder)<br />
          <PreCodeForCodeString
            codeRaw={`
                setUtahHeaderSettings({});
              `}
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Run the application to see the header<br />
          <PreCodeForCodeString
            codeRaw="npm run dev"
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
      </ol>
      <p>
        You can see the example code base in the Utah Design System&apos;s <code>/examples/utah-header/vite</code> folder.
      </p>
      <h2 id="h2-getting-started-designers">Getting started for designers</h2>
      <p>Coming soon</p>
    </div>
  );
}

GettingStarted.propTypes = propTypes;
GettingStarted.defaultProps = defaultProps;

export default GettingStarted;
