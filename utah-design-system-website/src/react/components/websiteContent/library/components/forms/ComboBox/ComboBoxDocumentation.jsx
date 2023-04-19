/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import comboBoxScreenshot from '../../../../../../../static/images/screenshots/components/comboBox/combobox.png';
import LightBox from '../../../../../lightbox/LightBox';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function ComboBoxDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Combo Box</h1>
      <p className="lead-in">
        A combo box helps users select a single item from a large list of options using an active search feature.
        A multi-select allows users to search on and select multiple items, while a single-select lets users choose a single item.
      </p>

      <hr />

      <h2 id="example">Example</h2>
      <StaticExample
        title="ComboBox Examples"
        renderedExample={<LightBox image={comboBoxScreenshot} alt="ComboBox" className="flex-3up-gap" />}
      />

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li><strong>More than 10 options</strong>. Use a combo box when there are more than 10 options in a drop-down list. With so many options, users may find it difficult to navigate with scrolling only.</li>
      </ul>
      <h3>When not to use</h3>
      <ul className="mb-spacing">
        <li><strong>Limited space</strong>. Use a combo box for presenting options when screen real estate is limited.</li>
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
      </ul>

      <h3 id="section-interaction">Interaction</h3>
      <ul className="mb-spacing">
        <li>
          Selected options:
          <ul>
            <li>Selected options appear highlighted and are always shown in the dropdown part (that is, they are not removed as they are selected).</li>
            <li>
              <strong>Searching:</strong> By default, the user can perform a text search to identify options once the input has focus. For example,
              typing &quot;Ca&quot; would filter your options to include &quot;Cat, Canary and Carrot&quot;, but not &quot;Cougar&quot;. Selecting Return or
              clicking on the option will add it to the input.
            </li>
          </ul>
        </li>
        <li>
          De-selecting options:
          <ul>
            <li>
              Where necessary, the user can de-select the selected item by clicking or tapping on a clear icon (x). Once removed, show placeholder text, such
              as &quot;Select&quot; or &quot;Search…&quot;. Alternatively, you might require that a value is always selected so de-selecting is achieved by
              choosing a different option.
            </li>
          </ul>
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Customize form controls to be accessible.</strong> If you customize this component, ensure that it continues to meet
          the <a href="https://designsystem.digital.gov/components/form" target="_blank" rel="noreferrer">accessibility requirements that apply to all form controls</a>.
        </li>
        <li>
          <strong>Always use a label.</strong> Make sure your select element has a label. Don&apos;t replace it with the default menu option. For example, removing
          the &quot;State&quot; label and just having the menu read &quot;Select a state&quot; by default.
        </li>
        <li>
          <strong>Avoid auto-submission.</strong> Don&apos;t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission
          disrupts screen readers because they select each option as they read them.
        </li>
      </ul>
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
        <li>If you customize this component, ensure that it continues to meet the accessibility requirements.</li>
      </ul>

      <h4>General accessibility guidance for forms</h4>
      <ul className="mb-spacing">
        <li>
          <strong>Customize accessibly.</strong> As you customize these templates, make sure they meet the accessibility guidelines in this introduction
          and as described for each control.
        </li>
        <li>
          <strong>Don&apos;t control element order with CSS.</strong> Display form controls in the same order in the HTML as they appear on
          screen. Don&apos;t use CSS to rearrange the form controls. Screen readers narrate form elements in the order they appear in the HTML.
        </li>
        <li>
          <strong>Align validation with inputs.</strong> Visually align validation messages with the input fields so people using screen magnifiers can
          read them quickly.
        </li>
        <li>
          <strong>Use proper markup.</strong> Group each set of thematically related controls in a fieldset element. Use the legend element to offer a
          label within each one. The fieldset and legend elements make it easier for those who use screen readers to navigate the form.
        </li>
        <li>
          <strong>Use legends.</strong> Use a single legend for fieldset (this is required). One common use of the fieldset and legend elements is a
          question with radio-button options for answers. The question text and radio buttons are wrapped in a fieldset, with the question itself being
          inside the legend tag.
        </li>
        <li>
          <strong>Embed multiple fieldsets and legends for more complex forms.</strong>
        </li>
        <li>
          <strong>Use simple vertical layouts.</strong> Keep your form blocks in a vertical pattern. This approach is ideal, from an accessibility
          standpoint, because of limited vision that makes it hard to scan from right to left.
        </li>
      </ul>
    </div>
  );
}

ComboBoxDocumentation.propTypes = propTypes;
ComboBoxDocumentation.defaultProps = defaultProps;

export default ComboBoxDocumentation;
