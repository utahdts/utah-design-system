import {
  Form,
  Select,
  SelectOption,
  TextInput
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').BannerExamplePropsShape} BannerExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: BannerExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function BannersExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      // @ts-expect-error
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <Select id="props.icon" label="Icon" className="input--height-small1x">
        <SelectOption label="None" value="none" />
        <SelectOption label="Checkmark" value="utds-icon-before-check" />
        <SelectOption label="Warning" value="utds-icon-before-warning" />
      </Select>
      <TextInput id="props.message" label="Message" className="input--height-small1x" />
      <Select id="props.position" label="Position" className="input--height-small1x">
        <SelectOption label="Top" value="top" />
        <SelectOption label="Top Right" value="top-right" />
        <SelectOption label="Top Left" value="top-left" />
        <SelectOption label="Bottom" value="bottom" />
        <SelectOption label="Bottom Right" value="bottom-right" />
        <SelectOption label="Bottom Left" value="bottom-left" />
      </Select>
      <Select id="props.color" label="Color" className="input--height-small1x">
        <SelectOption label="Default" value="" />
        <SelectOption label="Dark" value="banner--dark" />
        <SelectOption label="Success" value="banner--success" />
        <SelectOption label="Danger" value="banner--danger" />
        <SelectOption label="Info" value="banner--info" />
      </Select>
      <Select id="props.size" label="Size" className="input--height-small1x">
        <SelectOption label="Small" value="banner--small" />
        <SelectOption label="Medium" value="banner--medium" />
        <SelectOption label="Large" value="banner--large" />
      </Select>
    </Form>
  );
}
