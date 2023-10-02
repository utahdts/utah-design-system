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
        draftState.props.className = '';
        draftState.props.id = 'counter-id';
        draftState.props.maxLength = '50';
        draftState.props.text = '';
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
      <TextInput id="props.maxLength" label="Limit" className="input--height-small1x" />
      <TextInput id="props.text" label="Text" className="input--height-small1x" />
    </Form>
  );
}

CharacterCountExampleProps.propTypes = propTypes;
CharacterCountExampleProps.defaultProps = defaultProps;

export default CharacterCountExampleProps;
