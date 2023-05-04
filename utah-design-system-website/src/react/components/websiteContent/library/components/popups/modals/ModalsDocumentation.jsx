/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function ModalsDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Modals</h1>
      <div className="lead-in">
        <p>
          A modal is an element that overlays on top of the current interface, requiring the user to perform an action or view
          critical information. Its behavior is disruptive, so use them sparingly.
        </p>
      </div>

      <hr />
      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Complex Modal"
        renderedExample={(
          <span>Example coming soon!</span>
        )}
        quickTips={(
          <ul>
            <li>
              A modal consists of:
              <ul>
                <li>A dark overlay.</li>
                <li>A title.</li>
                <li>Some information or content.</li>
                <li>An optional choice.</li>
                <li>An optional close button in the form of an &quot;x&quot; on the top right corner.</li>
              </ul>
            </li>
            <li>
              Some examples may include:
              <ul>
                <li>Confirmation or acknowledgement.</li>
                <li>Small form input.</li>
                <li>A required action.</li>
              </ul>
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Confirmation.</strong> Use a modal when an action triggered by a user needs some sort of validation. Typically, a choice is given in
          the form of &quot;yes&quot; or &quot;no&quot;. For example: &quot;Are you sure you want to delete this data?&quot;
        </li>
        <li>
          <strong>Acknowledgment.</strong> When a user needs to acknowledge some information. Typically, this type of modal does not include a close button.
          For example: &quot;Please acknowledge our privacy policy before continuing.&quot;
        </li>
        <li>
          <strong>Small form input.</strong> When some input from the user is required, a modal can be used in order to move on to the next step of a process.
          For example: &quot;Please enter your date of birth before proceeding.&quot;
        </li>
        <li>
          <strong>Critical information.</strong> If some critical information must be communicated to the user. This type of modal does not require action buttons.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>System messages.</strong> If a process status (success, warning or error) needs to be communicated to the user, avoid using a
          modal. Consider using something less intrusive, such as a <Link to={pageUrls.banners}>Banner</Link> or refer to the <Link to={pageUrls.validation}>Form Validation</Link> guidelines.
        </li>
        <li><strong>Long forms.</strong> For long forms, consider displaying them on the page rather than using a modal.</li>
      </ul>

      <h3 id="section-usability">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Action.</strong> A modal should be the result of an action triggered by a user. For example, by clicking on a button.</li>
        <li><strong>Size.</strong> Three sizes are available: regular, large or extra large. Use them according to the amount of content displayed.</li>
        <li><strong>Simple.</strong> Keep the content of a modal simple. Avoid complex elements such as <Link to={pageUrls.table}>tables</Link> or <Link to={pageUrls.accordion}>accordions</Link>.</li>
        <li><strong>Compact.</strong> Preferably, the content of a modal should be concise. Avoid long content that would cause the user to scroll, as it can be confusing.</li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text should have a contrast ratio of <code>4.5:1</code> with the background color to ensure legibility.</li>
        <li>The modal boundary should maintain a <code>3:1</code> contrast ratio against the background. (Using the default background overlay achieves this requirement.)</li>
        <li>For any other content, refer to their respective documentation.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Once the user triggers the modal, hitting the <code>tab</code> key should put the focus on the first tabbable element within the modal.</li>
        <li>Using the <code>tab</code> key, the user should be able to only navigate through elements within the modal.</li>
        <li>If the modal includes a <code>close</code> button, pressing the <code>esc</code> key should close the modal. The <code>close</code> button should be the last focusable element.</li>
        <li>When closing the modal, the focus should be put on the element that triggered it.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>A modal should include some aria attributes: the container should have <code>role=&quot;dialog&quot;</code>, <code>aria-modal=&quot;true&quot;</code> and <code>aria-labelledby</code> referring to the title.</li>
        <li>Make sure the overlay is visibly dark AND the user can not navigate outside the modal until it is closed. Navigating outside while the modal is displayed can cause major confusion for users, especially those using assistive technology.</li>
        <li>If the modal includes a <code>close</code> button, it should be placed at the end of the html code. That way the screen reader will appropriately read it after navigating through the modal’s content.</li>
        <li>For any element within the modal, please refer to their respective documentation.</li>
      </ul>
    </div>
  );
}

ModalsDocumentation.propTypes = propTypes;
ModalsDocumentation.defaultProps = defaultProps;

export default ModalsDocumentation;