import { Form, Select, SelectOption, Switch, TextArea, TextInput } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').AccordionExamplePropsShape} AccordionExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: AccordionExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */

export function AccordionExampleProps({ setState, state }) {
  return (
    <Form
      className="form--stacked"
      // @ts-expect-error
      setState={setState}
      state={state}
    >
      <TextInput id="props.headerContent" label="Header Content" className="input--height-small1x" />
      <TextArea id="props.children" label="Content" />
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.headerClassName" label="Header Class" className="input--height-small1x" />
      <TextInput id="props.contentClassName" label="Content Class" className="input--height-small1x" />
      <Select id="props.headingLevel" label="Header Heading Level" className="input--height-small1x">
        <SelectOption key="vertical-menu__interactive-prop__one" label="h1" value={1} />
        <SelectOption key="vertical-menu__interactive-prop__two" label="h2" value={2} />
        <SelectOption key="vertical-menu__interactive-prop__three" label="h3" value={3} />
        <SelectOption key="vertical-menu__interactive-prop__four" label="h4" value={4} />
      </Select>
      <Switch id="props.isOpen" label="Open" width={20} />
    </Form>
  );
}
