import {
  Form,
  TextInput
} from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').CharacterCountExamplePropsShape} CharacterCountExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: CharacterCountExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {React.JSX.Element}
 */
export function CharacterCountExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      // @ts-ignore
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
