import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import PopUpsPropsShape from '../../../../../../propTypesShapes/PopupsPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: PopUpsPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function PopUpsExampleCode({
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
      {`PopUps${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      &gt;
      &lt;/PopUps&gt;
    </>
  );
}

PopUpsExampleCode.propTypes = propTypes;
PopUpsExampleCode.defaultProps = defaultProps;

export default PopUpsExampleCode;
