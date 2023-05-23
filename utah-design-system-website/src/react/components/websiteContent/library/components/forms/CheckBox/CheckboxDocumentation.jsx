/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function CheckboxDocumentation() {
  return (
    <div className="documentation-content">
      <h1>CheckBox</h1>
      <p className="lead-in">Checkboxes allow users to select one or more options from a list. They can have two values: selected or unselected.</p>
      <hr />
      <h2 id="example">Example</h2>
      <StaticExample
        title="Checkbox"
        renderedExample="Example coming soon!"
        quickTips={(
          <ul>
            <li>The user can select multiple items from a list of options.</li>
            <li>Selected items are shown with a colored background.</li>
            <li>The label is located to the right of the checkbox.</li>
            <li>The fieldset should be styled so that the focus is on the options provided.</li>
          </ul>
        )}
      />

      <h2 className="mb-spacing" id="section-description-guidance">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Select from a list.</strong> Use checkboxes when the user needs to select one or more options from a list. Usually,
          the list should be less than 10 options long.
        </li>
        <li>
          <strong>Toggle.</strong> Use a checkbox to toggle an option on or off.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Long list.</strong> If you have limited real estate on your page, or your list of options is greater than 10, consider
          using a <Link to={pageUrls.multiSelect}>Multi-Select</Link> instead.
        </li>
        <li>
          <strong>Single choice.</strong> If only a single option is required, consider using <Link to={pageUrls.radioButton}>Radio Buttons</Link> or
          a <Link to={pageUrls.select}>Select input</Link> instead. For longer lists (10 options or more), consider using
          a <Link to={pageUrls.comboBox}>Combo Box</Link>.
        </li>
      </ul>

      <h3 id="section-usability">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Label position.</strong> Always position labels to the right of the checkbox.
        </li>
        <li>
          <strong>Keep the list vertical.</strong> Make sure to always display a list of checkboxes vertically. An horizontal list makes
          label-to-input association difficult.
        </li>
        <li>
          <strong>Selectable labels.</strong> A user should be able to click on the label to select or unselect a checkbox.
        </li>
        <li>
          <strong>Grouping related options.</strong> Grouping related options together and providing a label (<code>&lt;legend&gt;</code>)
          that describes what the options are for, will help the user understand the context and purpose of the options.
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Labels should have a contrast ratio of <code>4.5:1</code> with the background color to ensure legibility.</li>
        <li>The checkbox boundary should maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>The selected checkbox should maintain a <code>3:1</code> contrast ratio.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>The user should be able to navigate through a list of checkboxes using the <code>tab</code> key.</li>
        <li>Once on focus, hitting the <code>spacebar</code> should select or deselect the checkbox.</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>Checkboxes should be grouped using a <code>&lt;fieldset&gt;</code> element.</li>
        <li>Use a <code>&lt;legend&gt;</code> element to describe the grouping.</li>
        <li>
          A custom checkbox should include the attribute <code>aria-checked</code> set to <code>true</code> for selected
          and <code>false</code> for unselected. However, we strongly encourage the use of semantic HTML, for
          example <code>&lt;input&gt;</code> element with <code>type=&quot;checkbox&quot;</code>. Note: this attribute is not
          necessary when using semantic HTML. Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
        </li>
      </ul>
    </div>
  );
}

CheckboxDocumentation.propTypes = propTypes;
CheckboxDocumentation.defaultProps = defaultProps;

export default CheckboxDocumentation;
