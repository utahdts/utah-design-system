/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Icons,
  RefShape,
  useBanner,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import ButtonExamplePropsShape from '../../../../../../propTypesShapes/ButtonExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: ButtonExamplePropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function ButtonExampleRender({
  state: {
    props: {
      appearance,
      isBusy,
      className,
      color,
      isDisabled,
      iconLeft,
      iconRight,
      id,
      size,
      title,
      type,
    },
  },
  innerRef,
}) {
  const showBanner = useBanner();
  return (
    <Button
      appearance={appearance}
      className={className}
      color={color}
      iconLeft={((iconLeft === 'none') || !iconLeft) ? null : Icons[iconLeft]()}
      iconRight={((iconRight === 'none') || !iconRight) ? null : Icons[iconRight]()}
      id={id}
      innerRef={innerRef}
      isBusy={isBusy}
      isDisabled={isDisabled}
      onClick={() => showBanner({ message: 'You have clicked the button.' })}
      size={size}
      type={type}
    >
      {title || ''}
    </Button>
  );
}

ButtonExampleRender.propTypes = propTypes;
ButtonExampleRender.defaultProps = defaultProps;

export default ButtonExampleRender;
