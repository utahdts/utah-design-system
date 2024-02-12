import {
  Form,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').MultiSelectExamplePropsShape} MultiSelectExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: MultiSelectExamplePropsShape}>} props.setState
 * @param {{props: MultiSelectExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function MultiSelectExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <Switch id="props.allowCustomEntry" label="Custom Entry" width={20} />
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isClearable" label="Clearable" width={20} />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <Switch id="props.isRequired" label="Required" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
    </Form>
  );
}
