/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { ExternalLink } from '@utahdts/utah-design-system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import xdScreenshot from '../../../../static/images/screenshots/utah-design-system-mockups-xd.webp';
import LightBox from '../../lightbox/LightBox';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';
import pageUrls from '../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function GettingStarted() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Getting Started</h1>
      <p className="lead-in">The following code examples will help you get started quickly with using the Utah Design System and the Utah Header.</p>

      <div className="getting-started__top-buttons">
        <a
          href="#h2-getting-started-developers"
          className="action-card action-card--primary-color action-card--solid action-card--center flex-2up-gap"
        >
          <div className="action-card__title">
            <h3>Getting Started for Developers</h3>
            <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
          </div>
          <div className="action-card__body">
            Get started quickly with code examples.
          </div>
        </a>
        <a
          href="#h2-getting-started-designers"
          className="action-card action-card--primary-color action-card--solid action-card--center flex-2up-gap"
        >
          <div className="action-card__title">
            <h3>Getting Started for Designers</h3>
            <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
          </div>
          <div className="action-card__body">
            Download the Adobe XD document to begin using the Design System in your mockups.
          </div>
        </a>
      </div>

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

      <h2 id="h2-getting-started-developers">Getting Started for Developers</h2>

      <h3 id="h3-utah-header" className="mt-spacing">Utah Header Importing</h3>
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

      <h3 id="h3-design system" className="mt-spacing">Design System Importing</h3>
      <p>
        There are provided javascript and css libraries for the Design System that can help springboard an application&apos;s
        usage of the Design System concepts. These libraries are not required. Here are some examples of getting started with
        these libraries.
      </p>
      <h4 id="option__vite-plain-js-app">Use Design System CSS Variables</h4>
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
          And more! See <ExternalLink href="https://github.com/utahdts/utah-design-system/blob/dev/%40utahdts/utah-design-system/css/1-settings/_settings-index.scss">utah-design-system/@utahdts/utah-design-system/css/1-settings/_settings-index.scss</ExternalLink> for all the variables.
        </li>
      </ul>
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

      <h2 id="h2-getting-started-designers">Getting Started for Designers</h2>
      <p>
        The importance of using The Utah Design System to create mockups for clients cannot be overstated. A design system provides a centralized and comprehensive
        collection of design guidelines, components, and patterns that ensures consistency and efficiency throughout the design process. When designing mockups,
        a design system allows designers to work within established visual and interaction frameworks, eliminating the need to reinvent the wheel for each new project.
        This not only saves time but also ensures a cohesive user experience across various applications, sites, and devices.
      </p>
      <p>
        The Utah Design System mockups provide a set of pre-defined
        elements and styles that can be easily reused, enabling designers to focus on the creative aspects of their work rather than the repetitive tasks.
        Moreover, by utilizing a design system, designers can collaborate seamlessly with developers, as they both refer to the same set of guidelines and
        assets, fostering a more efficient and harmonious workflow.
      </p>
      <LightBox alt="Utah Design System Mockups" image={xdScreenshot} />
      <div className="flex justify-center mt-spacing"><a href="https://dts.utah.gov/wp-content/uploads/UtahDesignSystem.xd_.zip" className="button button--primary-color button--solid">Download Adobe XD Document</a></div>
      <p className="text-center"><em>75 MB</em></p>
      <Link
        to={pageUrls.mockups}
        className="button button--primary-color button--solid button--large"
      >
        View mock details
        <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
      </Link>

    </div>
  );
}

GettingStarted.propTypes = propTypes;
GettingStarted.defaultProps = defaultProps;

export default GettingStarted;
