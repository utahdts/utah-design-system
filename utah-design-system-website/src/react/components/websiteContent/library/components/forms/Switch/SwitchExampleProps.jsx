import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').SwitchExamplePropsShape} SwitchExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: SwitchExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function SwitchExampleProps({ setState, state }) {
  return (
    <div>
      <div>
        <Form
          state={state}
          // @ts-ignore
          setState={setState}
        >
          <TextInput id="props.className" label="Class" className="input--height-small1x" />

          <TextInput id="props.id" label="ID" className="input--height-small1x" />

          <Switch id="props.isDisabled" label="Disabled" />

          <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />

          <TextInput id="props.label" label="Label" className="input--height-small1x" />

          <TextInput id="props.labelOff" label="Label - Off" className="input--height-small1x" />

          <TextInput id="props.labelOn" label="Label - On" className="input--height-small1x" />

          <Switch id="props.value" label="Value" labelOn="On" labelOff="Off" width={40} />

          <Select id="props.size" label="Size" className="input--height-small1x">
            <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
            <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
            <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
          </Select>

          <TextInput id="props.width" label="Width" className="input--height-small1x" />

          <Select id="props.icon" label="Icon (sliderChildren)" className="input--height-small1x">
            <SelectOption label="Check" value="IconCheck" />
            <SelectOption label="Light Mode" value="IconLightMode" />
            <SelectOption label="None" value="none" />
          </Select>
        </Form>
      </div>
    </div>
  );
}
