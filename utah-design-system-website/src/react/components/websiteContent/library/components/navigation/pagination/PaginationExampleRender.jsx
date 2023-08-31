// @ts-check
import { Pagination, RefShape } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import PaginationExamplePropsShape from '../../../../../../propTypesShapes/PaginationExamplePropsShape';

const propTypes = {
  innerRef: RefShape,
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: PaginationExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {
  innerRef: null,
};

function PaginationExampleRender({
  setState,
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
  innerRef,
}) {
  return (
    (value || value === 0)
      ? (
        <div style={{ width: '80%' }}>
          <Pagination
            className={className}
            id={id}
            innerRef={innerRef}
            onChange={(newPageIndex) => setState((draftState) => { draftState.props.value = newPageIndex; })}
            pageSize={Number(pageSize)}
            totalNumberItems={Number(totalNumberItems)}
            value={Number(value)}
            wrapInElement={wrapInElement}
          />
        </div>
      )
      : null
  );
}

PaginationExampleRender.propTypes = propTypes;
PaginationExampleRender.defaultProps = defaultProps;

export default PaginationExampleRender;
