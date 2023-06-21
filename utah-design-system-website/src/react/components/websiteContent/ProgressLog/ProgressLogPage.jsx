import React from 'react';
import ProgressLog from './ProgressLog';

function ProgressLogPage() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Progress Log</h1>
      <p className="lead-in">
        Progress towards css and code ready components will be documented here.
        Certain components and patterns are already complete such as: buttons, icon buttons, popups, the Utah Header, and Footer.
      </p>
      <hr />
      <ProgressLog />
    </div>
  );
}

export default ProgressLogPage;
