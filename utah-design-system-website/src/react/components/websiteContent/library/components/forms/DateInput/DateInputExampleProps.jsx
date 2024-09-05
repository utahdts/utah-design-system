import {
  Form,
  Select,
  SelectOption,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').DateInputExamplePropsShape} DateInputExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: DateInputExamplePropsShape}>} props.setState
 * @param {{props: DateInputExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function DateInputExampleProps({ setState, state }) {
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
      <TextInput
        id="props.errorMessage"
        className="input--height-small1x"
        label="Error Message"
        onChange={onChange}
        value={valueFn('props.errorMessage')}
      />
      <Switch
        id="props.hasCalendarPopup"
        label="Has Popup"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.hasCalendarPopup')}
        width={20}
      />
      <Select
        id="props.dateFormat"
        className="input--height-small1x"
        label="Calendar Input Format"
        onChange={onChange}
        value={valueFn('props.dateFormat')}
      >
        {
          [
            'MM/dd/yyyy',
            'MM-dd-yyyy',
            'yyyy/MM/dd',
            'ddMMyyyy',
          ].map((dateFormat) => (
            <SelectOption
              key={`date-example-props__date-format__${dateFormat}`}
              label={dateFormat}
              value={dateFormat}
            />
          ))
        }
      </Select>
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
        id="props.name"
        className="input--height-small1x"
        label="Name"
        onChange={onChange}
        value={valueFn('props.name')}
      />
      <TextInput
        id="props.placeholder"
        className="input--height-small1x"
        label="Placeholder"
        onChange={onChange}
        value={valueFn('props.placeholder')}
      />
      <Switch
        id="props.showCalendarTodayButton"
        label="Today Button"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.showCalendarTodayButton')}
        width={20}
      />
      <TextInput
        id="props.value"
        className="input--height-small1x"
        label="Value"
        onChange={onChange}
        value={valueFn('props.value')}
      />
    </Form>
  );
}
