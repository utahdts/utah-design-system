/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { ExternalLink } from '@utahdts/utah-design-system';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext/useAppContext';
import { pageUrls } from '../../routing/pageUrls';

export function ColorGuidelinesDocumentation() {
  const { appState: { isColorPickerShown }, setAppState } = useAppContext();

  /** @param {import('react').MouseEvent<HTMLAnchorElement> } e */
  function toggleColorPickerPopup(e) {
    e.preventDefault();
    e.stopPropagation();
    setAppState((draftAppState) => { draftAppState.isColorPickerShown = !isColorPickerShown; });
  }

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Color Guidelines Overview</h1>
      <p className="lead-in">
        The purpose of using color on websites is to create an engaging, visually pleasing, and functional user experience that aligns with
        your brand and effectively communicates your message. When used consistently, it has the ability to capture attention and signify
        importance. However, the interpretation of colors varies from one person to the next. A color that evokes happiness and excitement in
        one person can be overwhelming or alarming to another.
      </p>
      <p className="mb-auto">
        The Utah Design System provides a base palette of colors that has already been tested for accessibility and spans a wide color spectrum.
        The base text color (#474747) ensures that your main body text meets accessibility requirements.
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        A color picker is provided at the top of every page under the gear icon <a href="#" onClick={toggleColorPickerPopup}><span className="utds-icon-before-gear" aria-hidden="true" /><span className="visually-hidden">open color tool</span></a>
        that allows you to choose primary, secondary, and accent colors. It allows you to preview these colors on this site, as well as with components, patterns, and the <NavLink to={pageUrls.demoPage}>demo page</NavLink>.
      </p>

      <hr />
      <h2 id="section-areas-to-consider" className="mt-spacing mb-spacing">Areas to Consider</h2>
      <h3 id="section-limited-vision">Accessibility</h3>
      <p>
        Ensure your color choices meet accessibility guidelines, particularly for users with color blindness or visual impairments. Use tools
        like color contrast checkers to verify that your text and background colors have enough contrast. See more
        detailed information on <Link to={`${pageUrls.accessibility}#section-limited-vision-contrast`}>contrast</Link>.
        Check your custom colors with the <a href="#" onClick={toggleColorPickerPopup}>Utah Design System color tool</a>.
        Or use <ExternalLink href="https://webaim.org/resources/contrastchecker/">WebAIM&apos;s contrast tool</ExternalLink>.
      </p>

      <h3 id="section-brand-identity">Brand Identity</h3>
      <p>
        Color is a powerful tool for brand recognition and identity. Consistent use of colors that align with your brand&apos;s visual identity helps
        reinforce your brand image and create a memorable user experience.
      </p>

      <h3 id="section-color-psychology">Color Psychology</h3>
      <p>
        Color psychology refers to the study of how colors can impact human behavior, emotions, and perceptions. It explores the psychological and emotional
        responses that people have towards different colors and how those responses can influence their thoughts and actions. By choosing colors carefully, you
        can create a desired emotional response in users and enhance their overall experience on your website.
      </p>

      <h2 id="section-direction-guidance" className="mb-spacing">Direction & Guidance</h2>
      <ul>
        <li>
          <strong>Begin with black and white.</strong> Using the fundamental colors of black and white provides a solid foundation for organizing a website&#39;s elements.. Thus
          allowing the developer/designer to focus on the visual hierarchy and not rely on color to convey a particular meaning.
        </li>
        <li>
          <strong>Avoid using only color to convey meaning.</strong> Do not rely on color alone to relay a specific intent. Instead, include another signal via
          a <Link to={pageUrls.tooltips}>tooltip</Link>, text, or <Link to={pageUrls.icons}>icon</Link> to convey the intended functionality. Understand that simply using color may inadvertently exclude certain
          users, both subtly and overtly. See the <Link to={pageUrls.accessibility}>general accessibility guidelines</Link>.
        </li>
        <li>
          <strong>Utilize mood boards.</strong> Mood boards can assist in defining the overall ambience and feel of the site. Collect images
          that evoke the desired tone to find the common underlying colors.
        </li>
        <li>
          <strong>Limit the number of colors.</strong> Too many colors can create a cluttered and distracting visual experience. It is beneficial to maintain
          focus and accentuate the visual hierarchy by following the 60/30/10 rule:
          <ul>
            <li>
              <code>60%</code> is the primary color and is used on the majority of the website. Usually a neutral color is used here.
            </li>
            <li>
              <code>30%</code> is the secondary color the website uses. It calls attention to components
              like <Link to={pageUrls.images}>hero images</Link>, <Link to={pageUrls.card}>cards</Link>, or <Link to={pageUrls.banners}>banners</Link>, etc.
            </li>
            <li>
              <code>10%</code> (optional) of the site should be the accent color. This should meet contrast requirements for both the primary and secondary colors and is
              typically used for smaller components like Call to Action <Link to={pageUrls.button}>buttons</Link>, <Link to={pageUrls.links}>links</Link>, or focus states.
            </li>
          </ul>
          Simplify color usage by prioritizing functional requirements, such as status states or directions. Afterwards, employ color as a progressive enhancement
          to strengthen or harmonize the emotional aspects of the content.
        </li>
        <li>
          <strong>Use color to guide user attention.</strong> Strategic use of color can help direct users&apos; attention to important elements or calls to
          action. Consider using a bright contrasting color for <Link to={pageUrls.button}>buttons</Link>, <Link to={pageUrls.links}>links</Link>,
          or important information to make them stand out.
        </li>
        <li>
          <strong>Get feedback from visual designers.</strong> Visual designers, or those who have experience with visual design, can be a fantastic resource to help
          develop color palettes or get feedback on your existing color schemes. If you do not have access to any visual designers, feel free to reach out to the Digital Experience
          Team (DXP) at <a href="mailto:dts_ui@utah.gov">dts_ui@utah.gov</a>, or other methods on our <Link to={pageUrls.gettingStarted}>Getting Started</Link> page. We are happy
          to assist in any way we can.
        </li>
      </ul>

      <h2 id="section-color-palette" className="mt-spacing mb-spacing">Color Palette</h2>
      <p>Here is the palette used for the Utah Design System website. It uses a primary color, a secondary color, and an accent color.</p>

      <h3 id="section-primary-colors">Primary</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example">
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--primary-color" />
          --primary-color
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--primary-color-dark" />
          --primary-color--dark
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--primary-color-light" />
          --primary-color--light
        </div>
      </div>

      <h3 id="section-secondary-colors">Secondary</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example">
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--secondary-color" />
          --secondary-color
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--secondary-color-dark" />
          --secondary-color--dark
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--secondary-color-light" />
          --secondary-color--light
        </div>
      </div>

      <h3 id="section-accent-colors">Accent</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example">
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--accent-color" />
          --accent-color
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--accent-color-dark" />
          --accent-color--dark
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--accent-color-light" />
          --accent-color--light
        </div>
      </div>

      <h2 id="section-system-palette" className="mt-spacing mb-spacing">System Palette</h2>
      <p>The system palette helps you design forms and consistent user interfaces. We recommend that this color scheme remains the same to give users a homogeneous experience.</p>
      <h3 id="section-form-colors">Forms</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example">
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--form-ele-color" />
          --form-ele-color
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--form-ele-color-light" />
          --form-ele-color-light
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--form-ele-disabled-color" />
          --form-ele-disabled-color
        </div>
      </div>

      <h3 id="section-status-colors">Status</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example">
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--danger-color" />
          --danger-color
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--warning-color" />
          --warning-color
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--info-color" />
          --info-color
        </div>
        <div className="flex flex-col items-center">
          <div className="color-example_item color-example_item--success-color" />
          --success-color
        </div>
      </div>

      <h2 id="section-color-overrides" className="mt-spacing mb-spacing">How to override the colors in CSS</h2>
      <p>
        It is anticipated that the colors of the design system will be overridden to match the color palette of your Agency brand or
        to meet your specific website or application requirements.
      </p>
      <div className="flex justify-center mb-spacing-xl">
        <Link
          to={`${pageUrls.gettingStartedDeveloper}#h3-css-color-overrides`}
          className="button button--primary-color button--solid"
        >
          How to Override CSS Variables{' '}
          <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
        </Link>
      </div>

    </div>
  );
}
