/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import comboBoxScreenshot from '../../../../../../../static/images/screenshots/components/combo-box/combo-box.jpg';
import LightBox from '../../../../../lightbox/LightBox';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function ComboBoxDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Combo Box</h1>
      <p className="lead-in">
        A combo box helps users select a single item from a large list of options using an active search feature.
        A multi-select allows users to search on and select multiple items, while a single-select lets users choose a single item.
      </p>

      <hr />
      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Date Input Examples"
        renderedExample={<LightBox image={comboBoxScreenshot} alt="Combo Box" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>A combo box allows the user to select from a list of options.</li>
            <li>The user can search the list of options by typing in the field.</li>
            <li>The list of available options is narrowed by the search.</li>
          </ul>
        )}
      />

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Limiting the user to one option:</strong> When the user is limited to selecting one option from a predefined list of options.</li>
        <li><strong>Search for option:</strong> Use a combo box when you wish to let your users search in the list of provided options.</li>
        <li><strong>More than 10 options</strong>. Use a combo box when there are more than 10 options in a select list. With so many options, users may find it difficult to navigate with scrolling only.</li>
        <li><strong>Limited space</strong>. Use a combo box for presenting options when screen real estate is limited.</li>
        <li><strong>Don&apos;t overuse.</strong> Too many combo box inputs can be overwhelming to the user.</li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Limited choices.</strong> When the number of options is small, you can continue to use a select or radio group.</li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Use option strings familiar to users.</strong> The combo box filters by matching strings.
          Include option text that includes familiar strings or spellings. For example, if using the Combo
          Box with a city or state list, include the postal abbreviation in the option text: Salt Lake City (SLC) or Utah (UT).
        </li>
        <li>
          <strong>Avoid dependent options.</strong> Avoid making options in one select menu change based on the input of another.
          Users often don&apos;t understand how choosing an item in one impacts another.
        </li>
        <li>
          <strong>Use a good default.</strong> When most users will (or should) pick a particular option, make it the
          default: <code>&lt;option selected=&quot;selected&quot;&gt;Default&lt;/option&gt;</code>.
        </li>
        <li>
          <strong>Avoid auto-submission.</strong> Don&apos;t use JavaScript to automatically submit the form (or do anything else) when
          an option is selected. Offer a &quot;submit&quot; button at the end of the form instead. Users often change their choices multiple
          times. Auto-submission is also less accessible.
        </li>
        <li>
          <strong>10+, Alphabetize list options:</strong> If there are more than 10 options, consider showing options in alphabetical order
          or other predictable ordering for easy scanning.
        </li>
        <li>
          <strong>Placeholder text (optional):</strong> Placeholder text like &quot;Select One&quot; is typically displayed in the Combo Box
          field. After the user makes a selection, the placeholder text is replaced with the user&apos;s selection.
        </li>
        <li><strong>Selected Options:</strong> Selected options appear highlighted and are always shown in the dropdown part (that is, they are not removed as they are selected).</li>
        <li>
          <strong>Searching:</strong> By default, the user can perform a text search to identify options once the input has focus. For example,
          typing &quot;Ca&quot; would filter your options to include &quot;Cat, Canary and Carrot&quot;, but not &quot;Cougar&quot;. Selecting Return or
          clicking on the option will add it to the input.
        </li>
        <li>
          <strong>De-selecting options:</strong> Where necessary, the user can de-select the selected item by clicking or tapping on a clear icon (x). Once removed, show placeholder text, such
          as &quot;Select&quot; or &quot;Search…&quot;. Alternatively, you might require that a value is always selected so de-selecting is achieved by
          choosing a different option.
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in the combo box input must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>The combo box input boundary must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>The combo box&apos;s focus state should be a <code>3:1</code> contrast ratio.</li>
        <li>The combo box popup should follow the contrast guidelines for a typical popup component. See <Link to={pageUrls.popups}>Popup</Link></li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>Use Tab to move between form elements. The select should display a visible focus state when users tab to them.</li>
        <li>Begin typing in the field to narrow the list of options.</li>
        <li>Use arrow keys (↑ up arrow /↓ down arrow) to navigate between options.</li>
        <li>Use Spacebar to expand/collapse select popup.</li>
        <li>Use Enter to select an option and collapse the popup.</li>
        <li>Use Esc to collapse the popup.</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>
          Always pair a label with a select. Include a for attribute on each label with a value matching the id attribute on the corresponding
          select. Don&apos;t replace the label with the default menu option. For example, removing the &quot;State&quot; label and just having
          the menu read &quot;Select a state&quot; by default.
        </li>
        <li>
          Don&apos;t use JavaScript to automatically submit the form (or do anything else) when an option is selected.  Auto-submission disrupts
          screen readers because they select each option as they read them.
        </li>
        <li>If you customize this component, ensure that it continues to meet
          the <Link to={pageUrls.accessibility}>accessibility requirements that apply to all form controls</Link>.
        </li>
      </ul>
    </div>
  );
}

ComboBoxDocumentation.propTypes = propTypes;
ComboBoxDocumentation.defaultProps = defaultProps;

export default ComboBoxDocumentation;
