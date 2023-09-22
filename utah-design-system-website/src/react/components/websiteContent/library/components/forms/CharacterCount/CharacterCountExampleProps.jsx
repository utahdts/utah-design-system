// @ts-check
import {
  Form,
  TextInput
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import CharacterCountExamplePropsShape from '../../../../../../propTypesShapes/CharacterCountExamplePropsShape';

/** @typedef {import('../../../../../../../typedefs.d').CharacterCountExamplePropsShape} CharacterCountExamplePropsShape */

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: CharacterCountExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: CharacterCountExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {CharacterCountExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
function CharacterCountExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.id = '';
        draftState.props.maxLength = 250;
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
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <TextInput id="props.maxLength" label="Limit" className="input--height-small1x" />
      <TextInput id="props.value" label="Value" className="input--height-small1x" />
    </Form>
  );
}

CharacterCountExampleProps.propTypes = propTypes;
CharacterCountExampleProps.defaultProps = defaultProps;

export default CharacterCountExampleProps;
