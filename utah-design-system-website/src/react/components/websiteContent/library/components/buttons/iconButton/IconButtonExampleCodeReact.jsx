import { formElementSizesEnum } from '@utahdts/utah-design-system';
import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('../../../../../../propTypesShapes/IconButtonExamplePropsShape').IconButtonExampleProps} IconButtonExampleProps */

/**
 * @param {Object} props
 * @param {{props: IconButtonExampleProps}} props.state
 * @returns {JSX.Element}
 */
export default function IconButtonExampleCode({
  state: {
    props: {
      appearance,
      color,
      iconCssClass,
      isDisabled,
      id,
      size,
      title,
    },
  },
}) {
  return (
    <>
      &lt;IconButton
      <br />
      <ExampleCodeReactProp displayProp={appearance ? `appearance="${appearance}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={color ? `color="${color}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`icon={<span className={\`utds-icon-before-${iconCssClass}\`} aria-hidden="true" />}`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'disabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onClick={() => { /* ... do something ... */}}'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(!size || size === formElementSizesEnum.MEDIUM) ? null : `size={formElementSizesEnum.${Object.entries(formElementSizesEnum).find(([, value]) => value === size)?.[0]}}`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`title="${title}"`} indentLevel={1} />
      /&gt;
    </>
  );
}
