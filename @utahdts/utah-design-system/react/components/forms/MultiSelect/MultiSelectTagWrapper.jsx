// @ts-check
import React, { useLayoutEffect } from 'react';
import useAriaMessaging from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import joinClassNames from '../../../util/joinClassNames';
import useMultiSelectContext from './context/useMultiSelectContext';
import { removeSelectedOption } from './functions/removeSelectedOption';

/** @typedef {import('../../../jsDocTypes').ComboBoxOption} ComboBoxOption */

/**
 * wraps a div around a tag to perform common functionality like left/right arrows, backspace
 * focusing, etc. Both tag templated and normal selected option tags are wrapped in this.
 * @param {Object} props
 * @param {React.ReactNode} props.children the actual tag
 * @param {ComboBoxOption} props.selectedOption the selected option's details
 * @param {number} props.selectedValueIndex the index of this selected value in the selected values list
 * @returns {JSX.Element | null}
 */
export function MultiSelectTagWrapper({ children, selectedOption, selectedValueIndex }) {
  const [multiSelectContext, setMultiSelectContext, multiSelectContextNonStateRef] = useMultiSelectContext();
  const { addPoliteMessage } = useAriaMessaging();

  // focus on current item after rendering
  useLayoutEffect(
    () => {
      const tagWrapper = document.activeElement?.closest('.tag__wrapper');
      if (
        // a tag is focused
        (multiSelectContext.focusedValueTagIndex || multiSelectContext.focusedValueTagIndex === 0)
        // the focused tag is not this one
        && tagWrapper !== multiSelectContextNonStateRef.current.selectedOptionTagRefs[multiSelectContext.focusedValueTagIndex]
      ) {
        multiSelectContextNonStateRef.current.selectedOptionTagRefs[multiSelectContext.focusedValueTagIndex]?.focus();
      }
    }
    // call this effect after EVERY render
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={
        joinClassNames(
          'multi-select__tag-wrapper',
          selectedValueIndex === multiSelectContext.focusedValueTagIndex ? 'multi-select__tag-wrapper--focused' : false
        )
      }
      ref={
        (ref) => {
          multiSelectContextNonStateRef.current.selectedOptionTagRefs[selectedValueIndex] = ref;
        }
      }
      onBlur={() => setMultiSelectContext((draftContext) => {
        if (draftContext.focusedValueTagIndex === selectedValueIndex) {
          draftContext.focusedValueTagIndex = NaN;
        }
      })}
      onClick={() => setMultiSelectContext((draftContext) => { draftContext.focusedValueTagIndex = selectedValueIndex; })}
      onFocus={() => setMultiSelectContext((draftContext) => { draftContext.focusedValueTagIndex = selectedValueIndex; })}
      onKeyUp={(e) => {
        if (e.code === 'Delete' || e.code === 'Backspace') {
          setMultiSelectContext((draftContext) => {
            removeSelectedOption(
              draftContext,
              addPoliteMessage,
              selectedValueIndex,
              selectedOption,
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
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      {children}
    </div>
  );
}
