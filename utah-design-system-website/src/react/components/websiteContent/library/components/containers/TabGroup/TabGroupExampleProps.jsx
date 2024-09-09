import { Form, Select, SelectOption, Switch, TextInput } from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').TabGroupExamplePropsShape} TabGroupExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: TabGroupExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function TabGroupExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <TextInput
        id="props.tabA"
        className="input--height-small1x"
        label="First Tab"
        onChange={onChange}
        value={valueFn('props.tabA')}
      />
      <TextInput
        id="props.tabB"
        className="input--height-small1x"
        label="Second Tab"
        onChange={onChange}
        value={valueFn('props.tabB')}
      />
      <TextInput
        id="props.panelA"
        className="input--height-small1x"
        label="First Panel"
        onChange={onChange}
        value={valueFn('props.panelA')}
      />
      <TextInput
        id="props.panelB"
        className="input--height-small1x"
        label="Second Panel"
        onChange={onChange}
        value={valueFn('props.panelB')}
      />
      <Switch
        id="props.isVertical"
        label="Vertical"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isVertical')}
        width={20}
      />
      <Select
        id="props.selectedTab"
        label="Selected Tab"
        onChange={onChange}
        value={valueFn('props.selectedTab')}
      >
        <SelectOption label="Tab A" value="tab-A" />
        <SelectOption label="Tab B" value="tab-B" />
      </Select>
    </Form>
  );
}
