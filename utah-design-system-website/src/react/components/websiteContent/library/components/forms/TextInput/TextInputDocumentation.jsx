/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import { Link } from 'react-router-dom';
import formInputs01 from '../../../../../../../static/images/mockups/FormInputs01.jpg';
import textInputSearchPng from '../../../../../../../static/images/screenshots/components/textInput/textInput-search.png';
import LightBox from '../../../../../lightbox/LightBox';
import PreCode from '../../../../../preCode/PreCode';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function TextInputDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Text Input</h1>
      <p className="lead-in">
        Text input allows the user to enter any combination of letters, numbers or symbols in a single-line input box.
        For multi-line input please view more information on <Link to={pageUrls.textArea}>Areas</Link>.
      </p>
      <hr />
      <h2 id="example">Example</h2>
      <StaticExample
        title="Text Input"
        renderedExample={<LightBox image={formInputs01} alt="Form Inputs" className="flex-4up-gap" />}
        quickTips={(
          <ul>
            <li>Text Input is comprised of a label and an input box. Generally, the label should be above the input box.</li>
            <li>Don&apos;t use placeholders as the label. However, they can be used to indicate how to format the user&apos;s text response (e.g. <code>xxx-xxx-xxxx</code>, or <code>xxx@xxxx.com</code>)</li>
            <li>Use visual indicators when a user hovers over an input box versus when the input box has focus to enhance the user experience.</li>
            <li>It is recommended that a text input has real time validation to alert the user to incorrect input.</li>
          </ul>
        )}
      />
      <p>View more information on <Link to={pageUrls.validation}>Form Validation.</Link></p>

      <StaticExample
        title="Search Input"
        renderedExample={<LightBox image={textInputSearchPng} alt="Example Text Input Search" className="flex-4up-gap" />}
        quickTips={(
          <ul>
            <li>The search input box should have a placeholder. The label is still visible to screen readers. (Use the css class <code>visually-hidden</code> to hide the label on the screen.)</li>
            <li>To the left of the placeholder there should be a magnifying glass icon to signify that this is a search input box.</li>
            <li>Optionally, you may place an <code>X icon</code> on the right to clear the input field.</li>
            <li>There should be a submit button (visible or visually-hidden) to trigger the search.</li>
            <li>Use an event handler to trigger the search when the user presses <code>return</code> or <code>enter</code>.</li>
          </ul>
        )}
      />
      <p>View more information on <Link to={pageUrls.iconButton}>Icon Buttons.</Link> or <Link to={pageUrls.button}>Buttons.</Link></p>

      <h2 className="mb-spacing" id="description-guidance">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Expected input is limited to single sentence, or few words</strong>. Consider the expected length of the user&apos;s response. If it will be limited to a single sentence, phrase, word, or number use text input.</li>
        <li><strong>Unknown data</strong>. Use a text input for open ended responses.</li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Set of predetermined responses</strong>. Consider using a <Link to={pageUrls.select}>select input</Link>, <Link to={pageUrls.checkbox}>checkboxes</Link>, or <Link to={pageUrls.radioButton}>radio buttons</Link> if you have a standard set of responses.</li>
      </ul>
      <p>
        View more information on <Link to={pageUrls.switch}>Select Input</Link>, <Link to={pageUrls.comboBox}>Combo Box</Link>, <Link to={pageUrls.multiSelect}>Multi Select</Link>, <Link to={pageUrls.checkbox}>Checkboxes</Link> or <Link to={pageUrls.radioButton}>Radio Buttons</Link>
      </p>
      <h3 id="section-usability-guidance">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Width of the input box</strong>. You may choose to match the input box length to the anticipated user response. (e.g. <code>state abbreviation</code>, <code>telephone number</code>, <code>date of birth</code>, etc.)</li>
        <li><strong>Consistent look</strong>. Keep the look of your text inputs consistent to help the user to easily identify your form inputs. (e.g. <code>border-radius: 4px</code>, <code>:focus</code> color matches the <code>primary color</code>, error messages all have the same color, etc.)</li>
        <li><strong>Do not use placeholders as a replacement for labels</strong>. When a user moves into the input box any placeholder text will disappear and the user will no longer be able to see the purpose of the input box. In addition, most browsers do not provide a high enough contrast ratio when rendering placeholder text.</li>
        <li><strong>Input box height between 32px and 40px</strong>. By sticking to the specified range, your text fields will be mobile friendly and at the same time provide a consistent user experience.</li>
        <li><strong>Ensure enough space between other form elements</strong>. There should be enough spacing between the text input and other elements on the page to prevent accidental clicks or taps.</li>
        <li><strong>The name of the text area should correspond to the data point</strong>. A name attribute to set the name of the associated data point submitted to the server when the form is submitted.</li>
        <li><strong>Clear concise labels</strong>. Use clear and concise labels to describe the purpose of the input box.</li>
        <li><strong>Real time validation</strong>. Generally real time validation is preferred as it creates an easy experience for the user when filling out forms. Once the user clicks or tabs out of the input box, then it is appropriate to validate the user&apos;s response. Provide error messages that are clear and specific to the error.</li>
        <li id="associate-the-label-with-the-input">
          <strong>Associate the label with the input</strong>.
          <ol type="1">
            <li>
              <strong>Preferred Method</strong>: Associate the label with the input box by adding <code>for=&quot;example&quot;</code> to the label and an <code>id=&quot;example&quot;</code> to the input.
              <br />
              <PreCode
                className="gray-block"
                codeRaw={`<div>
  <label for="input1">My Label</label>
  <input type="text" id="input1" … />
  <label for="input1" class="error">Error Message</label>
</div>`}
              />
            </li>
            <li>
              <strong>Secondary Method</strong>: Inputs can be nested inside the label element to create an implicit association between the two elements. The attributes <code>for</code> and <code>id</code> can still be used but are no longer needed.
              <br />
              <PreCode
                className="gray-block"
                codeRaw={`<label>
  <span>My Label<span>
  <input …/>
  <div class="error">Error</div>
<label>`}
              />
            </li>
          </ol>
          <p>For flexibility of style, in the design system, we have chosen Option 1 (Preferred Method) for the provided css.</p>
        </li>
      </ul>
      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Text input and label should have a contrast ratio of <code>4.5:1</code> with the background color to ensure legibility.</li>
        <li>The text area&apos;s focus state should be a <code>3:1</code> contrast ratio.</li>
      </ul>
      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>When navigating the form, the user should be able to move in and out of focus on the text area using the <code>tab</code> key.</li>
      </ul>
      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>Do not use Headings for labels. This interferes with assistive technology.</li>
        <li>Use the Search role if the input will be used for searching and use this role sparingly. Too many search inputs can create noise in screen readers.</li>
        <li>If there is more than one search role in a document, provide an <code>aria-label</code> for each landmark. (e.g. <code>Sitewide</code>, <code>On this page</code>) There is no need to repeat the word <code>search</code> in the label.</li>
        <li>Inputs should have an associated label. (<a href="#associate-the-label-with-the-input">see above</a>).</li>
      </ul>
      <h4>Examples</h4>
      <ul className="mb-spacing">
        <li>
          <strong>Text Input</strong>
          <PreCode
            className="gray-block"
            codeRaw={`<div>
  <label for="input1">Some Input<label>
  <input type="text" id="input1">
  <label for="input1" class="error">Some Error</label>
</div>`}
          />
        </li>
        <li>
          <strong>Search Input</strong>
          <PreCode
            className="gray-block"
            codeRaw={`<form role="search" aria-label="Sitewide">
  <label for="search1">Some Search Input<label>
  <input type="text" id="search1">
  <button class="visually-hidden?">Submit</button>
</form>`}
          />
        </li>
      </ul>
    </div>
  );
}

TextInputDocumentation.propTypes = propTypes;
TextInputDocumentation.defaultProps = defaultProps;

export default TextInputDocumentation;
