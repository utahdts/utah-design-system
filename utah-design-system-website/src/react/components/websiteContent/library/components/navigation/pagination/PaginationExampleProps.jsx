// @ts-check
import {
  Form,
  Select,
  SelectOption,
  TextInput
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import PaginationExamplePropsShape from '../../../../../../propTypesShapes/PaginationExamplePropsShape';

/** @typedef {import('../../../../../../../typedefs.d').PaginationExamplePropsShape} PaginationExamplePropsShape */

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: PaginationExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: PaginationExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {PaginationExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
function PaginationExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.className = '';
        draftState.props.id = '';
        draftState.props.pageSize = '10';
        draftState.props.totalNumberItems = '87';
        draftState.props.value = '0';
        draftState.props.wrapInElement = 'div';
      });
    },
    [setState]
  );

  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <TextInput id="props.pageSize" label="Page Size" className="input--height-small1x" />
      <TextInput id="props.totalNumberItems" label="# Items" className="input--height-small1x" />
      <TextInput id="props.value" label="Value" className="input--height-small1x" />
      <Select id="props.wrapInElement" label="Wrap In Element" className="input--height-small1x">
        <SelectOption label="div" value="div" />
        <SelectOption label="nav" value="nav" />
      </Select>
    </Form>
  );
}

PaginationExampleProps.propTypes = propTypes;
PaginationExampleProps.defaultProps = defaultProps;

export default PaginationExampleProps;
