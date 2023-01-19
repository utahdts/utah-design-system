import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import VerticalMenuPropsShape from '../../../../../../propTypesShapes/VerticalMenuPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: VerticalMenuPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function VerticalMenuExampleCode({
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
      {`VerticalMenu${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      &gt;
      &lt;/VerticalMenu&gt;
    </>
  );
}

VerticalMenuExampleCode.propTypes = propTypes;
VerticalMenuExampleCode.defaultProps = defaultProps;

export default VerticalMenuExampleCode;
