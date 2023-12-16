import {
  Form,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TextInputExamplePropsShape} TextInputExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: TextInputExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {TextInputExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function TextInputExampleProps({ setState, state }) {
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
      <TextInput id="props.placeholder" label="Placeholder" className="input--height-small1x" />
      <TextInput id="props.value" label="Value" className="input--height-small1x" />
    </Form>
  );
}
