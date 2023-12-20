import {
  Form,
  Select,
  SelectOption,
  Switch,
  TextArea,
  TextInput
} from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../typedefs.d').ModalExamplePropsShape} ModalExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: ModalExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {ModalExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function ModalsExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.title" label="Title" className="input--height-small1x" />
      <TextArea id="props.content" label="Content" />
      <Select id="props.size" label="Size" className="input--height-small1x">
        <SelectOption label="Small" value="modal--small" />
        <SelectOption label="Medium" value="modal--medium" />
        <SelectOption label="Large" value="modal--large" />
      </Select>
      <Switch id="props.isForced" label="Forced action" width={20} />
    </Form>
  );
}
