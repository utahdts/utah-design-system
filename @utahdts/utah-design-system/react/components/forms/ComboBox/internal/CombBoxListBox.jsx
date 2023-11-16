// @ts-check
import React, { useCallback, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import useAriaMessaging from '../../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import popupPlacement from '../../../../enums/popupPlacement';
import { useDebounceFunc } from '../../../../hooks/useDebounceFunc';
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
  const { addPoliteMessage } = useAriaMessaging();
  const [
    {
      filterValue,
      isOptionsExpanded,
      optionsFiltered,
      optionValueFocused,
    }, ,
    textInputRef,
  ] = useComboBoxContext();
  const ulRef = useRef(/** @type {HTMLUListElement | null} */(null));
  const announcedArrowKeysRef = useRef(false);

  const { styles, attributes, update } = usePopper(
    popperReferenceElementRef.current,
    ulRef.current,
    { placement: popupPlacement.BOTTOM }
  );

  const addPoliteMessageDebounced = useDebounceFunc(
    useCallback(
      (message) => {
        addPoliteMessage(message);
      },
      [addPoliteMessage]
    )
  );

  useEffect(
    () => {
      if (update) {
        update();
      }
    },
    [isOptionsExpanded, update]
  );

  useEffect(
    () => {
      // only announce if text input or an option for this combo box has focus
      if (optionValueFocused || document.activeElement === textInputRef.current) {
        // arrow key announcement only happens the first time the options pop open
        const sayArrowKeyAnnouncement = isOptionsExpanded && !announcedArrowKeysRef.current;
        if (sayArrowKeyAnnouncement) {
          // after first invocation, no longer announce about the arrow keys.
          announcedArrowKeysRef.current = true;
        }
        addPoliteMessageDebounced(`${optionsFiltered?.length} results available.${sayArrowKeyAnnouncement ? ' Use the down arrow key to begin selecting.' : ''}`);
      }
    },
    // do not include `optionValueFocused` in the dependency list
    [addPoliteMessageDebounced, filterValue, isOptionsExpanded, optionsFiltered?.length, textInputRef]
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
