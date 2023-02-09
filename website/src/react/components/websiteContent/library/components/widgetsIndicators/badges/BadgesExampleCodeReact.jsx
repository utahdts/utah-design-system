import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import { formElementSizesEnum } from '@utahdts/utah-design-system';
import BadgesExamplePropsShape from '../../../../../../propTypesShapes/BadgesExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: BadgesExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function BadgesExampleCode({
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
    (type && type !== 'badge') ? `type="${type}"` : null,
    'onClick={() => { /* ... do something ... */ }',
    (!size || size === formElementSizesEnum.MEDIUM) ? null : `size={formElementSizesEnum.${Object.entries(formElementSizesEnum).find(([, value]) => value === size)[0]}}`,
  ].filter(identity);

  return (
    <>
      &lt;
      {`Badges${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      &gt;
      {title}
      &lt;/Badges&gt;
    </>
  );
}

BadgesExampleCode.propTypes = propTypes;
BadgesExampleCode.defaultProps = defaultProps;

export default BadgesExampleCode;
