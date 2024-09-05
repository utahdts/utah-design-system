import {
  Form,
  PlainText,
  Select,
  SelectOption,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').TimeInputExamplePropsShape} TimeInputExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TimeInputExamplePropsShape}>} props.setState
 * @param {{props: TimeInputExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function TimeInputExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <Switch
        id="props.allowCustomEntry"
        label="Custom Entry"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.allowCustomEntry')}
        width={20}
      />
      <TextInput
        id="props.className"
        className="input--height-small1x"
        label="Class"
        onChange={onChange}
        value={valueFn('props.className')}
      />
      <TextInput
        id="props.errorMessage"
        className="input--height-small1x"
        label="Error Message"
        onChange={onChange}
        value={valueFn('props.errorMessage')}
      />
      <Switch
        id="props.hasTimePopup"
        label="Has Popup"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.hasTimePopup')}
        width={20}
      />
      <TextInput
        id="props.id"
        className="input--height-small1x"
        label="ID"
        onChange={onChange}
        value={valueFn('props.id')}
      />
      <Switch
        id="props.isClearable"
        label="Clearable"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isClearable')}
        width={20}
      />
      <Switch
        id="props.isDisabled"
        label="Disabled"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isDisabled')}
        width={20}
      />
      <Switch
        id="props.isRequired"
        label="Required"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isRequired')}
        width={20}
      />
      <TextInput
        id="props.label"
        className="input--height-small1x"
        label="Label"
        onChange={onChange}
        value={valueFn('props.label')}
      />
      <TextInput
        id="props.placeholder"
        className="input--height-small1x"
        label="Placeholder"
        onChange={onChange}
        value={valueFn('props.placeholder')}
      />
      <Select
        id="props.timeFormat"
        className="input--height-small1x"
        label="Time Format"
        onChange={onChange}
        value={valueFn('props.timeFormat')}
      >
        {
          [
            'h:mm a',
            'hh:mm a',
            'HH:mm',
            'a mm:hh',
          ].map((timeFormat) => (
            <SelectOption
              key={`time-input-example-props__time-format__${timeFormat}`}
              label={timeFormat}
              value={timeFormat}
            />
          ))
        }
      </Select>
      <Select
        id="props.timeRangeIncrement"
        className="input--height-small1x"
        label="Time Increment"
        onChange={onChange}
        value={valueFn('props.timeRangeIncrement')}
      >
        {
          [
            '1',
            '5',
            '10',
            '15',
            '30',
            '45',
            '60',
          ].map((timeIncrement) => (
            <SelectOption
              key={`time-input-example-props__time-increment__${timeIncrement}`}
              label={timeIncrement}
              value={timeIncrement}
            />
          ))
        }
      </Select>
      <TextInput
        id="props.timeRangeBegin"
        className="input--height-small1x"
        label={`Range Begin (${state.props.timeFormat})`}
        onChange={onChange}
        value={valueFn('props.timeRangeBegin')}
      />
      <TextInput
        id="props.timeRangeEnd"
        className="input--height-small1x"
        label={`Range End (${state.props.timeFormat})`}
        onChange={onChange}
        value={valueFn('props.timeRangeEnd')}
      />
      <PlainText
        id="props.value"
        label="Value"
        value={state.props.value || '-- Nothing Selected --'}
      />
    </Form>
  );
}
