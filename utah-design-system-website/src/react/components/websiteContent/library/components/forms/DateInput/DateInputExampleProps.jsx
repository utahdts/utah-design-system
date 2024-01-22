import {
  Form,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').DateInputExamplePropsShape} DateInputExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: DateInputExamplePropsShape}>} props.setState
 * @param {{props: DateInputExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function DateInputExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      // @ts-ignore
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <Switch id="props.hasCalendarPopup" label="Has Popup" width={20} />
      <div>
        DateFormat: {state.props.dateFormat}
      </div>
      {/* Put ComboBox back in once it's fixed: UDS-1448
      <ComboBox id="props.dateFormat" label="Format" textInputClassName="input--height-small1x">
        {
          [
            'yyyy/MM/dd',
            'MM/dd/yyyy',
            'MM-dd-yyyy',
            'ddMMyyyy',
          ].map((dateFormat) => (
            <ComboBoxOption
              key={`date-example-props__date-format__${dateFormat}`}
              label={`${dateFormat} (${format(new Date(), dateFormat)})`}
              value={dateFormat}
            />
          ))
        }
      </ComboBox> */}
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isClearable" label="Clearable" width={20} />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <Switch id="props.isRequired" label="Required" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <TextInput id="props.name" label="Name" className="input--height-small1x" />
      <TextInput id="props.placeholder" label="Placeholder" className="input--height-small1x" />
      <Switch id="props.showCalendarTodayButton" label="Today Button" width={20} />
      <TextInput id="props.value" label="Value" className="input--height-small1x" />
    </Form>
  );
}
