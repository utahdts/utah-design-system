/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import { Button } from '@utahdts/utah-design-system';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../routing/pageUrls';
import StaticExample from '../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function ShapesDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Shape - Rounded Corners</h1>
      <p className="lead-in">
        Rounded corners are primarily used for aesthetic purposes in the Utah Design System, aiming to create a contemporary
        appearance. Elements featuring rounded corners tend to convey a sense of refinement, compared to plain rectangular shapes
        with sharp corners. In addition, rounded corners also denote interactive elements as well.
      </p>
      <p>
        The degree of rounding in corners is determined by the <code>border-radius</code> (css), which can be specified using <code>pixels</code>. When
        referencing &quot;rounded corners&quot; in this document, it will be referred to as the &quot;corner radius&quot;.
      </p>

      <hr />

      <h2 id="section-example" className="mt-spacing">Example</h2>
      <StaticExample
        renderedExample={(
          <div className="flex justify-around items-center full-width">
            <div className="flex flex-col items-center">
              <div className="tag tag--primary-color mb-spacing-s">Tag</div>
              <code>6px</code>
            </div>
            <div className="flex flex-col items-center">
              <div className="home-banner__title mb-spacing-s">Utah<br />Design<br />System</div>
              <code>12px</code>
            </div>
            <div className="flex flex-col items-center">
              <Button onClick={() => console.log('click')} className="button--primary-color button--solid mb-spacing-s">Button</Button>
              <code>999px</code>
            </div>
          </div>
        )}
        quickTips={(
          <>
            <PreCodeForCodeString
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

      <h2 id="section-areas-to-consider">Default Corner Radius</h2>
      <p className="mb-auto">
        The default corner radius is 6-9px. This is the standard corner radius for a wide range of UI components, including the following elements:
      </p>
      <ul>
        <li><Link to={pageUrls.forms}>Form inputs</Link></li>
        <li><Link to={pageUrls.tags}>Tags</Link></li>
        <li><Link to={pageUrls.popups}>Popups</Link></li>
      </ul>

      <h2 id="section-full-corner-radius" className="mt-spacing">Full Corner Radius</h2>
      <p>
        Used for small elements that are <code>24px</code> or less in height; e.g. Labels (<Link to={pageUrls.tags}>Tags</Link>) and <Link to={pageUrls.button}>buttons</Link>.
        Makes the elements appear &quot;pill-like&quot;.
      </p>

      <h2 id="section-symmetry">Symmetry</h2>
      <p>
        Components have symmetrical and asymmetrical corner shapes, which means that symmetrical corners have the same
        value (i.e. <code>border-radius</code>) and asymmetrical corners will have at least 2 corners that share the same value.
      </p>
      <StaticExample
        renderedExample={(
          <div className="flex justify-around items-center full-width">
            <div className="flex flex-col items-center">
              <div className="menu-side-panel">
                <strong>Guidelines and Standards</strong>
                <ul>
                  <li className="menu-item">
                    <span className="menu-item__title">
                      <a className="menu-item--selected" href="#section-symmetry">Shape (rounded corners)</a>
                    </span>
                    <span className="menu-chiclet" />
                  </li>
                </ul>
              </div>
              <code className="mt-spacing-s">Asymmetrical</code>
            </div>
            <div className="flex flex-col items-center">
              <div className="menu-side-panel">
                <strong>Guidelines and Standards</strong>
                <ul>
                  <li className="menu-item">
                    <span className="menu-item__title">
                      <a className="shape-examples-link" href="#section-symmetry">Shape (rounded corners)</a>
                    </span>
                    <span className="menu-chiclet" />
                  </li>
                </ul>
              </div>
              <code className="mt-spacing-s">Symmetrical</code>
            </div>
          </div>
        )}
      />

      <h2 id="section-choosing-corner-style">Choosing an Overall Corner Style</h2>
      <p>
        It is possible to personalize the shape category and dimensions of any style level within the shape scale. These
        adjustments will impact all components associated with that particular shape style, unless overridden.
      </p>

      <h2 id="section-customizing-corner-style">Customizing the Corner Style</h2>
      <p>
        You have the flexibility to modify the corner radius style that is assigned to a component. For instance, buttons are assigned
        to the &quot;full&quot; shape style (e.g. &quot;pill-like&quot;). However, if your product calls for a lesser degree of roundness,
        you can reassign it to the <code>small</code> or <code>medium</code> style within the shape scale.
      </p>

      <h2 id="section-changing-corner-radius">Corder Radius and Content</h2>
      <p>
        Modifying the shape style can have an impact on the content contained within a component.
      </p>
      <p>
        For instance, if a card has large rounded corners, it may encroach upon the content area making it more difficult to read or possibly clipping the content. To prevent unintended consequences, carefully consider the size of the corner radius when laying out your content.
      </p>
    </div>
  );
}

ShapesDocumentation.propTypes = propTypes;
ShapesDocumentation.defaultProps = defaultProps;

export default ShapesDocumentation;
