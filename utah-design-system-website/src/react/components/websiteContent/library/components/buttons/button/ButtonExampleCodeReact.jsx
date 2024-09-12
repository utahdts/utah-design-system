import { formElementSizesEnum, joinClassNames } from '@utahdts/utah-design-system';
import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';
import { SandboxIndent } from '../../../../../sandbox/SandboxIndent';

/** @typedef {import('utah-design-system-website').ButtonExamplePropsShape} ButtonExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: ButtonExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function ButtonExampleCodeReact({
  state: {
    props: {
      appearance,
      isBusy,
      className,
      color,
      iconLeft,
      iconRight,
      isDisabled,
      id,
      size,
      title,
      type,
    },
  },
}) {
  return (
    <>
      &lt;Button
      <br />
      <ExampleCodeReactProp displayProp={appearance ? `appearance="${appearance}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={color ? `color="${color}"` : null} indentLevel={1} />
      <ExampleCodeReactProp
        displayProp={
          ((iconLeft === 'none') || !iconLeft)
            ? null
            : (
              `iconLeft={<span
    className="${joinClassNames(iconLeft === 'IconChevron' ? 'utds-icon-after-chevron-down' : 'utds-icon-after-arrow-left', 'icon')}"
    aria-hidden="true"
  />}`
            )
        }
        indentLevel={1}
      />
      <ExampleCodeReactProp
        displayProp={
          ((iconRight === 'none') || !iconRight)
            ? null
            : (
              `iconRight={<span
    className="${joinClassNames(iconRight === 'IconChevron' ? 'utds-icon-after-chevron-down' : 'utds-icon-after-arrow-right', 'icon')}"
    aria-hidden="true"
  />}`
            )
        }
        indentLevel={1}
      />
      <ExampleCodeReactProp displayProp={isBusy ? 'isBusy' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(type && type !== 'button') ? `type="${type}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onClick={() => { /* ... do something ... */ }'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(!size || size === formElementSizesEnum.MEDIUM) ? null : `size={formElementSizesEnum.${Object.entries(formElementSizesEnum).find(([, value]) => value === size)?.[0]}}`} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      {title}
      <br />
      &lt;/Button&gt;
    </>
  );
}
