// @ts-check
import {
  Form,
  Select,
  SelectOption,
  TextInput
} from '@utahdts/utah-design-system';
import React from 'react';

export default function BannersExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <Select id="props.icon" label="Icon" className="input--height-small1x">
        <SelectOption label="None" value="none" />
        <SelectOption label="Checkmark" value="utds-icon-before-check" />
        <SelectOption label="Warning" value="utds-icon-before-warning" />
      </Select>
      <TextInput id="props.message" label="Message" className="input--height-small1x" />
      <Select id="props.position" label="Position" className="input--height-small1x">
        <SelectOption label="Top" value="top" />
        <SelectOption label="Top Right" value="top-right" />
        <SelectOption label="Top Left" value="top-left" />
        <SelectOption label="Bottom" value="bottom" />
        <SelectOption label="Bottom Right" value="bottom-right" />
        <SelectOption label="Bottom Left" value="bottom-left" />
      </Select>
      <Select id="props.color" label="Color" className="input--height-small1x">
        <SelectOption label="Default" value="" />
        <SelectOption label="Success" value="banner--success" />
        <SelectOption label="Danger" value="banner--danger" />
        <SelectOption label="Info" value="banner--info" />
      </Select>
    </Form>
  );
}