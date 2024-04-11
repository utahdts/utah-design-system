import { Form, TextArea, TextInput } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').BadgesExamplePropsShape} BadgesExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: BadgesExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */

export function BadgesExampleProps({ setState, state }) {
  return (
    <Form
      className="form--stacked"
      // @ts-ignore
      setState={setState}
      state={state}
    >
      <TextInput id="props.title" label="Title" className="input--height-small1x" />
      <TextArea id="props.children" label="Content" />
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
    </Form>
  );
}
