import { formElementSizesEnum } from '@utahdts/utah-design-system';
import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../sandbox/SandboxIndent';

/** @typedef {import('utah-design-system-website').ConfirmationButtonExamplePropsShape} ConfirmationButtonExamplePropsShape */

/**
 * @param {Object} props
 * @param {{props: ConfirmationButtonExamplePropsShape}} props.state
 * @returns {JSX.Element}
 */
export function ConfirmationButtonExampleCodeReact({
  state: {
    props: {
      appearance,
      isBusy,
      className,
      color,
      confirmationColor,
      isDisabled,
      id,
      size,
      title,
      promptChildren,
      type,
    },
  },
}) {
  return (
    <>
      &lt;ConfirmationButton
      <br />
      <ExampleCodeReactProp displayProp={appearance ? `appearance="${appearance}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={color ? `color="${color}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={confirmationColor ? `confirmationColor="${confirmationColor}"` : null} indentLevel={1} />
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
      &lt;InitialChildren&gt;
      {title}
      &lt;/InitialChildren&gt;
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;ConfirmationChildren&gt;
      {promptChildren}
      &lt;/ConfirmationChildren&gt;
      <br />
      &lt;/ConfirmationButton&gt;
    </>
  );
}
