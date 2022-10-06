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
      icon,
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
    (icon && icon !== 'none') ? `sliderChildren={icons.${icon}()}` : null,
  ].filter(identity);

  return (
    <>
      &lt;
      {`Switch${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      /&gt;
    </>
  );
}

SwitchExampleCodeReact.propTypes = propTypes;
SwitchExampleCodeReact.defaultProps = defaultProps;

export default SwitchExampleCodeReact;
