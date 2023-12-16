import { useEffect, useState } from 'react';
import { handleEvent } from '../../../util/handleEvent';
import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.contentClassName]
 * @param {number} [props.headingLevel]
 * @param {string} [props.headerClassName]
 * @param {React.ReactNode} props.headerContent
 * @param {boolean} [props.isOpen]
 * @param {(previousIsOpen: boolean) => void} [props.onToggle]
 * @returns {JSX.Element}
 */
export function Accordion({
  children,
  className,
  contentClassName,
  headingLevel = 2,
  headerClassName,
  headerContent,
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
    <div className={joinClassNames(['accordion', className])}>
      <button
        className={joinClassNames(['accordion__header', headerClassName, stateIsOpen ? 'accordion__header--open' : ''])}
        type="button"
        onClick={handleEvent(toggleAccordion)}
      >
        {/* @ts-ignore */}
        <HeadingTag>{headerContent}</HeadingTag>
        <span className={`utds-icon-before-circle-chevron-up icon-button__icon ${stateIsOpen ? '' : 'icon-button__icon--rotate180'}`} />
      </button>

      <div className={joinClassNames(['accordion__content', contentClassName, stateIsOpen ? 'accordion__content--open' : ''])}>
        {children}
      </div>

    </div>
  );
}
