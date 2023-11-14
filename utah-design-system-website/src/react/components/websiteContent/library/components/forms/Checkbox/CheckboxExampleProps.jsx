// @ts-check
import { Form, Switch, TextInput } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../typedefs.d').CheckboxExamplePropsShape} CheckboxExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: CheckboxExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {CheckboxExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function CheckboxExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <Switch id="props.value" label="Checked" width={20} />
    </Form>
  );
}
