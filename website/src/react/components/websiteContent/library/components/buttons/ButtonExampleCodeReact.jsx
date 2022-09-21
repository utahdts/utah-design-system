import PropTypes from 'prop-types';
import ButtonExamplePropsShape from '../../../../../propTypesShapes/ButtonExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: ButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function ButtonExampleCode({ state }) {
  return (
    <div>
      &lt;Button&gt;
      {state.props.title}
      &lt;/Button&gt;
    </div>
  );
}

ButtonExampleCode.propTypes = propTypes;
ButtonExampleCode.defaultProps = defaultProps;

export default ButtonExampleCode;
