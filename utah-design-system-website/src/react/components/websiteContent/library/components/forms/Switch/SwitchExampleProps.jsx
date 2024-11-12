import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').SwitchExamplePropsShape} SwitchExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: SwitchExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function SwitchExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <div>
      <div>
        <Form>
          <TextInput
            id="props.className"
            className="input--height-small1x"
            label="Class"
            onChange={onChange}
            value={valueFn('props.className')}
          />
          <TextInput
            id="props.id"
            className="input--height-small1x"
            label="ID"
            onChange={onChange}
            value={valueFn('props.id')}
          />
          <Switch
            id="props.isDisabled"
            label="Disabled"
            // @ts-expect-error
            onChange={onChange}
            value={valueFn('props.isDisabled')}
          />
          <TextInput
            id="props.errorMessage"
            className="input--height-small1x"
            label="Error Message"
            onChange={onChange}
            value={valueFn('props.errorMessage')}
          />
          <TextInput
            id="props.label"
            className="input--height-small1x"
            label="Label"
            onChange={onChange}
            value={valueFn('props.label')}
          />
          <TextInput
            id="props.labelOff"
            className="input--height-small1x"
            label="Label - Off"
            onChange={onChange}
            value={valueFn('props.labelOff')}
          />
          <TextInput
            id="props.labelOn"
            className="input--height-small1x"
            label="Label - On"
            onChange={onChange}
            value={valueFn('props.labelOn')}
          />
          <Switch
            id="props.value"
            label="Value"
            labelOff="Off"
            labelOn="On"
            // @ts-expect-error
            onChange={onChange}
            value={valueFn('props.value')}
            width={40}
          />
          <Select
            id="props.size"
            className="input--height-small1x"
            label="Size"
            onChange={onChange}
            value={valueFn('props.size')}
          >
            <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
            <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
            <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
          </Select>
          <TextInput
            id="props.width"
            className="input--height-small1x"
            label="Width"
            onChange={onChange}
            value={valueFn('props.width')}
          />
          <Select
            id="props.icon"
            className="input--height-small1x"
            label="Icon (sliderChildren)"
            onChange={onChange}
            value={valueFn('props.icon')}
          >
            <SelectOption label="Check" value="checkbox" />
            <SelectOption label="Visibility" value="visibility" />
            <SelectOption label="None" value="none" />
          </Select>
        </Form>
      </div>
    </div>
  );
}
