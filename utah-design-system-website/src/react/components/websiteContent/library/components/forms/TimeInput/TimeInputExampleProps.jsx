import {
  Form,
  PlainText,
  Select,
  SelectOption,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TimeInputExamplePropsShape} TimeInputExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TimeInputExamplePropsShape}>} props.setState
 * @param {{props: TimeInputExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function TimeInputExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      // @ts-ignore
      setState={setState}
      className="form--stacked"
    >
      <Switch id="props.allowCustomEntry" label="Custom Entry" width={20} />
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <Switch id="props.hasTimePopup" label="Has Popup" width={20} />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isClearable" label="Clearable" width={20} />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <Switch id="props.isRequired" label="Required" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <TextInput id="props.placeholder" label="Placeholder" className="input--height-small1x" />
      <Select id="props.timeFormat" label="Time Format" className="input--height-small1x">
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
      <Select id="props.timeRangeIncrement" label="Time Increment" className="input--height-small1x">
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
      <TextInput id="props.timeRangeBegin" label={`Range Begin (${state.props.timeFormat})`} className="input--height-small1x" />
      <TextInput id="props.timeRangeEnd" label={`Range End (${state.props.timeFormat})`} className="input--height-small1x" />
      <PlainText id="props.value" label="Value" value={state.props.value || '-- Nothing Selected --'} />
    </Form>
  );
}
