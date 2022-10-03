import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import SwitchExamplePropsShape from '../../../../../propTypesShapes/SwitchExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: SwitchExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function SwitchExampleCodeReact({
  state: {
    props: {
      className,
      id,
      isDisabled,
      label,
      labelOff,
      labelOn,
      value,
      width,
    },
  },
}) {
  const displayedProps = [
    className ? `className="${className}"` : null,
    id ? `id="${id}"` : null,
    isDisabled ? 'disabled={true}' : null,
    label ? `label="${label}"` : null,
    labelOff ? `labelOff="${labelOff}"` : null,
    labelOn ? `labelOn="${labelOn}"` : null,
    'onChange={() => { /* ... do something ... */ }',
    `value={${value}}`,
    width ? `width={${width}}` : null,
  ].filter(identity);

  return (
    <div>
      &lt;
      {`Switch${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      /&gt;
    </div>
  );
}

SwitchExampleCodeReact.propTypes = propTypes;
SwitchExampleCodeReact.defaultProps = defaultProps;

export default SwitchExampleCodeReact;
