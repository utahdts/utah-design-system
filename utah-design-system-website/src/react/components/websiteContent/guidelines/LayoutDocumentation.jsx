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
import pageUrls from '../../routing/pageUrls';
import StaticExample from '../../staticExamples/StaticExample';

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

      <h2 id="section-direction-guidance" className="mb-spacing">Direction and Guidance</h2>
      <h3 id="section-grid-system" className="mb-spacing">Grid System</h3>
      <p>
        To ensure consistency, we recommend the use of a grid system. It helps you arrange your content in a more structured
        and visually pleasing way.
      </p>
      <StaticExample
        renderedExample="Example coming soon!"
        quickTips={(
          <>
            <p>
              A grid is composed of three elements:
            </p>
            <ul>
              <li>
                <strong>Columns:</strong> the areas where the content lives. Typically, there are a total of 12
                columns (<code>80px</code> per column, <code>1224px</code> total, in the example below).
                This allows you to arrange your content into half, thirds, fourths and sixths.
                Note: the number of columns is fluid. It varies based on the screen size. 12 columns is ideal for a desktop,
                while a mobile application might go down to 3 or 4 columns.
              </li>
              <li>
                <strong>Gutters:</strong> the spacing between the columns. An even spacing between columns helps organize your page (<code>24px</code> in the example below).
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
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Main content size</TableHeadCell>
              <TableHeadCell>Narrow (8 columns)</TableHeadCell>
              <TableHeadCell>Medium (12 columns)</TableHeadCell>
              <TableHeadCell>Wide (14 columns)</TableHeadCell>
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

      <h3 id="section-grid" className="mb-spacing">Grid</h3>
      <p>
        The use of <code>display:grid</code> can help implement your design. To utilize predefined values in the Utah Design System, first, make
        sure the parent container includes the <code>.grid-wrapper</code> class. Then, use a combination of the <code>.grid-fixed</code> class and
        one of the examples below. This will evenly distribute your content into 2, 3, or 4 columns.
      </p>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Number of columns</TableHeadCell>
              <TableHeadCell>2 columns</TableHeadCell>
              <TableHeadCell>3 columns</TableHeadCell>
              <TableHeadCell>4 columns</TableHeadCell>
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
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Percentage (of the width of the main content)</TableHeadCell>
              <TableHeadCell>50%</TableHeadCell>
              <TableHeadCell>33%</TableHeadCell>
              <TableHeadCell>25%</TableHeadCell>
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
