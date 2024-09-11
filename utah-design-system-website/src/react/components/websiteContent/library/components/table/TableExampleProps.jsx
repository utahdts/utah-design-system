import { Form, Switch, TextInput } from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').TableExamplePropsShape} TableExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TableExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function TableExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <Switch
        id="props.isFiltering"
        label="Filters"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isFiltering')}
      />
      <Switch
        id="props.isPaginating"
        label="Pagination"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isPaginating')}
      />
      <Switch
        id="props.isSorting"
        label="Sortable"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isSorting')}
      />

      <TextInput
        id="props.className"
        className="input--height-small1x"
        label="Class"
        onChange={onChange}
        value={valueFn('props.className')}
      />

      <TextInput
        id="props.id"
        className="input--height-small1x"
        label="ID"
        onChange={onChange}
        value={valueFn('props.id')}
      />
    </Form>
  );
}
