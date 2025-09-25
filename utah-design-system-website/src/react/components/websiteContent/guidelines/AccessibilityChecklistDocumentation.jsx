/* eslint-disable max-len */
import {
  ExternalLink,
  LinkCallback,
} from '@utahdts/utah-design-system';
import { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext/useAppContext';
import { pageUrls } from '../../routing/pageUrls';
import { WcagRulesBlock } from './WcagRulesBlock';

export function AccessibilityChecklistDocumentation() {
  const { setAppState } = useAppContext();
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Accessibility Checklist & Testing</h1>
      <p className="lead-in">
        Here are some tools to help with accessibility testing. For more in depth information, view the <NavLink to={pageUrls.accessibility}>accessibility overview page</NavLink>.
      </p>

      <WcagRulesBlock />

      <p>
        Key dates for the Federal Rule:
        <ul>
          <li><strong>Effective Date for Executive Agencies</strong>: June 1, 2015</li>
          <li><strong>Compliance Deadline</strong>: April 24, 2026</li>
        </ul>
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
                <li>Use <Link to={pageUrls.paragraphs}>semantic HTML</Link> markup.</li>
                <li>
                  Limit <Link to={`${pageUrls.accessibility}#section-landmark-roles`}>landmark roles</Link> such as <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> to make it
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
            <li>The majority of <Link to={pageUrls.typography}>body text</Link> is a minimum of 16px (1rem)</li>
            <li><Link to={pageUrls.typography}>Text</Link> is in plain language that is understandable at an 8th grade level.</li>
            <li>
              <Link to={pageUrls.headings}>Headings</Link> (<code>h1, h2, h3, h4, h5, h6</code>) create an outline for the page content. They are sequential and clearly distinct from the body text.
              (Don&apos;t skip heading levels or go out of order.)
            </li>
            <li><Link to={pageUrls.lists}>Lists</Link> (<code>ul, ol</code>) are used to identify all content that can be described as a list of something.</li>
            <li><Link to={pageUrls.links}>Links</Link> do not include generic text such as &quot;click here&quot; or &quot;view more&quot;.</li>
            <li>Links are easily identifiable from the rest of the content on a page.</li>
            <li>Links have a clear hover state: underline or background color change.</li>
            <li>Links that open a new tab have a visual indicator and visually hidden text like &quot;opens in a new tab&quot; to warn screen reader users.</li>
            <li>Links to phone numbers and email address should be readable by screen readers.</li>
            <li>Provide a <Link to={pageUrls.skipLink}>Skip Link</Link> at the top of all pages to aid those using assistive technology navigate your site.</li>
            <li>
              <Link to={pageUrls.table}>Tables</Link> should be used for presenting rows and columns of data.
              <ul>
                <li>Never use tables for layout.</li>
                <li>
                  Column and row headers must be correctly identified.
                </li>
              </ul>
            </li>
            <li>Interactive elements such as <Link to={pageUrls.button}>Buttons</Link> should be at least <Link to={`${pageUrls.accessibility}#section-motor-functionality`}>24 by 24 pixels</Link>.</li>
          </ul>
        </li>
        <li>
          Color
          <ul>
            <li>Text, including links, has a <code>4.5:1</code> <Link to={`${pageUrls.accessibility}#section-limited-vision-contrast`}>contrast ratio</Link> to its background.</li>
            <li>Headings and large bold text should pass the contrast ratio of <code>3:1</code>.</li>
            <li>Interactive elements such as buttons and form fields have a border or element boundary that is <code>3:1</code> contrast against its background.</li>
            <li>Elements that use color to convey a meaning also have another method to express the intent (such as an icon or text).</li>
          </ul>
        </li>
        <li>
          Images
          <ul>
            <li>Images that add to the content of the site have descriptive <Link to={`${pageUrls.accessibility}#alt-text`}>alternative text</Link>.</li>
            <li>Images that do not contribute to the content are hidden from assistive technologies.</li>
            <li>Text that overlaps images meets contrast requirements.</li>
          </ul>
        </li>
        <li>
          <Link to={pageUrls.formGuidelines}>Forms</Link>
          <ul>
            <li>Use a simple vertical form layout when possible to reduce the cognitive load on users.</li>
            <li>Form inputs and controls have a descriptive label and are visible to the user.</li>
            <li>The label is tied directly to the form input to aid those using assistive technology.</li>
            <li>Provide visible focus indicators for all form elements.</li>
            <li>Use native elements first before using ARIA.</li>
            <li>When native elements such as <code>&lt;label&gt;</code> are not sufficient.</li>
            <li>Group form elements together, where needed, using the <code>fieldset</code> element.</li>
            <li>Focus should follow a natural flow. Don&apos;t change the focus index to alter the tabbing order.</li>
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
          Audios/Videos
          <ul>
            <li>Use players that give the user control over the media (play, pause, stop, and adjust the volume).</li>
            <li>Provide captions and/or transcripts of the media for those who have limited or no auditory perception.</li>
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
      <p>
        The site should be designed to be navigated and functional using only the keyboard and the user should never get stuck in any particular
        page element.
      </p>
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
        <li>
          U.S. Web Design System (USWDS)
          <ul>
            <li>
              The USWDS provides useful documentation regarding accessibility for components.
              (e.g., <ExternalLink href="https://designsystem.digital.gov/components/button/accessibility-tests/">Button accessibility tests</ExternalLink>
              , <ExternalLink href="https://designsystem.digital.gov/components/table/accessibility-tests/">Table accessibility tests</ExternalLink>)
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
