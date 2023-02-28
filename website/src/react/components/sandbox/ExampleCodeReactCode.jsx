import PropTypes from 'prop-types';

const propTypes = {
  code: PropTypes.string,
  isRenderable: PropTypes.bool.isRequired,
};
const defaultProps = {
  code: null,
};

function ExampleCodeReactCode({ code, isRenderable }) {
  // eslint-disable-next-line react/jsx-one-expression-per-line
  return (isRenderable ? (<><span>{code}</span><br /></>) : undefined);
}
ExampleCodeReactCode.propTypes = propTypes;
ExampleCodeReactCode.defaultProps = defaultProps;

export default ExampleCodeReactCode;
