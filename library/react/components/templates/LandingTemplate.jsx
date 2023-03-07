import PropTypes from 'prop-types';

const propTypes = {
  content: PropTypes.func.isRequired,
};
const defaultProps = {};

function LandingTemplate({ content: Content }) {
  return (<Content />);
}

LandingTemplate.propTypes = propTypes;
LandingTemplate.defaultProps = defaultProps;

export default LandingTemplate;
