import {
  Form,
  Select,
  SelectOption,
  Switch,
  TextArea,
  TextInput
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').ModalExamplePropsShape} ModalExamplePropsShape */
/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: ModalExamplePropsShape}>} props.setState
 * @param {{props: ModalExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function ModalsExampleProps({ setState, state }) {
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
        id="props.title"
        className="input--height-small1x"
        label="Title"
        onChange={onChange}
        value={valueFn('props.title')}
      />
      <TextArea
        id="props.content"
        label="Content"
        onChange={onChange}
        value={valueFn('props.content')}
      />
      <Select
        id="props.size"
        className="input--height-small1x"
        label="Size"
        onChange={onChange}
        value={valueFn('props.size')}
      >
        <SelectOption label="Small" value="modal--small" />
        <SelectOption label="Medium" value="modal--medium" />
        <SelectOption label="Large" value="modal--large" />
      </Select>
      <Switch
        id="props.showCloseButton"
        label="Show close button"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.showCloseButton')}
        width={20}
      />
      <Switch
        id="props.closeOnEsc"
        label="Close on esc"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.closeOnEsc')}
        width={20}
      />
    </Form>
  );
}
