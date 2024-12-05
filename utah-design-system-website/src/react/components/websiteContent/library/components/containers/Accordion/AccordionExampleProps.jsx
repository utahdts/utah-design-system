import { Form, Select, SelectOption, Switch, TextArea, TextInput } from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').AccordionExamplePropsShape} AccordionExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: AccordionExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */

export function AccordionExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <TextInput
        id="props.headerContent"
        className="input--height-small1x"
        label="Header Content"
        onChange={onChange}
        value={valueFn('props.headerContent')}
      />
      <TextArea
        id="props.children"
        label="Content"
        onChange={onChange}
        value={valueFn('props.children')}
      />
      <TextInput
        id="props.className"
        className="input--height-small1x"
        label="Class"
        onChange={onChange}
        value={valueFn('props.className')}
      />
      <TextInput
        id="props.headerClassName"
        className="input--height-small1x"
        label="Header Class"
        onChange={onChange}
        value={valueFn('props.headerClassName')}
      />
      <TextInput
        id="props.contentClassName"
        className="input--height-small1x"
        label="Content Class"
        onChange={onChange}
        value={valueFn('props.contentClassName')}
      />
      <Select
        id="props.headingLevel"
        className="input--height-small1x"
        label="Header Heading Level"
        onChange={onChange}
        value={valueFn('props.headingLevel')}
      >
        <SelectOption key="vertical-menu__interactive-prop__one" label="h1" value={1} />
        <SelectOption key="vertical-menu__interactive-prop__two" label="h2" value={2} />
        <SelectOption key="vertical-menu__interactive-prop__three" label="h3" value={3} />
        <SelectOption key="vertical-menu__interactive-prop__four" label="h4" value={4} />
      </Select>
      <Switch
        id="props.isOpen"
        label="Open"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isOpen')}
        width={20}
      />
    </Form>
  );
}
