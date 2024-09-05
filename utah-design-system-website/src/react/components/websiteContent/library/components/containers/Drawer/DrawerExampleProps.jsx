import { DRAWER_PLACEMENT, Form, Select, SelectOption, Switch, TextArea, TextInput } from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').DrawerExamplePropsShape} DrawerExamplePropsShape */
/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: DrawerExamplePropsShape}>} props.setState
 * @param {{props: DrawerExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function DrawerExampleProps({ setState, state }) {
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
        id="props.title"
        className="input--height-small1x"
        label="Title"
        onChange={onChange}
        value={valueFn('props.title')}
      />
      <TextArea
        id="props.content"
        label="Content"
        onChange={onChange}
        value={valueFn('props.content')}
      />
      <Select
        id="props.position"
        className="input--height-small1x"
        label="Position"
        onChange={onChange}
        value={valueFn('props.position')}
      >
        <SelectOption label="Right" value={DRAWER_PLACEMENT.RIGHT} />
        <SelectOption label="Left" value={DRAWER_PLACEMENT.LEFT} />
      </Select>
      <Switch
        id="props.showCloseButton"
        label="Show close button"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.showCloseButton')}
        width={20}
      />
      <Switch
        id="props.closeOnEsc"
        label="Close on escape"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.closeOnEsc')}
        width={20}
      />
    </Form>
  );
}
