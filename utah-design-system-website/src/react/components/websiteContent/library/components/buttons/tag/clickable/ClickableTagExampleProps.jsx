import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TagExamplePropsShape}>} props.setState
 * @param {{props: TagExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function ClickableTagExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <TextInput
        id="props.clickable.className"
        className="input--height-small1x"
        label="Class"
        onChange={onChange}
        value={valueFn('props.clickable.className')}
      />
      <Switch
        id="props.clickable.isDisabled"
        label="Disabled"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.clickable.isDisabled')}
        width={20}
      />
      <Select
        id="props.clickable.color"
        className="input--height-small1x"
        label="Color"
        onChange={onChange}
        value={valueFn('props.clickable.color')}
      >
        <SelectOption label="Default" value="" />
        <SelectOption label="Primary" value="tag--primary-color" />
        <SelectOption label="Primary light" value="tag--primary-color-light" />
        <SelectOption label="Secondary" value="tag--secondary-color" />
        <SelectOption label="Secondary light" value="tag--secondary-color-light" />
        <SelectOption label="Accent" value="tag--accent-color" />
        <SelectOption label="Accent light" value="tag--accent-color-light" />
      </Select>
      <Select
        id="props.clickable.iconLeft"
        className="input--height-small1x"
        label="Icon Left"
        onChange={onChange}
        value={valueFn('props.clickable.iconLeft')}
      >
        <SelectOption label="Checkmark" value="check" />
        <SelectOption label="Arrow" value="arrow-left" />
        <SelectOption label="None" value="none" />
      </Select>
      <Select
        id="props.clickable.iconRight"
        className="input--height-small1x"
        label="Icon Right"
        onChange={onChange}
        value={valueFn('props.clickable.iconRight')}
      >
        <SelectOption label="Checkmark" value="check" />
        <SelectOption label="Arrow" value="arrow-right" />
        <SelectOption label="None" value="none" />
      </Select>
      <TextInput
        id="props.clickable.id"
        className="input--height-small1x"
        label="ID"
        onChange={onChange}
        value={valueFn('props.clickable.id')}
      />
      <Switch
        id="props.clickable.isSelected"
        label="Selected"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.clickable.isSelected')}
      />
      <Select
        id="props.clickable.size"
        className="input--height-small1x"
        label="Size"
        onChange={onChange}
        value={valueFn('props.clickable.size')}
      >
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
      </Select>
      <TextInput
        id="props.clickable.title"
        className="input--height-small1x"
        label="Title (children)"
        onChange={onChange}
        value={valueFn('props.clickable.title')}
      />
    </Form>
  );
}
