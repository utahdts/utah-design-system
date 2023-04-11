/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

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
      <h2 id="h2-getting-started-designers">Getting started for designers</h2>
      <p>Coming soon</p>
    </div>
  );
}

GettingStarted.propTypes = propTypes;
GettingStarted.defaultProps = defaultProps;

export default GettingStarted;
