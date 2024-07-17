/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import sidePanelMockup from '../../../../../../../static/images/mockups/SidePanelNav.jpg';
import sidePanelMobile from '../../../../../../../static/images/mockups/SidePanelNavMobileClosed.jpg';
import sidePanelMobileOpen from '../../../../../../../static/images/mockups/SidePanelNavMobileOpen.jpg';
import { LightBox } from '../../../../../lightbox/LightBox';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { Disclaimer } from '../../../../Disclaimer';

export function SidePanelDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Side Panel</h1>
      <p className="lead-in">
        A side panel is a place to put secondary content on a page. It can include things such as <Link to={pageUrls.verticalMenu}>menus</Link>, <Link to={pageUrls.links}>links</Link> or <Link to={pageUrls.card}>cards</Link>.
      </p>
      <Disclaimer />
      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Side Panel"
        renderedExample={(
          <>
            <LightBox image={sidePanelMockup} alt="Side Panel" className="flex-4up-gap" />
            <LightBox image={sidePanelMobile} alt="Side Panel Mobile" className="flex-4up-gap" />
            <LightBox image={sidePanelMobileOpen} alt="Side Panel Mobile" className="flex-4up-gap" />
          </>
        )}
        quickTips={(
          <ol>
            <li>You can have a side panel on the left or right or both.</li>
            <li>Thought will need to be given how the side panel appears on a mobile device.</li>
          </ol>
        )}
      />
      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Navigation.</strong> Use a side panel to display a sub-level navigation within a page. For example a <Link to={pageUrls.verticalMenu}>vertical menu</Link>.</li>
        <li><strong>Secondary content.</strong> A side panel can be used to promote some information across a website. This can include things like <Link to={pageUrls.links}>links</Link>, <Link to={pageUrls.card}>cards</Link>, images, or text. Typically, a right side panel is used in that case.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Main navigation.</strong> If used for navigation, side panels should not include a duplicate of the main menu.</li>
        <li><strong>Keep it simple.</strong> Avoid putting complex content in a side panel, like <Link to={pageUrls.table}>tables</Link>, <Link to={pageUrls.accordion}>accordions</Link> or <Link to={pageUrls.carousel}>carousels</Link>.</li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Position.</strong> Side panels can be positioned on the left and/or right side of the main content. Typically, the panel containing the most important
          components should be on the left side.
        </li>
        <li>
          <strong>Consistency.</strong> If multiple side panels are used across pages within a site, make sure they all look and behave the same. This gives the user a
          sense of familiarity and coherence.
        </li>
        <li>
          <strong>Sticky content.</strong> We recommend the use of <code>position:sticky</code> when a navigational element is used. This will improve the user experience, especially on large pages.
        </li>
        <li>
          <strong>Vertical dividers.</strong> Optionally you may consider use <Link to={pageUrls.dividers}>vertical dividers</Link> to separate the side panel from the main content.
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in a side panel must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>For all other elements, please refer to their respective documentation.</li>
      </ul>
      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>Elements on a left panel should be focusable <strong>before</strong> the main content.</li>
        <li>Elements on a right panel should be focusable <strong>after</strong> the main content.</li>
      </ul>
      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>For all elements, please refer to their respective documentation.</li>
      </ul>
    </div>
  );
}
