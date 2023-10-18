/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  ExternalLink,
  LinkCallback,
} from '@utahdts/utah-design-system';
import { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAppContext from '../../../context/AppContext/useAppContext';
import pageUrls from '../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function AccessibilityTestingDocumentation() {
  const { setAppState } = useAppContext();
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Accessibility Checklist & Testing</h1>
      <p className="lead-in">
        Here are some tools to help with accessibility testing. For more in depth information, view the <NavLink to={pageUrls.accessibility}>accessibility overview page</NavLink>.
      </p>

      <h2 id="section-manual-checklist" className="mb-spacing">Manual Checklist</h2>
      <h3 id="section-manual-checklist-content">Content</h3>
      <ul>
        <li>
          Headings, Text, and HTML
          <ul>
            <li>
              Content is structured logically using HTML code.
              <ul>
                <li>Use semantic markup.</li>
                <li>
                  Limit landmark roles such as <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> to make it
                  easier for users of assistive technology to navigate your site.
                  A page should have the following:
                  <ul>
                    <li>One <code>&lt;header&gt;</code> as a direct descendant of the <code>&lt;body&gt;</code> element.</li>
                    <li>One or two <code>&lt;nav&gt;</code> elements. (main menu and side menu)</li>
                    <li>One <code>&lt;main&gt;</code> element.</li>
                    <li>One <code>&lt;footer&gt;</code> as a direct descendant of the <code>&lt;body&gt;</code> element.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>The majority of body text is a minimum of 16px (1rem)</li>
            <li>
              Headings (h1, h2, h3, h4, h5, h6) are sequential and distinct when compared to the body text.
              (Don’t skip heading levels or go out of order.)
            </li>
            <li>Text is in plain language that is understandable at an 8th grade level.</li>
            <li>Hyperlinks do not include generic text such as &quot;click here&quot; or &quot;view more&quot;.</li>
            <li>Hyperlinks that open a new tab have a visual indicator and visually hidden text like “opens in a new tab” to warn screen reader users.</li>
            <li>Provide a <Link to={pageUrls.skipLink}>Skip Link</Link> at the top of all pages to aid those using assistive technology navigate your site.</li>
          </ul>
        </li>
        <li>
          Color
          <ul>
            <li>Text, including hyperlinks, has a <code>4.5:1</code> contrast ratio to its background.</li>
            <li>Headings and large bold text should pass the contrast ratio of <code>3:1</code>.</li>
            <li>Interactive elements such as buttons and form fields have a border or element boundary that is <code>3:1</code> contrast against its background.</li>
            <li>Elements that use color to convey a meaning also have another method to express the intent (such as an icon or text).</li>
          </ul>
        </li>
        <li>
          Images
          <ul>
            <li>Images that add to the content of the site have descriptive alternative text.</li>
            <li>Images that do not contribute to the content are hidden from assistive technologies.</li>
            <li>Text that overlaps images meets contrast requirements.</li>
          </ul>
        </li>
        <li>
          Forms
          <ul>
            <li>Form inputs and controls have a descriptive label and are visible to the user.</li>
            <li>The label is tied directly to the form input to aid those using assistive technology.</li>
            <li>Provide visible focus indicators for all form elements.</li>
            <li>Use native elements first before using ARIA.</li>
          </ul>
        </li>
        <li>
          Content with Motion (moving, blinking or scrolling content)
          <ul>
            <li>User can start, stop and pause the motion.</li>
            <li>Audio and video content should not start automatically.</li>
            <li>Content stays on the screen for at least 5 seconds to allow the user to digest the information.</li>
          </ul>
        </li>
        <li>
          Browser Zooming (minimum of 200%)
          <ul>
            <li>The view is constructed using relative sizes such as <code>%</code> or <code>vw</code>. Media queries are used to reconfigure the layout as the page is zoomed.</li>
            <li>When components on the page are resized, or the orientation of the content changes, the layout does not break or overlap.</li>
            <li>The text remains readable and has been appropriately resized.</li>
          </ul>
        </li>
        <li>
          Videos
          <ul>
            <li>Provide captions or transcripts of videos for those who have limited or no auditory perception.</li>
          </ul>
        </li>
        <li>
          PDFs
          <ul>
            <li>Ensure that PDF documents meet contrast requirements, and are properly tagged for screen readers.</li>
          </ul>
        </li>
      </ul>

      <h3 id="section-manual-checklist-keyboard" className="mt-spacing">Keyboard</h3>
      <ul>
        <li>
          <strong>Tab.</strong> Navigate to links and form controls. Is the tab order sequential and/or logical? Is the focus indicator visible
          and does it meet contrast requirements?
        </li>
        <li>
          <strong>Shift + Tab.</strong> Navigate backwards. Will the user get stuck in any interactive component like a popup or a multi-select?
        </li>
        <li>
          <strong>Spacebar.</strong> Activate checkboxes and buttons.
        </li>
        <li>
          <strong>Enter.</strong> Activate links and buttons.
        </li>
        <li>
          <strong>Arrow keys.</strong> Enables the user to navigate through vertical menus, radio buttons, checkboxes, select/drop-down menus,
          sliders, tab panels, auto-complete, etc.
        </li>
        <li>
          <strong>Escape.</strong> Does this dismiss all interactive elements, including browser dialogs or menus, and take the user back to the main content?
        </li>
      </ul>

      <h2 id="section-testing-resources" className="mt-spacing">Resources for Testing</h2>
      <ul>
        <li>
          Screen Reader Tools
          <ul>
            <li>Mac users: <ExternalLink href="https://accessibility.huit.harvard.edu/voiceover">Getting Started Testing with VoiceOver</ExternalLink> (Harvard University Digital Accessibility)</li>
            <li>PC users: <ExternalLink href="https://accessibility.huit.harvard.edu/nvda">Getting Started Testing with NVDA</ExternalLink> (Harvard University Digital Accessibility)</li>
          </ul>
        </li>

        <li>
          Color
          <ul>
            <li>
              <LinkCallback
                actionDescription="Opens the Utah Design System Color Picker"
                callback={useCallback(() => { setAppState((draftAppState) => { draftAppState.isColorPickerShown = true; }); }, [setAppState])}
                href="design-system_color-picker"
              >
                Utah Design System Color Picker
              </LinkCallback>
            </li>
            <li><ExternalLink href="https://webaim.org/resources/contrastchecker/">WebAIM Contrast Checker</ExternalLink></li>
          </ul>
        </li>
        <li>
          Automated accessibility testing
          <ul>
            <li><ExternalLink href="https://wave.webaim.org/">Wave: Web accessibility evaluation tool</ExternalLink> - free and preferred by DXP team.</li>
            <li><ExternalLink href="https://accessibilityinsights.io/downloads/">Accessibility Insights</ExternalLink> - free</li>
            <li><ExternalLink href="https://www.ssa.gov/accessibility/andi/help/install.html">Social Security Administration - ANDI</ExternalLink> - free tool made by the Social Security Administration.</li>
            <li><ExternalLink href="https://usablenet.com/automated-accessibility-testing-tool">UsableNet</ExternalLink> - free and paid versions available</li>
            <li><ExternalLink href="https://www.deque.com/axe/">Axe® Accessibility Testing Tools</ExternalLink> - free and paid versions available</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

AccessibilityTestingDocumentation.propTypes = propTypes;
AccessibilityTestingDocumentation.defaultProps = defaultProps;

export default AccessibilityTestingDocumentation;
