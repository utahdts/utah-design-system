import PropTypes from 'prop-types';
import DateInputExamplePropsShape from '../../../../../../propTypesShapes/DateInputExamplePropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

const propTypes = {
  state: PropTypes.shape({
    props: DateInputExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function DateInputExampleCodeReact({
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
}) {
  return (
    <>
      &lt;Switch
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'disabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={labelOff ? `labelOff="${labelOff}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={labelOn ? `labelOn="${labelOn}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onChange={() => { /* ... do something ... */ }'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value={${value}}`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={size ? `size="${size}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={width ? `width={${width}}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(icon && icon !== 'none') ? `sliderChildren={icons.${icon}()}` : null} indentLevel={1} />
      /&gt;
    </>
  );
}

DateInputExampleCodeReact.propTypes = propTypes;
DateInputExampleCodeReact.defaultProps = defaultProps;

export default DateInputExampleCodeReact;
