/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';
import PreCodeForCodeString from '../../../../../preCode/PreCodeForCodeString';

const propTypes = {};
const defaultProps = {};

function CodeBlockDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Code Block</h1>
      <p className="lead-in">
        A code block emphasizes and preserves the formatting of an entire block of code.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <p>
        To accommodate diverse line length requirements, code blocks come in two distinct variations: inline, and multi-line. These variants
        are designed to provide flexibility in different usage scenarios.
      </p>

      <StaticExample
        title="Inline"
        renderedExample={<span>Use the <code>&lt;code&gt;</code> tag for inline text.</span>}
        quickTips={<ul><li>Text including some inline code snippet.</li></ul>}
      />

      <div className="static-example">
        <h3 id="multi-line">Multi-line</h3>
        <PreCodeForCodeString
          className="gray-block mt-spacing"
          codeRaw={`
            <div>
              // My code goes here
            </div>
            `}
        />
        <ul>
          <li>Block including multiple lines of code.</li>
          <li>Optionally, a copy button can be added.</li>
        </ul>
      </div>

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Effortless copying of text strings.</strong> Utilize a code block when you want to facilitate the copying of text           by the user or when emphasizing specific keywords for their reference.
        </li>
        <li>
          <strong>Quickly implementing code.</strong> Commonly employed in code documentation, code blocks provide users with a quick and convenient
          way to begin their implementation.
        </li>
      </ul>

      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Designed to be &quot;Read Only&quot;.</strong> If you want the user to modify the input value, it&apos;s not recommended to use a code block since
          they are designed to be read-only. Use a <Link to={pageUrls.textArea}>textarea</Link> when a user needs to edit the text.
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>With or without line numbers.</strong> A code block can be presented with or without line numbers, depending on the desired display
          preference. By default, the Utah Design System doesn&apos;t include numbers.
        </li>
        <li>
          <strong>Align code snippet container to grid.</strong> To maintain visual consistency with other form components on a page, code snippet containers
          should be vertically aligned with the grid layout. However, when employing an inline code snippet, the snippet itself will be embedded within the body of text.
        </li>
        <li>
          <strong>Use correct code syntax.</strong> Ensure that the code adheres to the correct syntax to prevent any potential issues if the user copies
          it to their clipboard. This ensures that the code remains intact and functional.
        </li>
        <li>
          <strong>Copy functionality</strong> (optional). By default, a code block features a <Link to={pageUrls.iconButton}>copy button</Link> that enables
          users to easily copy the provided code to their clipboard. The <Link to={pageUrls.iconButton}>copy icon</Link> should be accompanied by a
          confirmation <Link to={pageUrls.tooltips}>tooltip</Link> that indicates the successful action of copying an item to the clipboard. However, it is important
          to note that the inclusion of copy functionality is optional and can be omitted if it is not required for your specific use case.
        </li>
        <li>
          <strong>Copy confirmation tooltip.</strong> The <Link to={pageUrls.iconButton}>copy button</Link> should be accompanied by a
          concise <Link to={pageUrls.tooltips}>tooltip</Link> that describes the action when the user clicks it. Once the <Link to={pageUrls.button}> button</Link> is
          clicked, display a message such as &quot;Copied to clipboard&quot;.
        </li>
        <li>
          <strong>Wrapping long lines.</strong> You may enable the wrapping of long lines in a code block.
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>The text within the code block must maintain a <code>4.5:1</code> contrast ratio against the background.</li>
        <li>When using custom colors be sure the minimum contrast requirements are met.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>Code blocks can be copied with <code>Space</code> or <code>Enter</code> when focused on the <Link to={pageUrls.iconButton}>copy code button</Link>.</li>
        <li><code>Tab</code> to give focus to the code block and then use arrow keys for scrolling.</li>
        <li>Include a <Link to={pageUrls.tooltips}>tooltip</Link> when the user hovers over or focuses on any buttons within the code block (i.e. &quot;Copy to clipboard&quot;).</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>If the code block has a title associated with it, refer to it by using <code>aria-labelledby</code>; otherwise, use <code>aria-label</code>.</li>
        <li>Follow the guidance for the <Link to={pageUrls.iconButton}>icon button</Link> for the copy code feature.</li>
        <li>Semantic HTML is always best. Use the <code>&lt;code&gt;</code> tag.</li>
      </ul>
    </div>
  );
}

CodeBlockDocumentation.propTypes = propTypes;
CodeBlockDocumentation.defaultProps = defaultProps;

export default CodeBlockDocumentation;
