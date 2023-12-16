/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { LightBox } from '../../../../../lightbox/LightBox';
import segmentedButtonBorderless from '../../../../../../../static/images/screenshots/components/segmented-button/segmentedButtonBorderless.webp';
import segmentedButtonBorderless2 from '../../../../../../../static/images/screenshots/components/segmented-button/segmentedButtonBorderless2.webp';
import segmentedButtonIconOnly from '../../../../../../../static/images/screenshots/components/segmented-button/segmentedButtonIconOnly.webp';
import segmentedButtonIconText from '../../../../../../../static/images/screenshots/components/segmented-button/segmentedButtonIconText.webp';
import segmentedButtonOutlined from '../../../../../../../static/images/screenshots/components/segmented-button/segmentedButtonOutlined.webp';
import segmentedButtonSizes from '../../../../../../../static/images/screenshots/components/segmented-button/segmentedButtonSizes.webp';

export function SegmentedButtonDocumentation() {
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
        title="Outlined buttons"
        renderedExample={<LightBox image={segmentedButtonOutlined} alt="Outlined Segmented Button" className="flex-2up-gap" />}
        quickTips={(
          <ul>
            <li>This is the default style of a segmented button.</li>
            <li>Other styles such as solid and using different colors are available similar to the <Link to={pageUrls.button}>button</Link>.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Segmented buttons with icons"
        renderedExample={<LightBox image={segmentedButtonIconText} alt="Icon and Text" className="flex-2up-gap" />}
        quickTips={(
          <ul>
            <li>A segmented button may contain text only, icons and text, or icons only.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Icon only"
        renderedExample={<LightBox image={segmentedButtonIconOnly} alt="Icon Only" className="flex-2up-gap" />}
        quickTips={(
          <ul>
            <li>The icon-only variation provides a way to display a very compact set of options.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Borderless"
        renderedExample={(
          <>
            <LightBox image={segmentedButtonBorderless} alt="Borderless" className="flex-2up-gap" />
            <LightBox image={segmentedButtonBorderless2} alt="Borderless Option 2" className="flex-2up-gap" />
          </>
        )}
        quickTips={(
          <ul>
            <li>The borderless segmented button is a variation of the icon-only version and is primarily used in toolbars where a compact, clean interface is required.</li>
            <li>
              The selected segment is more accessible if it meets a minimum contrast ratio of <code>3:1</code>,
              however, this doesn&apos;t appear to be an industry standard at this time.
            </li>
          </ul>
        )}
      />

      <StaticExample
        title="Sizes"
        renderedExample={<LightBox image={segmentedButtonSizes} alt="Segmented Button Sizes" className="flex-2up-gap" />}
        quickTips={(
          <ul>
            <li>Segmented buttons accept a size prop which supports the following values:
              <ul>
                <li>Extra Small</li>
                <li>Small</li>
                <li>Default</li>
                <li>Large</li>
                <li>Extra Large</li>
              </ul>
            </li>
          </ul>
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
          <strong>Hyperlinks and distinct actions.</strong> Never use segmented buttons to link to other content. Instead, use <Link to={pageUrls.links}>hyperlinks</Link>.
          Segmented buttons should not be used for separate distinct actions. Use separate <Link to={pageUrls.button}>buttons</Link> instead.
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
          <strong>Icon-only segments.</strong> <Link to={pageUrls.icons}>Icons</Link> may be used. Tooltips should be provided for each segment.
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
          For borderless buttons, the selected segment is more accessible if it meets a minimum contrast ratio of 3:1, however, this doesn&apos;t appear to be an industry standard at this time.
        </li>
        <li>
          The text and icon of the button segment must maintain a <code>4.5:1</code> contrast ratio.
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
        <li>Focus will start on the first button segment, then proceed left to right through the segments.</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>
          Use native <code>&lt;button&gt;</code> elements when constructing a segmented button.
          Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
          However if you need to use aria, follow the <Link to={pageUrls.button}>button</Link> and <Link to={pageUrls.iconButton}>icon button</Link> guidelines.
        </li>
        <li>
          For documentation on using the icon-only button, please refer to <Link to={`${pageUrls.iconButton}#section-screen-readers`}>Icon Button: Screen Readers</Link>.
        </li>
        <li>
          Selected segment: Use the <code>aria-pressed</code> attribute to define each button in the segmented array as a toggle button. The value describes the state of the button segment.
          The values include <code>aria-pressed=&quot;false&quot;</code> when a segment is not currently pressed, <code>aria-pressed=&quot;true&quot;</code> to indicate a segment is currently pressed.
        </li>
      </ul>
    </div>
  );
}
