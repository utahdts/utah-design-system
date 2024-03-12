/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { Accordion, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@utahdts/utah-design-system';
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../../routing/pageUrls';
import coralPinkSandDunes from '../../../../../../../static/images/screenshots/examples/CoralPinkSandDunes.jpg';
import { SandboxExample } from '../../../../../sandbox/SandboxExample';
import { AccordionExampleRender } from './AccordionExampleRender';
import { AccordionExampleProps } from './AccordionExampleProps';
import { AccordionExampleCodeReact } from './AccordionExampleCodeReact';
import { AccordionCssClassesDocumentation } from './AccordionCssClassesDocumentation';
import { AccordionPropsDocumentation } from './AccordionPropsDocumentation';

export function AccordionDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Accordion</h1>
      <p className="lead-in">
        An accordion is a collection of headings that can be expanded or collapsed to show or hide extra content upon selection.
      </p>

      <hr />

      <h2 id="section-example">Example</h2>
      <SandboxExample
        defaultProps={{
          children: 'Accordion content',
          className: '',
          contentClassName: '',
          headerClassName: '',
          headerContent: 'Header content',
          headingLevel: 2,
          isOpen: true,
        }}
        RENDER_EXAMPLE={AccordionExampleRender}
        PROPS_EXAMPLE={AccordionExampleProps}
        CODE_EXAMPLE={AccordionExampleCodeReact}
        componentClassName="sandbox-example__component--outline"
      />
      <h2 id="vanilla-example">Vanilla Example</h2>
      <h4>HTML</h4>
      <PreCodeForCodeString
        showBackgroundColor
        codeRaw={(`
<div class="accordion">
  <button 
    class="accordion__header button--primary-color button--solid accordion__header--open"
    type="button" 
    onclick="toggleAccordion(this)"
  >
    <h4><span>An Accordion</span></h4>
    <span class="utds-icon-before-circle-chevron-up icon-button__icon"></span>
  </button>
  <div class="accordion__content accordion__content--open">This is some content.</div>
</div>
            `)}
      />
      <h4>Javascript</h4>
      <PreCodeForCodeString
        showBackgroundColor
        codeRaw={(`
<script>
  function toggleAccordion(button) {
    const accordionContent = button.nextElementSibling;
    accordionContent.classList.toggle('accordion__content--open');
    button.classList.toggle('accordion__header--open');
        
    const icon = button.querySelector('.icon-button__icon');
    if (button.classList.contains('accordion__header--open')) {
      icon.classList.remove('utds-icon-before-circle-chevron-down');
      icon.classList.add('utds-icon-before-circle-chevron-up');
    } else {
      icon.classList.remove('utds-icon-before-circle-chevron-up');
      icon.classList.add('utds-icon-before-circle-chevron-down');
    }
  }                
</script>
            `)}
      />

      <hr />

      <h3>Closed</h3>
      <Accordion headerContent={<span>A Closed Accordion</span>} headerClassName="button--primary-color button--solid" headingLevel={4} id="closed-accordion">
        This is some content.
      </Accordion>

      <h3 className="mt-spacing">Open</h3>
      <Accordion headerContent={<span>An Open Accordion</span>} headerClassName="button--primary-color button--solid" isOpen headingLevel={4} id="opened-accordion">
        <img src={coralPinkSandDunes} alt="Recreation vehicle at the sand dunes" style={{ float: 'right', marginLeft: 'var(--spacing)' }} />
        <p>
          The geology of the sand dunes is an intriguing subject. The sand comes from Navajo sandstone from the geologic period call Middle Jurassic.
          The same iron oxides and minerals that give us spectacular red rock country are responsible for this landscape of coral pink sand.
        </p>
        <p>
          Sand dunes are created by three factors: Sand, high winds, and a unique influence upon the wind.
          The notch between the Moquith and Moccasin mountains causes this unique influence.
          The wind is funneled through the notch, thereby increasing wind velocity to a point where it can carry sand grains from the eroding Navajo sandstone.
        </p>
        <p className="mb-auto">
          This phenomenon is known as the Venturi effect. Once the wind passes through the notch and into the open valley, the wind velocity decreases,
          causing the sand to be deposited. These dunes are estimated at 10,000 to 15,000 years old.
        </p>
      </Accordion>

      <h2 className="my-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Limited content.</strong> If users will only need a few specific pieces of content to be displayed at one time within a page.</li>
        <li><strong>Small space.</strong> If you have only a small space to display a lot of content.</li>
        <li><strong>Grouping content.</strong> When combining a set of content with expand and collapse functionality.</li>
        <li><strong>To help users focus.</strong> Allowing a user to hide controls and content so they can better focus on their task.</li>
      </ul>

      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>If users need to see most or all of the information on a page.</strong> Use well-formatted text instead.
        </li>
        <li>
          <strong>If there is not enough content to warrant condensing.</strong> Accordions increase cognitive load and interaction
          cost because users have to make decisions about on which headers to click.
        </li>
        <li>
          <strong>When expand/collapse functionality isn&apos;t needed.</strong> Avoid using an introductory element that includes
          expand and collapse functionality for a set of content that doesn&apos;t require it.  Use a <Link to={pageUrls.headings}>heading</Link> instead.
        </li>
        <li>
          <strong>Don&apos;t hide important information.</strong> If information is deemed important and/or critical to a process, don&apos;t hide
          the information in an accordion.
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Wrap titles in appropriate role headings (H1-H6).</strong> To ensure consistency with the information architecture
          of the page, it is recommended to wrap each title in an appropriate role heading (H1-H6).
        </li>
        <li>
          <strong>Make the entire header selectable.</strong> Allow users to click anywhere in the header area to expand or collapse the content
          container; A larger target is easier to manipulate. Additional actions are only activated upon interaction within the boundaries of
          their corresponding UI components.
        </li>
        <li>
          <strong>Give interactive elements room to breathe.</strong> Make sure interactive elements within the collapsible region are far
          enough from the headers that users don&apos;t accidentally trigger a collapse.
        </li>
        <li>
          <strong>The chevron or plus icon serves as a visual cue, indicating the functionality of the accordion.</strong>  It also
          displays the state of the accordion through its rotation and direction. By default the icon should appear
          at the right of the header. This approach enables the header on the left side to align with other text elements in the
          layout, which is the preferred alignment scenario.
        </li>
        <li>
          <strong>Avoid hover events.</strong> Avoid using hover actions to trigger expand and collapse functionality.
        </li>
        <li>
          <strong>Keep headings short.</strong> Keep headings to five words, if possible, to avoid wrapping.
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>The header of the accordion must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>The text and icon indicator must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>When using custom colors be sure the minimum contrast requirements are met.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>
          Every accordion within the component is a tab stop, and can be expanded or collapsed using the <code>space</code> or <code>enter</code> keys.
          By default, the accordions are collapsed. When an accordion is expanded, its interactive elements are automatically integrated into
          the tab order.
        </li>
        <li>
          <strong>Enter or Space:</strong>
          <ul>
            <li>
              When focus is on the accordion header for a collapsed panel, it expands the associated panel. If the implementation allows
              only one panel to be expanded, and if another panel is expanded, it collapses that panel.
            </li>
            <li>
              When focus is on the accordion header for an expanded panel, it collapses the panel if the implementation supports
              collapsing. Some implementations require one panel to be expanded at all times and allow only one panel
              to be expanded; so, they do not support a collapse function.
            </li>
          </ul>
        </li>
        <li>
          <strong>Tab:</strong> Moves focus to the next focusable element; all focusable elements in the accordion are included in
          the page Tab sequence.
        </li>
        <li>
          <strong>Shift + Tab:</strong> Moves focus to the previous focusable element; all focusable elements in the accordion are included
          in the page Tab sequence.
        </li>
        <li>
          <strong>Down Arrow (Optional):</strong> If focus is on an accordion header, it moves focus to the next accordion header. If
          focus is on the last accordion header, it either does nothing or moves focus to the first accordion header.
        </li>
        <li>
          <strong>Up Arrow (Optional):</strong> If focus is on an accordion header, it moves focus to the previous accordion header. If
          focus is on the first accordion header, it either does nothing or moves focus to the last accordion header.
        </li>
        <li>
          <strong>Home (Optional):</strong> When focus is on an accordion header, it moves focus to the first accordion header.
        </li>
        <li>
          <strong>End (Optional):</strong> When focus is on an accordion header, it moves focus to the last accordion header.
        </li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>
          Code header areas in the accordion as <Link to={pageUrls.button}>buttons</Link>. Using a <code>&lt;button type=&quot;button&quot;&gt;</code> assures
          accordions are usable with both screen readers and keyboards.
          <PreCodeForCodeString
            showBackgroundColor
            codeRaw={(`
              <button type=”button” onClick=”...”>
                <h2>Accordion Title</h2>
                <span class=”chevron” />
              </button>
              <add container and ids and junk>
            `)}
          />
        </li>
        <li>
          Use <code>aria-expanded</code> on buttons to express an accordion&apos;s default state. Buttons should state if they are expanded by
          default with <code>aria-expanded=&quot;true&quot;</code>. The <code>aria-expanded=&quot;false&quot;</code> attribute will be added
          to other <Link to={pageUrls.button}>buttons</Link> when the accordion is initialized by JavaScript.
        </li>
        <li>
          Use unique ids. Each button has <code>aria-controls=&quot;id&quot;</code>, that associates to the appropriate container by referencing
          the container&apos;s <code>id</code>. Each container also has an <code>aria-labelledby=&quot;id&quot;</code> that references its controlling
          button&apos;s <code>id</code>.
        </li>
        <li>Accordions use javascript to set the hidden values (aria-hidden=&quot;true&quot;, etc.) of their content container. Each content
          container will have its <code>hidden</code> attribute set by the component, depending on its corresponding <Link to={pageUrls.button}>button&apos;s</Link> <code>aria-expanded</code> attribute.
        </li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="button-props-css">
          <TabList>
            <Tab id="button-props-css">CSS</Tab>
            <Tab id="button-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="button-props-css">
              <AccordionCssClassesDocumentation />
            </TabPanel>
            <TabPanel tabId="button-props-react">
              <AccordionPropsDocumentation />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
