import { Form, Switch, TextInput } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TabGroupExamplePropsShape} TabGroupExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TabGroupExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function TabGroupExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      // @ts-ignore
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.tabA" label="First Tab" className="input--height-small1x" />
      <TextInput id="props.tabB" label="Second Tab" className="input--height-small1x" />
      <TextInput id="props.panelA" label="First Panel" className="input--height-small1x" />
      <TextInput id="props.panelB" label="Second Panel" className="input--height-small1x" />
      <Switch id="props.isVertical" label="Vertical" width={20} />
    </Form>
  );
}
