/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import React from 'react';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';
import LightBox from '../../../../../lightbox/LightBox';
import iconBarScreenshot from '../../../../../../../static/images/screenshots/components/icon-bar/IconBar.png';
import toolBarScreenshot from '../../../../../../../static/images/screenshots/components/icon-bar/Toolbar.png';
import actionBarScreenshot from '../../../../../../../static/images/screenshots/components/icon-bar/ActionBar.png';
import PreCodeForCodeString from '../../../../../preCode/PreCodeForCodeString';

const propTypes = {};
const defaultProps = {};

function IconBarDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Icon Bar</h1>
      <p className="lead-in">An icon bar (sometimes called a toolbar or an action bar) is a group of icon buttons that perform some related actions. They usually relate to the current screen.</p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Toolbar"
        renderedExample={<LightBox image={toolBarScreenshot} alt="Toolbar" className="flex-3up-gap" />}
      />

      <StaticExample
        title="Action Bar"
        renderedExample={<LightBox image={actionBarScreenshot} alt="Action Bar" className="flex-3up-gap" />}
      />

      <StaticExample
        title="Icon Bar"
        renderedExample={<LightBox image={iconBarScreenshot} alt="Icon Bar" className="flex-3up-gap" />}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul>
        <li>
          <strong>Text editor.</strong> Use a toolbar to provide an interface for editing &ldquo;rich text&rdquo;.
        </li>
        <li>
          <strong>Action bar.</strong> An action bar can be used for navigation and/or interaction on mobile devices or where the screen size is limited.
        </li>
        <li>
          <strong>Icon bar.</strong> Use an icon bar to group icon buttons where space is limited or text buttons would be distracting.
        </li>
        <li>
          <strong>Utah header.</strong> The Utah Design System offers a place to include an action bar in the Utah header: from a list of links to alert notifications. To see more, please refer to the <Link to={pageUrls.utahHeader}>Utah Header documentation</Link>.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Form</strong> Avoid using action bars for forms. Use other form elements to capture data such as checkboxes, switches, or radio buttons.
        </li>
        <li>
          <strong>Links.</strong> Typically, action bars are for interactions within a page. They should not behave like links. If you must, please make it clear to the user by indicating it in the tooltip (either include a sub-menu or a link icon).
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Icons.</strong> Make sure all the icons are from the same font family and are the same size.
          Most icons should have an active and/or inactive state. This can be achieved by making the active icon bolder and/or by using a colored background.
        </li>
        <li>
          <strong>Description.</strong> Sometimes, an icon alone is not enough to convey its meaning. Use tooltips to describe what actions are implied. For example: &ldquo;Left align&rdquo; or &ldquo;Text color&rdquo;.
        </li>
        <li>
          <strong>Context.</strong> If multiple icon buttons share a common purpose, they should be grouped together using <Link to={pageUrls.dividers}>dividers</Link> or a common background.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <p>To learn more, please refer to the <Link to={pageUrls.iconButton}>icon button</Link>, <Link to={pageUrls.segmentedButton}>segmented buttons</Link>, and <Link to={pageUrls.tooltips}>tooltip</Link> documentation respectively.</p>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>
          The icon and text must maintain a <code>4.5:1</code> contrast ratio or better.
        </li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Use the <code>Tab</code> key to navigate between buttons and <code>Space/Enter</code> to trigger them.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Make sure to use native <code>&lt;button&gt;</code> elements when constructing an Icon Bar, Action Bar, or Toolbar.
          Remember: The first rule of ARIA: Before you use ARIA,
          use native HTML elements or attributes first!
        </li>
        <li>Provide additional text visible to screen readers when an icon button has a selected state. For example: &ldquo;Center Align Selected&rdquo;.</li>
      </ul>
      <PreCodeForCodeString
        showBackgroundColor
        allowScrollOverflow
        className="mt-spacing"
        codeRaw={`
          Center Align <span class=”visually-hidden”>Selected</span>
        `}
      />
      <p><strong>Note:</strong> If using a third party, make sure they are accessible.</p>
    </div>
  );
}

IconBarDocumentation.propTypes = propTypes;
IconBarDocumentation.defaultProps = defaultProps;

export default IconBarDocumentation;
