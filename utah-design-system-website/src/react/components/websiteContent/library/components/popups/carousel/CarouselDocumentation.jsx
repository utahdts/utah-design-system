/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import PreCode from '../../../../../preCode/PreCode';
import pageUrls from '../../../../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function CarouselDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Carousel</h1>
      <p className="lead-in">
        A carousel is a set of slides that are rotating. Typically, each slide contains content in the form of headline, text, links and/or images.
      </p>

      <hr />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Popular content.</strong> A carousel can be used as a way to promote new and/or featured content. Typically, carousels are displayed on the homepage of a site.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>User experience.</strong> Generally, the user experience is not great because part of the content is hidden from the user. It requires user interaction to
          reveal all of the contents in the carousel. Typically users don&apos;t have the patience to wait for a carousel to slide.
        </li>
        <li>
          <strong>Mobile experience.</strong> A good user experience on a mobile device is difficult to achieve with a carousel. Thoughtfully consider how a carousel will
          appear on a user&apos;s phone or mobile device.
        </li>
        <li>
          <strong>Accessibility.</strong> Generally, carousels have some accessibility issues; Keep that in mind when implementing them. If you are trying to
          grab a user&apos;s attention with some new and/or important content, try using <Link to={pageUrls.card}>cards</Link> or put your content in hierarchical order
          using an ordered <Link to={pageUrls.lists}>list</Link> instead.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Controls.</strong> A carousel should allow the user to control the slides.
          <ul>
            <li>A carousel should include two buttons allowing a user to display the next and previous slides. </li>
            <li>Additionally, a list of controls letting the user select a specific slide can be used. For example: a set of circle icons at the bottom of the carousel.</li>
            <li>If a carousel automatically rotates to a slide, make sure to include a way for the user to stop that rotation. This can be implemented by including a pause button and/or stop rotation on hovering.</li>
          </ul>
        </li>
        <li>
          <strong>Slide limit.</strong> A carousel hides content from users. Avoid having 4 or more slides on a single carousel.
        </li>
        <li>
          <strong>Animation.</strong> Generally, if a carousel is rotating automatically, the animation should start after a minimum of 5 seconds. Each
          slide should stay visible long enough, typically 5 seconds or more, before transitioning to the next slide.
        </li>
        <li>
          <strong>Slide content.</strong> Avoid using complex elements like <Link to={pageUrls.table}>tables</Link>, <Link to={pageUrls.accordion}>accordions</Link>, or
          animated elements such as videos. If images are used as background, try to keep their resolution and/or ratio the same for consistency.
        </li>
        <li>
          <strong>Background images and text.</strong> Remember, text on background images is very difficult to read for those with low vision.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The controls should have a <code>4.5:1</code> contrast ratio against the background.</li>
        <li>Make sure the controls are visible against any image used.</li>
        <li>Text content within each slide must have a <code>4.5:1</code> contrast ratio.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Once the carousel receives focus, rotation should be paused until the user explicitly turns it back on or leaves focus.</li>
        <li>If the carousel has a <Link to={pageUrls.button}>button</Link> to pause rotation, it should be the first focusable element.</li>
        <li>If the carousel includes a list of controls, selecting one of those controls should rotate the carousel to its associated slide. The focus should then be placed on the slide.</li>
        <li>Controls can be activated by hitting <code>enter</code> or <code>spacebar</code>.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          The carousel container should include <code>role=&quot;group&quot;</code> and <code>aria-roledescription=&quot;carousel&quot;</code>. If
          the carousel has a title associated with it, refer to it by using <code>aria-labelledby</code>; otherwise, use <code>aria-label</code>.
        </li>
        <li>The controls should be native <code>&lt;button&gt;</code> elements.</li>
        <li>
          Make sure the controls include appropriate <code>aria-label</code> attributes. For example: &quot;Start rotation&quot;, &quot;Pause rotation&quot; or &quot;Next slide&quot;.
        </li>
        <li>Typically, the slides should be grouped as <code>&lt;li&gt;</code> inside an <code>&lt;ul&gt;</code>.</li>
        <li>
          Each slide should include <code>role=&quot;group&quot;</code> and <code>aria-roledescription=&quot;slide&quot;</code>. If a slide has a title associated with it, refer
          to it by using <code>aria-labelledby</code>; otherwise, use <code>aria-label</code>.
        </li>
        <li>In the case no label is available, refer to each slide by their number. For example: &quot;Slide 2 of 10.&quot;</li>
        <li>
          For <Link to={pageUrls.button}>buttons</Link> within a list of controls, each <Link to={pageUrls.button}>button</Link> should
          include <code>aria-labelledby</code> set to its respective slide title or label.
        </li>
        <li>The active control should be disabled and include <code>aria-disabled=&quot;true&quot;</code>. Avoid using the native <code>disabled</code> attribute.</li>
        <li>
          To inform the user on what slide is currently shown, use a <code>live region</code>. This can be achieved by creating a visually hidden
          element and using <code>aria-live=&quot;polite&quot;</code> and <code>aria-atomic=&quot;true&quot;</code>. Set its content to reflect the
          current slide. For example: &quot;Slide 2 of 5&quot;.
          <br />
          <strong>Important!</strong>: Use this only if the carousel is <strong>not</strong> automatically rotating.
        </li>
      </ul>

      <h4 id="section-motion">Motion</h4>
      <ul className="mb-spacing">
        <li>
          Automatic sliding can cause issues with those who experience motion sensitivity. Allow the user to stop the animation to avoid these issues.
        </li>
        <li>
          Content that moves or auto-updates can be a barrier to anyone who has trouble reading stationary text quickly as well as anyone who has
          trouble tracking moving objects. It can also cause problems for screen readers.
        </li>
        <li>
          Moving content can also be a severe distraction for some people. Certain groups, particularly those with attention deficit disorders, find
          blinking content distracting, making it difficult for them to concentrate on other parts of the Web page. Five seconds was chosen because
          it is long enough to get a user&apos;s attention, but not so long that a user cannot wait out the distraction if necessary to use the page.
        </li>
        <li>
          Consider using the following CSS to prevent animation for those with motion accessibility issues.
          <PreCode
            showBackgroundColor
            codeRaw={`
              @media (prefers-reduced-motion: reduce) {
                /* CSS to disable motion goes here */
              }
            `}
          />
        </li>
      </ul>
    </div>
  );
}

CarouselDocumentation.propTypes = propTypes;
CarouselDocumentation.defaultProps = defaultProps;

export default CarouselDocumentation;
