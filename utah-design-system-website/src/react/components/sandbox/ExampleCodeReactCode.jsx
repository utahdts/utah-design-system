/**
 * @param {object} props
 * @param {string} [props.code]
 * @param {boolean} props.isRenderable
 * @returns {import('react').JSX.Element | null}
 */
export function ExampleCodeReactCode({ code, isRenderable }) {
  // eslint-disable-next-line react/jsx-one-expression-per-line
  return (isRenderable ? (<><span>{code}</span><br /></>) : null);
}
