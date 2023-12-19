import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').PaginationExamplePropsShape} PaginationExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {PaginationExamplePropsShape} props.state.props
 * @returns {React.JSX.Element}
 */
export function PaginationExampleCodeReact({
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
