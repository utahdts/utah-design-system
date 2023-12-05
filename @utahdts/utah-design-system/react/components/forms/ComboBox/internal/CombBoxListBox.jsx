// @ts-check
import React, { useCallback, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import useAriaMessaging from '../../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import popupPlacement from '../../../../enums/popupPlacement';
import { useDebounceFunc } from '../../../../hooks/useDebounceFunc';
import joinClassNames from '../../../../util/joinClassNames';
import { ComboBoxOption } from '../ComboBoxOption';
import { useComboBoxContext } from '../context/useComboBoxContext';

/** @typedef {import('../../../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {string} props.ariaLabelledById
 * @param {React.ReactNode | null} [props.children]
 * @param {React.MutableRefObject<any>} props.popperReferenceElementRef
 * @param {string} props.id
 * @returns {JSX.Element}
 */
export function CombBoxListBox({
  ariaLabelledById,
  children,
  id,
  popperReferenceElementRef,
}) {
  const { addPoliteMessage } = useAriaMessaging();
  const [
    {
      isOptionsExpanded,
      optionsFilteredWithoutGroupLabels,
      optionValueFocused,
    }, ,
    comboBoxContextNonStateRef,
  ] = useComboBoxContext();
  const ulRef = useRef(/** @type {HTMLUListElement | null} */(null));
  const announcedArrowKeysRef = useRef(false);

  const { styles, attributes, update } = usePopper(
    popperReferenceElementRef.current,
    ulRef.current,
    {
      placement: popupPlacement.BOTTOM,
      modifiers: [
        { name: 'offset', options: { offset: [0, 4] } },
      ],
    }
  );

  const addPoliteMessageDebounced = useDebounceFunc(
    useCallback(
      (message) => {
        addPoliteMessage(message);
      },
      [addPoliteMessage]
    ),
    1500
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
      if (optionValueFocused || document.activeElement === comboBoxContextNonStateRef.current.textInput) {
        // arrow key announcement only happens the first time the options pop open
        const sayArrowKeyAnnouncement = isOptionsExpanded && !announcedArrowKeysRef.current;
        if (sayArrowKeyAnnouncement) {
          // after first invocation, no longer announce about the arrow keys.
          announcedArrowKeysRef.current = true;
        }
        addPoliteMessageDebounced(`${optionsFilteredWithoutGroupLabels.length} results available.${sayArrowKeyAnnouncement ? ' Use the down arrow key to begin selecting.' : ''}`);
      }
    },
    // do not include `optionValueFocused` in the dependency list
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOptionsExpanded, optionsFilteredWithoutGroupLabels]
  );

  return (
    <ul
      id={id}
      aria-labelledby={ariaLabelledById}
      className={joinClassNames(
        'combo-box-input__list-box',
        !isOptionsExpanded && 'visually-hidden'
      )}
      ref={ulRef}
      role="listbox"
      style={{
        ...styles.popper,
        minWidth: popperReferenceElementRef?.current?.scrollWidth,
      }}
      tabIndex={-1}
      {...attributes.popper}
    >
      {children}
      {optionsFilteredWithoutGroupLabels.length ? null : <ComboBoxOption isStatic isDisabled label="" value="">No results found</ComboBoxOption>}
    </ul>
  );
}
