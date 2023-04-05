/* eslint-disable import/order */
// eslint-disable-next-line import/no-unresolved
import readmeMD from '../../../../../../README.md?raw';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const propTypes = {};
const defaultProps = {};

function GettingStarted() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Getting Started</h1>
      <p className="lead-in"> Please help us! We have a: </p>
      <ul>
        <li><Link to="https://utahdesignsystem.slack.com" target="_blank">Slack Channel</Link></li>
        <li><Link to="https://github.com/utahdts/utah-design-system" target="_blank">Git Repository</Link></li>
        <li><Link to="https://designsystem.utah.gov/" target="_blank">Demo Site</Link></li>
        <li><Link to="mailto:dts_ui@utah.gov">Email dts_ui@utah.gov</Link></li>
      </ul>
      <hr />

      <p>Here&apos;s how to get started with this repository:</p>
      <ReactMarkdown>{readmeMD}</ReactMarkdown>
    </div>
  );
}

GettingStarted.propTypes = propTypes;
GettingStarted.defaultProps = defaultProps;

export default GettingStarted;
