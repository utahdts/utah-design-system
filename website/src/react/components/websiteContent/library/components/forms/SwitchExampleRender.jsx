/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { RefShape, Switch } from 'utah-design-system-react-library';
import SwitchExamplePropsShape from '../../../../../propTypesShapes/SwitchExamplePropsShape';

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
      id,
      isDisabled,
      label,
      labelOff,
      labelOn,
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
      labelOff={labelOff || 'Off'}
      labelOn={labelOn || 'On'}
      value={!!value}
      width={width}
      innerRef={innerRef}
      onChange={() => setState((draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.props.value = !draftState.props.value;
      })}
    />
  );
}

SwitchExampleRender.propTypes = propTypes;
SwitchExampleRender.defaultProps = defaultProps;

export default SwitchExampleRender;
