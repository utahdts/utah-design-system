/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../../../../routing/pageUrls';
import StaticExample from '../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function ListsDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Lists</h1>
      <p className="lead-in">A list is used to display a set of items, either in an ordered or unordered sequence.</p>
      <hr />
      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Unordered"
        renderedExample={(
          <ul>
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ul>
        )}
      />

      <StaticExample
        title="Ordered"
        renderedExample={(
          <ol>
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ol>
        )}
      />

      <StaticExample
        title="With Icons"
        renderedExample={(
          <ul style={{ listStyle: 'none' }}>
            <li style={{ display: 'flex' }}>
              <span className="utds-icon-before-check" aria-hidden="true" />
              <span className="visually-hidden">checkmark</span>
              <span>Item A</span>
            </li>
            <li style={{ display: 'flex' }}>
              <span className="utds-icon-before-check" aria-hidden="true" />
              <span className="visually-hidden">checkmark</span>
              <span>Item B</span>
            </li>
            <li style={{ display: 'flex' }}>
              <span className="utds-icon-before-x-icon" aria-hidden="true" style={{ fontSize: '.8rem', marginRight: '.2em' }} />
              <span className="visually-hidden">x icon</span>
              <span>Item C</span>
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Context.</strong> Use a list <code>&lt;ul&gt;</code> when you need to display a set of related items.
          Consider using an ordered list <code>&lt;ol&gt;</code> when the sequencing matters.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Complexity.</strong> If the content is long and is showcasing a process, consider using a <Link to={pageUrls.stepIndicator}>Step indicator</Link>.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Capitalize</strong> each item and use appropriate punctuation.</li>
        <li><strong>Consistency.</strong> Use the same styling for all items. If using icons, make sure they are homogeneous.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text and icons should have a contrast ratio of <code>4.5:1</code> with the background color to ensure legibility.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>None.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Always use appropriate semantic HTML elements (<code>&lt;ol&gt;</code>,<code> &lt;ul&gt;</code> and <code>&lt;li&gt;</code>)
          as this provides important contextual information for screen readers.
        </li>
        <li>Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
          If you choose to use ARIA make sure you follow correct ARIA rules and use the following for lists:
          <ul>
            <li><code>role=&quot;list&quot;</code> for the list.</li>
            <li><code>role=&quot;listitem&quot;</code> for each item in the list.</li>
            <li>Note: The ARIA list / listitem roles don&apos;t distinguish between ordered and unordered lists.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

ListsDocumentation.propTypes = propTypes;
ListsDocumentation.defaultProps = defaultProps;

export default ListsDocumentation;
