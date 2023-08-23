// @ts-check
/* eslint-disable no-param-reassign */
import {
  Form,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import TextInputExamplePropsShape from '../../../../../../propTypesShapes/TextInputExamplePropsShape';

/** @typedef {import('../../../../../../../typedefs.d').TextInputExamplePropsShape} TextInputExamplePropsShape */

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: TextInputExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: TextInputExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {TextInputExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
function TextInputExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.className = '';
        draftState.props.id = '';
        draftState.props.isDisabled = false;
        draftState.props.label = '';
        draftState.props.placeholder = '';
        draftState.props.isRequired = false;
        draftState.props.value = '';
      });
    },
    []
  );

  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <Switch id="props.isRequired" label="Required" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <TextInput id="props.placeholder" label="Placeholder" className="input--height-small1x" />
      <TextInput id="props.value" label="Value" className="input--height-small1x" />
    </Form>
  );
}

TextInputExampleProps.propTypes = propTypes;
TextInputExampleProps.defaultProps = defaultProps;

export default TextInputExampleProps;
