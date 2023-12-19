import {
  Form,
  Select,
  SelectOption,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').RadioButtonExamplePropsShape} RadioButtonExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: RadioButtonExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @param {RadioButtonExamplePropsShape} props.state.props
 * @returns {React.JSX.Element}
 */
export function RadioButtonExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isDisabled" label="Disabled Radio" width={20} />
      <Switch id="props.isRequired" label="Required" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <Select id="props.value" label="Selected Value" className="input--height-small1x">
        <SelectOption label={state.props.label} value="option-1" />
        <SelectOption label="Option #2" value="option-2" />
      </Select>
    </Form>
  );
}
