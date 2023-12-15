/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { LightBox } from '../../../../../lightbox/LightBox';
import hamburgerClosedScreenshot from '../../../../../../../static/images/screenshots/components/hamburger-menu/hamburger-closed.jpg';
import hamburgerOpenScreenshot from '../../../../../../../static/images/screenshots/components/hamburger-menu/hamburger-open.jpg';

const propTypes = {};
const defaultProps = {};

function HamburgerMenuDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Hamburger Menu</h1>
      <p className="lead-in">A &quot;hamburger menu&quot; is a single button that is often used to expand and collapse a set of navigation links.</p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Menu closed"
        renderedExample={<LightBox image={hamburgerClosedScreenshot} alt="Radio Buttons" className="flex-3up-gap" />}
      />
      <StaticExample
        title="Menu open"
        renderedExample={<LightBox image={hamburgerOpenScreenshot} alt="Radio Buttons" className="flex-3up-gap" />}
      />

      <h2 id="section-guidance" className="mb-spacing">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Screen size.</strong> Use a &quot;hamburger menu&quot; when the screen width is limited, such as on mobile.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Desktop.</strong> If you have the space to do so, a <Link to={pageUrls.mainMenu}>main menu</Link> is a better option. Hiding menu items from the user
          on desktop is not an optimal user experience.
        </li>
        <li><strong>Duplicate menu.</strong> Do not have more than one &quot;hamburger menu&quot; per site and/or application. This can cause confusion for the user.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Button.</strong> The component should be a <code>&lt;button&gt;</code> element.</li>
        <li>
          <strong>Open and closed.</strong> The button should convey to the user its state (open or closed). Typically, the hamburger icon &quot;three lines&quot;
          ( <span className="utds-icon-before-hamburger" aria-hidden="true" />) represents a collapsed menu, while an &quot;X&quot; ( <span className="utds-icon-before-x-icon" aria-hidden="true" />) represents an open menu.
        </li>
      </ul>
      <p>For more information, please refer to the <Link to={pageUrls.iconButton}>icon button</Link> documentation.</p>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The button&apos;s icon must maintain a <code>4.5:1</code> contrast ratio or better.</li>
        <li>The button&apos;s focus state should have a <code>3:1</code> contrast ratio.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>The hamburger button should be able to receive focus by hitting the <code>tab</code> key.</li>
        <li>Hitting <code>enter</code> or <code>spacebar</code> triggers the opening or closing of the menu.</li>
        <li>Once the menu is opened, hitting the <code>esc</code> key should close the menu.</li>
        <li>The next focusable element should be the first link within the menu.</li>
        <li>When leaving the menu, the next focusable element should be the hamburger button (x).</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Use aria-label to communicate to the user the functionality of the button.
          <ul>
            <li>
              For example: &quot;Open the menu&quot; or &quot;Close the menu&quot;.
            </li>
            <li>
              Alternatively, hidden text can be used.
            </li>
          </ul>
        </li>
        <li>
          Use <code>aria-expanded</code> to convey the button state to screen readers.
        </li>
        <li>
          To help screen readers associate the button to its content, use <code>aria-controls</code> to tie it to the menu.
          Additionally, you can place the menu immediately after the <Link to={pageUrls.button}>button</Link>. This way the content
          will naturally flow.
        </li>
        <li>
          Use <code>aria-describedby</code> on the menu to connect it with the <Link to={pageUrls.button}>button</Link>.
        </li>
        <li>
          Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
          If you choose to use ARIA for the button make sure you follow correct ARIA rules.
        </li>
      </ul>
    </div>
  );
}

HamburgerMenuDocumentation.propTypes = propTypes;
HamburgerMenuDocumentation.defaultProps = defaultProps;

export default HamburgerMenuDocumentation;
