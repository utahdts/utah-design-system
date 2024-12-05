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
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function TagExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form
      className="form--stacked"
    >
      <TextInput
        id="props.nonClickable.className"
        className="input--height-small1x"
        label="Class"
        onChange={onChange}
        value={valueFn('props.nonClickable.className')}
      />

      <Switch
        id="props.nonClickable.isClearable"
        label="Clearable"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.nonClickable.isClearable')}
      />

      <Select
        id="props.nonClickable.color"
        className="input--height-small1x"
        label="Color"
        onChange={onChange}
        value={valueFn('props.nonClickable.color')}
      >
        <SelectOption label="Default" value="" />
        <SelectOption label="Primary" value="tag--primary-color" />
        <SelectOption label="Primary light" value="tag--primary-color-light" />
        <SelectOption label="Secondary" value="tag--secondary-color" />
        <SelectOption label="Secondary light" value="tag--secondary-color-light" />
        <SelectOption label="Accent" value="tag--accent-color" />
        <SelectOption label="Accent light" value="tag--accent-color-light" />
      </Select>

      <Switch
        id="props.nonClickable.isDisabled"
        label="Disabled"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.nonClickable.isDisabled')}
        width={20}
      />

      <Select
        id="props.nonClickable.iconLeft"
        className="input--height-small1x"
        label="Icon Left"
        onChange={onChange}
        value={valueFn('props.nonClickable.iconLeft')}
      >
        <SelectOption label="Checkmark" value="check" />
        <SelectOption label="Arrow" value="arrow-left" />
        <SelectOption label="None" value="none" />
      </Select>

      <Select
        id="props.nonClickable.iconRight"
        className="input--height-small1x"
        label="Icon Right"
        onChange={onChange}
        value={valueFn('props.nonClickable.iconRight')}
      >
        <SelectOption label="Checkmark" value="check" />
        <SelectOption label="Arrow" value="arrow-right" />
        <SelectOption label="None" value="none" />
      </Select>

      <TextInput
        id="props.nonClickable.id"
        className="input--height-small1x"
        label="ID"
        onChange={onChange}
        value={valueFn('props.nonClickable.id')}
      />

      <Select
        id="props.nonClickable.size"
        className="input--height-small1x"
        label="Size"
        onChange={onChange}
        value={valueFn('props.nonClickable.size')}
      >
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
      </Select>

      <TextInput
        id="props.nonClickable.title"
        className="input--height-small1x"
        label="Title (children)"
        onChange={onChange}
        value={valueFn('props.nonClickable.title')}
      />

    </Form>
  );
}
