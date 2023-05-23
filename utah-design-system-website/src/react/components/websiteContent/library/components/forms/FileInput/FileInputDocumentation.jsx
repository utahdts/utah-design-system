/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function FileInputDocumentation() {
  return (
    <div className="documentation-content">
      <h1>File Input</h1>
      <p className="lead-in">A file input allows a user to upload and/or attach one or more files.</p>
      <hr />
      <h2 id="example">Example</h2>
      <StaticExample
        title="File Upload"
        renderedExample="Example coming soon!"
      />

      <StaticExample
        title="File Uploaded"
        renderedExample="Example coming soon!"
      />

      <h2 className="mb-spacing" id="section-description-guidance">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Required document.</strong> Generally, use a file input when a document is needed.</li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Other form components.</strong> Avoid using a file input if uploading a document is not required.</li>
      </ul>
      <h3 id="section-usability">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Keep it one file per submission.</strong> Try to keep it at one file per input. Some users might have
          difficulties selecting more than one file at a time. If there is a requirement to accept multiple files consider
          the following pattern:
          <ul>
            <li>
              The file input should use an <code>aria-label</code> to tell the user about the quantity of files selected, and where they are listed.
            </li>
            <li>
              There should be an anchor <Link to={pageUrls.links}>link</Link> that directs the user&apos;s focus to the list of selected files.
            </li>
            <li>
              The selected files should be an unordered list <code>&lt;ul&gt;</code> of <Link to={pageUrls.card}>cards</Link> that
              allow the user to remove them from the list. Each card will provide information about the file such as filename and file size.
            </li>
          </ul>
        </li>
        <li>
          <strong>Hints.</strong> Give the user a description of the expected file beforehand. For example: &quot;The file should be .PDF and
          no bigger than 10Mb.&quot; Please see the <Link to={pageUrls.infoBox}>info box</Link> documentation for more information.
        </li>
        <li>
          <strong>Interactive.</strong> In addition to the focus state, make sure the input is set up to reflect when the file is hitting
          the boundary of the input box.
        </li>
        <li>
          <strong>Upload summary.</strong> After the user has selected one or more files, make sure to update the component to include
          the total number of files and list their names.
        </li>
        <li>
          <strong>Compatibility issues.</strong> Some older browsers do not support the drag and drop feature. Make sure you are allowing
          those users to click on the input to select a file.
        </li>
        <li>
          <strong>Reasonable.</strong> Keep in mind that some users might not have reliable connectivity and might have difficulties
          uploading large files.
        </li>

      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Label text must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>The drag and drop box boundary should maintain a <code>3:1</code> contrast ratio against the background.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>The file input should behave like a <Link to={pageUrls.button}>button</Link> to a user. Hitting
          the <code>spacebar</code> or <code>enter</code> key should prompt the user to select a file.
        </li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>
          The <code>&lt;input&gt;</code> element should include an <code>aria-label</code> attribute that reflects its current state.<br />
          For example: &quot;No file selected.&quot;, &quot;You have selected one file:
          my_file.pdf.&quot; or &quot;You have selected three files: document_A.pdf, document_B.pdf and document_C.doc.&quot;
        </li>
      </ul>
    </div>
  );
}

FileInputDocumentation.propTypes = propTypes;
FileInputDocumentation.defaultProps = defaultProps;

export default FileInputDocumentation;