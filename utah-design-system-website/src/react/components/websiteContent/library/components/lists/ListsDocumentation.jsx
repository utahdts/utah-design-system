/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  IconButton,
  Icons
} from '@utahdts/utah-design-system';
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
              <IconButton
                appearance="borderless"
                icon={Icons.IconCheck()}
                onClick={() => { }}
                size="small1x"
                title="Item A"
              />
              <span className="ml-spacing">Item A</span>
            </li>
            <li style={{ display: 'flex' }}>
              <IconButton
                appearance="borderless"
                icon={Icons.IconCheck()}
                onClick={() => { }}
                size="small1x"
                title="Item B"
              />
              <span className="ml-spacing">Item B</span>
            </li>
            <li style={{ display: 'flex' }}>
              <IconButton
                appearance="borderless"
                icon={Icons.IconArrowRight()}
                onClick={() => { }}
                size="small1x"
                title="Item C"
              />
              <span className="ml-spacing">Item C</span>
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
        <li>Text should have a contrast ratio of <code>4.5:1</code> with the background color to ensure legibility.</li>
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
        <li>If you choose to use <code>role=&quot;list&quot;</code> make sure you follow correct aria-rules. Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!</li>
      </ul>
    </div>
  );
}

ListsDocumentation.propTypes = propTypes;
ListsDocumentation.defaultProps = defaultProps;

export default ListsDocumentation;
