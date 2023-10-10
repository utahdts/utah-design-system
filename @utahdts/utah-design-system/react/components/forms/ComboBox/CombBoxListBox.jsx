// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import joinClassNames from '../../../util/joinClassNames';
import useComboBoxContext from './useComboBoxContext';

/** @typedef {import('../../../jsDocTypes').EventAction} EventAction */

const propTypes = {
  // children are the options
  children: PropTypes.node,
  ariaLabelledById: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
const defaultProps = {
  children: null,
};

/**
 * @param {Object} props
 * @param {string} props.ariaLabelledById
 * @param {React.ReactNode | null} [props.children]
 * @param {string} props.id
 * @returns {JSX.Element}
 */
function CombBoxListBox({
  ariaLabelledById,
  children,
  id,
}) {
  const [{ isOptionsExpanded }] = useComboBoxContext();
  return (
    <div
      id={id}
      className={joinClassNames(
        'combo-box__list-box',
        !isOptionsExpanded && 'visually-hidden'
      )}
      role="listbox"
      aria-labelledby={ariaLabelledById}
    >
      {children}
    </div>
  );
}

CombBoxListBox.propTypes = propTypes;
CombBoxListBox.defaultProps = defaultProps;

export default CombBoxListBox;
