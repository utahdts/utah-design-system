import { Form, TextInput } from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').SpinnersExamplePropsShape} SpinnersExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: SpinnersExamplePropsShape}>} props.setState
 * @param {SpinnersExamplePropsShape} props.state
 * @returns {import('react').JSX.Element}
 */
export function SpinnersExampleProps({ setState, state }) {
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
        id="props.label"
        className="input--height-small1x"
        label="Label"
        onChange={onChange}
        value={valueFn('props.label')}
      />
      <TextInput
        id="props.size"
        className="input--height-small1x"
        label="Size"
        onChange={onChange}
        value={valueFn('props.size')}
      />
      <TextInput
        id="props.strokeWidth"
        className="input--height-small1x"
        label="Stroke Width"
        onChange={onChange}
        value={valueFn('props.strokeWidth')}
      />
      <TextInput
        id="props.value"
        className="input--height-small1x"
        label="Value (0.0 -> 1.0)"
        onChange={onChange}
        value={valueFn('props.value')}
      />
    </Form>
  );
}
