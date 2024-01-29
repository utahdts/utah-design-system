/* eslint-disable max-len */
import {
  ExternalLink
} from '@utahdts/utah-design-system';
import { NavLink } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';

export function FormGeneralDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Form General Documentation</h1>
      <p className="lead-in">
        Here are some tools to help with accessibility testing. For more in depth information, view the <NavLink to={pageUrls.accessibility}>accessibility overview page</NavLink>.
      </p>

      <h2 id="checklist">Form Accessibility Checklist</h2>
      <ul>
        <li>Form inputs and controls have a descriptive label and are visible to the user.</li>
        <li>The label is tied directly to the form input to aid those using assistive technology.</li>
        <li>Provide visible focus indicators for all form elements.</li>
        <li>Focus should follow a natural flow. Don&apos;t change the focus index to alter the tabbing order.</li>
        <li>Use native elements first before using ARIA.</li>
        <li>When native elements such as <code>&lt;label&gt;</code>are not sufficient, consider using the following attributes:
          <ul>
            <li><ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label">aria-label</ExternalLink></li>
            <li><ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby">aria-labelledby</ExternalLink></li>
            <li><ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby">aria-describedby</ExternalLink></li>
            <li><ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details">aria-details</ExternalLink></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
