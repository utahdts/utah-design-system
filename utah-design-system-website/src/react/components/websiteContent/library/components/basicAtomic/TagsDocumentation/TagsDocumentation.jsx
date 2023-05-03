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

function TagsDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Tags</h1>
      <p className="lead-in">
        A tag draws attention to new or categorized content elements. They visually label items with small amounts of information or
        the item&apos;s status, usually with keywords that help organize and categorize the items.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Informational tag"
        renderedExample="Example coming soon!"
        quickTips={(
          <ul>
            <li>Tags can be purely informational and don&apos;t require additional interactivity.</li>
            <li>Tags can link to categories of similar content.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Tags with icons"
        renderedExample="Example coming soon!"
        quickTips={(
          <ul>
            <li>An icon can be used on the left or the right.</li>
            <li>It is preferred that you only use a single icon per tag.</li>
            <li>An icon should be simple and change color with the tag text.</li>
            <li>It is recommended to keep the icon to the same side of the tag throughout the site and/or application to maintain consistency.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Filtering"
        renderedExample="Example coming soon!"
        quickTips={(
          <ul>
            <li>Tags can be used to filter and organize similar options. Once a tag is selected, the filtering behavior is immediate.</li>
          </ul>
        )}
      />

      <span>Tags are used to identify and select multiple options from a list. See <Link to={pageUrls.multiSelect}>multi-select</Link>.</span>

      <h2 id="section-guidance" className="mb-spacing mt-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Draw attention to new, important content.</strong> Tags can focus attention on important content that might otherwise be missed.</li>
        <li><strong>Filter results with one or more tags.</strong></li>
        <li><strong>Categorize and organize data.</strong> Use when you have data that helps categorize and organize information.</li>
        <li>
          <strong>Content mapped to multiple categories.</strong> Use tags when content is mapped to multiple categories, and
          the user needs a way to differentiate between them.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Confusion with buttons.</strong> Avoid tags if they might appear in the same area of the page as <Link to={pageUrls.button}>buttons</Link>.
        </li>
        <li>
          <strong>New or updated content.</strong> To call attention to new or updated content, consider changing the background
          color of the object itself or experiment with changing the font weight.
        </li>
        <li>
          <strong>When users already expect content to be updated frequently.</strong> For example, on a site dedicated to breaking
          news, placing the new content at the top may be enough.
        </li>
        <li>
          <strong>Avoid using tags for numerical counts.</strong> Use a <Link to={pageUrls.badges}>badge</Link> instead.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Users frequently confuse tags as buttons.</strong> Always conduct usability testing to make sure your
          particular implementation is not causing frustration.
        </li>
        <li>
          <strong>If your tags aren&apos;t interactive, disable hover, focus, and active styles.</strong>
        </li>
        <li>
          <strong>Don&apos;t mix interactive and static tags.</strong> Once you establish a pattern for how tags behave on
          your site, users will expect that behavior every time.
        </li>
        <li>
          <strong>Don&apos;t overdo it.</strong> If everything on a page is called out as important, nothing commands unique attention.
        </li>
        <li>
          <strong>Tags may be persistent or dismissible.</strong> Dismissible tags can be added or removed by users.
        </li>
        <li>
          <strong>Link tags.</strong> Link tags let you provide a link to somewhere or to filter content by that tag.
          <ul>
            <li>Link tags have hover and focus styles that default tags do not.</li>
            <li>When used as a filter tag, link tags instantly filter content on click.</li>
          </ul>
        </li>
        <li><strong>Tags can be used to categorize items.</strong></li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in tags must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>The tag&apos;s boundaries must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>An interactive tag&apos;s focus state should have a <code>3:1</code> contrast ratio.</li>
        <li>When using custom colors, be sure the minimum contrast requirements are met.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>
          Always use an <Link to={pageUrls.iconButton}>icon button</Link> for the dismiss action <code>x</code> on a dismissible tag. This
          provides the required keyboard navigability.
        </li>
        <li>Use the <code>tab</code> key to move between form elements. An interactive tag should display a visible focus state when users tab to them.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Use ARIA live regions to highlight dynamically loaded content. When tags are used to call out new content that is
          dynamically loaded onto a page, be sure to use ARIA live regions to alert screen readers of the change.
        </li>
        <li>
          Dismissing Tags: Always include <code>screen readable text</code> on the dismiss icon
          button <code>x</code> like &quot;Remove Tag&quot; or &quot;Dismiss Tag&quot;.
        </li>
        <li>
          Native Elements: Where possible, it is recommended that you use a native elements rather than using aria and
          role attributes, as native elements are more widely supported by user agents and assistive technology.
          Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
        </li>
        <li>
          If you customize this component, ensure that it continues to meet the accessibility requirements.
        </li>
      </ul>
    </div>
  );
}

TagsDocumentation.propTypes = propTypes;
TagsDocumentation.defaultProps = defaultProps;

export default TagsDocumentation;
