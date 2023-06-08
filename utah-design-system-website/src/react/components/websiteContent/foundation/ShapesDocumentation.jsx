/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';
import pageUrls from '../../routing/pageUrls';
import StaticExample from '../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function ShapesDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Shapes - Rounded Corners</h1>
      <p className="lead-in">
        Rounded corners are primarily used for aesthetic purposes in the Utah Design System UI, aiming to create a contemporary
        appearance. Elements featuring rounded corners tend to convey a sense of refinement, compared to plain rectangular shapes
        with sharp corners.
      </p>
      <p>
        The degree of rounding in corners is determined by the <code>border-radius</code> (css), which can be specified using <code>pixels</code>. When
        referencing &quot;rounded corners&quot; in this document, it will be referred to as the &quot;corner radius&quot;.
      </p>

      <hr />

      <h2 id="section-areas-to-consider" className="mb-spacing">The Default Corner Radius is 6px</h2>
      <p>
        This is the standard corner radius for a wide range of UI components, including the following elements:
      </p>
      <ul>
        <li><Link to={pageUrls.forms}>Form inputs</Link></li>
        <li><Link to={pageUrls.tags}>Tags</Link></li>
        <li><Link to={pageUrls.popups}>Popups</Link></li>
      </ul>

      <h3 id="section-full-corner-radius" className="mb-spacing">Full Corner Radius</h3>
      <p>
        Used for small elements that are <code>24px</code> or less in height; e.g. Labels (<Link to={pageUrls.tags}>Tags</Link>) and <Link to={pageUrls.button}>buttons</Link>.
        Makes the elements appear &quot;pill-like&quot;.
      </p>

      <StaticExample
        renderedExample="Example coming soon!"
        quickTips={(
          <>
            <PreCodeForCodeString
              addHorizontalPadding
              showBackgroundColor
              codeRaw={`
                .utah-design-system {
                  --radius-small1x: 3px;
                  --radius-small: 6px;
                  --radius-medium: 9px;
                  --radius-large: 12px;
                  --radius-circle: 999px;
                }
              `}
            />
            <p>
              The shape scale is a range of 5 corner shape styles defining the amount of cut or roundedness: <code>None</code>, <code>extra small</code>, <code>small</code>, <code>medium</code>, <code>large</code>, and <code>circle</code>.
            </p>
          </>
        )}
      />

      <h3 id="section-symmetry" className="mb-spacing">Symmetry</h3>
      <p>
        Components have symmetrical and asymmetrical corner shapes, which means that symmetrical corners have the same
        value (i.e. <code>border-radius</code>) and asymmetrical corners will have at least 2 corners that share the same value.
      </p>
      <StaticExample
        renderedExample="Example coming soon!"
      />

      <h3 id="section-choosing-corner-style" className="mb-spacing">Choosing an Overall Corner Style</h3>
      <p>
        It is possible to personalize the shape category and dimensions of any style level within the shape scale. These
        adjustments will impact all components associated with that particular shape style, unless overridden.
      </p>

      <h3 id="section-customizing-corner-style" className="mb-spacing">Customizing the Corner Style for Specific Components</h3>
      <p>
        You have the flexibility to modify the corner radius style that is assigned to a component. For instance, buttons are assigned
        to the &quot;full&quot; shape style (e.g. &quot;pill-like&quot;). However, if your product calls for a lesser degree of roundness,
        you can reassign it to the <code>small</code> or <code>medium</code> style within the shape scale.
      </p>

      <h3 id="section-changing-corner-radius" className="mb-spacing">Changing the Corner Radius can Adversely Affect its Content</h3>
      <p>
        Altering the shape family can have an impact on the content displayed within a component. For instance, if a <Link to={pageUrls.card}>card</Link> has
        large rounded corners, it may encroach upon the content area making it more difficult to read or possibly clipping the content. To prevent
        unintended consequences, carefully consider the size of the corner radius when laying your content.
      </p>
    </div>
  );
}

ShapesDocumentation.propTypes = propTypes;
ShapesDocumentation.defaultProps = defaultProps;

export default ShapesDocumentation;
