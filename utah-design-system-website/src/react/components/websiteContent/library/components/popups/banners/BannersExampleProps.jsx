import {
  Form,
  Select,
  SelectOption,
  TextInput
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').BannerExamplePropsShape} BannerExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: BannerExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function BannersExampleProps({ setState, state }) {
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
      <Select
        id="props.icon"
        className="input--height-small1x"
        label="Icon"
        onChange={onChange}
        value={valueFn('props.icon')}
      >
        <SelectOption label="None" value="none" />
        <SelectOption label="Checkmark" value="utds-icon-before-check" />
        <SelectOption label="Warning" value="utds-icon-before-warning" />
      </Select>
      <TextInput
        id="props.message"
        className="input--height-small1x"
        label="Message"
        onChange={onChange}
        value={valueFn('props.message')}
      />
      <Select
        id="props.position"
        className="input--height-small1x"
        label="Position"
        onChange={onChange}
        value={valueFn('props.position')}
      >
        <SelectOption label="Top" value="top" />
        <SelectOption label="Top Right" value="top-right" />
        <SelectOption label="Top Left" value="top-left" />
        <SelectOption label="Bottom" value="bottom" />
        <SelectOption label="Bottom Right" value="bottom-right" />
        <SelectOption label="Bottom Left" value="bottom-left" />
      </Select>
      <Select
        id="props.color"
        className="input--height-small1x"
        label="Color"
        onChange={onChange}
        value={valueFn('props.color')}
      >
        <SelectOption label="Default" value="" />
        <SelectOption label="Dark" value="banner--dark" />
        <SelectOption label="Success" value="banner--success" />
        <SelectOption label="Danger" value="banner--danger" />
        <SelectOption label="Info" value="banner--info" />
        <SelectOption label="Primary" value="banner--primary" />
        <SelectOption label="Secondary" value="banner--secondary" />
        <SelectOption label="Accent" value="banner--accent" />
      </Select>
      <Select
        id="props.size"
        className="input--height-small1x"
        label="Size"
        onChange={onChange}
        value={valueFn('props.size')}
      >
        <SelectOption label="Small" value="banner--small" />
        <SelectOption label="Medium" value="banner--medium" />
        <SelectOption label="Large" value="banner--large" />
      </Select>
    </Form>
  );
}
