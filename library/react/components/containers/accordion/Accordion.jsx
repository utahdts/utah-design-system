import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import joinClassNames from '../../../util/joinClassNames';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  headerContent: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};
const defaultProps = {
  className: undefined,
  contentClassName: undefined,
  headerClassName: undefined,
  isOpen: undefined,
  onToggle: undefined,
};

function Accordion({
  children,
  className,
  contentClassName,
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
  return (
    <div className={joinClassNames(['accordion', className])}>
      <button
        className={joinClassNames(['accordion__header', headerClassName])}
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          toggleAccordion();
        }}
      >
        {headerContent}
        <span className={`material-symbols-outlined icon-button__icon ${stateIsOpen ? '' : 'icon-button__icon--rotate180'}`}>expand_circle_down</span>
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
