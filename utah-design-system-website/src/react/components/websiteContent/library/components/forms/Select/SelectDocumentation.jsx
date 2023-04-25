/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function SelectDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Select</h1>
      <p className="lead-in">
        A select lets you choose options from an option menu. Select inputs and <Link to={pageUrls.comboBox}>Combo Boxes</Link> let users
        choose a single option, while <Link to={pageUrls.multiSelect}>Multi-selects</Link> lets users choose multiple options.
      </p>

      <hr />

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Limiting the user to one option:</strong> When the user is limited to selecting one option from a predefined list of options.</li>
        <li><strong>Use sparingly.</strong> Use the select component only when a user needs to choose from about 4 to 10 possible options, provide a pre-selected default list of options, and you have limited space to display those options.</li>
      </ul>
      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Fewer than 4 Options:</strong> For fewer than 4 items, consider using a different component. See <Link to={pageUrls.radioButton}>radio button</Link>.</li>
        <li><strong>More than 10 Options:</strong> If you are providing more than 10 options, consider a <Link to={pageUrls.comboBox}>combo box</Link>.</li>
        <li><strong>Only 2 options:</strong> If you&apos;re only providing 2 options use a <Link to={pageUrls.radioButton}>Radio Group</Link> or a <Link to={pageUrls.switch}>Switch</Link>.</li>
        <li><strong>Multi-select:</strong> If you need to allow users to choose more than one option at once.  Users don&apos;t often understand how to choose multiple items from select elements.  Use <Link to={pageUrls.checkbox}>checkboxes</Link> or <Link to={pageUrls.multiSelect}>multi-select</Link> instead.</li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>5+, Alphabetize list options:</strong> If there are more than 5 options, consider showing options in alphabetical order or other predictable ordering for easy scanning.</li>
        <li><strong>10+, Try a combo box:</strong> If there are more than 10 options, provide another method of accessing the options such as an autocomplete search as part of a <Link to={pageUrls.comboBox}>combo box</Link>.</li>
        <li><strong>Placeholder text (optional):</strong> Placeholder text like &quote;Select One&quot; is typically displayed in the Select field. After the user makes a selection, the placeholder text is replaced with the user&apos;s selection.</li>
        <li><strong>Consider dependent options.</strong> Avoid making options in one select menu change based on the input of another. Users often don&apos;t understand how choosing an item in one impacts another.</li>
        <li><strong>Use a good default.</strong> When most users will (or should) pick a particular option, make it the default: <code>&lt;option selected=&quot;selected&quot;&gt;Default&lt;/option&gt;</code></li>
        <li><strong>Don&apos;t auto-submit.</strong> Don&apos;t use JavaScript to automatically submit the form (or do anything else) when an option is chosen. Offer a &quote;submit&quot; button at the end of the form instead. Users often change their choices multiple times. Auto-submission is also less accessible.</li>
        <li><strong>Icon:</strong> The caret icon is positioned to the right of the container and visually distinguishes this as a select input.</li>
        <li><strong>Selected options:</strong> A selected option appears highlighted and is always shown in the dropdown part. (that is, they are not removed as they are selected).</li>
        <li><strong>De-selecting:</strong> By default, a select does not have the option to clear the selection. To allow deselecting add a &quote;none&quot; value to the select options or a clear button (x) to the right of the select.</li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in the select Input must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>The select input boundary must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>The select focus state should be a <code>3:1</code> contrast ratio.</li>
        <li>The select popup should follow the contrast guidelines for a typical popup component. See <Link to={pageUrls.popups}>popup</Link>.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>Use Tab to move between form elements. The select should display a visible focus state when users tab to it.</li>
        <li>Use arrow keys (↑ up arrow /↓ down arrow) to navigate between options.</li>
        <li>Use Spacebar to expand/collapse select popup.</li>
        <li>Use Enter to select an option and collapse the popup.</li>
        <li>Use Esc to collapse the popup.</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>
          Always pair a label with a select. Include a <code>for</code> attribute on each <code>label</code> with a value matching the <code>id</code> attribute on the corresponding
          <code>select</code>. Don&apos;t replace the label with the default menu option. (for example, removing the &quot;State&quot; label and just having
          the menu read &quot;Select a state&quot; by default).
        </li>
        <li>
          Don&apos;t use JavaScript to automatically submit the form (or do anything else) when an option is selected.  Auto-submission disrupts
          screen readers because they select each option as they read them.
        </li>
        <li>Note: Where possible, it is recommended that you use a native &lt;select&gt; element rather than using aria and role attributes, as native elements are more widely supported by user agents and assistive technology. Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!</li>
        <li>If you customize this component, ensure that it continues to meet the accessibility requirements.</li>
      </ul>
    </div>
  );
}

SelectDocumentation.propTypes = propTypes;
SelectDocumentation.defaultProps = defaultProps;

export default SelectDocumentation;