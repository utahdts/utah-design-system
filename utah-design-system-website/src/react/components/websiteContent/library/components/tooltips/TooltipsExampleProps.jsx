import {
  ExternalLink,
  Form,
  Select,
  SelectOption,
  Switch,
  TextInput,
  popupPlacement
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').TooltipsExamplePropsShape} TooltipsExamplePropsShape */
/** @typedef {import('use-immer').Updater<TooltipsExamplePropsShape>} UpdaterTooltipsExampleProps */

/**
 * @param {object} props
 * @param {any} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function TooltipsExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <TextInput
        id="props.popupText"
        className="input--height-small1x"
        label="Text (children)"
        onChange={onChange}
        value={valueFn('props.popupText')}
      />

      <Switch
        id="props.isPopperVisible"
        label="Visible"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isPopperVisible')}
        width={20}
      />

      <Select
        id="props.placement"
        className="input--height-small1x"
        label="Placement"
        onChange={onChange}
        value={valueFn('props.placement')}
      >
        {
          Object.values(popupPlacement)
            .map((placement) => (
              <SelectOption key={`tooltip-placement-${placement}`} label={placement} value={placement} />
            ))
        }
      </Select>

      <TextInput
        id="props.offsetDistance"
        className="input--height-small1x"
        label="Distance"
        onChange={onChange}
        value={valueFn('props.offsetDistance')}
      />
      <TextInput
        id="props.offsetSkidding"
        className="input--height-small1x"
        label="Skidding"
        onChange={onChange}
        value={valueFn('props.offsetSkidding')}
      />
      <ExternalLink href="https://popper.js.org/docs/v2/modifiers/offset/">Distance/Skidding Docs</ExternalLink>
    </Form>
  );
}
