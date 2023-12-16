/* eslint-disable max-len */
import { ExternalLink } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import tableAlternatingScreenshot from '../../../../../../static/images/screenshots/components/table/tableAlternating.png';
import tableBorderedScreenshot from '../../../../../../static/images/screenshots/components/table/tableBordered.png';
import tableFiltersScreenshot from '../../../../../../static/images/screenshots/components/table/tableFilters.png';
import tableMobileScroll from '../../../../../../static/images/screenshots/components/table/tableMobileScroll.png';
import tableMobileStacked from '../../../../../../static/images/screenshots/components/table/tableMobileStacked.jpg';
import tablePlainScreenshot from '../../../../../../static/images/screenshots/components/table/tablePlain.png';
import { LightBox } from '../../../../lightbox/LightBox';
import { pageUrls } from '../../../../routing/pageUrls';
import { SandboxExample } from '../../../../sandbox/SandboxExample';
import { StaticExample } from '../../../../staticExamples/StaticExample';
import { TableExampleCodeReact } from './TableExampleCodeReact';
import { TableExampleProps } from './TableExampleProps';
import { TableExampleRender } from './TableExampleRender';
import { TableDocumentationFilteringPaginationTableExample } from './exampleTables/TableDocumentationFilteringPaginationTableExample';
import { TableDocumentationFilteringTableExample } from './exampleTables/TableDocumentationFilteringTableExample';
import { TableDocumentationFooterExample } from './exampleTables/TableDocumentationFooterExample';
import { TableDocumentationPaginationTableExample } from './exampleTables/TableDocumentationPaginationTableExample';
import { TableDocumentationSimpleTableExample } from './exampleTables/TableDocumentationSimpleTableExample';
import { TableDocumentationSortingTableExample } from './exampleTables/TableDocumentationSortingTableExample';

export function TableDocumentation() {
  return (
    <div className="documentation-content">

      <h1 id="h1-top">Table</h1>
      <p className="lead-in">
        A table shows information in columns and rows. Tables help logically organize information and group similar things together. They&apos;re
        especially useful for showing long lists of sequential or structured content. Users read tables one row or column at a time, making it easy
        to digest and compare information.
      </p>
      <hr />
      <h2 id="section-sandbox-example">Sandbox Example</h2>
      <SandboxExample
        defaultProps={{
          className: '',
          id: 'example-interactive-table',
          isFiltering: false,
          isPaginating: true,
          isSorting: false,
        }}
        CODE_EXAMPLE={TableExampleCodeReact}
        PROPS_EXAMPLE={TableExampleProps}
        RENDER_EXAMPLE={TableExampleRender}
        componentClassName="sandbox-example__component--flex-start sandbox-example__component--outline"
      />
      <div className="text-center mb-spacing-xs">
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables"
        >
          See example Table code on GitHub
        </ExternalLink>
      </div>

      <h2 id="section-static-examples">Static Examples</h2>
      <StaticExample
        title="Plain table (mockup)"
        renderedExample={<LightBox image={tablePlainScreenshot} alt="Plain Table" />}
        quickTips={(
          <ul>
            <li>A table with minimal lines to help the user focus on the available information.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Table with vertical lines (mockup)"
        renderedExample={<LightBox image={tableBorderedScreenshot} alt="Table with Vertical Lines" />}
        quickTips={(
          <ul>
            <li>A table with vertical lines will help users scan columns of data more easily when the table has larger amounts of data.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Table with alternating row colors (mockup)"
        renderedExample={<LightBox image={tableAlternatingScreenshot} alt="Alternating Rows Table" />}
        quickTips={(
          <ul>
            <li>Alternating row colors can help sighted users scan data in a table. Using only alternating row colors is not an acceptable solution for dividing rows since the contrast ratio is too low for those with low vision. You should combine alternating row background colors with borders to address minimum contrast ratios.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Table with filters (mockup)"
        renderedExample={<LightBox image={tableFiltersScreenshot} alt="Table with Filters" />}
        quickTips={(
          <ul>
            <li>A table with column filters allows the user to quickly find information in the table. Consider using filters when the table data is larger than the viewport or over 10 rows long.</li>
          </ul>
        )}

      />
      <StaticExample
        title="Mobile tables (mockup)"
        renderedExample={(
          <>
            <LightBox image={tableMobileScroll} alt="Mobile Table Horizontal Scroll" className="flex-4up-gap" />
            <LightBox image={tableMobileStacked} alt="Mobile Table Stacked" className="flex-4up-gap" />
          </>
        )}
        quickTips={(
          <ul>
            <li>Tables on a mobile device can be scroll horizontally, or the information can be displayed in a stacked layout.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Displaying tabular data.</strong> When you need to display tabular information, such as statistical data.</li>
        <li><strong>Displaying directories.</strong> When listing information, locations, or resources that have similarly structured content for many items.</li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Non-tabular data.</strong> Depending on the type of content, consider using other presentation formats, such as <Link to={pageUrls.lists}>lists</Link> (&lt;ol&gt;, &lt;ul&gt;, etc).</li>
        <li><strong>Robust data visualization.</strong> If you need to display more complex relationships or data visualizations, consider a bar graph, infographic, or other type of chart.</li>
        <li><strong>Page layout.</strong> Don&apos;t use tables in place of a css grid for web page layout.</li>
        <li><strong>Table structure.</strong> Table content should follow a consistent structure using headers and logical columns and rows.</li>
        <li><strong>Long-form content.</strong> Table cell content should be brief and scannable. If you find yourself drafting multiple bullet points or paragraphs within a single table cell, the content is likely better off under conventional page headers or in an <Link to={pageUrls.accordion}>accordion</Link>.</li>
        <li><strong>Groups of items with different structures.</strong> Consider a <Link to={pageUrls.lists}>list</Link> or <Link to={pageUrls.card}>cards</Link> for content items that don&apos;t follow a consistent pattern.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Keep it simple.</strong> Tables are great at displaying data and complex information. Minimal visual styling helps surface this information more easily.</li>
        <li><strong>Always use a header row.</strong> Use plain language and short labels to define the type of information that can be found in each column or row. For more complex table structures, review the <ExternalLink href="https://www.w3.org/WAI/tutorials/tables/">WCAG accessibility recommendations for tables</ExternalLink>.</li>
        <li><strong>Predictably format columns.</strong> Take care not to vary units or formatting within the same column. Instead, normalize values so they can be easily compared. For example, if most of the rows in a table show a count in days, don&apos;t have some rows that count by weeks.</li>
        <li><strong>Right-align numerical data.</strong> Align numbers that represent a sum to the right in the table cells.</li>
        <li><strong>Use a monospace font for numerical data.</strong> For even better readability of dense, numerical data, consider formatting numbers that convey amounts, such as percentages, currency, or tallies, in a monospace font. See <Link to={pageUrls.typography}>typography</Link>. (There&apos;s no need to apply monospace formatting or alignment to phone numbers, zip codes, dates, or other number content that can&apos;t be totaled.)</li>
        <li><strong>Attribute table data in a caption.</strong> If your table includes information from a specific source or contains frequently updated content, provide the source and/or last updated date. This clarification is especially useful if your table summarizes data from a more extensive source.</li>
        <li><strong>Consider a small-screen experience.</strong> On mobile devices and other small screens, numerical data across many columns can be easier to understand if the table scrolls horizontally. Directory lists are more readable if the rows display in a stacked layout. For tables with more than two columns, make sure you choose either a scrollable or a stacked variant.</li>
        <li><strong>Minimize the number of columns.</strong> It&apos;s easier for users to read down a long list of rows than it is to read across a long list of columns. Eliminate columns when possible, or consider swapping the columns and rows to improve scannability.</li>
        <li><strong>Enable sort where useful.</strong> Add row sorting to individual columns of long tables where the data can be logically ordered either alphabetically or numerically.</li>
        <li><strong>Don&apos;t use row sorting with merged cells.</strong> Sorting won&apos;t work properly if your table contains colspan or rowspan attributes on the cells.</li>
        <li><strong>Don&apos;t use row sorting with the mobile stacked variants.</strong> Sorting won&apos;t work properly with these variants because the column headers at the top of the table don&apos;t appear at narrow widths and are instead moved into the cell content in each row.</li>
        <li><strong>Set a default sort column and direction.</strong> Set the default sort column and direction so that the table renders optimally on the first view.</li>
        <li><strong>Use table filters.</strong> Use table filters to allow users to quickly find information in tables that have large amounts of data. Match the table filter type with the information contained in the column. (For example: a column of data with a small data set of unique values could use a select list)</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in the table must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>The table&apos;s row boundaries must maintain a <code>3:1</code> contrast ratio against the background. (For example the border on top and bottom)</li>
        <li>When provided, the table&apos;s column boundaries should maintain a <code>3:1</code> contrast ratio. (For example the border on left and right)</li>
      </ul>
      <h4 id="section-contrast">Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li><strong>Scrollable tables need to be focusable.</strong> When you make a table scrollable, you must add the <code>tabindex=&quot;0&quot;</code> attribute to the scrollable element. This attribute assures that users navigating with a keyboard are able to select and scroll the table. <code>tabindex=&quot;0&quot;</code> enables focus on elements that do not get focus by default. This attribute does not change the tab order. It places the element in the logical navigation flow.</li>
      </ul>
      <h4 id="section-contrast">Screen Readers</h4>
      <ul className="mb-spacing">
        <li><strong>Interactive tables and table cells.</strong> When table cells are clickable the <code>table</code> requires <code>role=&quot;grid&quot;</code>
          <ul>
            <li><strong>Clickable table cell option 1:</strong> Use <code>role=&quot;grid-cell&quot;</code> on the <code>&lt;td&gt;</code></li> and attach a click event to the cell.
            <li><strong>Clickable table cell option 2:</strong> Use a <code>button</code> in the <code>&lt;td&gt;</code></li> and encapsulate the cell&apos;s content inside the button.
          </ul>
        </li>
        <li><strong>Add an aria-live region to the page when enabling row sorting.</strong> An <code>aria-live</code> region immediately following the <code>&lt;table&gt;</code> element will automatically announces when the sort state changes for visitors using screen readers.</li>
        <li><strong>Use buttons for sorting.</strong> Use a button to allow the user to sort a column. This allows the button to receive focus and be pressed natively.</li>
        <li><strong>Aria-label attributes to sortable column headers.</strong> The <code>aria-label</code> attribute should be added to to the sortable column headers and their toggle sort buttons. These labels should updated to reflect each column&apos;s current sort state (ascending, descending, or unsorted) whenever sort changes.</li>
        <li><strong>Aria-sort attribute.</strong> Use <code>aria-sort=&quot;ascending&quot;</code> and <code>aria-sort=&quot;descending&quot;</code> to convey the sort direction.</li>
        <li><strong>Scope header rows.</strong> Each header cell should have <code>scope=&quot;col&quot;</code> or <code>scope=&quot;row&quot;</code>.</li>
        <li><strong>Complex tables have more than two levels of headers.</strong> Each header should have a unique <code>id</code> and each data cell should have a <code>headers</code> attribute with each related header cell&apos;s <code>id</code> listed.</li>
        <li><strong>Add title and attribution in a caption.</strong> When adding a title, attribution, or a last-updated date to a table, include it in the <code>&lt;caption&gt;</code> tag inside of the <code>&lt;table&gt;</code> element.</li>
        <li><strong>Native Elements.</strong> Where possible, it is recommended that you use native elements rather than using aria and role attributes, as native elements are more widely supported by user agents and assistive technology.  Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!</li>
        <li><strong>Customize.</strong> If you customize this component, ensure that it continues to meet the accessibility requirements.</li>
      </ul>

      <h2 id="section-full-examples">Full Examples</h2>
      <TableDocumentationSimpleTableExample />
      <TableDocumentationFilteringTableExample />
      <TableDocumentationFooterExample />
      <TableDocumentationPaginationTableExample />
      <TableDocumentationSortingTableExample />
      <TableDocumentationFilteringPaginationTableExample />
    </div>
  );
}
