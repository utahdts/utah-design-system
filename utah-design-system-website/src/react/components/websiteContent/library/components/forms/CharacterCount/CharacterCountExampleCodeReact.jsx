import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').CharacterCountExamplePropsShape} CharacterCountExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {CharacterCountExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function CharacterCountExampleCodeReact({
  state: {
    props: {
      className,
      id,
      maxLength,
      text,
    },
  },
}) {
  return (
    <>
      &lt;CharacterCount
      <br />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={maxLength ? `maxLength="${maxLength}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={text ? `text="${text}"` : null} indentLevel={1} />
      /&gt;
    </>
  );
}
