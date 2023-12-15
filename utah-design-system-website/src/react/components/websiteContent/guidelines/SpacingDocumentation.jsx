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
import { StaticExample } from '../../staticExamples/StaticExample';
import { LightBox } from '../../lightbox/LightBox';
import spacingScreenshot1 from '../../../../static/images/screenshots/spacing/spacing-2xl.webp';
import spacingScreenshot2 from '../../../../static/images/screenshots/spacing/spacing-3xs-2xs.webp';
import spacingScreenshot3 from '../../../../static/images/screenshots/spacing/spacing-6xl.webp';
import spacingScreenshot4 from '../../../../static/images/screenshots/spacing/spacing-default-l-5xl.webp';
import spacingScreenshot5 from '../../../../static/images/screenshots/spacing/spacing-default.webp';
import spacingScreenshot6 from '../../../../static/images/screenshots/spacing/spacing-l-2xl-3xl-4xl.webp';
import spacingScreenshot7 from '../../../../static/images/screenshots/spacing/spacing-s-l.webp';
import spacingScreenshot8 from '../../../../static/images/screenshots/spacing/spacing-xl.webp';

const propTypes = {};
const defaultProps = {};

function SpacingDocumentation() {
  return (
    <div className="documentation-content spacing-documentation">
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
        frustrated. Consider using ample spacing to allow the user&apos;s eye to rest as they traverse the site.
      </p>
      <p>
        Much like a symphony with slow and faster parts, whitespace can create a counterpoint to other busy areas of the web layout.
        In other words, give your web design room to breathe and create a balance between whitespace and the surrounding elements!
      </p>

      <hr />

      <h2 id="section-headlines-paragraphs">Text Element Spacing</h2>
      <p>
        The spacing between text elements should be intentional. It plays a crucial role in establishing relationships and hierarchy within the design.
      </p>

      <h3>Opinionated Defaults</h3>
      <p>
        By default, paragraphs have a <code>line-height</code> of <code>1.4</code> and a <code>bottom margin</code> of <code>24px</code> (<code>spacing&#8209;l</code>).
        Headlines have a margin of <code>zero</code>, so they can remain close to the content/paragraph that they are representing.
      </p>
      <p>
        By default list items <code>&lt;li&gt;</code> are spaced further apart using a bottom margin of <code>spacing&#8209;2xl (40px)</code> with a line height of <code>1.7</code>.
      </p>
      <p>These defaults can be overridden to meet your site&apos;s particular needs.</p>

      <h2 id="section-sizes-table">Spacing Sizes</h2>
      <TableWrapper>
        <Table className="table full-width table--lines-x table--v-align-center">
          <TableHead>
            <TableHeadRow>
              <TableCell>CSS Name</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Space</TableCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>spacing-3xs</TableCell>
              <TableCell>2px</TableCell>
              <TableCell><div className="spacing-example-box"> </div></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-2xs</TableCell>
              <TableCell>4px</TableCell>
              <TableCell><div className="spacing-example-box spacing-2xs" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-xs</TableCell>
              <TableCell>8px</TableCell>
              <TableCell><div className="spacing-example-box spacing-xs" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-s</TableCell>
              <TableCell>12px</TableCell>
              <TableCell><div className="spacing-example-box spacing-s" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing</TableCell>
              <TableCell>16px</TableCell>
              <TableCell><div className="spacing-example-box spacing" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-l</TableCell>
              <TableCell>24px</TableCell>
              <TableCell><div className="spacing-example-box spacing-l" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-xl</TableCell>
              <TableCell>32px</TableCell>
              <TableCell><div className="spacing-example-box spacing-xl" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-2xl</TableCell>
              <TableCell>40px</TableCell>
              <TableCell><div className="spacing-example-box spacing-2xl" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-3xl</TableCell>
              <TableCell>48px</TableCell>
              <TableCell><div className="spacing-example-box spacing-3xl" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-4xl</TableCell>
              <TableCell>64px</TableCell>
              <TableCell><div className="spacing-example-box spacing-4xl" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-5xl</TableCell>
              <TableCell>80px</TableCell>
              <TableCell><div className="spacing-example-box spacing-5xl" /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>spacing-6xl</TableCell>
              <TableCell>96px</TableCell>
              <TableCell><div className="spacing-example-box spacing-6xl" /></TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableWrapper>

      <h2 id="section-css-variables" className="my-spacing">Spacing CSS Variables</h2>
      <p>
        The following CSS variables are included in the Utah Design System and can be applied to any <code>margin</code>, <code>padding</code>, or size property:
      </p>

      <PreCodeForCodeString
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

      <h3>How to apply spacing css variables:</h3>
      <PreCodeForCodeString
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
          .utah-design-system .padded {
            padding: var(--spacing-s);
          }
        `}
      />

      <h2 id="section-css-utility-classes" className="mb-spacing">Spacing CSS Utility Classes</h2>
      <p>
        The following css utility classes are included in the Utah Design System and can be applied directly to html elements.
        It may be necessary to add additional utility classes to meet your needs.
      </p>
      <PreCodeForCodeString
        showBackgroundColor
        allowScrollOverflow
        maxHeight="300px"
        codeRaw={`
          .m-spacing { margin: var(--spacing); }
          .mt-spacing { margin-top: var(--spacing); }
          .mr-spacing { margin-right: var(--spacing); }
          .mb-spacing { margin-bottom: var(--spacing); }
          .ml-spacing { margin-left: var(--spacing); }
          .mx-spacing { margin-left: var(--spacing); margin-right: var(--spacing); }
          .my-spacing { margin-top: var(--spacing); margin-bottom: var(--spacing); }

          .m-spacing-l { margin: var(--spacing-l); }
          .mt-spacing-l { margin-top: var(--spacing-l); }
          .mr-spacing-l { margin-right: var(--spacing-l); }
          .mb-spacing-l { margin-bottom: var(--spacing-l); }
          .ml-spacing-l { margin-left: var(--spacing-l); }
          .mx-spacing-l { margin-left: var(--spacing-l); margin-right: var(--spacing-l); }
          .my-spacing-l { margin-top: var(--spacing-l); margin-bottom: var(--spacing-l); }

          .m-spacing-s { margin: var(--spacing-s); }
          .mt-spacing-s { margin-top: var(--spacing-s); }
          .mr-spacing-s { margin-right: var(--spacing-s); }
          .mb-spacing-s { margin-bottom: var(--spacing-s); }
          .ml-spacing-s { margin-left: var(--spacing-s); }
          .mx-spacing-s { margin-left: var(--spacing-s); margin-right: var(--spacing-s); }
          .my-spacing-s { margin-top: var(--spacing-s); margin-bottom: var(--spacing-s); }

          .m-spacing-xs { margin: var(--spacing-xs); }
          .mt-spacing-xs { margin-top: var(--spacing-xs); }
          .mr-spacing-xs { margin-right: var(--spacing-xs); }
          .mb-spacing-xs { margin-bottom: var(--spacing-xs); }
          .ml-spacing-xs { margin-left: var(--spacing-xs); }
          .mx-spacing-xs { margin-left: var(--spacing-xs); margin-right: var(--spacing-xs); }
          .my-spacing-xs { margin-top: var(--spacing-xs); margin-bottom: var(--spacing-xs); }

          .p-spacing { padding: var(--spacing); }
          .pt-spacing { padding-top: var(--spacing); }
          .pr-spacing { padding-right: var(--spacing); }
          .pb-spacing { padding-bottom: var(--spacing); }
          .pl-spacing { padding-left: var(--spacing); }
          .px-spacing { padding-left: var(--spacing); padding-right: var(--spacing); }
          .py-spacing { padding-top: var(--spacing); padding-bottom: var(--spacing); }

          .p-spacing-l { padding: var(--spacing-l); }
          .pt-spacing-l { padding-top: var(--spacing-l); }
          .pr-spacing-l { padding-right: var(--spacing-l); }
          .pb-spacing-l { padding-bottom: var(--spacing-l); }
          .pl-spacing-l { padding-left: var(--spacing-l); }
          .px-spacing-l { padding-left: var(--spacing-l); padding-right: var(--spacing-l); }
          .py-spacing-l { padding-top: var(--spacing-l); padding-bottom: var(--spacing-l); }

          .m-auto { margin: auto }
          .mt-auto { margin-top: auto }
          .mr-auto { margin-right: auto }
          .mb-auto { margin-bottom: auto }
          .ml-auto { margin-left: auto }
          .mx-auto { margin-left: auto; margin-right: auto }
          .my-auto { margin-top: auto; margin-bottom: auto }
        `}
      />

      <hr />

      <h2 id="section-examples" className="mb-spacing">Examples</h2>
      <StaticExample
        renderedExample={<LightBox image={spacingScreenshot2} alt="Spacing Example" className="flex-2up-gap" />}
        quickTips={(
          <>
            In this example, the <code>--spacing-3xs</code> class is used to apply spacing to the top and bottom of the code
            element. The <code>--spacing-2xs</code> class applies spacing to the left and right.
          </>
        )}
      />

      <StaticExample
        renderedExample={<LightBox image={spacingScreenshot5} alt="Spacing Example" className="flex-2up-gap" />}
        quickTips={(<>Example of <code>--spacing</code></>)}
      />

      <StaticExample
        renderedExample={<LightBox image={spacingScreenshot7} alt="Spacing Example" className="flex-2up-gap" />}
        quickTips={(<>Example of <code>--spacing-s</code> and <code>--spacing-l</code></>)}
      />

      <StaticExample
        renderedExample={<LightBox image={spacingScreenshot8} alt="Spacing Example" className="flex-2up-gap" />}
        quickTips={(<>Example of <code>--spacing-xl</code></>)}
      />

      <StaticExample
        renderedExample={<LightBox image={spacingScreenshot1} alt="Spacing Example" className="flex-2up-gap" />}
        quickTips={(<>Example of <code>--spacing-2xl</code></>)}
      />

      <StaticExample
        renderedExample={<LightBox image={spacingScreenshot6} alt="Spacing Example" className="flex-2up-gap" />}
        quickTips={(<>Example of <code>--spacing-l</code>, <code>--spacing-2xl</code>, <code>--spacing-3xl</code>, and <code>--spacing-4xl</code></>)}
      />

      <StaticExample
        renderedExample={<LightBox image={spacingScreenshot4} alt="Spacing Example" className="flex-2up-gap" />}
        quickTips={(<>Example of <code>--spacing</code> (<i>default</i>), <code>--spacing-xl</code> and <code>--spacing-5xl</code></>)}
      />

      <StaticExample
        renderedExample={<LightBox image={spacingScreenshot3} alt="Spacing Example" className="flex-2up-gap" />}
        quickTips={(<>Example of <code>--spacing-6xl</code></>)}
      />

    </div>
  );
}

SpacingDocumentation.propTypes = propTypes;
SpacingDocumentation.defaultProps = defaultProps;

export default SpacingDocumentation;
