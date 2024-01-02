import { SandboxIndent } from './SandboxIndent';

/**
 * @param {object} props
 * @param {string | null} [props.displayProp]
 * @param {number} props.indentLevel
 * @returns {React.JSX.Element | null}
 */
export function ExampleCodeReactProp({ displayProp, indentLevel }) {
  return (
    displayProp
      ? (
        <>
          <span>
            <SandboxIndent indentLevel={indentLevel} />
            {displayProp}
          </span>
          <br />
        </>
      )
      : null
  );
}
