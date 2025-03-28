import { joinClassNames } from '@utahdts/utah-design-system';
import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').SwitchExamplePropsShape} SwitchExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {SwitchExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function SwitchExampleCodeReact({
  state: {
    props: {
      className,
      errorMessage,
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
      <ExampleCodeReactProp displayProp={errorMessage ? `errorMessage="${errorMessage}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'disabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={label ? `label="${label}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={labelOff ? `labelOff="${labelOff}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={labelOn ? `labelOn="${labelOn}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp="onChange={() => { /* ... do something ... */ }" indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value={${value}}`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={size ? `size="${size}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={width ? `width={${width}}` : null} indentLevel={1} />
      <ExampleCodeReactProp
        displayProp={
          ((icon === 'none') || !icon)
            ? null
            : (
              `sliderChildren={<span
    className="${joinClassNames(icon === 'checkbox' ? 'utds-icon-after-checkbox' : 'utds-icon-after-visibility', 'icon')}"
    aria-hidden="true"
  />}`
            )
        }
        indentLevel={1}
      />
      /&gt;
    </>
  );
}
