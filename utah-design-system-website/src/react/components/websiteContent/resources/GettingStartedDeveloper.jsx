/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { ExternalLink } from '@utahdts/utah-design-system';
import React from 'react';
import { Link } from 'react-router-dom';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';
import pageUrls from '../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function GettingStartedDeveloper() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Getting Started for Developers</h1>
      <p className="lead-in">
        There are multiple ways to integrate the Utah Design System and Utah Header within your website or application.
        You can use the javascript and CSS directly from a CDN, or you can use NPM to pull the code into a project as a dependency.
      </p>

      <div><strong>Help us make this page better.</strong></div>
      <p>
        There is no limit to the technology stacks that can incorporate the Utah Header and Design System. We want to <ExternalLink href="mailto:dts_ui@utah.gov">hear from you</ExternalLink> about your stack, your
        successes, and pain points. Please send us your experiences and/or code and stack. We would love to add it here!
      </p>

      <div className="flex getting-started__toc">
        <div className="getting-started__toc-card">
          <div className="getting-started__toc-title mb-spacing">Using only the Utah Header</div>
          <div className="getting-started__toc-subtitle">Importing via CDN</div>
          <a href="#example__universal-module-definition" className="">UMD Example (script tag src / require)</a>
          <a href="#example__es-module" className="">ES Module Example (ES import)</a>
          <div className="getting-started__toc-subtitle mt-spacing">Importing via NPM</div>
          <a href="#example__create-react-app" className="">Create React App Example</a>
          <a href="#example__vite-plain-js-app" className="">Vite Plain Javascript App Example</a>
        </div>
        <div className="getting-started__toc-card">
          <div className="getting-started__toc-title mb-spacing">Using the Design System</div>
          <div className="getting-started__toc-subtitle">Importing via CDN</div>
          <a href="#h3-import-ds-css" className="">Example Using Plain CSS and CDN</a>
          <div className="getting-started__toc-subtitle mt-spacing">Importing via NPM</div>
          <a href="#h3-import-ds-sass" className="">Example using SCSS</a>
        </div>
      </div>
      <div className="getting-started__toc-card mt-spacing-l">
        <div className="getting-started__toc-title mb-spacing">CSS Examples</div>
        <a href="#h3-using-css-variables" className="">Using Design System CSS Variables</a>
        <a href="#h3-css-scoping" className="">Design System CSS Scoping</a>
        <a href="#h3-css-color-overrides" className="">How to override CSS variables (e.g. customize the default colors)</a>
      </div>

      {/* <br />
      <br />
      <br />
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

      <ul>
        <li>Importing via CDN: CSS and JS & Overriding (link)</li>
        <li>Importing via NPM: CSS and JS & Overriding (link)</li>
        <li>Using CSS Variables</li>
        <li>Using CSS vs SCSS</li>
      </ul> */}

      <h2 id="h2-using-header" className="mt-spacing-l">Using only the Utah Header</h2>

      <div className="text-center mt-spacing-l">
        For a list of Utah Header options:
        <div className="flex justify-center mb-spacing-xl">
          <Link
            to={pageUrls.utahHeader}
            className="button button--primary-color button--solid"
          >
            Utah Header Documentation Page
            <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
          </Link>
        </div>
      </div>

      {/* <h3 id="font-dependency">General Font Dependency</h3>
      <p>The Utah Header depends on the awesome font <code>Source Sans 3</code>. You should load this font in order for the &quot;Utah, an official website&quot;, menus, and other elements to render correctly.</p>
      <PreCodeForCodeString
        codeRaw={`
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap" rel="stylesheet">
        `}
        allowScrollOverflow
        showBackgroundColor
      /> */}

      <h3 id="h3-header-importing-cdn" className="mt-spacing">Importing via CDN</h3>
      <p>
        You can use the javascript and CSS directly from the unpkg CDN.
      </p>

      <h4 id="example__universal-module-definition" className="mt-spacing">UMD Example (script tag src / require)</h4>
      <p>The UMD (Universal Module Definition) example uses a CDN to pull in both the javascript and CSS in the <code>&lt;head&gt;</code>.
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
              window["@utahdts/utah-design-system-header"].setUtahHeaderSettings({
                title: 'My utah.gov Site'
              });
            });
          </script>
        `}
        allowScrollOverflow
        showBackgroundColor
      />
      <div className="flex justify-end mb-spacing-l">
        <ExternalLink href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/umd-html" className="button button--primary-color button--small">View a detailed example on GitHub</ExternalLink>
      </div>

      <h4 id="example__es-module">ES Module Example (ES import)</h4>
      <p>This ES (ECMAScript Module) example uses a CDN to import the Utah Header from a CDN ES Module.
        The header is configured when you call <code>setUtahHeaderSettings</code> after importing the Utah Header code.
        You can learn more about configuring the header on the <Link to={pageUrls.utahHeader}>Utah Header page</Link>.
      </p>
      <PreCodeForCodeString
        codeRaw={`
          <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css">
          <script type="module">
            import { setUtahHeaderSettings } from 'https://unpkg.com/@utahdts/utah-design-system-header/dist/utah-design-system-header.es.js';
            setUtahHeaderSettings({
              title: 'My Utah.gov Site (ES)'
            });
          </script>
        `}
        allowScrollOverflow
        showBackgroundColor
      />
      <div className="flex justify-end mb-spacing-l">
        <ExternalLink href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/es-html" className="button button--primary-color button--small">View a detailed example on GitHub</ExternalLink>
      </div>

      <h3 id="h3-header-importing-npm" className="mt-spacing">Importing via NPM</h3>
      <p className="mb-auto">
        The Utah Header and Design System are published to the public NPM repository. You can view them on NPM here:
      </p>
      <ul className="mb-spacing">
        <li>
          <ExternalLink href="https://www.npmjs.com/package/@utahdts/utah-design-system">@utahdts/utah-design-system</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.npmjs.com/package/@utahdts/utah-design-system-header">@utahdts/utah-design-system-header</ExternalLink>
        </li>
      </ul>
      <h4 id="example__create-react-app">Create React App Example</h4>
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
                      setUtahHeaderSettings({
                        title: 'My Utah.gov Site (React)'
                      });
                    },
                    []
                  );

                  // The CSS for the Utah Design System is scoped to the
                  // 'utah-design-system' class
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
      <div className="flex justify-end mb-spacing-l">
        <ExternalLink href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/create-react-app" className="button button--primary-color button--small">View a detailed example on GitHub</ExternalLink>
      </div>

      <h4 id="example__vite-plain-js-app">Vite Plain Javascript App Example</h4>
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
                setUtahHeaderSettings({
                  title: 'My Utah.gov Site (Vite JS)'
                });
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
      <div className="flex justify-end mb-spacing-l">
        <ExternalLink href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/vite" className="button button--primary-color button--small">View a detailed example on GitHub</ExternalLink>
      </div>

      <h2 id="h2-using-design-system" className="mt-spacing-l">Using the Design System</h2>
      <p>
        Javascript and CSS libraries are provided for the Design System that can help springboard an application&apos;s
        usage of the Design System concepts. Here are some examples of getting started with these libraries.
      </p>

      <h3 id="h3-import-ds-css">Example Using Plain CSS and CDN</h3>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        codeRaw={`
          # In your home html file, import the design system css
          <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system/dist/style.css">

          # In your css, use the css variables
          h1 {
            margin-bottom: var(--spacing);
          }
          .button {
            color: var(--primary-color);
          }

          # In your html, use your classes (make sure to scope to utah-design-system)
          <body class="utah-design-system">
            <h1>State of Utah Site</h1>
            <a class="button">Submit My Response</a>
          </body>
        `}
      />

      <h3 id="h3-import-ds-sass">Example using SCSS</h3>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        codeRaw={`
          # In your main scss file, import the design system scss
          @use "@utahdts/utah-design-system/css/index.scss" as ds-settings;

          # In your scss, use the scss variables
          h1 {
            background-color: #{ds-settings.$electric-yellow-05};
          }

          # Your html will now be styled with the scss variables (make sure to scope to utah-design-system)
          <div class="utah-design-system">
            <h1>State of Utah Site</h1>
          </div>
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
          And more! See <ExternalLink href="https://github.com/utahdts/utah-design-system/blob/main/%40utahdts/utah-design-system/css">utah-design-system/@utahdts/utah-design-system/css</ExternalLink> for all the scss files.
        </li>
      </ul>

      <h2 id="h2-css-examples" className="mt-spacing-l">CSS Examples</h2>
      <p>
        Instead of worrying about the color and shape of a button, developers can now spend more time on the details of their project.
        The following CSS examples will help you get started using the Design System CSS.
      </p>

      <h3 id="h3-using-css-variables">Using Design System CSS Variables</h3>
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

      <h3 id="h3-css-scoping">Design System CSS Scoping</h3>
      <p>
        In order for your html to be styled appropriately, make sure to include the <code>.utah-design-system</code> class on your main container
        or any container element where you wish to use Utah Design System CSS styles.
      </p>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        codeRaw={`
          <body class="utah-design-system">
            # My website...
          </body>
        `}
      />

      <h3 id="h3-css-color-overrides" className="mt-spacing">How to override CSS variables</h3>
      <div className="mb-spacing">(e.g. customize the default colors)</div>
      <p>
        It is anticipated that the colors of the design system will be overridden to match the color palette of your Agency brand or
        to meet your specific website or application requirements.
      </p>
      <p>
        The color palette of the design system is stored in the specified CSS variables in the example below.
        It important to understand the following before attempting to override the css variables:
      </p>
      <ol>
        <li>
          The variables and css are scoped under the base css class <code>.utah-design-system</code>
          <ol type="a">
            <li>You must contain all Utah Design System html elements and css within this base css class for this to function correctly.</li>
            <li>To override the the variables you must also include this base class.</li>
          </ol>
        </li>
        <li>Load the Utah Design System CSS before your overrides. This is true for both the compiled CSS or if you are overriding the SCSS.</li>
      </ol>

      <div className="mt-spacing">CSS override code example:</div>
      <PreCodeForCodeString
        showBackgroundColor
        codeRaw={`
          <!-- Include the CSS and Javascript for the Utah Header -->
          <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css">

          <!-- Override the default design system css -->
          <style>
            /* Override the default design system colors */
            .utah-design-system {
              --primary-color: #3c7b24;
              --primary-color-dark: #2e4326;
              --primary-color-light: #e1eadd;

              --secondary-color: #0e80a7;
              --secondary-color-dark: #205162;
              --secondary-color-light: #edf5f8;

              --accent-color: #ffb100;
              --accent-color-dark: #745a1e;
              --accent-color-light: #fff9ec;
            }
          </style>
        `}
        className="mt-spacing"
      />

      <div className="flex justify-end mb-spacing-l">
        <ExternalLink href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/es-html" className="button button--primary-color button--small">View a detailed example on GitHub</ExternalLink>
      </div>

    </div>
  );
}

GettingStartedDeveloper.propTypes = propTypes;
GettingStartedDeveloper.defaultProps = defaultProps;

export default GettingStartedDeveloper;
