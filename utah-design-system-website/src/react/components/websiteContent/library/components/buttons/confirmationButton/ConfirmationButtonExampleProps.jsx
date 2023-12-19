import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').ConfirmationButtonExamplePropsShape} ConfirmationButtonExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: ConfirmationButtonExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @param {ConfirmationButtonExamplePropsShape} props.state.props
 * @returns {React.JSX.Element}
 */
export function ConfirmationButtonExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
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

      <Select id="props.confirmationColor" label="Confirmation Color" className="input--height-small1x">
        <SelectOption label="Primary" value="primary" />
        <SelectOption label="Secondary" value="secondary" />
        <SelectOption label="Accent" value="accent" />
        <SelectOption label="None" value="none" />
      </Select>

      <Switch id="props.isDisabled" label="Disabled" width={20} />

      <TextInput id="props.id" label="ID" className="input--height-small1x" />

      <Select id="props.size" label="Size" className="input--height-small1x">
        <SelectOption label="Small 1X" value={formElementSizesEnum.SMALL1X} />
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
        <SelectOption label="Large 1X" value={formElementSizesEnum.LARGE1X} />
      </Select>

      <TextInput id="props.title" label="Initial Title" className="input--height-small1x" />

      <TextInput id="props.promptChildren" label="Confirmation Title" className="input--height-small1x" />

      <Select id="props.type" label="Type" className="input--height-small1x">
        <SelectOption label="Button" value="button" />
        <SelectOption label="Reset" value="reset" />
        <SelectOption label="Submit" value="submit" />
      </Select>

    </Form>
  );
}
