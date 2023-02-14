import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import IconButtonPropsShape from '../../../../../../propTypesShapes/IconButtonPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: IconButtonPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function IconButtonExampleCode({
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
      {`IconButton${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      &gt;
      &lt;/IconButton&gt;
    </>
  );
}

IconButtonExampleCode.propTypes = propTypes;
IconButtonExampleCode.defaultProps = defaultProps;

export default IconButtonExampleCode;
