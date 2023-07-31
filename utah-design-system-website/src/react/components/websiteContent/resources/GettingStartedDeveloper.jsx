/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { ExternalLink } from '@utahdts/utah-design-system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';
import pageUrls from '../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function GettingStartedDeveloper() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Getting Started for Developers</h1>
      <p className="lead-in">
        lorem ispum soemthing something here that talksa bout a blurba bout this
      </p>

      <ul>
        <li>
          Using only the Utah Header
          <ul>
            <li>
              Importing via CDN
              <ul>
                <li>UMD (JS put in document/window) Example: CSS and JS & Overriding (link)</li>
                <li>ES (script import) Example: CSS and JS & Overriding (link)</li>
              </ul>
            </li>
            <li>
              Importing via NPM
              <ul>
                <li>Create React App: CSS and JS & Overriding (link)</li>
                <li>Vite JS App: CSS and JS & Overriding (link)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Using the entire Utah Design System
          <ul>
            <li>Importing via CDN: CSS and JS & Overriding (link)</li>
            <li>Importing via NPM: CSS and JS & Overriding (link)</li>
            <li>Using CSS Variables</li>
            <li>Using CSS vs SCSS</li>
          </ul>
        </li>
        <li>How to override header CSS variables</li>
      </ul>

      <h3 id="h3-utah-header" className="mt-spacing">Importing the Utah Header</h3>
      <p>There are multiple ways to integrate the Utah Header within your website or application.
        You can use the javascript and css directly from a CDN, or you can use NPM to pull the code into a project as a dependency.
      </p>
      <p>
        You can view these demonstrations in the <code>examples</code> folder of the <ExternalLink href="https://github.com/utahdts/utah-design-system">Utah Design System GitHub Repository</ExternalLink>.
      </p>

      <h4>Header Options Documentation</h4>
      <p>
        The Utah Header has many options to consider. These options are documented on the <NavLink to={pageUrls.utahHeader}>Utah Header documentation page</NavLink>.
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

      <h4>Ways to incorporate in to your application</h4>
      <p>
        There is no limit to the technology stacks that can incorporate the Utah Header. We want to <ExternalLink href="mailto:dts_ui@utah.gov">hear from you</ExternalLink> about your stack, your
        successes, and pain points. Please send us your experiences and/or code and stack. We would love to be add it here!
      </p>

      <p className="mb-spacing-xs">We have currently documented the following options:</p>
      <ul>
        <li><a href="#option__universal-module-definition">Universal Module Definition (UMD)</a></li>
        <li><a href="#option__es-module">ES Module</a></li>
        <li><a href="#option__create-react-app">Create React App</a></li>
        <li><a href="#option__vite-plain-js-app">Vite Plain JS App</a></li>
      </ul>

      <h4 id="option__universal-module-definition" className="mt-spacing">Option 1: Universal Module Definition (UMD)</h4>
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

      <h4 id="option__es-module">Option 2: ES Module</h4>
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

      <h4 id="option__create-react-app">Option 3: Create React App</h4>
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
          Import the header (js/css) in to the application code&apos;s App.js (see <ExternalLink href="https://github.com/utahdts/utah-design-system/examples/utah-header/create-react-app">examples/utah-header/create-react-app</ExternalLink>)<br />
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
          Load header settings to show the header in the application code&apos;s App.js (see <ExternalLink href="https://github.com/utahdts/utah-design-system/examples/utah-header/create-react-app">examples/utah-header/create-react-app</ExternalLink>)<br />
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
      <p>
        You can see the example code base in <ExternalLink href="https://github.com/utahdts/utah-design-system/tree/dev/examples/utah-header/create-react-app">/examples/utah-header/create-react-app</ExternalLink>.
      </p>
      <h4 id="option__vite-plain-js-app">Option 4: Vite Plain JS App</h4>
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
          Import the header (js/css) in to the application code&apos;s main.js (see <ExternalLink href="https://github.com/utahdts/utah-design-system">examples/utah-header/vite</ExternalLink>)<br />
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
          Load header settings to show the header in the application code&apos;s main.js (see <ExternalLink href="https://github.com/utahdts/utah-design-system">examples/utah-header/vite</ExternalLink>)<br />
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
        You can see the example code base in <ExternalLink href="https://github.com/utahdts/utah-design-system/tree/dev/examples/utah-header/vite">/examples/utah-header/vite</ExternalLink>.
      </p>

      <h3 id="import-design-system" className="mt-spacing">Importing the Utah Design System</h3>
      <p>
        Javascript and css libraries are provided for the Design System that can help springboard an application&apos;s
        usage of the Design System concepts. Here are some examples of getting started with these libraries.
      </p>
      <h4 id="css-variables">Use Design System CSS Variables</h4>
      <p className="mb-spacing-xs">
        The Design System library provides CSS variables that can be used in your CSS. These include variables for:
      </p>
      <ul className="mb-spacing">
        <li>Spacing <code>--spacing</code></li>
        <li>Primary Color <code>--primary-color</code></li>
        <li>Secondary Color <code>--secondary-color</code></li>
        <li>Accent Color <code>--accent-color</code></li>
        <li>Color <code>--gray-color</code> <code>--danger-color</code></li>
        <li>Timing <code>--timing-medium</code></li>
        <li>
          And more! See <ExternalLink href="https://github.com/utahdts/utah-design-system/blob/main/%40utahdts/utah-design-system/css/1-settings/_settings-index.scss">utah-design-system/@utahdts/utah-design-system/css/1-settings/_settings-index.scss</ExternalLink> for all the variables.
        </li>
      </ul>
      <h4 id="css-scoping">CSS Scoping</h4>
      <p>In order for your html to be styled appropriately, make sure to include the <code>.utah-design-system</code> class on your main container.</p>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        codeRaw={`
          <body class="utah-design-system">
            # My website...
          </body>
        `}
      />
      <h3 id="import-css">Import Design System via CSS</h3>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        codeRaw={`
          # In your home html file, import the design system css
          <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system@0.0.2/css/build/utah-design-system.css">

          # In your css, use the css variables
          h1 {
            margin-bottom: --spacing;
          }
          .button {
            color: --primary-color;
          }

          # In your html, use your classes (make sure to scope to utah-design-system)
          <body class="utah-design-system">
            <h1>State of Utah Site</h1>
            <a class="button">Submit My Response</a>
          </body>
        `}
      />

      <p className="mb-spacing-xs">
        The Design System library provides SASS SCSS variables that can be used in your SCSS. These include variables for:
      </p>
      <ul className="mb-spacing">
        <li>Color <code>$purple_00</code></li>
        <li>Base Class <code>$base-class</code></li>
        <li>Light/Dark colors <code>$color-is-light</code></li>
        <li>
          And more! See <ExternalLink href="https://github.com/utahdts/utah-design-system/blob/dev/%40utahdts/utah-design-system/css">utah-design-system/@utahdts/utah-design-system/css</ExternalLink> for all the scss files.
        </li>
      </ul>
      <h3 id="import-sass">Import Design System via SASS</h3>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        codeRaw={`
          # In your main scss file, import the design system scss
          @use "@utahdts/utah-design-system/css/index.scss" as ds-settings;

          # In your scss, use the scss variables
          h1 {
            background-color: #{ds-settings.$electric-yellow-05} !important;
          }

          # Your html will now be styled with the scss variables (make sure to scope to utah-design-system)
          <div class="utah-design-system">
            <h1>State of Utah Site</h1>
          </div>
        `}
      />
    </div>
  );
}

GettingStartedDeveloper.propTypes = propTypes;
GettingStartedDeveloper.defaultProps = defaultProps;

export default GettingStartedDeveloper;
