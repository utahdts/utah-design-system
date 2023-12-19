import {
  Form,
  Select,
  SelectOption,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').ComboBoxExamplePropsShape} ComboBoxExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: ComboBoxExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @param {ComboBoxExamplePropsShape} props.state.props
 * @returns {React.JSX.Element}
 */
export function ComboBoxExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isClearable" label="Clearable" width={20} />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <Switch id="props.isRequired" label="Required" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <Select id="props.value" label="Value" className="input--height-small1x" placeholder={'Choose favorite "Mighty 5"'}>
        <SelectOption label="Arches National Park" value="arches" />
        <SelectOption label="Bryce Canyon National Park" value="bryce" />
        <SelectOption label="Canyonlands National Park" value="canyonlands" />
        <SelectOption label="Capitol Reef National Park" value="capitol-reef" />
        <SelectOption label="Zion National Park" value="zion" />
      </Select>
    </Form>
  );
}
