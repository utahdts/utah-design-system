import PropTypes from 'prop-types';

const propTypes = {
  indentLevel: PropTypes.number.isRequired,
};
const defaultProps = {};

export default function SandboxIndent({ indentLevel }) {
  // eslint-disable-next-line react/no-array-index-key
  return Array.from({ length: indentLevel }).map((_, indentIndex) => <span key={`sandbox-indent--${indentIndex}`}>&nbsp;&nbsp;</span>);
}

SandboxIndent.propTypes = propTypes;
SandboxIndent.defaultProps = defaultProps;
