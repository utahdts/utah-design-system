import PropTypes from 'prop-types';
import SegmentedButtonPropsShape from '../../../../../../propTypesShapes/SegmentedButtonPropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../sandbox/SandboxIndent';

const propTypes = {
  state: PropTypes.shape({
    props: SegmentedButtonPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function SegmentedButtonExampleCode({
  state: {
    props: {
      id,
    },
  },
}) {
  return (
    <>
      &lt;SegmentedButton
      <br />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      -- what goes here? --
      <br />
      &lt;/SegmentedButton&gt;
    </>
  );
}

SegmentedButtonExampleCode.propTypes = propTypes;
SegmentedButtonExampleCode.defaultProps = defaultProps;

export default SegmentedButtonExampleCode;
