// @ts-check
import React from 'react';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

export default function PaginationExampleCodeReact({
  state: {
    props: {
      className,
      id,
      pageSize,
      totalNumberItems,
      value,
      wrapInElement,
    },
  },
}) {
  return (
    <>
      &lt;Pagination
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`pageSize="${pageSize}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`totalNumberItems="${totalNumberItems}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`value="${value}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`wrapInElement="${wrapInElement}"`} indentLevel={1} />
      /&gt;
    </>
  );
}
