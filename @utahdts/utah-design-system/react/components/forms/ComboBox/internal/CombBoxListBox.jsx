// @ts-check
import React from 'react';
import joinClassNames from '../../../../util/joinClassNames';
import useComboBoxContext from '../context/useComboBoxContext';

/** @typedef {import('../../../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {string} props.ariaLabelledById
 * @param {React.ReactNode | null} [props.children]
 * @param {string} props.id
 * @returns {JSX.Element}
 */
export default function CombBoxListBox({
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
