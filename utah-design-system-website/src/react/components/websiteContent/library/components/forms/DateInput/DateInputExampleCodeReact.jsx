import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').DateInputExamplePropsShape} DateInputExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: DateInputExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function DateInputExampleCodeReact({
  state: {
    props: {
      className,
      dateFormat,
      errorMessage,
      hasCalendarPopup,
      id,
      isClearable,
      isDisabled,
      isRequired,
      label,
      placeholder,
      showCalendarTodayButton,
      value,
    },
  },
}) {
  return (
    <>
      &lt;DateInput
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`dateFormat="${dateFormat}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={hasCalendarPopup ? null : 'hasCalendarPopup={false}'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isClearable ? 'isClearable' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isRequired ? 'isRequired' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isClearable ? 'onClear={(e) => { /* ... do something w/ e ... */ }' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={placeholder ? `placeholder="${placeholder}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={showCalendarTodayButton ? 'showCalendarTodayButton' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value="${value}"`} indentLevel={1} />
      /&gt;
    </>
  );
}
