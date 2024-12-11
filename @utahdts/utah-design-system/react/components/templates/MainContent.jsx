// The MainContent component renders a <main> tag.
// Use primarily to provide a target for the skip link.
/**
 * The MainContent component renders a <main> tag.
 * Use primarily to provide a target for the skip link.
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {import('react').RefObject<HTMLElement | null>} [props.innerRef]
 * @returns {import('react').JSX.Element}
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
