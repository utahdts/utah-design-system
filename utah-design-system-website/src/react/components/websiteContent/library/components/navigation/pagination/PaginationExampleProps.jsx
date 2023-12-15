import {
  Form,
  Select,
  SelectOption,
  TextInput
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').PaginationExamplePropsShape} PaginationExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: PaginationExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {PaginationExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function PaginationExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <TextInput id="props.pageSize" label="Page Size" className="input--height-small1x" />
      <TextInput id="props.totalNumberItems" label="# Items" className="input--height-small1x" />
      <TextInput id="props.value" label="Value" className="input--height-small1x" />
      <Select id="props.wrapInElement" label="Wrap In Element" className="input--height-small1x">
        <SelectOption label="div" value="div" />
        <SelectOption label="nav" value="nav" />
      </Select>
    </Form>
  );
}
