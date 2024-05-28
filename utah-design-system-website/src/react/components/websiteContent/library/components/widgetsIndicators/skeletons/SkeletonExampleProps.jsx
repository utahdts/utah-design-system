import { Form, Select, SelectOption, skeletonStyles, TextInput } from '@utahdts/utah-design-system';

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
      // @ts-ignore
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <Select id="props.style" label="Style" className="input--height-small1x">
        <SelectOption label="Rectangular" value={skeletonStyles.RECTANGULAR} />
        <SelectOption label="Circular" value={skeletonStyles.CIRCULAR} />
        <SelectOption label="Linear" value={skeletonStyles.LINEAR} />
      </Select>
    </Form>
  );
}
