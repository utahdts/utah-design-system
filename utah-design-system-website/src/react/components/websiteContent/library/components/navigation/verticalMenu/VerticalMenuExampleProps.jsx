import { Form, childrenMenuTypes, Select, SelectOption } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').VerticalMenuExamplePropsShape} VerticalMenuExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: VerticalMenuExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */

export function VerticalMenuExampleProps({ setState, state }) {
  return (
    <Form
      className="form--stacked"
      // @ts-ignore
      setState={setState}
      state={state}
    >
      <Select id="props.childrenMenuType" label="Menu Type" className="input--height-small1x">
        <SelectOption key="vertical-menu__interactive-prop__inline" label="Inline" value={childrenMenuTypes.INLINE} />
        <SelectOption key="vertical-menu__interactive-prop__flyout" label="Flyout" value={childrenMenuTypes.FLYOUT} />
        <SelectOption key="vertical-menu__interactive-prop__plain" label="Plain" value={childrenMenuTypes.PLAIN} />
      </Select>
    </Form>
  );
}
