/**
 * @param {object} props
 * @param {() => JSX.Element} props.content
 * @returns {React.JSX.Element}
 */
export function LandingTemplate({ content: Content }) {
  return (<Content />);
}
