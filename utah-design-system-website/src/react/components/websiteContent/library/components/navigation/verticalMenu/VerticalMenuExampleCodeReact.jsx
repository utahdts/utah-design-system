import PropTypes from 'prop-types';
import VerticalMenuPropsShape from '../../../../../../propTypesShapes/VerticalMenuPropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../sandbox/SandboxIndent';

const propTypes = {
  state: PropTypes.shape({
    props: VerticalMenuPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function VerticalMenuExampleCode({
  state: {
    props: {
      id,
    },
  },
}) {
  return (
    <>
      &lt;VerticalMenu
      <br />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      -- What goes here? --
      <br />
      &lt;/VerticalMenu&gt;
    </>
  );
}

VerticalMenuExampleCode.propTypes = propTypes;
VerticalMenuExampleCode.defaultProps = defaultProps;

export default VerticalMenuExampleCode;
