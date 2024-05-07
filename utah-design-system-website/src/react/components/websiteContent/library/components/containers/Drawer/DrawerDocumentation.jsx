/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { DRAWER_PLACEMENT } from '@utahdts/utah-design-system';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { SimpleDrawer } from './examples/SimpleDrawer';

export function DrawerDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Drawer</h1>
      <p className="lead-in">
        A drawer is a side panel that overlays the interface.
      </p>

      <hr />

      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Drawer"
        renderedExample={(
          <div className="flex flex-col gap">
            <SimpleDrawer title="Open Right Drawer" position={DRAWER_PLACEMENT.RIGHT} />
            <SimpleDrawer title="Open Left Drawer" position={DRAWER_PLACEMENT.LEFT} />
          </div>
        )}
        quickTips={(
          <ul>
            <li>Typically located on the edge of the screen.</li>
            <li>Has a title to give the user some context.</li>
            <li>Has a close button.</li>
            <li>In this example, a dark overlay is used.</li>
          </ul>
        )}
      />

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Additional actions.</strong> Drawers can be used to place secondary actions such as filters or settings for a page. Typically, those drawers overlay the content below the header.</li>
        <li><strong>Global functionality.</strong> A drawer can be used to allow the user to access some site-wide settings and/or features. Typically, those drawers overlay the entire page.</li>
      </ul>

      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Main navigation.</strong> Drawers should not include a duplicate of the <Link to={pageUrls.mainMenu}>main menu</Link>.</li>
        <li><strong>Confirmation.</strong> Avoid using side panels to confirm a user&apos;s action; instead, use a <Link to={pageUrls.modals}>modal</Link> or a <Link to={pageUrls.confirmationButton}>confirmation button</Link>.</li>
        <li><strong>Keep it simple.</strong> Avoid putting complex content, like <Link to={pageUrls.accordion}>accordions</Link> or <Link to={pageUrls.carousel}>carousels</Link>, in a drawer.</li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Position.</strong> Typically, drawers are positioned on the edge of the screen.</li>
        <li><strong>User&apos;s action.</strong> A drawer should appear after the user has performed some action.</li>
        <li><strong>Title.</strong> Preferably, include a title at the top of a drawer. This gives the user some information about its content and sets expectations.</li>
        <li>
          <strong>Close a drawer.</strong> Generally, every drawer should include some way for the user to close it. It can be found in the form of a back arrow,
          an &quot;X&quot; <Link to={pageUrls.iconButton}>icon</Link> or a &quot;Close&quot; <Link to={pageUrls.button}>button</Link>.
        </li>
        <li><strong>Elevation.</strong> A drawer lays on top of the current interface. This should be shown to the user by the use of shadows and/or a dark overlay.</li>
        <li><strong>Context.</strong> A side panel can include a wide variety of elements. However, it should typically be tied to the main content of the current page. An exemption might be for global settings.</li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in the drawer must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>For all other elements, please refer to their respective documentation.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>Upon opening, focus should be put on the first element within the drawer.</li>
        <li>Using the <code>tab</code> key, the user should only navigate through elements within the drawer.</li>
        <li>If the drawer includes a close button, pressing the <code>esc</code> key should close the drawer. The close button should be the last focusable element.</li>
        <li>When closing the drawer, the focus should be put on the element that triggered it.</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>A drawer should include some aria attributes: the container should have <code>aria-labelledby</code> referring to its title.</li>
        <li>If the drawer includes a close button, it should be placed at the end of the <code>html</code> code. That way the screen reader will appropriately read it after navigating through the drawer&apos;s content.</li>
        <li>If the close button is only represented by an <Link to={pageUrls.iconButton}>icon</Link>, make sure it is accessible to screen readers by the use of the <code>aria-label</code> attribute. For example: &quot;Close drawer.&quot;</li>
        <li>For all elements, please refer to their respective documentation.</li>
      </ul>
    </div>
  );
}
