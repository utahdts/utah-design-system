import { ExternalLink } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { PreCodeForCodeString } from '../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../routing/pageUrls';
import { ColorCustomization } from './ColorCustomization';

export function GettingStartedDeveloper() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Getting Started for Developers</h1>
      <p className="lead-in">
        There are multiple ways to integrate the Utah Design System and Utah Header within your website or application.
        You can use the javascript and CSS directly from a CDN, or you can use NPM to pull the code into a project as a dependency.
      </p>

      <div><strong>Help us make this page better.</strong></div>
      <p>
        There is no limit to the technology stacks that can incorporate the Utah Header and Design System. We want
        to <ExternalLink href="mailto:dxp@utah.gov">hear from you</ExternalLink> about your stack, your
        successes, and pain points. Please send us your experiences and/or code and stack. We would love to add it here!
      </p>

      <div className="home-page__color-card home-page__card-wide mb-spacing-l">
        <h3 className="home-page__color-card-title flex mb-spacing-xs"><span className="utds-icon-before-info mr-spacing-xs" aria-hidden="true" /> Note
        </h3>
        <p>The Utah Header library is fully developed and ready to be implemented in your project.</p>
        <p>Learn more about it on the <Link to={pageUrls.utahHeader}>Utah Header Documentation Page</Link>.</p>
      </div>

      <div className="getting-started__toc-card my-spacing-l">
        <div className="getting-started__toc-title mb-spacing">Pre-Built Artifacts, Release Notes, and Versioning</div>
        <a href="#h2-pre-built-artifacts" className="">Pre-Built Artifacts and Downloads</a>
        <a href="#h2-release-notes" className="">Design System Release Notes</a>
        <a href="#h2-design-system-versioning" className="">About Versioning</a>
      </div>
      <div className="flex getting-started__toc">
        <div className="getting-started__toc-card">
          <div className="getting-started__toc-title mb-spacing">Using the Utah Header</div>
          <div className="getting-started__toc-subtitle">Importing via CDN</div>
          <a href="#example__universal-module-definition" className="">UMD Example (script tag src / require)</a>
          <a href="#example__es-module" className="">ES Module Example (ES import)</a>
          <div className="getting-started__toc-subtitle mt-spacing">Importing via NPM</div>
          <a href="#example__vite-plain-js-app" className="">Vite Plain Javascript App Example</a>
          <a href="#example__angular-app" className="">Angular Javascript App Example</a>
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

      <h2 id="h2-pre-built-artifacts" className="mt-spacing-l">Pre-Built Artifacts and Downloads</h2>
      <p>
        To download using the links below: <br />
        Right click on the download button and choose <code>Save Link As...</code>
      </p>
      <h3>Utah Header</h3>
      <div className="mb-spacing">
        <h4 className="mb-auto">style.css</h4>
        <PreCodeForCodeString
          allowScrollOverflow
          showBackgroundColor
          className="mb-spacing-s"
          codeRaw={`
            https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css
          `}
        />
        <a href="https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css" className="button" target="_blank">style.css Download</a>
      </div>
      <div>
        <h4 className="mb-auto">utah-design-system-header.umd.js</h4>
        <PreCodeForCodeString
          allowScrollOverflow
          showBackgroundColor
          className="mb-spacing-s"
          codeRaw={`
            https://unpkg.com/@utahdts/utah-design-system-header/dist/utah-design-system-header.umd.js
          `}
        />
        <a href="https://unpkg.com/@utahdts/utah-design-system-header/dist/utah-design-system-header.umd.js" className="button" target="_blank">utah-design-system-header.umd.js Download</a>
      </div>

      <h2 id="h2-release-notes" className="mt-spacing-l">Release Notes</h2>
      <p>
        The release notes are essential for understanding breaking changes and new features. They provide clear
        documentation of updates, helping developers anticipate impacts on their projects and decide when or how to upgrade.
      </p>
      <p>
        <ExternalLink href="https://github.com/utahdts/utah-design-system/releases">A list of release notes for each version can be found on GitHub.</ExternalLink>
      </p>

      <h2 id="h2-design-system-versioning" className="mt-spacing">About Versioning</h2>
      <h3 id="h3-semantic-versioning">Semantic Versioning</h3>
      <p className="mb-spacing-s">
        Both the Utah Design System and the Utah Header
        use <ExternalLink href="https://semver.org/">Semantic Versioning</ExternalLink>
        , which is represented as <code>MAJOR.MINOR.PATCH</code>:
      </p>
      <ol>
        <li>
          <strong>Major</strong>.
          This number represents a significant number of changes and may break compatibility with previous versions.
          This could include adding new features, or removing existing ones.
        </li>
        <li>
          <strong>Minor</strong>.
          This number will change when new features are added, or improvements are made, while keeping everything backward-compatible.
        </li>
        <li>
          <strong>Patch</strong>.
          This last number indicates small changes such as bug fixes, minor tweaks, etc.
        </li>
      </ol>
      <p className="mt-spacing-s">Keep that in mind when upgrading.</p>

      <h3 id="h3-package-json">Package.json</h3>
      <p>
        While using npm to import and/or update the Utah Design System and Utah Header,
        you have control over which version you would like to use.
        You can specify an exact version in your <code>package.json</code> file:
      </p>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        codeRaw={`
          "@utahdts/utah-design-system": "2.0.2"
        `}
      />
      <p>
        Use <code>^</code> to allow only patch and minor updates (non-breaking).
      </p>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        codeRaw={`
          "@utahdts/utah-design-system": "^1.0.2"
          # Will use releases from 1.0.2 to 2.0.0 (non-inclusive)
        `}
      />
      <p>
        You can also request any version greater than a specific version, greater or equal to, less than, etc.<br />
        See the full list on the <ExternalLink href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies">npm documentation site</ExternalLink>.
      </p>

      <h3 id="h3-unpkg-versioning">Using unpkg.com CDN</h3>
      <p>
        While using <ExternalLink href="https://unpkg.com/">unpkg</ExternalLink>, you can specify which version of the
        Utah Design System or Utah Header you want to load. If you omit the version, it will automatically serve the latest version.
      </p>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        className="mb-auto"
        codeRaw={`
          https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css
        `}
      />
      <p><em>This always uses the latest version!</em></p>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        className="mb-auto"
        codeRaw={`
          https://unpkg.com/@utahdts/utah-design-system-header@v3/dist/style.css
        `}
      />
      <p><em>This uses the latest of version 3 with all minor and bug fixes, but would not include version 4.</em></p>

      <h2 id="h2-using-header" className="mt-spacing-l">Using the Utah Header</h2>

      <div className="text-center mt-spacing-l">
        For a list of Utah Header options:
        <div className="flex justify-center mb-spacing-xl">
          <Link
            to={pageUrls.utahHeader}
            className="button button--primary-color button--solid"
          >
            Utah Header Documentation Page{' '}
            <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
          </Link>
        </div>
      </div>

      <h3 id="h3-header-importing-cdn" className="mt-spacing">Importing via CDN</h3>
      <p>
        You can use the javascript and CSS directly from the unpkg CDN.
      </p>
      <p>
        <strong>Note:</strong> Starting with version 3.0 the <code>@utahdts/utah-design-system-header</code> and <code>@utahdts/utah-design-system</code> use the
        same CSS file. There is no need to include the <code>.css</code> file from both of these anymore.
      </p>

      <h4 id="scoped-versions">Important: Limit Major Version for Compatibility</h4>
      <p>
        It is best practice to limit the version of the library to a specific major version to avoid unexpected breaking changes. Major version updates often
        introduce new features, but they can also include modifications or removals of existing functionality that may not be backward compatible.
      </p>
      <p>See the <a href="#h2-design-system-versioning">About Versioning</a> section below for examples.</p>

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
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/umd-html"
          // @ts-expect-error
          className="button button--primary-color button--small"
        >
          View a detailed example on GitHub
        </ExternalLink>
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
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/es-html"
          // @ts-expect-error
          className="button button--primary-color button--small"
        >
          View a detailed example on GitHub
        </ExternalLink>
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

      <h4 id="example__vite-plain-js-app">Vite Plain Javascript App Example</h4>
      <p>
        This option pulls the{' '}
        <ExternalLink href="https://www.npmjs.com/package/@utahdts/utah-design-system-header">
          Utah Design System Header package
        </ExternalLink>{' '}
        from npm and imports it in to a plain JS application created with{' '}
        <ExternalLink href="https://vitejs.dev/guide/">Vite</ExternalLink>.<br />
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
          Import the header (js/css) in to the application code&apos;s main.js (see{' '}
          <ExternalLink href="https://github.com/utahdts/utah-design-system/blob/dev/examples/utah-header/vite/main.js">
            examples/utah-header/vite/main.js
          </ExternalLink>)<br />
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
          Load header settings to show the header in the application code&apos;s main.js (see{' '}
          <ExternalLink href="https://github.com/utahdts/utah-design-system/blob/dev/examples/utah-header/vite/main.js">
            examples/utah-header/vite/main.js
          </ExternalLink>)<br />
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
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/vite"
          // @ts-expect-error
          className="button button--primary-color button--small"
        >
          View a detailed example on GitHub
        </ExternalLink>
      </div>

      <h4 id="example__angular-app">Angular App Example</h4>
      <p>
        This option pulls the{' '}
        <ExternalLink href="https://www.npmjs.com/package/@utahdts/utah-design-system-header">
          Utah Design System Header package
        </ExternalLink>
        from npm and imports it in to a plain JS application created with{' '}
        <ExternalLink href="https://angular.dev/">Angular</ExternalLink>.
        Here were the steps used to create the application and integrate the header:
      </p>
      <ol>
        <li>
          Create a plain JS app with <ExternalLink href="https://angular.dev/">Angular</ExternalLink><br />
          <PreCodeForCodeString
            codeRaw="ng new angular-demo"
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
          Add to the{' '}
          <ExternalLink
            href="https://github.com/utahdts/utah-design-system/blob/dev/examples/utah-header/angular/angular.json"
          >angular.json
          </ExternalLink>{' '}
          file the css and js reference from the design system<br />
          <PreCodeForCodeString
            codeRaw={`
                "styles": [
                  "./node_modules/@utahdts/utah-design-system-header/dist/style.css",
                  "src/styles.css"
                ],
                "scripts": [
                  "./node_modules/@utahdts/utah-design-system-header/dist/utah-design-system-header.umd.js"
                ]
            `}
            allowScrollOverflow
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Add the <code>.utah-design-system</code> class to your app.<br />
        </li>
        <li>
          Load header settings to show the header in the application code&apos;s index.html (see{' '}
          <ExternalLink href="https://github.com/utahdts/utah-design-system/blob/dev/examples/utah-header/angular/src/index.html">
            examples/utah-header/angular/src/index.html
          </ExternalLink>)<br />
          <PreCodeForCodeString
            codeRaw={`
                <script>
                  document.addEventListener('utahHeaderLoaded', () => {
                    window["@utahdts/utah-design-system-header"].setUtahHeaderSettings({
                      "title": "Angular Demo",
                    });
                  });
                </script>
              `}
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
        <li>
          Run the application to see the header<br />
          <PreCodeForCodeString
            codeRaw="ng serve -o"
            className="mt-spacing"
            showBackgroundColor
          />
        </li>
      </ol>
      <div className="flex justify-end mb-spacing-l">
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/angular"
          // @ts-expect-error
          className="button button--primary-color button--small"
        >
          View a detailed example on GitHub
        </ExternalLink>
      </div>

      <h3 id="h3-fallback" className="mt-spacing">CDN Fallback</h3>
      <p>
        While widely used, unpkg.com can suffer from occasional outages. To mitigate this risk, implementing a fallback mechanism is beneficial.
        Both the Utah Header JavaScript and CSS files are hosted on cdn.utah.gov.
      </p>
      <p>
        <strong>Note:</strong> We recommend using unpkg.com as the primary source.
      </p>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        className="mb-spacing"
        codeRaw={`
          https://cdn.utah.gov/dts-ds-custom-header-plugin/header-dist/v4/utah-design-system-header.umd.js
        `}
      />
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        className="mb-auto"
        codeRaw={`
          https://cdn.utah.gov/dts-ds-custom-header-plugin/header-dist/v4/style.css
        `}
      />
      <div className="flex justify-end my-spacing-l gap flex-wrap">
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/fallback/async"
          // @ts-expect-error
          className="button button--primary-color button--small"
        >
          View a detailed example of using async
        </ExternalLink>
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/fallback/fetch"
          // @ts-expect-error
          className="button button--primary-color button--small"
        >
          View a detailed example of using fetch
        </ExternalLink>
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
          And more! See{' '}
          <ExternalLink href="https://github.com/utahdts/utah-design-system/blob/main/%40utahdts/utah-design-system/css">
            utah-design-system/@utahdts/utah-design-system/css
          </ExternalLink> for all the scss files.
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
          And more! See{' '}
          <ExternalLink
            href="https://github.com/utahdts/utah-design-system/blob/main/%40utahdts/utah-design-system/css/1-settings/_settings-index.scss"
          >
            utah-design-system/@utahdts/utah-design-system/css/1-settings/_settings-index.scss
          </ExternalLink> for all the variables.
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
      <ColorCustomization />

      <div className="flex justify-end mb-spacing-l">
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header/es-html"
          // @ts-expect-error
          className="button button--primary-color button--small"
        >
          View a detailed example on GitHub
        </ExternalLink>
      </div>

    </div>
  );
}
