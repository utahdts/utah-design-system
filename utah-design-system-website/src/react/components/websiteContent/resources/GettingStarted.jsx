/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { ExternalLink } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';

export function GettingStarted() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Getting Started</h1>
      <p className="lead-in">The following code examples will help you get started quickly with using the Utah Design System and the Utah Header.</p>

      <div className="getting-started__top-buttons">
        <Link to={pageUrls.gettingStartedDeveloper} className="action-card action-card--primary-color action-card--solid action-card--center flex-2up-gap">
          <div className="action-card__title">
            <h3>Getting Started for Developers</h3>
            <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
          </div>
          <div className="action-card__body">
            Get started quickly with code examples.
          </div>
        </Link>
        <Link to={pageUrls.gettingStartedDesigner} className="action-card action-card--primary-color action-card--solid action-card--center flex-2up-gap">
          <div className="action-card__title">
            <h3>Getting Started for Designers</h3>
            <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
          </div>
          <div className="action-card__body">
            Download the Adobe XD document to begin using the Design System in your mockups.
          </div>
        </Link>
      </div>

      <hr />
      <h2 id="h2-other-resources" className="mb-auto"><strong>Other resources to get help:</strong></h2>
      <ul>
        <li>Send us an email: <ExternalLink href="mailto:dxp@utah.gov">dxp@utah.gov</ExternalLink></li>
        <li><ExternalLink href="https://github.com/utahdts/utah-design-system">GitHub Repository</ExternalLink></li>
      </ul>
    </div>
  );
}
