// @ts-check
import { popupPlacement } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import TooltipsExamplePropsShape from '../../../../../propTypesShapes/TooltipsExamplePropsShape';
import ExampleCodeReactProp from '../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../sandbox/SandboxIndent';

/** @typedef {import('../../../../../../typedefs.d').TooltipsExamplePropsShape} TooltipsExamplePropsShape */

const propTypes = {
  state: PropTypes.shape({
    props: TooltipsExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {Object} props.state
 * @param {TooltipsExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
function TooltipsExampleCodeReact({
  state: {
    props: {
      isPopperVisible,
      offsetDistance,
      offsetSkidding,
      placement,
      popupText,
    },
  },
}) {
  const offsetDistanceUse = Number(offsetDistance) || 0;
  const offsetSkiddingUse = Number(offsetSkidding) || 0;
  const offsetProp = (
    (offsetDistanceUse !== 0 || offsetSkiddingUse !== 5)
      ? `offset={[${offsetDistanceUse}, ${offsetSkiddingUse}]}`
      : null
  );

  return (
    <>
      const referenceElement = useRef();
      <br />
      ...
      <br />
      &lt;button
      <br />
      &nbsp;&nbsp;className=&quot;button icon-button button--outlined&quot;
      <br />
      &nbsp;&nbsp;onClick=&#123;() =&gt; &#123; &#125;&#125;
      <br />
      &nbsp;&nbsp;ref=&#123;referenceElement&#125;
      <br />
      &nbsp;&nbsp;type=&quot;button&quot;
      <br />
      &gt;
      <br />
      &nbsp;&nbsp;&lt;span className=&quot;utds-icon-before-gear&quot; aria-hidden=&quot;true&quot; /&gt;
      <br />
      &nbsp;&nbsp;&lt;span className=&quot;visually-hidden&quot;&gt;Gear Icon with Tooltip&lt;/span&gt;
      <br />
      &lt;/button&gt;
      <br />

      &lt;Tooltip
      <br />
      <ExampleCodeReactProp displayProp={isPopperVisible ? 'isPopperVisible' : null} indentLevel={1} />
      {
        offsetProp
          ? <ExampleCodeReactProp displayProp={offsetProp} indentLevel={1} />
          : null
      }
      {
        (placement && placement !== popupPlacement.BOTTOM)
          ? <ExampleCodeReactProp displayProp={`placement="${placement}"`} indentLevel={1} />
          : null
      }
      <SandboxIndent indentLevel={1} />
      referenceElement=&#123;referenceElement&#125;
      <br />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      {popupText}
      <br />
      &lt;/Tooltip&gt;
    </>
  );
}

TooltipsExampleCodeReact.propTypes = propTypes;
TooltipsExampleCodeReact.defaultProps = defaultProps;

export default TooltipsExampleCodeReact;
