import {
  Form,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').TextAreaExamplePropsShape} TextAreaExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TextAreaExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function TextAreaExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      // @ts-ignore
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
