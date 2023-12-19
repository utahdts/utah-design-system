// The MainContent component renders a <main> tag.
// Use primarily to provide a target for the skip link.
/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {React.RefObject<HTMLElement>} [props.innerRef]
 * @returns {React.JSX.Element}
 */
export function MainContent({
  children,
  className,
  id = 'main-content',
  innerRef,
  ...rest
}) {
  return (
    <main className={className} id={id} ref={innerRef} {...rest}>
      {children}
    </main>
  );
}
