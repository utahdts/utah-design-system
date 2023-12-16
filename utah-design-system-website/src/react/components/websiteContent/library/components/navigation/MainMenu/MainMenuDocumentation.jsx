/* eslint-disable max-len */
import { Link, NavLink } from 'react-router-dom';
import menusDropdownScreenshot from '../../../../../../../static/images/mockups/MenusDropdown.jpg';
import { LightBox } from '../../../../../lightbox/LightBox';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { MainMenuSettingsAndCode } from './MainMenuSettingsAndCode';

export function MainMenuDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Main Menu</h1>
      <p className="lead-in">
        The Main Menu and Search Component is the primary navigation tool for the entire site. It
        is comprised of two sections, the Main Menu and Search tools. To add increased trust, the
        Main Menu and Search tools will have a distinct look and feel that is similar across all
        agency sites.
      </p>

      <hr />

      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Main Menu"
        renderedExample={<LightBox image={menusDropdownScreenshot} alt="Main Menu Examples" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>Horizontal menu that serves as the main navigation for the site.</li>
            <li>Typically list items in the menu should have no more than 2 words.</li>
            <li>There are 3 types of menu items: Links, Custom Function, or a List of Menu Items (vertical menu). See below guidance for when to use each type and when not to use.</li>
            <li>Sub-menus are Vertical menus displayed within a Popup (e.g. <code>Popup menu</code>, <code>Flyout</code> or a <code>Mega menu</code>). They are indicated by a down arrow to the right of the topic.</li>
            <li>Has a &quot;chiclet&quot;, a thin line at the top of the active menu item.</li>
            <li>Active list items will be bold, and the text color should match the primary color.</li>
          </ul>
        )}
      />
      <p>View more information on <Link to={pageUrls.popups}>Popups</Link>, or <Link to={pageUrls.verticalMenu}>Vertical menus</Link>.</p>

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Main Menu</strong>
          <ul>
            <li><strong>Always use</strong>. The Main Menu and Search bar is used in conjunction with the Utah Header to instill a sense of trust that this is a State of Utah site.</li>
            <li><strong>Main menu items can be links</strong>. Use this when you need to send the user to a specific url.</li>
            <li><strong>Open up a list of menu items</strong>. Main menu items can display a list of sub menus in either a Popup menu or a Mega Menu.</li>
            <li><strong>Menu items can be a custom function</strong>. If you would like the menu item to trigger a function.</li>
            <li><strong>Sub menu options</strong>. Sub menu is a Vertical menu that can be displayed in Popups (e.g. <code>Popup menu</code>, <code>Flyout</code> or a <code>Mega menu</code>).</li>
          </ul>
        </li>
      </ul>
      <p>View more information on <Link to={pageUrls.popups}>Popups</Link>, <Link to={pageUrls.verticalMenu}>Vertical Menus</Link> or <Link to={pageUrls.links}>Links</Link> regarding internal versus external links.</p>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Avoid menus that are more than 3 levels deep.</strong> Menus that are more than 3 levels deep are a challenge to navigate for those with motor skill challenges. It can even be frustrating to those without motor skill challenges.</li>
        <li><strong>Menu items that have a double role</strong>. Some WordPress menus have a mega menu where their menu items can be both a link and have a list of children menu items. This way the menu item can be triggered for navigation or can expand to its children items. Unfortunately, these combo menu items, when viewing in a smaller mobile view, no longer are triggerable so the user loses the ability to navigate to that menu item because triggering that menu item will expand the children menu items.
          <br />Because of this limitation of mobile, it was decided to only ever allow one menu type for a menu item. It is suggested, in the case where you do want a combo menu item, that the link be placed, instead of on the menu item, in the sub menu items as the first &quot;summary/overview&quot; link.
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Always use the Main Menu in conjunction with the Utah Header</strong>. The Utah Header and the Main Menu and Search bar will be used together across all state websites and applications.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast" className="mt-spacing">Contrast</h4>
      <ul>
        <li>Maintain a minimum <code>4.5:1 </code>contrast ratio for all interactions (e.g. hover, focus).</li>
      </ul>
      <h4 id="section-keyboard-interactivity" className="mt-spacing">Keyboard Interactivity</h4>
      <ul>
        <li>Users must be able to to navigate using the <code>tab</code> key.</li>
        <li>Users must be able to select the navigation item using the <code>Enter/Return</code> keys.</li>
      </ul>
      <h4 id="section-screen-readers" className="mt-spacing">Screen Readers</h4>
      <ul>
        <li>The main menu is a landmark role used for accessibility. It is recommended that you wrap the main menu in a <code>&lt;nav&gt;</code> tag, or as a fallback use <code>role=&quot;navigation&quot;</code>.</li>
        <li>To ensure a good user experience when navigating the site, follow the accessibility guidance for <Link to={pageUrls.popups}>Popup menus and Flyout Menus</Link>.</li>
      </ul>

      <h2 id="header-configuration-settings" className="my-spacing">Utah Header Configuration Settings</h2>
      <p>The following settings are used to configure the main menu with the <NavLink to={pageUrls.utahHeader}>Utah Header</NavLink>.</p>
      <MainMenuSettingsAndCode />
    </div>
  );
}
