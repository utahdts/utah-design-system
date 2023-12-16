/* eslint-disable max-len */
import { RadioButton } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';
import { SandboxExample } from '../../../../../sandbox/SandboxExample';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { RadioButtonExampleCodeReact } from './RadioButtonExampleCodeReact';
import { RadioButtonExampleProps } from './RadioButtonExampleProps';
import { RadioButtonExampleRender } from './RadioButtonExampleRender';

export function RadioButtonDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Radio Button</h1>
      <p className="lead-in">Radio buttons should be used when the user must choose only one item from a list of options.</p>

      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        defaultProps={{
          className: '',
          errorMessage: '',
          id: 'radio-button-example-render-id',
          isDisabled: false,
          isRequired: false,
          label: 'Option #1',
          value: '',
        }}
        RENDER_EXAMPLE={RadioButtonExampleRender}
        PROPS_EXAMPLE={RadioButtonExampleProps}
        CODE_EXAMPLE={RadioButtonExampleCodeReact}
      />
      <StaticExample
        title="Radio Button Example"
        renderedExample={(
          <fieldset>
            <legend>Best Ice Cream</legend>
            <RadioButton name="ice-cream" id="vanilla" label="Vanilla" value="vanilla" />
            <RadioButton name="ice-cream" id="chocolate" label="Chocolate" value="chocolate" />
            <RadioButton name="ice-cream" id="pralines" label="Pralines and Cream" value="pralines" />
            <RadioButton name="ice-cream" id="strawberry" label="Strawberry" isDisabled value="strawberry" />
          </fieldset>
        )}
        quickTips={(
          <ul>
            <li>The user can only select one item at a time from a list of options.</li>
            <li>The selected item is shown with a colored background.</li>
            <li>The label is located to the right of the specific option.</li>
            <li>The fieldset should be styled so that the focus is on the options provided. </li>
          </ul>
        )}
      />

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Select from a list.</strong> Use radio buttons when the user needs to select only a single option from a predefined list. Usually,
          the list should be less than 7 options long.
        </li>
      </ul>

      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Long list.</strong> If the list of options is longer than 7 items, consider using a <Link to={pageUrls.comboBox}>Combo Box</Link> or <Link to={pageUrls.select}>Select</Link> instead.</li>
        <li><strong>Multiple choice.</strong> If the user can select multiple choices, consider using <Link to={pageUrls.checkbox}>Checkboxes</Link> or a <Link to={pageUrls.multiSelect}>Multi-Select</Link>.</li>
        <li>
          <strong>Selecting none.</strong> If users should be able to select none of the options or unselect an option, consider using <Link to={pageUrls.checkbox}>Checkboxes</Link>. You
          can also choose to add a &quot;none of the above&quot; option to the radio button group instead.
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Label position.</strong> Always position labels to the right of the radio button.
        </li>
        <li>
          <strong>Selectable labels.</strong> A user should be able to click on the label to select a radio button.
        </li>
        <li>
          <strong>Keep the list vertical.</strong> Make sure to always display a list of radio buttons vertically. A horizontal list makes label-to-input association difficult.
        </li>
        <li>
          <strong>Selection state.</strong> The selected state should be visually distinguishable from the unselected state. Use a contrasting color or visual
          indicator for the selected state.
        </li>
        <li>
          <strong>Grouping related options.</strong> Grouping related options together and providing a label (<code>&lt;legend&gt;</code>) that describes the options will
          help the user understand the context and purpose of the options.
        </li>
        <li>
          <strong>Browser differences and &quot;Shift + Tab&quot;.</strong> Behavior in some browsers differ, in that if focus has moved out of the radio button group
          and then the user <code>shift + tabs</code> back in, the focus will default to the last radio button instead of the first.
        </li>
      </ul>
      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Labels should have a contrast ratio of <code>4.5:1</code> with the background color to ensure legibility.</li>
        <li>The radio button boundary should maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>The selected radio button should maintain a <code>3:1</code> contrast ratio.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>The user should be able to navigate into and out of a radio button group using the <code>tab</code> key.</li>
        <li>The user should be able to navigate and make their selection through the list of options using the <code>up</code> and <code>down</code> or <code>left</code> and <code>right</code> arrow keys. </li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>Radio buttons should be grouped using a <code>&lt;fieldset&gt;</code> element.</li>
        <li>Use a <code>&lt;legend&gt;</code> element to describe the grouping.</li>
        <li>For required elements or error messages please refer to the <Link to={pageUrls.validation}>Form Validation</Link> documentation.</li>
        <li>
          The following aria roles and attributes can be used, however, they are not needed when using semantic html elements. Remember: The first rule of
          ARIA: Before you use ARIA, use native HTML elements or attributes first!
          <ul>
            <li><code>role=&quot;radiogroup&quot;</code></li>
            <li><code>role=&quot;radio&quot;</code></li>
            <li><code>aria-label=&quot;some label&quot;</code> <code>aria-labelledby=&quot;some label&quot;</code></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
