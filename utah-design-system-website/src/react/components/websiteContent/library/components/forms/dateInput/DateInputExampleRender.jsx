/* eslint-disable react/jsx-props-no-spreading */
import { Icons, RefShape, Switch } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import DateInputExamplePropsShape from '../../../../../../propTypesShapes/DateInputExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: DateInputExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

function DateInputExampleRender({
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

DateInputExampleRender.propTypes = propTypes;
DateInputExampleRender.defaultProps = defaultProps;

export default DateInputExampleRender;
