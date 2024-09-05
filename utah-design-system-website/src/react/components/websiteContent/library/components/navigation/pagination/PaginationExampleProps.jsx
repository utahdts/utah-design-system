import {
  Form,
  Select,
  SelectOption,
  TextInput
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').PaginationExamplePropsShape} PaginationExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: PaginationExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function PaginationExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
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
      <TextInput
        id="props.itemsPerPage"
        className="input--height-small1x"
        label="Page Size"
        onChange={onChange}
        value={valueFn('props.itemsPerPage')}
      />
      <TextInput
        id="props.totalNumberItems"
        className="input--height-small1x"
        label="# Items"
        onChange={onChange}
        value={valueFn('props.totalNumberItems')}
      />
      <TextInput
        id="props.value"
        className="input--height-small1x"
        label="Value"
        onChange={onChange}
        value={valueFn('props.value')}
      />
      <Select
        id="props.wrapInElement"
        className="input--height-small1x"
        label="Wrap In Element"
        onChange={onChange}
        value={valueFn('props.wrapInElement')}
      >
        <SelectOption label="div" value="div" />
        <SelectOption label="nav" value="nav" />
      </Select>
    </Form>
  );
}
