/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { joinClassNames, RefShape } from 'utah-design-system-react-library';
import Button from 'utah-design-system-react-library/react/components/buttons/Button';
import ButtonExamplePropsShape from '../../../../../propTypesShapes/ButtonExamplePropsShape';

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
      id,
      size,
      title,
      type,
    },
  },
  innerRef,
}) {
  return (
    <Button
      appearance={appearance}
      className={joinClassNames(className, size !== 'medium' && `button--${size}`)}
      color={color}
      id={id}
      innerRef={innerRef}
      isBusy={isBusy}
      isDisabled={isDisabled}
      onClick={() => { console.log('You have clicked the button.'); }}
      type={type}
    >
      {title || ''}
    </Button>
  );
}

ButtonExampleRender.propTypes = propTypes;
ButtonExampleRender.defaultProps = defaultProps;

export default ButtonExampleRender;
