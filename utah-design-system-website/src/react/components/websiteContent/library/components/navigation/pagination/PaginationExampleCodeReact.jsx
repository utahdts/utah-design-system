// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import PaginationExamplePropsShape from '../../../../../../propTypesShapes/PaginationExamplePropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

const propTypes = {
  state: PropTypes.shape({
    props: PaginationExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function PaginationExampleCodeReact({
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

PaginationExampleCodeReact.propTypes = propTypes;
PaginationExampleCodeReact.defaultProps = defaultProps;

export default PaginationExampleCodeReact;
