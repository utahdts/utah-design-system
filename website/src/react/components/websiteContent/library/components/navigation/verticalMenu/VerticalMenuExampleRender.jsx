import PropTypes from 'prop-types';
import { RefShape } from '@utahdts/utah-design-system';
import VerticalMenuPropsShape from '../../../../../../propTypesShapes/VerticalMenuPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: VerticalMenuPropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function VerticalMenuExampleRender({
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

VerticalMenuExampleRender.propTypes = propTypes;
VerticalMenuExampleRender.defaultProps = defaultProps;

export default VerticalMenuExampleRender;
