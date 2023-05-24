/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';
import confirmationButtonScreenshot from '../../../../../../../static/images/screenshots/components/form-elements/confirmationButtonScreenshot.jpg';
import LightBox from '../../../../../lightbox/LightBox';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function ConfirmationButtonDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Confirmation Button</h1>
      <p className="lead-in">
        Confirmation buttons reduce uncertainty by asking users to confirm their intended action before proceeding.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Confirmation Button Life Cycle"
        renderedExample={<LightBox image={confirmationButtonScreenshot} alt="Confirmation Button" className="flex-3up-gap" />}
        quickTips={(
          <ol>
            <li>The user hovers over and clicks the button.</li>
            <li>The button&apos;s text changes to a confirmation message.</li>
            <li>The user may continue with the action by clicking again, or click off the button to cancel.</li>
          </ol>
        )}
      />

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>To prevent users from making mistakes.</strong> By prompting users to confirm their actions, uncertainty about the action they have taken, or are about
          to take, can be reduced. Additionally, confirmation prompts can help prevent users from making mistakes.
        </li>
        <li>
          <strong>Highlighting irreversible actions.</strong> If a user is about to perform an irreversible action, such as permanently deleting an item without the
          option to restore it, it is important to prompt them in advance and confirm that they understand the consequences of their action.
        </li>
        <li>
          <strong>When an action is used infrequently.</strong>  When it comes to infrequent actions that users may not remember how to perform, a confirmation
          button may be a more secure option compared to a <Link to={pageUrls.banners}>banner</Link>, which could be overlooked or dismissed.
        </li>
      </ul>

      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>If the action isn&apos;t destructive or easily reversible.</strong> Confirmation buttons should be reserved for actions that carry significant consequences or cannot
          be easily undone. If the action is easily reversible, use a standard <Link to={pageUrls.button}>button</Link> or a <Link to={pageUrls.banners}>banner</Link>.
        </li>
        <li>
          <strong>Modal confirmation.</strong> Alternatively you may use a <Link to={pageUrls.modals}>modal</Link> dialog to confirm the user&apos;s action, especially
          if the user requires more information about the action that is about to take place. For example: &quot;This will permanently delete this record, and cannot be undone!&quot;
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Confirmation buttons are for actions.</strong> Use a confirmation button to confirm the user&apos;s selected action. They should never be used for purely navigation purposes.</li>
        <li><strong>For everything else on buttons.</strong> Please refer to our documentation on <Link to={pageUrls.button}>buttons</Link> for guidance on sizing, types (primary, icon, etc.) and accessibility.</li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>The button boundary (the outside edge of the button) must maintain a <code>3:1</code> contrast ratio or better.</li>
        <li>The button text must maintain a <code>4.5:1</code> contrast ratio or better.</li>
        <li>The button&apos;s focus state should be a <code>3:1</code> contrast ratio.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>
          The button should display a visible focus state when users tab to it. Pressing the <code>spacebar</code> or <code>return</code> key will activate
          the initial action of the button. When the confirmation text is shown in the button, the user can confirm their selection
          by pressing the <code>spacebar</code> or <code>return</code> key again. Alternately the user may cancel the action by hitting the <code>escape</code> key.
        </li>
        <li>
          Avoid using non-standard html markup for a button such as a <code>div</code> tag.
        </li>
        <li>
          When you much us aria, ensure elements with ARIA <code>role=&quot;button&quot;</code> can be activated with both key commands (Pressing the <code>spacebar</code> or <code>return</code> key).
        </li>
        <li>
          Remember, the first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
        </li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>When you have a confirmation button that contains an icon that adds additional information, the icon should have non-empty alt text (or aria-label for SVG).</li>
        <li>In order for a screen reader to detect the change from the initial state to the confirmation state you should use <code>aria-live=&quot;polite&quot;</code> region or <code>role=&quot;alert&quot;</code> on the button.</li>
      </ul>
    </div>
  );
}

ConfirmationButtonDocumentation.propTypes = propTypes;
ConfirmationButtonDocumentation.defaultProps = defaultProps;

export default ConfirmationButtonDocumentation;
