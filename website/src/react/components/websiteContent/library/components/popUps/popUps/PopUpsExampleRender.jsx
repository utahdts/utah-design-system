import PropTypes from 'prop-types';
import { RefShape } from '@utahdts/utah-design-system';
import PopUpsPropsShape from '../../../../../../propTypesShapes/PopUpsPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: PopUpsPropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function PopUpsExampleRender({
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

PopUpsExampleRender.propTypes = propTypes;
PopUpsExampleRender.defaultProps = defaultProps;

export default PopUpsExampleRender;
