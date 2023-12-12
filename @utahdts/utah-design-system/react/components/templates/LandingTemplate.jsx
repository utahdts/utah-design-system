/**
 * @param {Object} props
 * @param {() => JSX.Element} props.content
 * @returns {JSX.Element}
 */
export function LandingTemplate({ content: Content }) {
  return (<Content />);
}
