/* eslint-disable max-len */
import { ExternalLink } from '@utahdts/utah-design-system';
import { NavLink } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';
import { WcagRulesBlock } from './WcagRulesBlock';

export function AccessibilityForDesigners() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Accessibility for Designers</h1>
      <p className="lead-in">
        Below are some accessibility tips for designers. For more in depth information, view the {' '}
        <NavLink to={pageUrls.accessibility}>accessibility overview page</NavLink> or the {' '}
        <NavLink to={pageUrls.accessibilityChecklist}>accessibility checklist</NavLink>.
      </p>

      <WcagRulesBlock />

      <h2 id="section-designers-role">The Designer’s Role in Accessibility</h2>
      <p>
        Designers play a critical role in ensuring accessibility by creating interface and web designs that accommodate people with varying degrees of
        vision, mobility, and cognitive abilities. Accessibility is about real people trying to access vital public information and state services,
        and a well-thought-out design can be the difference between inclusion and exclusion. By considering factors like color contrast, text size,
        navigation simplicity, and compatibility with assistive technologies, designers can create experiences that are usable by everyone, leading
        to more positive outcomes for all users.
      </p>
      <p>
        Designers are the tip of the spear when it comes to accessibility, leading the charge in creating inclusive digital experiences. It’s important
        to embrace the challenges of accessibility, as they present opportunities to innovate and improve the overall user experience. By prioritizing
        accessibility in design, we ensure that public information and services are available to everyone, regardless of their abilities.
      </p>
      <h3 id="section-questions">Questions</h3>
      <p>Below are some questions every design team should ask themselves as they are creating accessible digital experiences.</p>
      <ul>
        <li>
          <strong>Can users quickly understand the content flow and user interface?</strong><br />
          A well-designed interface should allow users to easily grasp how to interact with it, minimizing confusion or frustration. Clear labeling,
          consistent design patterns, and accessible features (like readable fonts and contrasting colors) all contribute to helping users quickly
          understand and use the platform effectively.
        </li>
        <li>
          <strong>Are you designing generously with color contrast and size?</strong><br />
          When designing for accessibility, using higher color contrast and larger font sizes ensures that users with visual impairments can easily
          read and interact with content. These design choices make your interface more inclusive and improve usability for a wider audience.
        </li>
        <li>
          <strong>Don&apos;t convey content or links by color alone.</strong><br />
          Conveying content or links using only color can create accessibility issues for users with visual impairments or color blindness.
          Relying solely on color can make it difficult for them to distinguish links or important information. To ensure accessibility, always
          provide additional cues, such as underlining links, using bold text, or adding icons.
        </li>
        <li>
          <strong>Are you designing with mobile-first in mind?</strong><br />
          Mobile-first design is important because more users are accessing websites and services through mobile devices than ever before.
          By prioritizing the mobile experience, designers ensure that content is accessible, functional, and user-friendly on smaller screens.
          This approach simplifies the design, focuses on essential features, and enhances performance, which can then be expanded for larger screens.
        </li>
        <li>
          <strong>Are you being consistent and following industry best practices in your designs?</strong><br />
          Consistency and adherence to industry best practices are key to effective design. By using standardized design patterns, clear navigation,
          and accessible features, you create a more intuitive and user-friendly experience.
        </li>
        <li>
          <strong>Can users navigate your design using only their keyboard?</strong><br />
          Ensuring users can navigate your design using only their keyboard is essential for accessibility. Many individuals with disabilities
          rely on keyboard navigation to interact with websites and applications. Your design should allow users to access all features,
          including forms, menus, and buttons, through clear tabbing, focus states, and logical flow, without requiring a mouse.
          This enhances usability for everyone, especially those with mobility impairments.
        </li>
        <li>
          <strong>Can the information be understood by individuals using screen readers and other assistive technologies?</strong><br />
          Your design must be compatible with screen readers and other assistive technologies. This means providing clear, structured content
          with proper heading hierarchy, descriptive alt text for images, and accessible labels for buttons and forms. As a designer you lay
          the groundwork for ensuring that all elements are properly coded and labeled so that individuals using assistive technologies
          can navigate and understand the information just as effectively as other users.
        </li>
      </ul>

      <h3 id="section-color-contrast" className="mt-spacing-l">Color Contrast</h3>
      <p>
        <strong>The required color contrast is AA or AAA for text, images of text, icons, and interactive elements.</strong><br />
        Using generous contrast means not merely meeting the bare minimum WCAG AA requirements, but striving to exceed them when possible.
        It involves creating a more inclusive and accessible design by ensuring elements are highly distinguishable, improving readability
        for users with visual impairments or in challenging viewing conditions.
      </p>
      <p>
        The examples below illustrate some of the challenges with contrast ratios for certain colors. While the examples may technically
        pass accessibility requirements they are very difficult to read. Squinting your eyes at the examples will help identify color
        combinations that will not work in practice.
      </p>
      <p>
        <NavLink to={`${pageUrls.accessibility}#section-limited-vision-contrast`}>
          Further information about color contrast can be found on the main accessibility page.
        </NavLink>
      </p>

      <h4 className="mb-spacing">
        <strong>Normal Size Text</strong><br />
        <strong>Size:</strong> 14-23px<br />
        <strong>AA Contrast Ratio:</strong> 4.5:1<br />
        <strong>AAA Contrast Ratio:</strong> 7:1
      </h4>
      <div className="a11y-contrast-box__row">

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color" style={{ color: '#2d2d2d', background: '#ff6200' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AA - 4.59:1</strong><br />
              Minimum: 4.5:1
            </div>
            <div className="a11y-contrast-box__result">
              ??
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color" style={{ color: '#0f0f0f', background: '#ff6200' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AA - 4.98:1</strong><br />
              Minimum: 4.5:1
            </div>
            <div className="a11y-contrast-box__result">
              ??
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color" style={{ color: '#000000', background: '#ff6200' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AAA - 7:1</strong><br />
              Minimum: 4.5:1
            </div>
            <div className="a11y-contrast-box__result">
              OK?
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color" style={{ color: '#ffffff', background: '#cb4e00' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AA - 4.54:1</strong><br />
              Minimum: 4.5:1
            </div>
            <div className="a11y-contrast-box__result">
              OK
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color" style={{ color: '#ffffff', background: '#ad4808' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AA - 5.66:1</strong><br />
              Minimum: 4.5:1
            </div>
            <div className="a11y-contrast-box__result">
              Better
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color" style={{ color: '#ffffff', background: '#8f4211' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AAA - 7:11:1</strong><br />
              Minimum: 4.5:1
            </div>
            <div className="a11y-contrast-box__result">
              Best
            </div>
          </div>
        </div>
      </div>

      <h4 className="mt-spacing-l mb-spacing">
        <strong>Large Size Text</strong><br />
        <strong>Size:</strong> 19px+ Bold / 24px+<br />
        <strong>AA Contrast Ratio:</strong> 3:1<br />
        <strong>AAA Contrast Ratio:</strong> 4.5:1
      </h4>
      <div className="a11y-contrast-box__row">

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color a11y-contrast-box--large-bold" style={{ color: '#191919', background: '#175ae2' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AA - 3.01:1</strong><br />
              Minimum: 3:1
            </div>
            <div className="a11y-contrast-box__result">
              ??
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color a11y-contrast-box--large-bold" style={{ color: '#000000', background: '#175ae2' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AA - 3.6:1</strong><br />
              Minimum: 3:1
            </div>
            <div className="a11y-contrast-box__result">
              ??
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color a11y-contrast-box--large-bold" style={{ color: '#000000', background: '#3871e6' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AAA - 4.67:1</strong><br />
              Minimum: 4.5:1
            </div>
            <div className="a11y-contrast-box__result">
              OK?
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color a11y-contrast-box--large-bold" style={{ color: '#ffffff', background: '#6793eb' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AA - 3.02:1</strong><br />
              Minimum: 3:1
            </div>
            <div className="a11y-contrast-box__result">
              OK
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color a11y-contrast-box--large-bold" style={{ color: '#ffffff', background: '#3a75ec' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AA - 4.25:1</strong><br />
              Minimum: 3:1
            </div>
            <div className="a11y-contrast-box__result">
              Better
            </div>
          </div>
        </div>

        <div className="a11y-contrast-box__wrapper">
          <div className="a11y-contrast-box__color a11y-contrast-box--large-bold" style={{ color: '#ffffff', background: '#175ae2' }}>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="a11y-contrast-box__info">
            <div>
              <strong>AAA - 5.84:1</strong><br />
              Minimum: 4.5:1
            </div>
            <div className="a11y-contrast-box__result">
              Best
            </div>
          </div>
        </div>
      </div>

      <h3 id="section-text" className="mt-spacing-l">Text Sizing and Fonts</h3>
      <p>
        <strong>Text size and font choice play a vital role in accessibility.</strong><br />
        Providing adequate font size is essential for accessibility, as it ensures content is readable for a wider audience,
        including individuals with visual impairments. Setting the font size to at least 16px helps make longform copy more
        legible and prevents users from needing to zoom in excessively. Smaller font sizes can strain readability and exclude
        users with low vision or those reading on smaller screens.
      </p>
      <ul>
        <li>
          <strong>14-15px</strong> - Use sparingly for unimportant text. Do not use this for longform copy.
        </li>
        <li>
          <strong>16px</strong> - This should be the default minimum size of longform copy on a website.
        </li>
        <li>
          <strong>18px</strong> - Consider using a larger font size such as 18px when on mobile to aid the readability of longform copy.
        </li>
        <li>
          <strong>Underline</strong> - Do not underline text. This is reserved for hyperlinks. Consider using <em>italic</em> or <strong>bold</strong> text to help
          it stand out.
        </li>
        <li>
          <strong>Readable Fonts</strong> - Use fonts that are readable. Avoid fonts that have thick and thin strokes, unusual features,
          and handwritten typefaces. Use fonts that are professional and convey the important work the State of Utah is trying to do.
        </li>
      </ul>
      <p className="mt-spacing">
        <NavLink to={pageUrls.typography}>
          More information about fonts and typography can be found on the typography page.
        </NavLink>
      </p>

      <h2 id="section-webaim" className="mt-spacing-l">Additional tips for designers.</h2>
      <p>
        Here are additional tips for designers from WebAIM.org.{' '}
        <ExternalLink href="https://webaim.org/resources/designers/">For a text version visit https://webaim.org/resources/designers.</ExternalLink>
      </p>
      <div className="flex justify-center mb-spacing-xl">
        <a href="https://webaim.org/resources/designers/" target="_blank" rel="noreferrer" style={{ width: '100%', display: 'block' }}><img src="https://webaim.org/resources/designers/media/designers.svg" alt="Web Accessibility for Designers infographic with link to text version at WebAIM.org" style={{ width: '100%' }} /></a>
      </div>
    </div>
  );
}
