import { Accordion, joinClassNames } from '@utahdts/utah-design-system';

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
      contentClassName,
      headerClassName,
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
        contentClassName={contentClassName}
        headerContent={<span>{headerContent}</span>}
        headerClassName={joinClassNames('button--primary-color button--solid', headerClassName)}
        headingLevel={headingLevel}
        id="sandbox-accordion"
        isOpen={isOpen}
      >
        {children}
      </Accordion>
    </div>
  );
}
