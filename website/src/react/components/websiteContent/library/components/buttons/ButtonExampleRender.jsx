/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { RefShape } from 'utah-design-system-react-library';
import ButtonExamplePropsShape from '../../../../../propTypesShapes/ButtonExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: ButtonExamplePropsShape.isRequired,
  }).isRequired,
  renderedRef: RefShape,
};
const defaultProps = {
  renderedRef: null,
};

function ButtonExampleRender({ state, renderedRef }) {
  return (
    <button
      ref={renderedRef}
      type="button"
      className="button button--primary-color button--solid"
    >
      {state.props.title || ''}
    </button>
  );
}

ButtonExampleRender.propTypes = propTypes;
ButtonExampleRender.defaultProps = defaultProps;

export default ButtonExampleRender;
