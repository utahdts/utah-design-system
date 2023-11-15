// @ts-check
import React, { useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import popupPlacement from '../../../../enums/popupPlacement';
import joinClassNames from '../../../../util/joinClassNames';
import ComboBoxOption from '../ComboBoxOption';
import useComboBoxContext from '../context/useComboBoxContext';

/** @typedef {import('../../../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {string} props.ariaLabelledById
 * @param {React.ReactNode | null} [props.children]
 * @param {React.MutableRefObject<any>} props.popperReferenceElementRef
 * @param {string} props.id
 * @returns {JSX.Element}
 */
export default function CombBoxListBox({
  ariaLabelledById,
  children,
  id,
  popperReferenceElementRef,
}) {
  const [{ isOptionsExpanded }] = useComboBoxContext();
  const [{ optionsFiltered }] = useComboBoxContext();
  const ulRef = useRef(/** @type {HTMLUListElement | null} */(null));

  const { styles, attributes, update } = usePopper(
    popperReferenceElementRef.current,
    ulRef.current,
    { placement: popupPlacement.BOTTOM }
  );

  useEffect(
    () => {
      if (update) {
        update();
      }
    },
    [isOptionsExpanded, update]
  );

  return (
    <ul
      id={id}
      aria-labelledby={ariaLabelledById}
      className={joinClassNames(
        'combo-box__list-box',
        !isOptionsExpanded && 'visually-hidden'
      )}
      ref={ulRef}
      role="listbox"
      style={styles.popper}
      tabIndex={-1}
      {...attributes.popper}
    >
      {children}
      {optionsFiltered?.length ? null : <ComboBoxOption isStatic isDisabled label="" value="">No results found</ComboBoxOption>}
    </ul>
  );
}
