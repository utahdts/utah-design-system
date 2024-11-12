import { Form, TextInput } from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').CharacterCountExamplePropsShape} CharacterCountExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: CharacterCountExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function CharacterCountExampleProps({ setState, state }) {
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
        id="props.maxLength"
        className="input--height-small1x"
        label="Limit"
        onChange={onChange}
        value={valueFn('props.maxLength')}
      />
      <TextInput
        id="props.text"
        className="input--height-small1x"
        label="Text"
        onChange={onChange}
        value={valueFn('props.text')}
      />
    </Form>
  );
}
