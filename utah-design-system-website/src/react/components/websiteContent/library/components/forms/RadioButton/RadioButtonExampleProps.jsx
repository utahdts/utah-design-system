// @ts-check
/* eslint-disable no-param-reassign */
import {
  Form,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import RadioButtonExamplePropsShape from '../../../../../../propTypesShapes/RadioButtonExamplePropsShape';

/** @typedef {import('../../../../../../../typedefs.d').RadioButtonExamplePropsShape} RadioButtonExamplePropsShape */

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: RadioButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: RadioButtonExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {RadioButtonExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function RadioButtonExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.className = '';
        draftState.props.errorMessage = '';
        draftState.props.id = '';
        draftState.props.isDisabled = false;
        draftState.props.isRequired = false;
        draftState.props.label = '';
        draftState.props.value = '';
        draftState.props.wrapperClassName = '';
        draftState.props.wrapperLabel = '';
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
      <p className="font-bold mb-spacing-xs">Wrapper Props</p>
      <TextInput id="props.wrapperClassName" label="Wrapper Class" className="input--height-small1x" />
      <TextInput id="props.wrapperLabel" label="Wrapper Label" className="input--height-small1x" />
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <Switch id="props.isRequired" label="Required" width={20} />

      <p className="font-bold mb-spacing-xs">Radio Button Props</p>
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <TextInput id="props.value" label="Value" className="input--height-small1x" />
    </Form>
  );
}

RadioButtonExampleProps.propTypes = propTypes;
RadioButtonExampleProps.defaultProps = defaultProps;
