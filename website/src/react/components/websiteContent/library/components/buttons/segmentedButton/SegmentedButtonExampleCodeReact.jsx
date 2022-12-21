import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import SegmentedButtonPropsShape from '../../../../../../propTypesShapes/SegmentedButtonPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: SegmentedButtonPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function SegmentedButtonExampleCode({
  state: {
    props: {
      id,
    },
  },
}) {
  const displayedProps = [
    id ? `id="${id}"` : null,
  ].filter(identity);

  return (
    <>
      &lt;
      {`SegmentedButton${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      &gt;
      &lt;/SegmentedButton&gt;
    </>
  );
}

SegmentedButtonExampleCode.propTypes = propTypes;
SegmentedButtonExampleCode.defaultProps = defaultProps;

export default SegmentedButtonExampleCode;
