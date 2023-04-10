/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Icons, RefShape, Switch } from '@utahdts/utah-design-system';
import SwitchExamplePropsShape from '../../../../../../propTypesShapes/SwitchExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: SwitchExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

function SwitchExampleRender({
  setState,
  state: {
    props: {
      className,
      icon,
      id,
      isDisabled,
      label,
      labelOff,
      labelOn,
      size,
      value,
      width,
    },
  },
  innerRef,
}) {
  return (
    <Switch
      className={className}
      id={id || 'switch-example-render-id'}
      isDisabled={isDisabled}
      label={label || 'Switch Label'}
      labelOff={labelOff}
      labelOn={labelOn}
      value={!!value}
      size={size}
      width={width}
      innerRef={innerRef}
      onChange={() => setState((draftState) => {
        draftState.props.value = !draftState.props.value;
      })}
      sliderChildren={((icon === 'none') || !icon) ? null : Icons[icon]()}
    />
  );
}

SwitchExampleRender.propTypes = propTypes;
SwitchExampleRender.defaultProps = defaultProps;

export default SwitchExampleRender;
