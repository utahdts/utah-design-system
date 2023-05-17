/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../routing/pageUrls';
import StaticExample from '../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function BreadcrumbDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Breadcrumbs</h1>
      <p className="lead-in">
        Breadcrumbs are a type of secondary navigation element that can be particularly useful for helping users understand where they are within
        a website or application, and how to get back to previous pages or sections.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Default"
        renderedExample="Example coming soon!"
        quickTips={(
          <ul>
            <li>
              Breadcrumbs are an array of navigational links and text displayed horizontally that inform the user where they are
              located on the site and the parent pages leading up to the current page.
            </li>
            <li>
              This element is located in the main content section of the page in the upper left hand corner above the main content.
            </li>
            <li>
              Breadcrumbs are separated by a chevron or arrow icon.
            </li>
            <li>
              The first link should always be the root page, to which the user may return.
            </li>
            <li>
              The current page that the user is on should be plain text and not a <Link to={pageUrls.links}>link</Link>.
            </li>
            <li>
              When hovered over, the background of the breadcrumb should visually indicate with which element the user is interacting.
            </li>
          </ul>
        )}
      />

      <StaticExample
        title="Condensed"
        renderedExample="Example coming soon!"
        quickTips={(
          <ul>
            <li>
              When the array of links exceeds a set width, the breadcrumbs should then be condensed by adding
              an <Link to={pageUrls.iconButton}>icon button</Link> in between the main page and the current page the user is viewing.
            </li>
            <li>
              When the user clicks on the <Link to={pageUrls.iconButton}>icon button</Link>, the expanded list of <Link to={pageUrls.links}>links</Link> should
              display, giving the user the opportunity to click on one of them.
            </li>
            <li>
              The <Link to={pageUrls.iconButton}>icon button</Link> indicating that there are more options, should be represented using the ellipsis icon.
            </li>
          </ul>
        )}
      />

      <StaticExample
        title="Condensed with popup menu"
        renderedExample="Example coming soon!"
        quickTips={(
          <ul>
            <li>
              When the array of links exceeds a set width, the breadcrumbs should then be condensed by adding an <Link to={pageUrls.iconButton}>icon button</Link> in
              between the main page and the current page the user is viewing.
            </li>
            <li>
              When the user clicks on the <Link to={pageUrls.iconButton}>icon button</Link>, the full list of links should display in
              a popup menu, giving the user the opportunity to click on one of them.
            </li>
            <li>
              The <Link to={pageUrls.iconButton}>icon button</Link> indicating that there are more options should be represented using the ellipsis icon.
            </li>
            <li>
              Displaying the popup menu is generally a better experience for mobile users as the number of options is then listed in
              a <Link to={pageUrls.verticalMenu}>vertical menu</Link> and will fit better on the mobile screen.
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Site complexity.</strong> Breadcrumbs help orient the user to their current location on a site and know how the site is structured.
        </li>
        <li>
          <strong>Awareness of location.</strong> If a user is likely to land on an interior page via a search or an outside link,
          breadcrumbs will assist them in understanding where they are on the site. It will also allow them to backtrack or jump to alternate pages.
        </li>
        <li>
          <strong>Responsive designs.</strong> Use the &quot;condensed&quot; or &quot;condensed with popup menu&quot; for responsive designs.
          However, consider the maximum width of the expanded breadcrumbs when implementing.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Primary navigation.</strong> Do not use breadcrumbs for primary navigation on a website. This component
          should only be used as a supplemental or secondary navigational element.
        </li>
        <li>
          <strong>Side navigation.</strong> Consider omitting breadcrumbs if there is already <Link to={pageUrls.sidePanelNavigation}>side navigation</Link> available
          to the user.
        </li>
        <li>
          <strong>Flat site hierarchy.</strong> If the structure of the website is only 1 or 2 levels deep, consider omitting the breadcrumb component.
        </li>
        <li>
          <strong>Pages with overarching content.</strong> Typically, pages, like the home page or those that serve as landing pages for a
          group of related items, do not need breadcrumbs.
        </li>
        <li>
          <strong>Process steps.</strong> Try using a <Link to={pageUrls.processList}>process list</Link> or
          a <Link to={pageUrls.stepIndicator}>step indicator</Link> component, to assist the user with linear processes or step completion.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Consistency.</strong> Ensure that breadcrumbs are used consistently across all sub pages and sub sections of the site to
          avoid confusing users with inconsistent navigation.
        </li>
        <li>
          <strong>Breadcrumb placement.</strong> Breadcrumbs should be located in a prominent location. Ideally at the top left corner
          of the main content section of the page to guarantee they are easy to find.
        </li>
        <li>
          <strong>Clear, concise text.</strong> Each link and/or text element should reference the names of the pages.
        </li>
        <li>
          <strong>Links to parent pages.</strong> Each breadcrumb link, except the current page, should have a direct link to the
          corresponding parent page or section for easy navigation.
        </li>
        <li>
          <strong>Interactive breadcrumbs.</strong> The breadcrumb should display a gray background when the user hovers over the <Link to={pageUrls.links}>link</Link>.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Maintain a minimum <code>4.5:1</code> contrast ratio for all interactions (hover, focus) for all links.</li>
        <li>Focused links should show a border that maintains a <code>3:1</code> contrast ratio.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>The <code>tab</code> key should take the user through the breadcrumb trail.</li>
        <li>The <code>enter</code> or <code>return</code> keys should take the user to the corresponding page.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          The breadcrumbs should be wrapped in a <code>nav</code> element, which is a landmark role that will provide extra context for the user.
        </li>
        <li>
          An <code>ol</code> element should be used to assist in creating the hierarchical structure and as the container for the breadcrumb trail.
        </li>
        <li>
          Each <code>li</code> element should be used for the individual breadcrumbs, and if the breadcrumb is a <Link to={pageUrls.links}>link</Link>,
          please follow the accessibility guidelines for <Link to={pageUrls.links}>links</Link>.
        </li>
        <li>
          Breadcrumb separators should be hidden from screen readers, by using the aria <code>role=&quot;presentation&quot;</code> or a<code>ria-hidden=&quot;true&quot;</code>.
        </li>
        <li>
          The last breadcrumb should be the current page the user is on and should have <code>aria-current=&quot;page&quot;</code> added,
          which is then announced to the user.
        </li>
      </ul>
    </div>
  );
}

BreadcrumbDocumentation.propTypes = propTypes;
BreadcrumbDocumentation.defaultProps = defaultProps;

export default BreadcrumbDocumentation;
