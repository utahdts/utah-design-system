import {
  ExternalLink, Form, Switch, TextInput
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').FileInputExamplePropsShape} FileInputExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: FileInputExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function FileInputExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);

  return (
    <Form className="form--stacked">
      <div className="mb-spacing">
        <TextInput
          id="props.acceptedFileTypes"
          className="input--height-small1x"
          label="Files Accepted"
          onChange={onChange}
          value={valueFn('props.acceptedFileTypes')}
          wrapperClassName="mb-auto"
        />
        <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept">Learn more</ExternalLink>
      </div>
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
      <TextInput
        id="props.hint"
        className="input--height-small1x"
        label="Hint"
        onChange={onChange}
        value={valueFn('props.hint')}
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
      <Switch
        id="props.multiple"
        label="Multiple"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.multiple')}
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
    </Form>
  );
}
