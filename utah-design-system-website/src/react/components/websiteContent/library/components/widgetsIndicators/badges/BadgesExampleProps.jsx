import { Form, TextArea, TextInput } from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').BadgesExamplePropsShape} BadgesExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: BadgesExamplePropsShape}>} props.setState
 * @param {{props: BadgesExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */

export function BadgesExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <TextInput
        id="props.title"
        className="input--height-small1x"
        label="Title"
        onChange={onChange}
        value={valueFn('props.title')}
      />
      <TextArea
        id="props.children"
        label="Content"
        onChange={onChange}
        value={valueFn('props.children')}
      />
      <TextInput
        id="props.className"
        className="input--height-small1x"
        label="Class"
        onChange={onChange}
        value={valueFn('props.className')}
      />
    </Form>
  );
}
