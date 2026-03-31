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
        The base text color (#474747) ensures that your main body text meets accessibility requirements.{' '}
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
        Or use the <ExternalLink href="https://chromewebstore.google.com/detail/color-contrast-checker/gbfgefkhkofclanlcgnhlbmfgjjomock?hl=en">Pivotal Color Contrast Checker</ExternalLink> (Chrome plugin).
      </p>

      <h3 id="section-brand-identity">Brand Identity</h3>
      <p>
        Color is a powerful tool for brand recognition and identity. Consistent use of colors that align with the state brand&apos;s visual identity helps
        reinforce the image of the state of Utah and create a consistent user experience.
      </p>
      <p>
        The State of Utah's primary colors are unified with the flag, augmented with additional complimentary shades for broader use cases.
      </p>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-primary-color-blue-dark: #071D49;<br />
          --utah-brand-primary-color-blue-medium: #093692;<br />
          --utah-brand-primary-color-blue-light: #81D0F0;<br />
          --utah-brand-primary-color-gold-light: #FFB81D;<br />
          --utah-brand-primary-color-gold-medium: #FF8C03;<br />
          --utah-brand-primary-color-red: #AA0200;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-primary-color-blue-dark)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-primary-color-blue-medium)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-primary-color-blue-light)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-primary-color-gold-light)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-primary-color-gold-medium)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-primary-color-red)'}}></div>
        </div>
      </div>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-secondary-color-clay-00: #E9DCC8;<br />
          --utah-brand-secondary-color-clay-01: #C0B1A1;<br />
          --utah-brand-secondary-color-clay-02: #9C837E;<br />
          --utah-brand-secondary-color-clay-03: #78555A;<br />
          --utah-brand-secondary-color-clay-04: #52393B;<br />
          --utah-brand-secondary-color-clay-05: #2C1E1B;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-clay-00)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-clay-01)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-clay-02)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-clay-03)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-clay-04)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-clay-05)'}}></div>
        </div>
      </div>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-secondary-color-green-00: #E9DCC8;<br />
          --utah-brand-secondary-color-green-01: #C0B1A1;<br />
          --utah-brand-secondary-color-green-02: #9C837E;<br />
          --utah-brand-secondary-color-green-03: #78555A;<br />
          --utah-brand-secondary-color-green-04: #52393B;<br />
          --utah-brand-secondary-color-green-05: #2C1E1B;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-green-00)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-green-01)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-green-02)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-green-03)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-green-04)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-green-05)'}}></div>
        </div>
      </div>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-secondary-color-teal-00: #E9DCC8;<br />
          --utah-brand-secondary-color-teal-01: #C0B1A1;<br />
          --utah-brand-secondary-color-teal-02: #9C837E;<br />
          --utah-brand-secondary-color-teal-03: #78555A;<br />
          --utah-brand-secondary-color-teal-04: #52393B;<br />
          --utah-brand-secondary-color-teal-05: #2C1E1B;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-teal-00)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-teal-01)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-teal-02)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-teal-03)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-teal-04)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-teal-05)'}}></div>
        </div>
      </div>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-secondary-color-blue-00: #E9DCC8;<br />
          --utah-brand-secondary-color-blue-01: #C0B1A1;<br />
          --utah-brand-secondary-color-blue-02: #9C837E;<br />
          --utah-brand-secondary-color-blue-03: #78555A;<br />
          --utah-brand-secondary-color-blue-04: #52393B;<br />
          --utah-brand-secondary-color-blue-05: #2C1E1B;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-blue-00)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-blue-01)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-blue-02)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-blue-03)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-blue-04)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-blue-05)'}}></div>
        </div>
      </div>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-secondary-color-violet-00: #E9DCC8;<br />
          --utah-brand-secondary-color-violet-01: #C0B1A1;<br />
          --utah-brand-secondary-color-violet-02: #9C837E;<br />
          --utah-brand-secondary-color-violet-03: #78555A;<br />
          --utah-brand-secondary-color-violet-04: #52393B;<br />
          --utah-brand-secondary-color-violet-05: #2C1E1B;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-violet-00)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-violet-01)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-violet-02)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-violet-03)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-violet-04)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-violet-05)'}}></div>
        </div>
      </div>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-secondary-color-raspberry-00: #E9DCC8;<br />
          --utah-brand-secondary-color-raspberry-01: #C0B1A1;<br />
          --utah-brand-secondary-color-raspberry-02: #9C837E;<br />
          --utah-brand-secondary-color-raspberry-03: #78555A;<br />
          --utah-brand-secondary-color-raspberry-04: #52393B;<br />
          --utah-brand-secondary-color-raspberry-05: #2C1E1B;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-raspberry-00)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-raspberry-01)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-raspberry-02)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-raspberry-03)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-raspberry-04)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-raspberry-05)'}}></div>
        </div>
      </div>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-secondary-color-red-00: #E9DCC8;<br />
          --utah-brand-secondary-color-red-01: #C0B1A1;<br />
          --utah-brand-secondary-color-red-02: #9C837E;<br />
          --utah-brand-secondary-color-red-03: #78555A;<br />
          --utah-brand-secondary-color-red-04: #52393B;<br />
          --utah-brand-secondary-color-red-05: #2C1E1B;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-red-00)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-red-01)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-red-02)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-red-03)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-red-04)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-red-05)'}}></div>
        </div>
      </div>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-secondary-color-orange-00: #E9DCC8;<br />
          --utah-brand-secondary-color-orange-01: #C0B1A1;<br />
          --utah-brand-secondary-color-orange-02: #9C837E;<br />
          --utah-brand-secondary-color-orange-03: #78555A;<br />
          --utah-brand-secondary-color-orange-04: #52393B;<br />
          --utah-brand-secondary-color-orange-05: #2C1E1B;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-orange-00)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-orange-01)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-orange-02)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-orange-03)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-orange-04)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-orange-05)'}}></div>
        </div>
      </div>

      <div className="flex justify-between gap">
        <pre
          className="gray-block pre-code--overflow"
          // @ts-expect-error needs to scroll with the keyboard if it overflows, shame on you ts
          tabindex="0"
        >
          <div className="pre-code__overflow-content color-swatch-names">
          --utah-brand-secondary-color-yellow-00: #E9DCC8;<br />
          --utah-brand-secondary-color-yellow-01: #C0B1A1;<br />
          --utah-brand-secondary-color-yellow-02: #9C837E;<br />
          --utah-brand-secondary-color-yellow-03: #78555A;<br />
          --utah-brand-secondary-color-yellow-04: #52393B;<br />
          --utah-brand-secondary-color-yellow-05: #2C1E1B;
          </div>
        </pre>
        <div className="flex flex-col py-spacing-s" style={{gap: '3px'}}>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-yellow-00)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-yellow-01)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-yellow-02)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-yellow-03)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-yellow-04)'}}></div>
          <div className="color-swatch" style={{backgroundColor: 'var(--utah-brand-secondary-color-yellow-05)'}}></div>
        </div>
      </div>


      <h3 id="section-color-psychology">Color Psychology</h3>
      <p>
        Color psychology refers to the study of how colors can impact human behavior, emotions, and perceptions. It explores the psychological and emotional
        responses that people have towards different colors and how those responses can influence their thoughts and actions. By choosing colors carefully, you
        can create a desired emotional response in users and enhance their overall experience on your website.
      </p>

      <h2 id="section-direction-guidance" className="mb-spacing">Direction & Guidance</h2>
      <ul>
        <li>
          <strong>Begin with black and white.</strong> Using black and white provides a solid foundation for organizing a website&#39;s interface. Thus
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
              typically used for smaller components like call to action <Link to={pageUrls.button}>buttons</Link>, <Link to={pageUrls.links}>links</Link>, or focus states.
            </li>
          </ul>
          Simplify color usage by prioritizing functional requirements, such as statuses or directions. Afterwards, use color as a progressive enhancement
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
          Team (DXP) at <a href="mailto:dxp@utah.gov">dxp@utah.gov</a>, or other methods on our <Link to={pageUrls.gettingStarted}>Getting Started</Link> page. <br />
          We are happy to assist in any way we can.
        </li>
      </ul>

      <h2 id="section-color-palette" className="mt-spacing mb-spacing">Color Palette</h2>
      <p>Here is the palette used for the Utah Design System website. It uses a primary color, a secondary color, and an accent color.</p>

      <h3 id="section-primary-colors">Primary</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example col-3 gap">
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--primary-color" />
          <code>--primary-color</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--primary-color-dark" />
          <code>--primary-color--dark</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--primary-color-light" />
          <code>--primary-color--light</code>
        </div>
      </div>

      <h3 id="section-secondary-colors">Secondary</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example col-3 gap">
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--secondary-color" />
          <code>--secondary-color</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--secondary-color-dark" />
          <code>--secondary-color--dark</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--secondary-color-light" />
          <code>--secondary-color--light</code>
        </div>
      </div>

      <h3 id="section-accent-colors">Accent</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example col-3 gap">
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--accent-color" />
          <code>--accent-color</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--accent-color-dark" />
          <code>--accent-color--dark</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--accent-color-light" />
          <code>--accent-color--light</code>
        </div>
      </div>

      <h2 id="section-system-palette" className="mt-spacing mb-spacing">System Palette</h2>
      <p>The system palette helps you design forms and consistent user interfaces. We recommend that this color scheme remains the same to give users a homogeneous experience.</p>
      <h3 id="section-form-colors">Forms</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example col-3 gap">
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--form-ele-color" />
          <code>--form-ele-color</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--form-ele-color-light" />
          <code>--form-ele-color-light</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--form-ele-disabled-color" />
          <code>--form-ele-disabled-color</code>
        </div>
      </div>

      <h3 id="section-status-colors">Status</h3>
      <div className="flex flex-1 justify-around p-spacing mb-spacing color-example">
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--danger-color" />
          <code>--danger-color</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--warning-color" />
          <code>--warning-color</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--info-color" />
          <code>--info-color</code>
        </div>
        <div className="flex flex-col items-center text-center gap-s">
          <div className="color-example_item color-example_item--success-color" />
          <code>--success-color</code>
        </div>
      </div>

      <h2 id="section-color-overrides" className="mt-spacing mb-spacing">How to override the colors in CSS</h2>
      <p>
        It is anticipated that the colors of the design system will be overridden to match the color palette of your agency brand or
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
