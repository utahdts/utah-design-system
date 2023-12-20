import { Form, Switch, TextInput } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').TableExamplePropsShape} TableExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TableExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {React.JSX.Element}
 */
export function TableExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      // @ts-ignore
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
