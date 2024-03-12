import { Accordion } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').AccordionExamplePropsShape} AccordionExamplePropsShape */
/**
 * @param {object} props
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @param {object} props.state
 * @param {AccordionExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function AccordionExampleRender({
  state: {
    props: {
      children,
      className,
      headerContent,
      headingLevel,
      isOpen,
    },
  },
  innerRef,
}) {
  return (
    <div ref={innerRef} className="full-width">
      <Accordion
        className={className}
        headerContent={<span>{headerContent}</span>}
        headerClassName="button--primary-color button--solid"
        headingLevel={headingLevel}
        id="sandbox-accordion"
        isOpen={isOpen}
      >
        {children}
      </Accordion>
    </div>
  );
}
