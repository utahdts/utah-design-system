/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function SegmentedButtonDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Segmented Button</h1>
      <p className="lead-in">
        A segmented button is a compact grouping of options that permits users to select only one option from the provided set. It provides an efficient
        way for users to select options, switch views, or sort elements.
      </p>
      <hr />
      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Outline"
        renderedExample="Example coming soon!"
      />

      <StaticExample
        title="Segmented buttons with icons"
        renderedExample="Example coming soon!"
      />

      <StaticExample
        title="Icons only"
        renderedExample="Example coming soon!"
        quickTips="The icon-only variation provides a way to display a very compact set of options."
      />

      <StaticExample
        title="Borderless"
        renderedExample="Example coming soon!"
        quickTips="The borderless segmented button is a variation of the icon-only version and is primarily used in toolbars where a compact, clean interface is required."
      />

      <StaticExample
        title="Sizes"
        renderedExample="Example coming soon!"
        quickTips={(
          <>
            <p>Segmented buttons accept a size prop which supports the following values:</p>
            <ul>
              <li>Extra Small</li>
              <li>Small</li>
              <li>Default</li>
              <li>Large</li>
              <li>Extra Large</li>
            </ul>
          </>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Selecting, switching and sorting information.</strong> When users need to select a single option from a set, switch between different views, or
          sort elements using up to five options, segmented buttons are the appropriate choice.
        </li>
        <li>
          <strong>Grouping similar buttons.</strong> Utilize the segmented buttons to seamlessly toggle between similar actions.
        </li>
        <li>
          <strong>Limited space.</strong> Use the icon-only variant when there is limited space or when the <Link to={pageUrls.icons}>icons</Link> are intuitive and easy to understand.
        </li>
      </ul>

      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Tabs.</strong> Use <Link to={pageUrls.tabs}>tabs</Link> as a way to navigate through a set of related content.
        </li>
        <li>
          <strong>Hyperlinks.</strong> Never use segmented buttons to link to other content. Instead, use <Link to={pageUrls.links}>hyperlinks</Link>. For more
          information on <Link to={pageUrls.button}>buttons</Link>, please refer to their respective documentation.
        </li>
        <li>
          <strong>Checkboxes.</strong> Use <Link to={pageUrls.checkbox}>checkboxes</Link> when the user is able to select multiple values from a predefined
          list of 10 or less options.
        </li>
        <li>
          <strong>Multi-select.</strong> Use a <Link to={pageUrls.multiSelect}>multi-select</Link> component when the user is able to select
          multiple values from a predefined list of more than 10 options.
        </li>
        <li>
          <strong>Radio buttons.</strong> Use <Link to={pageUrls.radioButton}>radio buttons</Link> when the user is able to select a single value from a predefined
          list of 2-7 options that will not alter the page content.
        </li>
        <li>
          <strong>Single-select.</strong> Utilize a <Link to={pageUrls.select}>single-select</Link> component when users need to choose a single value from a
          predetermined list containing more than 7 options, and this selection does not cause any alteration to the page content.
        </li>
        <li>
          <strong>More than 5 segments.</strong> Avoid using more than five segments within a single segmented button. If you have a set of choices exceeding this
          limit, consider using another component, such as <Link to={pageUrls.tags}>tags</Link>, to facilitate a better user experience.
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>One active button.</strong> Only one segment can be selected and active at any given time. These buttons can be presented
          in three different formats: icon-only, text on the left, or icon on the left with accompanying text.
        </li>
        <li>
          <strong>Display results immediately.</strong> Once a user selects an option, the results should be displayed immediately.
        </li>
        <li>
          <strong>Communicate intended purpose.</strong> Every button should effectively communicate its intended purpose. Text variants
          inherently display their labels visually, while <Link to={pageUrls.tooltips}>tooltips</Link> should be utilized for icon-only variants to
          provide additional clarity.
        </li>
        <li>
          <strong>Buttons should be the same size.</strong> All <Link to={pageUrls.button}>buttons</Link> within the group should maintain the same size. The length
          of the segments should be determined based on the longest text label.
        </li>
        <li>
          <strong>Only use 2-5 options/segments.</strong> Segmented buttons are designed to have a minimum of 2 and a maximum of 5 segments. Each segment is
          distinctly divided and encompasses label text, an <Link to={pageUrls.icons}>icon</Link>, or a combination of both.
        </li>
        <li>
          <strong>Icon-only segments.</strong> <Link to={pageUrls.icons}>Icons</Link> may be used as labels by themselves or alongside text.
        </li>
        <li>
          <strong>Labels should be short and succinct.</strong> If a label is too long to fit within its segment, consider using
          the <Link to={pageUrls.iconButton}>icon-only button</Link>. Don&apos;t let segmented buttons wrap.
        </li>
        <li>
          <strong>Placement.</strong> It is important to provide segmented buttons with sufficient margins from the viewport or frame edges.
        </li>
        <li>
          <strong>Appearance.</strong> Segmented buttons come with rounded corners by default, resembling the appearance of standard <Link to={pageUrls.button}>buttons</Link>.
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>
          Each button in the segmented component must have a focus indicator that is highly visible against the background and against the
          non-focused state and should maintain a <code>3:1</code> contrast ratio.
        </li>
        <li>
          The boundary of the segmented button must maintain a <code>3:1</code> contrast ratio against the background, unless it is borderless.
        </li>
        <li>
          The text and icon indicator must maintain a <code>4.5:1</code> contrast ratio.
        </li>
        <li>
          When using custom colors be sure the minimum contrast requirements are met.
        </li>
        <li>
          A color change differentiates between selected and unselected segments.
        </li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>Use <code>Tab</code> to navigate through segments and <code>Space/Enter</code> to select/unselect.</li>
        <li>Focus will start on the first button segment.</li>
        <li>For keyboard navigation, <code>Tab</code> focuses on each individual button segment.</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>
          Make sure to use a <code>&lt;button&gt;</code> element with the attribute <code>role=&quot;button&quot;</code>. Semantic HTML is always best.
          Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first! However if you need to use aria, follow the button guidelines.
        </li>
        <li>
          For documentation on using the icon-only button, please refer to <Link to={`${pageUrls.iconButton}#section-screen-readers`}>icon-buttons: Screen Readers</Link>.
        </li>
      </ul>
    </div>
  );
}

SegmentedButtonDocumentation.propTypes = propTypes;
SegmentedButtonDocumentation.defaultProps = defaultProps;

export default SegmentedButtonDocumentation;
