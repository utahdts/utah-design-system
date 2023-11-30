// @ts-check
import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../../typedefs.d').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: TagExamplePropsShape}>} props.setState
 * @param {{props: TagExamplePropsShape}} props.state
 * @returns {JSX.Element}
 */
export function ClickableTagExampleProps({ setState, state }) {
  return (
    <Form
      className="form--stacked"
      setState={setState}
      state={state}
    >
      <TextInput id="props.clickable.className" label="Class" className="input--height-small1x" />

      <Switch id="props.clickable.isDisabled" label="Disabled" width={20} />

      <Select id="props.clickable.iconLeft" label="Icon Left" className="input--height-small1x">
        <SelectOption label="Checkmark" value="IconCheck" />
        <SelectOption label="Arrow" value="IconArrowLeft" />
        <SelectOption label="None" value="none" />
      </Select>

      <Select id="props.clickable.iconRight" label="Icon Right" className="input--height-small1x">
        <SelectOption label="Checkmark" value="IconCheck" />
        <SelectOption label="Arrow" value="IconArrowRight" />
        <SelectOption label="None" value="none" />
      </Select>

      <TextInput id="props.clickable.id" label="ID" className="input--height-small1x" />

      <Switch id="props.clickable.isSelected" label="Selected" />

      <Select id="props.clickable.size" label="Size" className="input--height-small1x">
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
      </Select>

      <TextInput id="props.clickable.title" label="Title (children)" className="input--height-small1x" />

    </Form>
  );
}
