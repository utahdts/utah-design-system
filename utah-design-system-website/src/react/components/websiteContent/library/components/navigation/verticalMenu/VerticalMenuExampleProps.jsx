import { Form, Select, SelectOption } from '@utahdts/utah-design-system';
import { childrenMenuTypes } from '@utahdts/utah-design-system-header';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').VerticalMenuExamplePropsShape} VerticalMenuExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: VerticalMenuExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */

export function VerticalMenuExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <Select
        id="props.childrenMenuType"
        className="input--height-small1x"
        label="Menu Type"
        onChange={onChange}
        value={valueFn('props.childrenMenuType')}
      >
        <SelectOption key="vertical-menu__interactive-prop__inline" label="Inline" value={childrenMenuTypes.INLINE} />
        <SelectOption key="vertical-menu__interactive-prop__flyout" label="Flyout" value={childrenMenuTypes.FLYOUT} />
        <SelectOption key="vertical-menu__interactive-prop__plain" label="Plain" value={childrenMenuTypes.PLAIN} />
      </Select>
    </Form>
  );
}
