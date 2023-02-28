import { IconButton, RefShape, useBanner } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import IconButtonExamplePropsShape from '../../../../../../propTypesShapes/IconButtonExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: IconButtonExamplePropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

/**
 * @typedef {import('../../../../../../propTypesShapes/IconButtonExamplePropsShape').IconButtonExampleProps} IconButtonExampleProps
 * @typedef {import('@utahdts/utah-design-system/react/propTypesShapes/RefShape').Ref} Ref
 *
 * @param {{state: {props: IconButtonExampleProps}, innerRef: Ref}} props
 * @returns {React.ReactElement}
 */
function IconButtonExampleRender({
  state: {
    props: {
      appearance,
      color,
      iconCssClass,
      id,
      isDisabled,
      size,
      title,
    },
  },
  innerRef,
}) {
  const showBanner = useBanner();
  return (
    <IconButton
      appearance={appearance}
      color={color}
      icon={<span className={`utds-icon-before-${iconCssClass}`} aria-hidden="true" />}
      id={id}
      innerRef={innerRef}
      isDisabled={isDisabled}
      onClick={() => showBanner({ message: 'You have clicked the icon button.' })}
      size={size}
      title={title || ''}
    />
  );
}

IconButtonExampleRender.propTypes = propTypes;
IconButtonExampleRender.defaultProps = defaultProps;

export default IconButtonExampleRender;
