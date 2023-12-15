import { Form, Switch, TextInput } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TableExamplePropsShape} TableExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: TableExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {TableExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function TableExampleProps({ setState, state }) {
  return (
    <Form
      // onSubmit(({ state, validationErrors }) => ... do whatever ...)
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <Switch id="props.isFiltering" label="Filters" />
      <Switch id="props.isPaginating" label="Pagination" />
      <Switch id="props.isSorting" label="Sortable" />

      <TextInput id="props.className" label="Class" className="input--height-small1x" />

      <TextInput id="props.id" label="ID" className="input--height-small1x" />

    </Form>
  );
}
