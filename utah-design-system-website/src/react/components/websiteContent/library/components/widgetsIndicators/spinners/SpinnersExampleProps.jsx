// @ts-check
import { Form, TextInput } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import SpinnersExamplePropsShape from '../../../../../../propTypesShapes/SpinnersExamplePropsShape';

/** @typedef {import('../../../../../../../typedefs.d').SpinnersExamplePropsShape} SpinnersExamplePropsShape */

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: SpinnersExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: SpinnersExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {SpinnersExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
function SpinnersExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.className = '';
        draftState.props.id = '';
        draftState.props.label = '';
        draftState.props.size = '';
        draftState.props.strokeWidth = '';
        draftState.props.value = '';
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
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <TextInput id="props.size" label="Size" className="input--height-small1x" />
      <TextInput id="props.strokeWidth" label="Stroke Width" className="input--height-small1x" />
      <TextInput id="props.value" label="Value (0.0 -> 1.0)" className="input--height-small1x" />
    </Form>
  );
}

SpinnersExampleProps.propTypes = propTypes;
SpinnersExampleProps.defaultProps = defaultProps;

export default SpinnersExampleProps;
