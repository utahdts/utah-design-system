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

function HeadlineDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Headlines</h1>
      <p className="lead-in">
        Headings provide an outline for the page, much like a table of contents or an outline for a book report. Headlines
        can be formatted using heading tags (<code>H1</code> to <code>H6</code>), with <code>H1</code> being the largest font size.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Headlines"
        renderedExample="Example coming soon!"
      />
      <p>
        <strong>Heading hierarchy.</strong> The top-level <code>&lt;h1&gt;</code> should describe the page as a whole and reflect the
        page&apos;s <code>&lt;title&gt;</code>. A page should typically only have one <code>&lt;h1&gt;</code> element. However, this
        recommendation isn&apos;t an absolute requirement.
      </p>
      <p>
        Headings <code>&lt;h2&gt;</code> through <code>&lt;h6&gt;</code> represent increasing levels of &quot;indentation&quot; in
        the outline. It is strongly discouraged to skip heading levels while creating a page outline. For example, in most
        cases, it would not make sense to go from an <code>&lt;h2&gt;</code> to an <code>&lt;h4&gt;</code> heading level in the page
        outline. (Create our own mock up for hierarchy)
      </p>

      <h2 id="section-guidance" className="mb-spacing mt-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Heading 1:</strong> Typically utilized for the title of a page header or workflow header.
        </li>
        <li>
          <strong>Heading 2:</strong> Also referred to as section headings. They are utilized to introduce major content sections on a
          page. They can also be used in independent containers, such as <Link to={pageUrls.modals}>modals</Link> or <Link to={pageUrls.drawers}>drawers</Link>.
          Typically, they are positioned outside of <Link to={pageUrls.card}>cards</Link> in most layouts, but they can also be placed
          inside if it is more appropriate for the context.
        </li>
        <li>
          <strong>Heading 3:</strong> Used to indicate subsets or groupings of information within a section, or to serve as a title
          for individual objects. They are commonly utilized within a <Link to={pageUrls.card}>card</Link> container.
        </li>
        <li>
          <strong>Heading 4:</strong> It is a subset of the <code>&lt;h3&gt;</code> tag. They are often used to display important
          information, such as the name of an employee in a list.
        </li>
        <li>
          <strong>Heading 5:</strong> Heading 5 is typically utilized for long-form content where an additional level of hierarchy is necessary.
        </li>
        <li>
          <strong>Heading 6:</strong> Has it really come to this? If you must subdivide <code>&lt;h5&gt;</code> use this, we suppose.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Highlighting text within a paragraph.</strong> When you want text within a paragraph to stand out, or you want to
          call attention to it, use bold or italic text instead. (Never use underline as it can be confused with a link.)
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Highlighting important areas of content.</strong> Headlines are most effective for short, high-emphasis text. They are
          useful for highlighting important areas of content or primary passages of text.
        </li>
        <li>
          <strong>Keeping headings semantic and accessible.</strong> To guarantee that markup is both semantic and accessible, it is
          recommended to use <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> elements for headings.
        </li>
        <li>
          <strong>Using rems to manage font size.</strong>  It is recommended to use relative units (rems) to accommodate the user&apos;s
          settings and ensure that the layout remains consistent and readable.
        </li>
        <li>
          <strong>Maintaining header hierarchy.</strong> Maintaining the correct hierarchical order of headings is critical for preserving
          the semantic structure of content. Skipping heading levels can cause issues in this regard. To prevent such problems, it is recommended
          to separate the semantic meaning of the content from its visual presentation. However, it&apos;s important to note that these
          recommendations are not absolute requirements.
        </li>
        <li>
          <strong>Line Height.</strong> Headings should have a line height that is <code>1.4</code> times the size of the font used. Line
          height is the vertical space between each line of text and is directly related to the size of the text.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The color of the text must maintain a <code>4.5:1</code> contrast ratio or better against its background.</li>
        <li>For headings that are larger than <code>24 pixels</code>, you may use a lower contrast ratio of <code>3:1</code>.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Not applicable.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Remember, The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first! However if you need to use
          aria, follow the guidelines below:
          <ul>
            <li>To change the default semantics of an element to a heading, the <code>role=heading</code> and an appropriate <code>aria-level</code> can be used.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

HeadlineDocumentation.propTypes = propTypes;
HeadlineDocumentation.defaultProps = defaultProps;

export default HeadlineDocumentation;
