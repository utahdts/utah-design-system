// @ts-check
import React, { useLayoutEffect, useRef } from 'react';
import useAriaMessaging from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import formElementSizesEnum from '../../../enums/formElementSizesEnum';
import joinClassNames from '../../../util/joinClassNames';
import notNull from '../../../util/notNull';
import { Tag } from '../../buttons/Tag';
import { useComboBoxContext } from '../ComboBox/context/useComboBoxContext';
import useMultiSelectContext from './context/useMultiSelectContext';

/** @typedef {import('../../../jsDocTypes').ComboBoxOption} ComboBoxOption */
/** @typedef {import('../../../jsDocTypes').MultiSelectContextValue} MultiSelectContextValue */
/** @typedef {import('../../../jsDocTypes').MultiSelectContextNonStateRef} MultiSelectContextNonStateRef */

/**
 * @param {MultiSelectContextValue} draftContext the context for updating state
 * @param {(message: string) => void} addPoliteMessage accessibility announcer
 * @param {number} selectedValueIndex the index of the tag being deleted
 * @param {ComboBoxOption} selectedOption the option being removed
 * @param {React.MutableRefObject<(HTMLDivElement | null)[]>} tagRefs the tagRefs of the tags being shown
 * @param {React.MutableRefObject<MultiSelectContextNonStateRef>} multiSelectContextNonStateRef ref for the text input
 */
function removeSelectedOption(draftContext, addPoliteMessage, selectedValueIndex, selectedOption, tagRefs, multiSelectContextNonStateRef) {
  draftContext.selectedValues.splice(selectedValueIndex, 1);
  addPoliteMessage(`Removed ${selectedOption?.label}`);

  // move focus to next item (or to the text input if there is not a next item)
  tagRefs.current.splice(selectedValueIndex, 1);
  if (selectedValueIndex + 1 >= draftContext.selectedValues.length) {
    draftContext.focusedValueTagIndex = NaN;
    // @ts-ignore
    multiSelectContextNonStateRef.current.comboBoxDivElement?.querySelector('.combo-box-input')?.focus();
  } else {
    tagRefs.current[selectedValueIndex]?.focus();
  }
}

/**
 * @param {Object} props
 * @param {boolean | undefined} props.isDisabled
 * @returns {JSX.Element | null}
 */
export function MultiSelectTags({ isDisabled }) {
  const [multiSelectContext, setMultiSelectContext, multiSelectContextNonStateRef] = useMultiSelectContext();
  const [comboBoxContext] = useComboBoxContext();
  const { addPoliteMessage } = useAriaMessaging();

  // track rendered tags so can focus between them
  const tagRefs = useRef(/** @type {(HTMLDivElement | null)[]} */([]));

  // focus on current item after rendering
  useLayoutEffect(
    () => {
      const tagWrapper = document.activeElement?.closest('.tag__wrapper');
      if (
        // a tag is focused
        (multiSelectContext.focusedValueTagIndex || multiSelectContext.focusedValueTagIndex === 0)
        // the focused tag is not this one
        && tagWrapper !== tagRefs.current[multiSelectContext.focusedValueTagIndex]
      ) {
        tagRefs.current[multiSelectContext.focusedValueTagIndex]?.focus();
      }
    },
    [multiSelectContext.focusedValueTagIndex]
  );

  return (
    multiSelectContext.hasTagTemplate
      // the MultiSelectTagTemplate component will do its own rendering, so return null here
      ? null
      : (
        <div className="multi-select__tag-container">
          {
            multiSelectContext.selectedValues.map((selectedValue, selectedValueIndex) => {
              const selectedOption = notNull(comboBoxContext.options.find((option) => option.value === selectedValue), 'MultiSelectTags: missing option information');
              return (
                <Tag
                  className={
                    joinClassNames(
                      'tag--primary-color',
                      'multi-select__tag',
                      selectedValueIndex === multiSelectContext.focusedValueTagIndex ? 'multi-select__tag--focused' : false
                    )
                  }
                  clearMessage={`Clear ${selectedOption?.label ?? 'Tag'}`}
                  isDisabled={isDisabled}
                  innerRef={
                    (ref) => {
                      tagRefs.current[selectedValueIndex] = ref;
                    }
                  }
                  key={`multi-select-tag__${multiSelectContext.multiSelectId}--${selectedValue}`}
                  onClear={
                    () => (
                      setMultiSelectContext((draftContext) => {
                        removeSelectedOption(
                          draftContext,
                          addPoliteMessage,
                          selectedValueIndex,
                          selectedOption,
                          tagRefs,
                          multiSelectContextNonStateRef
                        );
                      })
                    )
                  }
                  size={formElementSizesEnum.SMALL}
                  // @ts-ignore (spread props)
                  onBlur={() => setMultiSelectContext((draftContext) => {
                    if (draftContext.focusedValueTagIndex === selectedValueIndex) {
                      draftContext.focusedValueTagIndex = NaN;
                    }
                  })}
                  onFocus={() => setMultiSelectContext((draftContext) => { draftContext.focusedValueTagIndex = selectedValueIndex; })}
                  onKeyUp={(e) => {
                    if (e.code === 'Delete' || e.code === 'Backspace') {
                      setMultiSelectContext((draftContext) => {
                        removeSelectedOption(
                          draftContext,
                          addPoliteMessage,
                          selectedValueIndex,
                          selectedOption,
                          tagRefs,
                          multiSelectContextNonStateRef
                        );
                      });
                    } else if (e.code === 'ArrowLeft') {
                      setMultiSelectContext((draftContext) => {
                        draftContext.focusedValueTagIndex = Math.max(0, selectedValueIndex - 1);
                      });
                    } else if (e.code === 'ArrowRight') {
                      setMultiSelectContext((draftContext) => {
                        const newIndex = selectedValueIndex + 1;
                        if (newIndex >= multiSelectContext.selectedValues.length) {
                          draftContext.focusedValueTagIndex = NaN;
                          // @ts-ignore
                          multiSelectContextNonStateRef.current.comboBoxDivElement?.querySelector('.combo-box-input')?.focus();
                        } else {
                          draftContext.focusedValueTagIndex = newIndex;
                        }
                      });
                    }
                  }}
                  tabIndex={0}
                >
                  {comboBoxContext.options.find((option) => option.value === selectedValue)?.label}
                </Tag>
              );
            })
          }
        </div>
      )
  );
}
