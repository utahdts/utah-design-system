import { DRAWER_PLACEMENT, Form, Select, SelectOption, Switch, TextArea, TextInput } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').DrawerExamplePropsShape} DrawerExamplePropsShape */
/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: DrawerExamplePropsShape}>} props.setState
 * @param {{props: DrawerExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function DrawerExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.title" label="Title" className="input--height-small1x" />
      <TextArea id="props.content" label="Content" />
      <Select id="props.position" label="Position" className="input--height-small1x">
        <SelectOption label="Right" value={DRAWER_PLACEMENT.RIGHT} />
        <SelectOption label="Left" value={DRAWER_PLACEMENT.LEFT} />
      </Select>
      <Switch id="props.showCloseButton" label="Show close button" width={20} />
      <Switch id="props.closeOnEsc" label="Close on escape" width={20} />
    </Form>
  );
}
