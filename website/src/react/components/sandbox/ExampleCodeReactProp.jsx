import PropTypes from 'prop-types';
import SandboxIndent from './SandboxIndent';

const propTypes = {
  displayProp: PropTypes.string,
  indentLevel: PropTypes.number.isRequired,
};
const defaultProps = {
  displayProp: null,
};

function ExampleCodeReactProp({ displayProp, indentLevel }) {
  return (
    displayProp
      ? (
        <>
          <span>
            <SandboxIndent indentLevel={indentLevel} />
            {displayProp}
          </span>
          <br />
        </>
      )
      : null
  );
}

ExampleCodeReactProp.propTypes = propTypes;
ExampleCodeReactProp.defaultProps = defaultProps;

export default ExampleCodeReactProp;
