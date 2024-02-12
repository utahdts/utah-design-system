import { useCallback, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { useAriaMessaging } from '../../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { popupPlacement } from '../../../../enums/popupPlacement';
import { useDebounceFunc } from '../../../../hooks/useDebounceFunc';
import { joinClassNames } from '../../../../util/joinClassNames';
import { useMultiSelectContext } from '../../MultiSelect/context/useMultiSelectContext';
import { ComboBoxOption } from '../ComboBoxOption';
import { useComboBoxContext } from '../context/useComboBoxContext';
import { isOptionGroupVisible } from '../functions/isOptionGroupVisible';

/**
 * @param {object} props
 * @param {boolean} [props.allowCustomEntry] if allowing custom entry, add the custom item if the list is empty; Must be a controlled component
 * @param {string} props.ariaLabelledById
 * @param {import('react').ReactNode | null} [props.children]
 * @param {HTMLElement | null} props.popperReferenceElement
 * @param {string} props.id
 * @returns {import('react').JSX.Element}
 */
export function CombBoxListBox({
  allowCustomEntry,
  ariaLabelledById,
  children,
  id,
  popperReferenceElement,
}) {
  const [{ selectedValues }] = useMultiSelectContext();
  const { addPoliteMessage } = useAriaMessaging();
  const [
    {
      filterValue,
      isOptionsExpanded,
      options,
      optionsFiltered,
      optionsFilteredWithoutGroupLabels,
      optionValueFocused,
      optionValueSelected,
    }, /* array element `setState` is not used here */,
    comboBoxContextNonStateRef,
  ] = useComboBoxContext();
  const ulRef = useRef(/** @type {HTMLUListElement | null} */(null));
  const announcedArrowKeysRef = useRef(false);

  const { styles, attributes, update } = usePopper(
    popperReferenceElement,
    ulRef.current,
    {
      placement: popupPlacement.BOTTOM,
      modifiers: [
        { name: 'offset', options: { offset: [0, 4] } },
      ],
    }
  );

  const lastMessageRef = useRef(/** @type {string | null} */(null));
  const addPoliteMessageDebounced = useDebounceFunc(
    useCallback(
      (message) => {
        if (lastMessageRef.current !== message) {
          addPoliteMessage(message);
          lastMessageRef.current = message;
        }
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
    [isOptionsExpanded, selectedValues, update]
  );

  useEffect(
    () => {
      const message = [];

      // only announce if text input or an option for this combo box has focus
      if (optionValueFocused || document.activeElement === comboBoxContextNonStateRef.current.textInput) {
        // arrow key announcement only happens the first time the options pop open
        const sayArrowKeyAnnouncement = isOptionsExpanded && !announcedArrowKeysRef.current;
        if (sayArrowKeyAnnouncement) {
          // after first invocation, no longer announce about the arrow keys.
          announcedArrowKeysRef.current = true;
        }
        if (optionsFiltered.length !== optionsFilteredWithoutGroupLabels.length) {
          const numGroups = optionsFiltered.filter(
            (option) => (
              option.isGroupLabel
              && isOptionGroupVisible(
                option.isGroupLabel ? option.optionGroupId ?? null : null,
                option.label,
                optionsFiltered,
                selectedValues
              )
            )
          ).length;
          // the options have "groups": '8 results available in 2 groups'
          message.push(`${optionsFilteredWithoutGroupLabels.length} result${optionsFilteredWithoutGroupLabels.length === 1 ? '' : 's'} available in ${numGroups} group${numGroups === 1 ? '' : 's'}.`);
        } else {
          // there are no groups: '8 results available'
          message.push(`${optionsFilteredWithoutGroupLabels.length} result${optionsFilteredWithoutGroupLabels.length === 1 ? '' : 's'} available.`);
        }
        if (allowCustomEntry && filterValue && !options.some((option) => option.labelLowerCase === filterValue.toLocaleLowerCase())) {
          message.push(`Press Enter to add ${filterValue} to the combo box list.`);
        }
        message.push('Use the down arrow key to begin selecting.');
        addPoliteMessageDebounced(message.join(' '));
      }
    },
    // do not include `optionValueFocused` in the dependency list
    [isOptionsExpanded, optionsFilteredWithoutGroupLabels, filterValue]
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
        minWidth: popperReferenceElement?.scrollWidth,
      }}
      tabIndex={-1}
      {...attributes.popper}
    >
      {children}
      {
        // not custom and no possible options (all filtered out)
        (!optionsFilteredWithoutGroupLabels.length && !allowCustomEntry)
          ? <ComboBoxOption isStatic isDisabled label="" value="">No results found</ComboBoxOption>
          : null
      }
      {
        // no possible options but allowing custom entry and haven't selected a value yet
        (!optionsFilteredWithoutGroupLabels.length && allowCustomEntry && optionValueSelected !== filterValue)
          ? <ComboBoxOption isStatic isDisabled label="" value="">Press enter to add custom item</ComboBoxOption>
          : null
      }
      {/* Note: a custom entered option (allowCustomEntry) is not rendered here. The controlling component must create the ComboBoxOption for it. */}
    </ul>
  );
}
