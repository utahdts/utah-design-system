/* eslint-disable max-len */
import { Pagination } from '@utahdts/utah-design-system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import stateSymbols from '../../../../../../consts/stateSymbols';
import PreCodeForCodeString from '../../../../../preCode/PreCodeForCodeString';
import pageUrls from '../../../../../routing/pageUrls';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import StaticExample from '../../../../../staticExamples/StaticExample';
import PaginationExampleCodeReact from './PaginationExampleCodeReact';
import PaginationExampleProps from './PaginationExampleProps';
import PaginationExampleRender from './PaginationExampleRender';

const propTypes = {};
const defaultProps = {};

const STATIC_EXAMPLE_PAGE_SIZE = 4;

function PaginationDocumentation() {
  const [demoPaginationIndex, setDemoPaginationIndex] = useState(0);

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Pagination</h1>
      <p className="lead-in">A pagination allows users to navigate through paginated content.</p>
      <hr />
      <h2 id="section-example">Examples</h2>
      <SandboxExample
        CODE_EXAMPLE={PaginationExampleCodeReact}
        PROPS_EXAMPLE={PaginationExampleProps}
        RENDER_EXAMPLE={PaginationExampleRender}
      />
      <StaticExample
        title="Pagination"
        renderedExample={(
          <div className="flex flex-col items-center">
            <h4 className="mb-spacing-xs">Symbols of the State of Utah</h4>
            <ul style={{ height: '115px', width: '90%' }}>
              {
                stateSymbols
                  .slice(demoPaginationIndex * STATIC_EXAMPLE_PAGE_SIZE, demoPaginationIndex * STATIC_EXAMPLE_PAGE_SIZE + STATIC_EXAMPLE_PAGE_SIZE)
                  .map((stateSymbol) => (
                    <li key={stateSymbol.symbol}>{stateSymbol.category}: {stateSymbol.symbol} ({stateSymbol.year})</li>
                  ))
              }
            </ul>
            <div className="flex items-center flex-col">
              <Pagination
                onChange={(newPageNumber) => setDemoPaginationIndex(newPageNumber)}
                pageSize={STATIC_EXAMPLE_PAGE_SIZE}
                totalNumberItems={stateSymbols.length}
                value={demoPaginationIndex}
              />
            </div>
          </div>
        )}
        quickTips={(
          <ul>
            <li>
              A pagination component consists of a list of links to navigate through the pages. This list includes:
              <ul>
                <li>A <code>Previous</code> link.</li>
                <li>A <code>Next</code> link.</li>
                <li>Links to go to a specific page based on its index.</li>
                <li>Ellipses to indicate an overflow.</li>
              </ul>
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Break down large amounts of data into smaller sets.</strong> Use a pagination when a page or set of data displays a significant amount of information. This improves user comprehension and makes it less overwhelming for them.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Small data set.</strong> Avoid using a pagination when the set of data is less than 4 pages long.</li>
        <li><strong>Context.</strong> If a large collection of content is sequenced in a meaningful way, use a <Link to={pageUrls.stepIndicator}>Step Indicator</Link> or a <Link to={pageUrls.sidePanelNavigation}>Side Panel</Link> instead.</li>
        <li><strong>Replace user work flow.</strong> Pagination can be inherently frustrating for the user, since much of the data is hidden. Showing large collections of data may sometimes be a sign of too generic of interface design. Discovering powerful user experiences and workflows that target smaller chunks of data may be a possible replacement for a pagination. Also consider mobile data bandwidth limitations when loading large chunks of data.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>The following links should always be displayed:</strong> first and last page, previous and next page. The first and last page links should be represented by their respective indexes. When the user is on the first page, the Previous link should be disabled. The same is true for the last page and the Next link.</li>
        <li><strong>Current indicator.</strong> The current page index should be highlighted.</li>
        <li><strong>Single line.</strong> Typically, all links should be displayed as a continuous line. Consider reducing the number of links on mobile if necessary.</li>
        <li><strong>Links limit.</strong> Avoid showing too many links to not overwhelm the user. Consider using a non-interactive item, such as an ellipsis, for hidden ranges.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Maintain a minimum <code>4.5:1</code> contrast ratio for all text link interactions (hover, focus).</li>
        <li>Maintain a <code>3:1</code> contrast ratio for the current indicator.</li>
        <li>Maintain a <code>3:1</code> contrast ratio for the focus indicator.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Users must be able to navigate to a link using the tab key. (There must be some indicator that the link has received focus.)</li>
        <li>Users must be able to select the link item using the Enter/Return key.</li>
        <li>Ellipses must be skipped when navigating through the list.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>Generally, use a <code>&lt;nav&gt;</code> element to wrap the pagination. However, it should include a unique <code>aria-label=&quot;my pagination component&quot;</code> attribute describing its purpose. This creates an additional navigation landmark which sets it apart from the main navigation in the page.</li>
        <li>Limit the number of <code>&lt;nav&gt;</code> elements on a page when the pagination is attached to secondary content such as multiple tables of data. Too many <code>&lt;nav&gt;</code> landmarks create confusion for screen reader users.</li>
        <li>Links should be an <code>&lt;a&gt;</code> element as part of an unordered list (<code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>).</li>
        <li>The current link should have <code>aria-current=&quot;page&quot;</code> attribute set.</li>
        <li>First and last page should be voiced by either including an aria-label or a visually hidden span in each link. For example
          <PreCodeForCodeString
            showBackgroundColor
            codeRaw={`
              <li>
                <a href="#pagefirst" aria-label="first page">1</a>
              </li>

              <li>
                <a href="#pagefirst">
                  1
                  <span class="visuallyhidden">first page</span>
                </a>
              </li>
            `}
          />
        </li>
      </ul>
    </div>
  );
}

PaginationDocumentation.propTypes = propTypes;
PaginationDocumentation.defaultProps = defaultProps;

export default PaginationDocumentation;
