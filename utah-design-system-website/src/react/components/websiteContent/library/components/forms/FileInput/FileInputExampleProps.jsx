import { Form, Switch, TextInput } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').FileInputExamplePropsShape} FileInputExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: FileInputExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function FileInputExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
        // @ts-ignore
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.acceptedFileTypes" label="Files Accepted" className="input--height-small1x" />
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <TextInput id="props.hint" label="Hint" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <Switch id="props.isRequired" label="Required" width={20} />
      <Switch id="props.multiple" label="Multiple" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <TextInput id="props.name" label="Name" className="input--height-small1x" />
    </Form>
  );
}
