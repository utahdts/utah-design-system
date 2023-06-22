/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { ExternalLink } from '@utahdts/utah-design-system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';
import pageUrls from '../../routing/pageUrls';
import LightBox from '../../lightbox/LightBox';
import xdScreenshot from '../../../../static/images/screenshots/utah-design-system-mockups-xd.webp';

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

      <h3 id="h3-utah-header" className="mt-spacing">Utah Header</h3>
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
      <p><em>Additional mockup options will be provided in a future phase of the design system.</em></p>
    </div>
  );
}

GettingStarted.propTypes = propTypes;
GettingStarted.defaultProps = defaultProps;

export default GettingStarted;
