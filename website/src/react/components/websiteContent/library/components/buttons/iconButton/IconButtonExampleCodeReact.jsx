import { formElementSizesEnum } from '@utahdts/utah-design-system';
import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import IconButtonExamplePropsShape from '../../../../../../propTypesShapes/IconButtonExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: IconButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function IconButtonExampleCode({
  state: {
    props: {
      appearance,
      color,
      iconCssClass,
      isDisabled,
      id,
      size,
      title,
    },
  },
}) {
  const displayedProps = [
    appearance ? `appearance="${appearance}"` : null,
    color ? `color="${color}"` : null,
    `icon={<span className={\`utds-icon-before-${iconCssClass}\`} aria-hidden="true" />}`,
    isDisabled ? 'disabled={true}' : null,
    id ? `id="${id}"` : null,
    'onClick={() => { /* ... do something ... */ }',
    (!size || size === formElementSizesEnum.MEDIUM) ? null : `size={formElementSizesEnum.${Object.entries(formElementSizesEnum).find(([, value]) => value === size)[0]}}`,
    `title="${title}"`,
  ].filter(identity);

  return (
    <>
      &lt;
      {`IconButton${displayedProps.length ? ' ' : ''}`}
      {displayedProps.join(' ')}
      &nbsp;/&gt;
    </>
  );
}

IconButtonExampleCode.propTypes = propTypes;
IconButtonExampleCode.defaultProps = defaultProps;

export default IconButtonExampleCode;
