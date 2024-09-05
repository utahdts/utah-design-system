import { Form, Select, SelectOption, skeletonTypes, TextInput } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').SkeletonExamplePropsShape} SkeletonExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: SkeletonExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function SkeletonExampleProps({ setState, state }) {
  return (
    <Form
      state={state}
      // @ts-expect-error
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <Select id="props.type" label="Type" className="input--height-small1x">
        <SelectOption label="Rectangular" value={skeletonTypes.RECTANGULAR} />
        <SelectOption label="Circular" value={skeletonTypes.CIRCULAR} />
        <SelectOption label="Linear" value={skeletonTypes.LINEAR} />
      </Select>
    </Form>
  );
}
