/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  ExternalLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';
import { StaticExample } from '../../staticExamples/StaticExample';
import { LightBox } from '../../lightbox/LightBox';
import gridScreenshot from '../../../../static/images/screenshots/gridLayout.webp';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';

const propTypes = {};
const defaultProps = {};

function LayoutDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Layout</h1>
      <p className="lead-in">
        The State of Utah Design System is meant for State agencies, developers, and other designers to create a
        unified experience for the citizens of Utah.
      </p>
      <p>
        This section serves as a guide to help achieve that consistency through the use of layouts.
      </p>

      <hr />

      <h2 id="section-areas-to-consider" className="mb-spacing">Areas to Consider</h2>
      <h3 id="section-mobile-first" className="mb-spacing">Mobile first</h3>
      <p>
        As a general guideline, consider a mobile first approach when designing a site. This means creating layouts
        with smaller screens by default. By adopting the constraints of smaller screens, we can focus on the most
        important aspects and improve the overall user experience.
      </p>
      <p>
        A mobile first approach has the additional benefit of making your website or application more accessible
        by allowing users to zoom in using the built in browser zoom tools. A layout that is flexible to all screen
        sizes will also be zoomable in this way.
      </p>

      <h2 id="section-direction-guidance" className="mb-spacing">Direction and Guidance</h2>
      <h3 id="section-grid-system" className="mb-spacing">Grid System</h3>
      <p>
        To ensure consistency, we recommend the use of a grid system. It helps you arrange your content in a more structured
        and visually pleasing way.
      </p>
      <StaticExample
        renderedExample={<LightBox image={gridScreenshot} alt="Layout Grid" className="flex-2up-gap" />}
        quickTips={(
          <>
            <p>
              A grid is composed of three elements:
            </p>
            <ul>
              <li>
                <strong>Columns:</strong> the areas where the content lives. Typically, there are a total of 12
                columns (<code>80px</code> per column, <code>1224px</code> total, in the example above).
                This allows you to arrange your content into half, thirds, fourths and sixths.
                Note: the number of columns is fluid. It varies based on the screen size. 12 columns is ideal for a desktop,
                while a mobile application might go down to 3 or 4 columns.
              </li>
              <li>
                <strong>Gutters:</strong> the spacing between the columns. An even spacing between columns helps organize your page (<code>24px</code> in the example above).
              </li>
              <li>
                <strong>Margins:</strong> the spacing between the left and right edges of the screen.
              </li>
            </ul>
          </>
        )}
      />
      <p>To determine the width and spacing of your grid, please refer to the <Link to={pageUrls.spacing}>spacing documentation</Link>.</p>

      <h3 id="section-css" className="mb-spacing">CSS</h3>
      <p>
        The State of Utah Design System is offering some ready-to-use css. The following CSS variables provide a <code>base width</code> for your main content.
      </p>
      <TableWrapper>
        <Table className="table table--lines-x table--alt">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell className="text-left">Main content size</TableHeadCell>
              <TableHeadCell className="text-left">Narrow (8 columns)</TableHeadCell>
              <TableHeadCell className="text-left">Medium (12 columns)</TableHeadCell>
              <TableHeadCell className="text-left">Wide (14 columns)</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Value</TableCell>
              <TableCell>808px</TableCell>
              <TableCell>1224px</TableCell>
              <TableCell>1432px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CSS Variable</TableCell>
              <TableCell>--content-width-narrow</TableCell>
              <TableCell>--content-width</TableCell>
              <TableCell>--content-width-wide</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>

      <h3 id="section-grid" className="my-spacing">Grid</h3>
      <p>
        The use of <code>display:grid</code> can help implement your design. To utilize predefined values in the Utah Design System, first, make
        sure the parent container includes the <code>.grid-wrapper</code> class. Then, use a combination of the <code>.grid-fixed</code> class and
        one of the examples below. This will evenly distribute your content into 2, 3, or 4 columns.
      </p>
      <TableWrapper>
        <Table className="table table--lines-x table--alt table--full-width mb-spacing">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell className="text-left">Number of columns</TableHeadCell>
              <TableHeadCell className="text-left">2 columns</TableHeadCell>
              <TableHeadCell className="text-left">3 columns</TableHeadCell>
              <TableHeadCell className="text-left">4 columns</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>CSS Class</TableCell>
              <TableCell>.grid-fixed--2col</TableCell>
              <TableCell>.grid-fixed--3col</TableCell>
              <TableCell>.grid-fixed--4col</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
      <p>
        The State of Utah Design System also offers a set of variables to attain a similar result. These variables are all based on the width of
        the main content (<code>1224px</code> by default).
      </p>
      <TableWrapper>
        <Table className="table table--lines-x table--alt table--full-width mb-spacing">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell className="text-left">Percentage<br />(of the width of the main content)</TableHeadCell>
              <TableHeadCell className="text-left">50%</TableHeadCell>
              <TableHeadCell className="text-left">33%</TableHeadCell>
              <TableHeadCell className="text-left">25%</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>CSS Variable</TableCell>
              <TableCell>--grid-fixed-half</TableCell>
              <TableCell>--grid-fixed-third</TableCell>
              <TableCell>--grid-fixed-fourth</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
      <p>
        For more information about CSS grid layout, please refer to this <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout">Mozilla</ExternalLink> or
        this <ExternalLink href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Tricks</ExternalLink>. You can also find our CSS
        on our <ExternalLink href="https://github.com/utahdts/utah-design-system">github repo</ExternalLink>.
      </p>

      <h3 id="section-flex" className="mb-spacing">Flex</h3>
      <p>
        Flexbox is a layout method for arranging content. It allows elements to fill additional space or shrink into smaller spaces dynamically. While a grid
        layout and a flexbox layout can both help you achieve your desired result, a flexbox layout is more content centric. Each child element can expand to as
        much as it needs.
      </p>
      <p>
        For more information about CSS flexible box layout, please refer to this <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout">Mozilla</ExternalLink> or
        this <ExternalLink href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks</ExternalLink>.
      </p>
      <p>
        The Utah Design System provides a series of utility classes that can be used. You can find them on our <ExternalLink href="https://github.com/utahdts/utah-design-system">github repo</ExternalLink>.
      </p>
      <PreCodeForCodeString
        className="size-small"
        showBackgroundColor
        codeRaw={`
        /* flex */
        .flex { display: flex; }

        .flex-row { flex-direction: row; }
        .flex-row-reverse { flex-direction: row-reverse; }
        .flex-col { flex-direction: column; }
        .flex-col-reverse { flex-direction: column-reverse; }

        .flex-wrap { flex-wrap: wrap; }
        .flex-wrap-reverse { flex-wrap: wrap-reverse; }
        .flex-nowrap { flex-wrap: nowrap; }

        .flex-1 { flex: 1 1 0%; }
        .flex-auto { flex: 1 1 auto; }
        .flex-initial { flex: 0 1 auto; }
        .flex-none { flex: none; }

        /* flex - justify content */
        .justify-start { justify-content: flex-start; }
        .justify-end { justify-content: flex-end; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-around { justify-content: space-around; }
        .justify-evenly { justify-content: space-evenly; }
        /* grid - justify self */
        .justify-self-auto { justify-self: auto; }
        .justify-self-start { justify-self: start; }
        .justify-self-end { justify-self: end; }
        .justify-self-center { justify-self: center; }
        .justify-self-stretch { justify-self: stretch; }
        /* flex - align items */
        .items-start { align-items: flex-start; }
        .items-end { align-items: flex-end; }
        .items-center { align-items: center; }
        .items-baseline { align-items: baseline; }
        .items-stretch { align-items: stretch; }
        /* flex - align self */
        .self-auto { align-self: auto; }
        .self-start { align-self: flex-start; }
        .self-end { align-self: flex-end; }
        .self-center { align-self: center; }
        .self-stretch { align-self: stretch; }
        .self-baseline { align-self: baseline; }
        /* flex/grid - gap */
        .gap-xs { gap: var(--spacing-xs); }
        .gap-s { gap: var(--spacing-s); }
        .gap { gap: var(--spacing); }
        .gap-l { gap: var(--spacing-l); }

        .flex-4up {
          flex: 0 1 25%;
        }
        .flex-4up-gap {
          flex: 0 1 calc(25% - var(--spacing));
        }
        .flex-3up-gap {
          flex: 0 1 calc(33% - var(--spacing));
        }
        .flex-2up-gap {
          flex: 0 1 calc(50% - var(--spacing));
        }
        `}
      />
      <h3 id="section-summary" className="mb-spacing">Summary</h3>
      <ul>
        <li>use <code>display:grid</code> when you need the layout to shape the content.</li>
        <li>use <code>display:flex</code> when the content shapes the layout.</li>
      </ul>
    </div>
  );
}

LayoutDocumentation.propTypes = propTypes;
LayoutDocumentation.defaultProps = defaultProps;

export default LayoutDocumentation;
