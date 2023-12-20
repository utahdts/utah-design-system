import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').ButtonExamplePropsShape} ButtonExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: ButtonExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {React.JSX.Element}
 */
export function ButtonExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      // @ts-ignore
      setState={setState}
      className="form--stacked"
    >
      <Select id="props.appearance" label="Appearance" className="input--height-small1x">
        <SelectOption label="Outlined" value="outlined" />
        <SelectOption label="Solid" value="solid" />
      </Select>
      <Switch id="props.isBusy" label="Busy" />

      <TextInput id="props.className" label="Class" className="input--height-small1x" />

      <Select id="props.color" label="Color" className="input--height-small1x">
        <SelectOption label="Primary" value="primary" />
        <SelectOption label="Secondary" value="secondary" />
        <SelectOption label="Accent" value="accent" />
        <SelectOption label="None" value="none" />
      </Select>

      <Switch id="props.isDisabled" label="Disabled" width={20} />

      <Select id="props.iconLeft" label="Icon Left" className="input--height-small1x">
        <SelectOption label="Chevron" value="IconChevron" />
        <SelectOption label="Arrow" value="IconArrowLeft" />
        <SelectOption label="None" value="none" />
      </Select>

      <Select id="props.iconRight" label="Icon Right" className="input--height-small1x">
        <SelectOption label="Chevron" value="IconChevron" />
        <SelectOption label="Arrow" value="IconArrowRight" />
        <SelectOption label="None" value="none" />
      </Select>

      <TextInput id="props.id" label="ID" className="input--height-small1x" />

      <Select id="props.size" label="Size" className="input--height-small1x">
        <SelectOption label="Small 1X" value={formElementSizesEnum.SMALL1X} />
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
        <SelectOption label="Large 1X" value={formElementSizesEnum.LARGE1X} />
      </Select>

      <TextInput id="props.title" label="Title (children)" className="input--height-small1x" />

      <Select id="props.type" label="Type" className="input--height-small1x">
        <SelectOption label="Button" value="button" />
        <SelectOption label="Reset" value="reset" />
        <SelectOption label="Submit" value="submit" />
      </Select>

    </Form>
  );
}
