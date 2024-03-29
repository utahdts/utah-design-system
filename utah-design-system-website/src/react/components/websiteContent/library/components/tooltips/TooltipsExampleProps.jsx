import {
  ExternalLink,
  Form,
  Select,
  SelectOption,
  Switch,
  TextInput,
  popupPlacement
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TooltipsExamplePropsShape} TooltipsExamplePropsShape */
/** @typedef {import('use-immer').Updater<TooltipsExamplePropsShape>} UpdaterTooltipsExampleProps */

/**
 * @param {object} props
 * @param {any} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function TooltipsExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.popupText" label="Text (children)" className="input--height-small1x" />

      <Switch id="props.isPopperVisible" label="Visible" width={20} />

      <Select id="props.placement" label="Placement" className="input--height-small1x">
        {
          Object.values(popupPlacement)
            .map((placement) => (
              <SelectOption key={`tooltip-placement-${placement}`} label={placement} value={placement} />
            ))
        }
      </Select>

      <TextInput id="props.offsetDistance" label="Distance" className="input--height-small1x" />
      <TextInput id="props.offsetSkidding" label="Skidding" className="input--height-small1x" />
      <ExternalLink href="https://popper.js.org/docs/v2/modifiers/offset/">Distance/Skidding Docs</ExternalLink>
    </Form>
  );
}
