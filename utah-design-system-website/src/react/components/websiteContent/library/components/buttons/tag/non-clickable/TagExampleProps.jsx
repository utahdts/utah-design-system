import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TagExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function TagExampleProps({ setState, state }) {
  return (
    <Form
      className="form--stacked"
      // @ts-ignore
      setState={setState}
      state={state}
    >
      <TextInput id="props.nonClickable.className" label="Class" className="input--height-small1x" />

      <Switch id="props.nonClickable.isClearable" label="Clearable" />

      <Select id="props.nonClickable.color" label="Color" className="input--height-small1x">
        <SelectOption label="Default" value="" />
        <SelectOption label="Primary" value="tag--primary-color" />
        <SelectOption label="Primary light" value="tag--primary-color-light" />
        <SelectOption label="Secondary" value="tag--secondary-color" />
        <SelectOption label="Secondary light" value="tag--secondary-color-light" />
        <SelectOption label="Accent" value="tag--accent-color" />
        <SelectOption label="Accent light" value="tag--accent-color-light" />
      </Select>

      <Switch id="props.nonClickable.isDisabled" label="Disabled" width={20} />

      <Select id="props.nonClickable.iconLeft" label="Icon Left" className="input--height-small1x">
        <SelectOption label="Checkmark" value="check" />
        <SelectOption label="Arrow" value="arrow-left" />
        <SelectOption label="None" value="none" />
      </Select>

      <Select id="props.nonClickable.iconRight" label="Icon Right" className="input--height-small1x">
        <SelectOption label="Checkmark" value="check" />
        <SelectOption label="Arrow" value="arrow-right" />
        <SelectOption label="None" value="none" />
      </Select>

      <TextInput id="props.nonClickable.id" label="ID" className="input--height-small1x" />

      <Select id="props.nonClickable.size" label="Size" className="input--height-small1x">
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
      </Select>

      <TextInput id="props.nonClickable.title" label="Title (children)" className="input--height-small1x" />

    </Form>
  );
}
