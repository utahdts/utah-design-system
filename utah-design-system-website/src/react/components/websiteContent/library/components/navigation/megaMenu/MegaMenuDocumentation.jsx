/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';
import LightBox from '../../../../../lightbox/LightBox';
import megaMenuScreenshot from '../../../../../../../static/images/screenshots/components/megaMenu/MegaMenu.png';

const propTypes = {};
const defaultProps = {};

function MegaMenuDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Mega Menu</h1>
      <p className="lead-in">
        A mega menu is an alternative way to display the main navigation for children menu items on a site. It can be used as a way to group children and grandchildren menu items into a single panel. See <Link to={pageUrls.mainMenu}>Main Menu</Link> for more information.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Mega Menu"
        renderedExample={<LightBox image={megaMenuScreenshot} alt="Opened mega menu" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>Links are arranged evenly by columns.</li>
            <li>Each column can include a heading, which can be interactive.</li>
            <li>Users can see all links at a glance.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Description & Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Site structure.</strong> If your site is built on a relatively flat structure with a significant amount of pages, a mega menu can make navigation easier.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Not enough links.</strong> Avoid using a mega menu if the menu has a modest amount of links, consider a normal Popup menu or Flyout menu instead.
        </li>
        <li>
          <strong>Hierarchy</strong> If your menu is several levels deep, consider using a Popup menu, Flyout menu, or restructuring the site instead.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Main Menu.</strong> A mega menu is an alternative way to display a menu and therefore should still be used in conjunction with the Utah Header.
        </li>
        <li>
          See <Link to={pageUrls.mainMenu}>Main Menu</Link> for more information.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text should have a <code>4.5:1</code> contrast ratio.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Users should be able to navigate the menu with the <code>Tab</code> key.</li>
        <li>Users should be able to select the navigation item using the <code>Enter/Return</code> keys.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>To ensure a good user experience when navigating the site, follow the accessibility guidance for <Link to={`${pageUrls.popups}#popup-menu-with-flyout-popups`}>Popup menus and Flyout Menus</Link>.</li>
      </ul>
    </div>
  );
}

MegaMenuDocumentation.propTypes = propTypes;
MegaMenuDocumentation.defaultProps = defaultProps;

export default MegaMenuDocumentation;
