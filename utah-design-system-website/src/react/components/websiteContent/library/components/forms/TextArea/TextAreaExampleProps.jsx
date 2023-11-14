// @ts-check
import {
  Form,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../typedefs.d').TextAreaExamplePropsShape} TextAreaExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: TextAreaExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {TextAreaExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export default function TextAreaExampleProps({ setState, state }) {
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
