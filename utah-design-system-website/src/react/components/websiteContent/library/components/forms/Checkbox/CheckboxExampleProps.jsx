import { Form, Switch, TextInput } from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').CheckboxExamplePropsShape} CheckboxExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: CheckboxExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function CheckboxExampleProps({ setState, state }) {
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
        id="props.errorMessage"
        className="input--height-small1x"
        label="Error Message"
        onChange={onChange}
        value={valueFn('props.errorMessage')}
      />
      <TextInput
        id="props.id"
        className="input--height-small1x"
        label="ID"
        onChange={onChange}
        value={valueFn('props.id')}
      />
      <Switch
        id="props.isDisabled"
        label="Disabled"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isDisabled')}
        width={20}
      />
      <TextInput
        id="props.label"
        className="input--height-small1x"
        label="Label"
        onChange={onChange}
        value={valueFn('props.label')}
      />
      <Switch
        id="props.value"
        label="Checked"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.value')}
        width={20}
      />
    </Form>
  );
}
