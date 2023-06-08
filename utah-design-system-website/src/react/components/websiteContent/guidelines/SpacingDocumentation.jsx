/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadRow,
  TableRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';
import StaticExample from '../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function SpacingDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top mb-spacing">Spacing</h1>
      <p className="lead-in">
        Spacing refers to the empty space that exists between various elements and components. Web developers often use margin and padding
        properties to regulate this spacing. To simplify and ensure consistency in implementing spacing, the Utah Design System provides
        predefined classes and variables. These classes and variables can be readily used, making the process of managing spacing more convenient
        and uniform.
      </p>
      <p>
        Consistent and thoughtful use of spacing (whitespace) can greatly improve users&apos; ability to identify, track, and read elements
        in a web interface. When spacing is too narrow, it can create a claustrophobic interface that causes users to feel overwhelmed and
        frustrated. Consider using ample spacing to allow the user&apos;s eye to rest as they traverse the site. Much like a symphony with
        slow and faster parts, whitespace can create a counterpoint to other busy areas of the web layout. In other words, give your web design
        room to breathe and create a balance between whitespace and the surrounding elements!
      </p>

      <hr />

      <h2 id="section-headlines-paragraphs" className="mb-spacing">Headlines and Paragraphs</h2>
      <p>
        The spacing between items should be intentional. It plays a crucial role in establishing relationships and hierarchy within the design.
      </p>
      <p>
        By default, paragraphs have a <code>line-height</code> of <code>1.4em</code> and a <code>bottom margin</code> of <code>24px</code> (<code>-spacing-l</code>).
        Headlines have a margin of <code>zero</code>, so they can remain close to the content/paragraph that they are representing.
      </p>

      <h2 id="section-css-variables" className="mb-spacing">Spacing CSS Variables</h2>
      <p>
        The following CSS variables are included in the Utah Design System and can be applied to any <code>margin</code> or <code>padding</code> property:
      </p>

      <PreCodeForCodeString
        addHorizontalPadding
        showBackgroundColor
        codeRaw={`
        .utah-design-system {
          --spacing-3xs: 2px;
          --spacing-2xs: 4px;
          --spacing-xs:  8px;
          --spacing-s:   12px;
          --spacing:     16px;
          --spacing-l:   24px;
          --spacing-xl:  32px;
          --spacing-2xl: 40px;
          --spacing-3xl: 48px;
          --spacing-4xl: 64px;
          --spacing-5xl: 80px;
          --spacing-6xl: 96px;        
        }
        `}
      />

      <h2 id="section-css-utility-classes" className="mb-spacing">Spacing CSS Utility Classes</h2>
      <p>
        The following classes are included in the Utah Design System and can be applied directly to html elements:
      </p>
      <PreCodeForCodeString
        addHorizontalPadding
        showBackgroundColor
        codeRaw="Information coming soon!"
      />

      <hr />

      <h2 id="section-examples" className="mb-spacing">Examples</h2>
      <StaticExample
        renderedExample="Example coming soon!"
        quickTips={(
          <>
            In this example, the <code>--spacing-3xs</code> class is used to apply spacing to the top and bottom of the code
            element. The <code>--spacing-2xs</code> class applies spacing to the left and right.
          </>
        )}
      />

      <StaticExample
        renderedExample="Example coming soon!"
        quickTips={(<>Example of <code>Example of --spacing-s and --spacing-l</code></>)}
      />

      <StaticExample
        renderedExample="Example coming soon!"
        quickTips={(<>Example of <code>--spacing-xl</code></>)}
      />

      <StaticExample
        renderedExample="Example coming soon!"
        quickTips={(<>Example of <code>--spacing-2xl</code></>)}
      />

      <StaticExample
        renderedExample="Example coming soon!"
        quickTips={(<>Example of <code>--spacing-l</code>, <code>--spacing-2xl</code>, <code>--spacing-3xl</code>, and <code>--spacing-4xl</code></>)}
      />

      <StaticExample
        renderedExample="Example coming soon!"
        quickTips={(<>Example of <code>--spacing</code> (<i>default</i>), <code>--spacing-xl</code> and <code>--spacing-5xl</code></>)}
      />

      <StaticExample
        renderedExample="Example coming soon!"
        quickTips={(<>Example of <code>--spacing-6xl</code></>)}
      />

      <p>How to apply spacing css variables:</p>
      <PreCodeForCodeString
        addHorizontalPadding
        showBackgroundColor
        codeRaw={`
          .utah-design-system ul, .utah-design-system ol {
            padding: 0 0 0 var(--spacing-2xl);
            margin: 0;
            line-height: 1.7;
          }
          .utah-design-system p {
            margin: 0 0 var(--spacing-l);
          }
          .utah-design-system .important {
            padding: var(--spacing-l);
          }
        `}
      />

      <TableWrapper>
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableCell>Token Name</TableCell>
              <TableCell>Size (px)</TableCell>
              <TableCell>Size (number)</TableCell>
              <TableCell>Space</TableCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><code>zero</code></TableCell>
              <TableCell><code>0px</code></TableCell>
              <TableCell><code>0</code></TableCell>
              <TableCell><span className="colored-spacing"> </span></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code>xxxs</code></TableCell>
              <TableCell><code>&apos;4px&apos;</code></TableCell>
              <TableCell><code>4</code></TableCell>
              <TableCell><span className="colored-spacing pr-spacing-3xs"> </span></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code>xxs</code></TableCell>
              <TableCell><code>&apos;8px&apos;</code></TableCell>
              <TableCell><code>8</code></TableCell>
              <TableCell><span className="colored-spacing pr-spacing-2xs"> </span></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code>xs</code></TableCell>
              <TableCell><code>&apos;12px&apos;</code></TableCell>
              <TableCell><code>12</code></TableCell>
              <TableCell><span className="colored-spacing pr-spacing-xs"> </span></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code>s</code> <span className="base-value">BASE VALUE</span></TableCell>
              <TableCell><code>&apos;16px&apos;</code></TableCell>
              <TableCell><code>16</code></TableCell>
              <TableCell><span className="colored-spacing pr-spacing-s"> </span></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code>m</code></TableCell>
              <TableCell><code>&apos;24px&apos;</code></TableCell>
              <TableCell><code>24</code></TableCell>
              <TableCell><span className="colored-spacing pr-spacing"> </span></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code>l</code></TableCell>
              <TableCell><code>&apos;32px&apos;</code></TableCell>
              <TableCell><code>32</code></TableCell>
              <TableCell><span className="colored-spacing pr-spacing-l"> </span></TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code>xl</code></TableCell>
              <TableCell><code>&apos;40px&apos;</code></TableCell>
              <TableCell><code>40</code></TableCell>
              <TableCell><span className="colored-spacing pr-spacing-xl"> </span></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>

      <h2 id="section-lists" className="mb-spacing">Unordered and Ordered Lists</h2>
      <p>The <code>line-height</code> of unordered and ordered lists is <code>1.7em</code> by default.</p>

    </div>
  );
}

SpacingDocumentation.propTypes = propTypes;
SpacingDocumentation.defaultProps = defaultProps;

export default SpacingDocumentation;
