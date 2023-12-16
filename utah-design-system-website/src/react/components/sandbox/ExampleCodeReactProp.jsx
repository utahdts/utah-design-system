import { SandboxIndent } from './SandboxIndent';

/**
 * @param {Object} props
 * @param {string | null} [props.displayProp]
 * @param {number} props.indentLevel
 * @returns {JSX.Element | null}
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
