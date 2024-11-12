import { formElementSizesEnum, joinClassNames } from '@utahdts/utah-design-system';
import { ExampleCodeReactProp } from '../../../../../../sandbox/ExampleCodeReactProp';
import { SandboxIndent } from '../../../../../../sandbox/SandboxIndent';

/** @typedef {import('utah-design-system-website').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {TagExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function ClickableTagExampleCodeReact({
  state: {
    props: {
      clickable: {
        className,
        color,
        iconLeft,
        iconRight,
        id,
        isDisabled,
        isSelected,
        size,
        title,
      },
    },
  },
}) {
  const sizeKey = Object.entries(formElementSizesEnum).find(([, value]) => value === size)?.[0];

  return (
    <>
      &lt;ClickableTag
      <br />
      <ExampleCodeReactProp displayProp={className || color ? `className="${joinClassNames(className, color)}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp
        displayProp={
          ((iconLeft === 'none') || !iconLeft)
            ? null
            : (
              `iconLeft={<span
    className="${joinClassNames(iconLeft === 'check' ? 'utds-icon-after-check' : 'utds-icon-after-arrow-left', 'icon')}"
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
    className="${joinClassNames(iconRight === 'check' ? 'utds-icon-after-check' : 'utds-icon-after-arrow-right', 'icon')}"
    aria-hidden="true"
  />}`
            )
        }
        indentLevel={1}
      />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isSelected ? 'isSelected' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp="onClick={() => { /* ... do something ... */ }" indentLevel={1} />
      <ExampleCodeReactProp displayProp={(!sizeKey || size === formElementSizesEnum.MEDIUM) ? null : `size={formElementSizesEnum.${sizeKey}}`} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      {title}
      <br />
      &lt;/ClickableTag&gt;
    </>
  );
}
