import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').ButtonExamplePropsShape} ButtonExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: ButtonExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function ButtonExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <Select
        id="props.appearance"
        className="input--height-small1x"
        label="Appearance"
        onChange={onChange}
        value={valueFn('props.appearance')}
      >
        <SelectOption label="Outlined" value="outlined" />
        <SelectOption label="Solid" value="solid" />
      </Select>
      <Switch
        id="props.isBusy"
        label="Busy"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isBusy')}
      />

      <TextInput
        id="props.className"
        className="input--height-small1x"
        label="Class"
        onChange={onChange}
        value={valueFn('props.className')}
      />

      <Select
        id="props.color"
        className="input--height-small1x"
        label="Color"
        onChange={onChange}
        value={valueFn('props.color')}
      >
        <SelectOption label="Primary" value="primary" />
        <SelectOption label="Secondary" value="secondary" />
        <SelectOption label="Accent" value="accent" />
        <SelectOption label="None" value="none" />
      </Select>

      <Switch
        id="props.isDisabled"
        label="Disabled"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isDisabled')}
        width={20}
      />

      <Select
        id="props.iconLeft"
        className="input--height-small1x"
        label="Icon Left"
        onChange={onChange}
        value={valueFn('props.iconLeft')}
      >
        <SelectOption label="Chevron" value="IconChevron" />
        <SelectOption label="Arrow" value="IconArrowLeft" />
        <SelectOption label="None" value="none" />
      </Select>

      <Select
        id="props.iconRight"
        className="input--height-small1x"
        label="Icon Right"
        onChange={onChange}
        value={valueFn('props.iconRight')}
      >
        <SelectOption label="Chevron" value="IconChevron" />
        <SelectOption label="Arrow" value="IconArrowRight" />
        <SelectOption label="None" value="none" />
      </Select>

      <TextInput
        id="props.id"
        className="input--height-small1x"
        label="ID"
        onChange={onChange}
        value={valueFn('props.id')}
      />

      <Select
        id="props.size"
        className="input--height-small1x"
        label="Size"
        onChange={onChange}
        value={valueFn('props.size')}
      >
        <SelectOption label="Small 1X" value={formElementSizesEnum.SMALL1X} />
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
        <SelectOption label="Large 1X" value={formElementSizesEnum.LARGE1X} />
      </Select>

      <TextInput
        id="props.title"
        className="input--height-small1x"
        label="Title (children)"
        onChange={onChange}
        value={valueFn('props.title')}
      />

      <Select
        id="props.type"
        className="input--height-small1x"
        label="Type"
        onChange={onChange}
        value={valueFn('props.type')}
      >
        <SelectOption label="Button" value="button" />
        <SelectOption label="Reset" value="reset" />
        <SelectOption label="Submit" value="submit" />
      </Select>

    </Form>
  );
}
