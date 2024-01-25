import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').TimeInputExamplePropsShape} TimeInputExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: TimeInputExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function TimeInputExampleCodeReact({
  state: {
    props: {
      allowCustomEntry,
      className,
      errorMessage,
      hasTimePopup,
      id,
      isClearable,
      isDisabled,
      isRequired,
      label,
      placeholder,
      timeRangeBegin,
      timeRangeEnd,
      timeFormat,
      timeRangeIncrement,
      value,
    },
  },
}) {
  return (
    <>
      &lt;TimeInput
      <br />
      <ExampleCodeReactProp displayProp={allowCustomEntry ? 'allowCustomEntry' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={hasTimePopup ? null : 'hasTimePopup={false}'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isClearable ? 'isClearable' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isRequired ? 'isRequired' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onChange={(e) => { /* ... do something w/ e ... */ }'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isClearable ? 'onClear={(e) => { /* ... do something w/ e ... */ }' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={placeholder ? `placeholder="${placeholder}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={timeRangeBegin ? `timeRangeBegin="${timeRangeBegin}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={timeRangeEnd ? `timeRangeEnd="${timeRangeEnd}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={timeFormat ? `timeFormat="${timeFormat}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={timeRangeIncrement ? `timeRangeIncrement={${timeRangeIncrement}}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value="${value}"`} indentLevel={1} />
      /&gt;
    </>
  );
}
