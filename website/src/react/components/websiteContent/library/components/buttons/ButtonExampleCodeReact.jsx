import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import ButtonExamplePropsShape from '../../../../../propTypesShapes/ButtonExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: ButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function ButtonExampleCode({
  state: {
    props: {
      appearance,
      isBusy,
      className,
      color,
      isDisabled,
      id,
      style,
      title,
      type,
    },
  },
}) {
  const displayedProps = [
    appearance ? `appearance="${appearance}"` : null,
    color ? `color="${color}"` : null,
    isBusy ? 'busy={true}' : null,
    isDisabled ? 'disabled={true}' : null,
    id ? `id="${id}"` : null,
    className ? `className="${className}"` : null,
    style ? `style="${style}"` : null,
    (type && type !== 'button') ? `type="${type}"` : null,
    'onClick={() => { /* ... do something ... */ }',
  ].filter(identity);

  return (
    <div>
      &lt;
      {`Button${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      &gt;
      {title}
      &lt;/Button&gt;
    </div>
  );
}

ButtonExampleCode.propTypes = propTypes;
ButtonExampleCode.defaultProps = defaultProps;

export default ButtonExampleCode;
