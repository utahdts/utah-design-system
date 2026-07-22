/**
 * @param {object} props
 * @param {string} [props.code]
 * @param {boolean} props.isRenderable
 * @returns {import('react').JSX.Element | null}
 */
export function ExampleCodeReactCode({ code, isRenderable }) {
  return (isRenderable ? (<><span>{code}</span><br /></>) : null);
}
