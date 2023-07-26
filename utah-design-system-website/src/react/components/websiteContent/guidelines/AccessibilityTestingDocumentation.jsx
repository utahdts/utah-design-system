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
import useAppContext from '../../../context/AppContext/useAppContext';

const propTypes = {};
const defaultProps = {};

function AccessibilityTestingDocumentation() {
  const { setAppState } = useAppContext();
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Accessibility Testing Overview</h1>
      <p className="lead-in">
        Here are some tools to help with accessibility testing. For more in depth information, consider reading documentation provided
        by <ExternalLink href="https://webaim.org/">WebAIM</ExternalLink>.

      </p>

      <h2 id="section-manual-checklist" className="mb-spacing">Manual Checklist</h2>
      <h3 id="section-manual-checklist-content" className="mb-spacing">Content</h3>
      <ul>
        <li>
          Headings & Text
          <ul>
            <li>Content is structured logically using HTML code. </li>
            <li>Headings are sequential and distinct when compared to the body text.</li>
            <li>Text is in plain language that is understandable at an 8th grade level.</li>
            <li>Hyperlinks do not include generic text such as &quot;Learn more here&quot; or &quot;View more&quot;.</li>
          </ul>
        </li>
        <li>
          Color
          <ul>
            <li>Headings and large bold text should pass the contrast ratio of <code>3:1</code>.</li>
            <li>Text, including hyperlinks, should pass a contrast ratio of <code>4.5:1</code> with their background.</li>
            <li>Ensure any parts that use color to convey a meaning have a primary method to express the intent.</li>
          </ul>
        </li>
        <li>
          Images
          <ul>
            <li>Text that overlaps images meets contrast requirements.</li>
            <li>Images that add to the content of the site have descriptive alternative text.</li>
          </ul>
        </li>
        <li>
          Forms
          <ul>
            <li>Form inputs and controls have a descriptive label and are visible to the user.</li>
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
            <li>When components on the page are resized, or the orientation of the content changes, the layout does not break or overlap.</li>
            <li>The text remains readable and has been appropriately resized.</li>
          </ul>
        </li>
      </ul>

      <h3 id="section-manual-checklist-keyboard" className="mb-spacing">Keyboard</h3>
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

      <h3 id="section-manual-other-tools" className="mb-spacing">Other Tools for Testing</h3>
      <ul>
        <li>
          Screen Reader Tools
          <ul>
            <li>Mac users: <ExternalLink href="https://accessibility.huit.harvard.edu/voiceover">Getting Started Testing with VoiceOver</ExternalLink></li>
            <li>PC users: <ExternalLink href="https://accessibility.huit.harvard.edu/nvda">Getting Started Testing with NVDA</ExternalLink></li>
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
            <li><ExternalLink href="https://webaim.org/resources/contrastchecker/">Contrast Checker</ExternalLink></li>
          </ul>
        </li>
        <li>
          Automated accessibility testing
          <ul>
            <li><ExternalLink href="https://wave.webaim.org/">Wave: Web accessibility evaluation tool</ExternalLink> - free and preferred by DXP team.</li>
            <li><ExternalLink href="https://accessibilityinsights.io/downloads/">Accessibility Insights</ExternalLink> - free</li>
            <li><ExternalLink href="https://usablenet.com/automated-accessibility-testing-tool">UsableNet</ExternalLink> - free and paid versions available</li>
            <li><ExternalLink href="https://www.deque.com/axe/">Axe® Accessibility Testing Tools</ExternalLink> - free and paid versions available</li>
            <li><ExternalLink href="https://validator.w3.org/checklink">W3C - Link Checker</ExternalLink></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

AccessibilityTestingDocumentation.propTypes = propTypes;
AccessibilityTestingDocumentation.defaultProps = defaultProps;

export default AccessibilityTestingDocumentation;
