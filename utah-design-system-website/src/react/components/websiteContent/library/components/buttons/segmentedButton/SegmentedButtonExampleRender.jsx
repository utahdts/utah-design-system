import PropTypes from 'prop-types';
import { RefShape } from '@utahdts/utah-design-system';
import SegmentedButtonPropsShape from '../../../../../../propTypesShapes/SegmentedButtonPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: SegmentedButtonPropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function SegmentedButtonExampleRender({
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

SegmentedButtonExampleRender.propTypes = propTypes;
SegmentedButtonExampleRender.defaultProps = defaultProps;

export default SegmentedButtonExampleRender;
