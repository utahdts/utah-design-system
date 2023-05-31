/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function InfoBoxDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Info Box</h1>
      <p className="lead-in">
        An info box is a way to communicate additional information about form inputs to users.
      </p>

      <hr />

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Form hints.</strong> Use an info box to tell the user about an input&apos;s requirements.</li>
      </ul>

      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Dynamic.</strong> Avoid using an info box as a way to display information in response to a user&apos;s action. Instead use a <Link to={pageUrls.banners}>banner</Link>.</li>
        <li><strong>Reminders.</strong> Rather than an info box, you can use a <Link to={pageUrls.callout}>callout</Link> as a way to summarize the talking point of related content.</li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Interactivity.</strong> Info boxes are static, non-dismissible elements.</li>
        <li><strong>Keep it short.</strong> Info boxes should be limited to a few lines of text.</li>
        <li><strong>Consistency.</strong> Use the same styling across the website and/or application.</li>
        <li><strong>Icons.</strong> An <Link to={pageUrls.icons}>icon</Link> can be added, generally on the left side of the box. Make sure to keep it context appropriate.</li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li><Link to={pageUrls.typography}>Text</Link> and <Link to={pageUrls.icons}>icon</Link> in the info box must maintain a <code>4.5:1</code> contrast ratio.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>None. Info boxes are not interactive.</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>N/A</li>
      </ul>
    </div>
  );
}

InfoBoxDocumentation.propTypes = propTypes;
InfoBoxDocumentation.defaultProps = defaultProps;

export default InfoBoxDocumentation;
