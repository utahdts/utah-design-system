/**
 * @param {object} props
 * @param {number} props.indentLevel
 * @returns {import('react').JSX.Element}
 */
export function SandboxIndent({ indentLevel }) {
  return (
    <>
      {Array.from({ length: indentLevel })
        // eslint-disable-next-line react/no-array-index-key
        .map((_, indentIndex) => <span key={`sandbox-indent--${indentIndex}`}>&nbsp;&nbsp;</span>)}
    </>
  );
}
