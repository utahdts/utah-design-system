import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import joinClassNames from '../../../util/joinClassNames';
import handleEvent from '../../../util/handleEvent';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  headingLevel: PropTypes.number,
  headerClassName: PropTypes.string,
  headerContent: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};
const defaultProps = {
  className: undefined,
  contentClassName: undefined,
  headingLevel: 2,
  headerClassName: undefined,
  isOpen: undefined,
  onToggle: undefined,
};

function Accordion({
  children,
  className,
  contentClassName,
  headingLevel,
  headerClassName,
  headerContent,
  isOpen,
  onToggle,
}) {
  const [stateIsOpen, setStateIsOpen] = useState(isOpen || false);

  useEffect(() => {
    setStateIsOpen(isOpen);
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
        <HeadingTag>{headerContent}</HeadingTag>
        <span className={`utds-icon-before-circle-chevron-up icon-button__icon ${stateIsOpen ? '' : 'icon-button__icon--rotate180'}`} />
      </button>

      <div className={joinClassNames(['accordion__content', contentClassName, stateIsOpen ? 'accordion__content--open' : ''])}>
        {children}
      </div>

    </div>
  );
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
