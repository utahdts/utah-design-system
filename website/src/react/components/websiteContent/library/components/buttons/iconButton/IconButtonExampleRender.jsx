import PropTypes from 'prop-types';
import { RefShape } from '@utahdts/utah-design-system';
import IconButtonPropsShape from '../../../../../../propTypesShapes/IconButtonPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: IconButtonPropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function IconButtonExampleRender({
  state: {
    props: {
      id,
    },
  },
  innerRef,
}) {
  return (
    <p
      id={id}
      ref={innerRef}
    >
      Component goes here!
    </p>
  );
}

IconButtonExampleRender.propTypes = propTypes;
IconButtonExampleRender.defaultProps = defaultProps;

export default IconButtonExampleRender;
