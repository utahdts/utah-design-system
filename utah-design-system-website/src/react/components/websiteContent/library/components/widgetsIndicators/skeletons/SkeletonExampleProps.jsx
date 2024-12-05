import { Form, Select, SelectOption, skeletonTypes, TextInput } from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').SkeletonExamplePropsShape} SkeletonExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: SkeletonExamplePropsShape}>} props.setState
 * @param {SkeletonExamplePropsShape} props.state
 * @returns {import('react').JSX.Element}
 */
export function SkeletonExampleProps({ setState, state }) {
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
      <Select
        id="props.type"
        className="input--height-small1x"
        label="Type"
        onChange={onChange}
        value={valueFn('props.type')}
      >
        <SelectOption label="Rectangular" value={skeletonTypes.RECTANGULAR} />
        <SelectOption label="Circular" value={skeletonTypes.CIRCULAR} />
        <SelectOption label="Linear" value={skeletonTypes.LINEAR} />
      </Select>
    </Form>
  );
}
