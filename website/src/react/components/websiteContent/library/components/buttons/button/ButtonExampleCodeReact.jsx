import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import { formElementSizesEnum } from '@utahdts/utah-design-system';
import ButtonExamplePropsShape from '../../../../../../propTypesShapes/ButtonExamplePropsShape';

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
      iconLeft,
      iconRight,
      isDisabled,
      id,
      size,
      style,
      title,
      type,
    },
  },
}) {
  const displayedProps = [
    appearance ? `appearance="${appearance}"` : null,
    color ? `color="${color}"` : null,
    (iconLeft !== 'none' && iconLeft) ? `iconLeft={Icons.${iconLeft}()}` : null,
    (iconRight !== 'none' && iconRight) ? `iconRight={Icons.${iconRight}()}` : null,
    isBusy ? 'busy={true}' : null,
    isDisabled ? 'disabled={true}' : null,
    id ? `id="${id}"` : null,
    className ? `className="${className}"` : null,
    style ? `style="${style}"` : null,
    (type && type !== 'button') ? `type="${type}"` : null,
    'onClick={() => { /* ... do something ... */ }',
    (!size || size === formElementSizesEnum.MEDIUM) ? null : `size={formElementSizesEnum.${Object.entries(formElementSizesEnum).find(([, value]) => value === size)[0]}}`,
  ].filter(identity);

  return (
    <>
      &lt;
      {`Button${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      &gt;
      {title}
      &lt;/Button&gt;
    </>
  );
}

ButtonExampleCode.propTypes = propTypes;
ButtonExampleCode.defaultProps = defaultProps;

export default ButtonExampleCode;
