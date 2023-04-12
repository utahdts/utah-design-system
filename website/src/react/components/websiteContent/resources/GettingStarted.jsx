/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
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
        <li><Link to="https://utahdesignsystem.slack.com" target="_blank">Slack Channel</Link></li>
        <li>Send us an email: <Link to="mailto:dts_ui@utah.gov">dts_ui@utah.gov</Link></li>
        <li><Link to="https://github.com/utahdts/utah-design-system" target="_blank">Git Repository</Link></li>
      </ul>
      <hr />

      <h2 id="h2-getting-started-developers">Getting started for developers</h2>

      <h3 id="h3-utah-header">Utah Header</h3>
      <p>There are multiple ways to integrate the Utah Header within your website or application.
        You can use the javascript and css directly from a CDN, or you can use NPM to pull the code into a project as a dependency.
      </p>
      <h4>Option 1: Universal Module Definition (UMD)</h4>
      <p>This option uses a CDN to include both the javascript and css in the <code>&lt;head&gt;</code>.
        The header is configured when the <code>utahHeaderLoaded</code> event fires.
        You can learn more about configuring the header on the <Link to={pageUrls.utahHeader}>Utah Header page</Link>.
      </p>
      <pre className="gray-block gray-block--overflow">
        <div className="gray-block__overflow-content">
          {`
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
        </div>
      </pre>

      <h2 id="h2-getting-started-designers">Getting started for designers</h2>
      <p>Coming soon</p>
    </div>
  );
}

GettingStarted.propTypes = propTypes;
GettingStarted.defaultProps = defaultProps;

export default GettingStarted;
