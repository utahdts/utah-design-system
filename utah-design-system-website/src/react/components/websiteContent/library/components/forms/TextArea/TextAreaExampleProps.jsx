// @ts-check
import {
  Form,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import TextAreaExamplePropsShape from '../../../../../../propTypesShapes/TextAreaExamplePropsShape';

/** @typedef {import('../../../../../../../typedefs.d').TextAreaExamplePropsShape} TextAreaExamplePropsShape */

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: TextAreaExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: TextAreaExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {TextAreaExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
function TextAreaExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.className = '';
        draftState.props.errorMessage = '';
        draftState.props.id = '';
        draftState.props.isClearable = false;
        draftState.props.isDisabled = false;
        draftState.props.label = '';
        draftState.props.name = '';
        draftState.props.placeholder = '';
        draftState.props.isRequired = false;
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
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <TextInput id="props.name" label="Name" className="input--height-small1x" />
      <Switch id="props.isClearable" label="Clearable" width={20} />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <Switch id="props.isRequired" label="Required" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <TextInput id="props.placeholder" label="Placeholder" className="input--height-small1x" />
      <TextInput id="props.value" label="Value" className="input--height-small1x" />
    </Form>
  );
}

TextAreaExampleProps.propTypes = propTypes;
TextAreaExampleProps.defaultProps = defaultProps;

export default TextAreaExampleProps;
