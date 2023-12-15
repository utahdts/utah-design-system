import { Form, TextInput } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').SpinnersExamplePropsShape} SpinnersExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: SpinnersExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {SpinnersExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export default function SpinnersExampleProps({ setState, state }) {
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
