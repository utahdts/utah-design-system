import { formElementSizesEnum } from '@utahdts/utah-design-system';
import React from 'react';
import ExampleCodeReactProp from '../../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../../sandbox/SandboxIndent';

/** @typedef {import('utah-design-system-website').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {Object} props
 * @param {Object} props.state
 * @param {TagExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function ClickableTagExampleCodeReact({
  state: {
    props: {
      clickable: {
        className,
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
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(iconLeft !== 'none' && iconLeft) ? `iconLeft={Icons.${iconLeft}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(iconRight !== 'none' && iconRight) ? `iconRight={Icons.${iconRight}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isSelected ? 'isSelected' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onClick={() => { /* ... do something ... */ }'} indentLevel={1} />
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
