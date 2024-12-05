import { useEffect, useState } from 'react';
import { handleEvent } from '../../../util/handleEvent';
import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.contentClassName]
 * @param {number} [props.headingLevel]
 * @param {string} [props.headerClassName]
 * @param {import('react').ReactNode} props.headerContent
 * @param {string} props.id
 * @param {boolean} [props.isOpen]
 * @param {(previousIsOpen: boolean) => void} [props.onToggle]
 * @returns {import('react').JSX.Element}
 */
export function Accordion({
  children,
  className,
  contentClassName,
  headingLevel = 2,
  headerClassName,
  headerContent,
  id,
  isOpen,
  onToggle,
}) {
  const [stateIsOpen, setStateIsOpen] = useState(isOpen || false);

  useEffect(() => {
    setStateIsOpen(!!isOpen);
  }, [isOpen]);

  function toggleAccordion() {
    if (onToggle) {
      onToggle(stateIsOpen);
    } else {
      setStateIsOpen(!stateIsOpen);
    }
  }
  const HeadingTag = `h${headingLevel}`;

  return (
    <div className={joinClassNames(['accordion', className])} id={id}>
      <button
        aria-expanded={stateIsOpen}
        aria-controls={`accordion-content__${id}`}
        className={joinClassNames(['accordion__header', headerClassName, stateIsOpen ? 'accordion__header--open' : ''])}
        id={`accordion-button__${id}`}
        onClick={handleEvent(toggleAccordion)}
        type="button"
      >
        {/* @ts-expect-error */}
        <HeadingTag>{headerContent}</HeadingTag>
        <span className={`utds-icon-before-circle-chevron-up icon-button__icon ${stateIsOpen ? '' : 'icon-button__icon--rotate180'}`} aria-hidden="true" />
      </button>

      <div
        aria-hidden={!stateIsOpen}
        aria-labelledby={`accordion-button__${id}`}
        className={joinClassNames(['accordion__content', contentClassName, stateIsOpen ? 'accordion__content--open' : ''])}
        id={`accordion-content__${id}`}
        role="region"
      >
        {children}
      </div>

    </div>
  );
}
