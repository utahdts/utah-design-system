import { useLayoutEffect } from 'react';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { joinClassNames } from '../../../util/joinClassNames';
import { useMultiSelectContext } from './context/useMultiSelectContext';
import { removeSelectedOption } from './functions/removeSelectedOption';

/** @typedef {import('@utahdts/utah-design-system').ComboBoxOptionType} ComboBoxOptionType */

/**
 * wraps a div around a tag to perform common functionality like left/right arrows, backspace
 * focusing, etc. Both tag templated and normal selected option tags are wrapped in this.
 * @param {object} props
 * @param {import('react').ReactNode} props.children the actual tag
 * @param {ComboBoxOptionType} props.selectedOption the selected option's details
 * @param {number} props.selectedValueIndex the index of this selected value in the selected values list
 * @returns {import('react').JSX.Element | null}
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
        && tagWrapper !== multiSelectContextNonStateRef?.current.selectedOptionTagRefs[multiSelectContext.focusedValueTagIndex]
      ) {
        multiSelectContextNonStateRef?.current.selectedOptionTagRefs[multiSelectContext.focusedValueTagIndex]?.focus();
      }
    }
    // call this effect after EVERY render
  );

  return (
    // This was a div, but then the aria-label wouldn't work
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/role-supports-aria-props
    <li
      className={
        joinClassNames(
          'multi-select__tag-wrapper',
          selectedValueIndex === multiSelectContext.focusedValueTagIndex ? 'multi-select__tag-wrapper--focused' : false
        )
      }
      ref={
        (ref) => {
          if (multiSelectContextNonStateRef) {
            multiSelectContextNonStateRef.current.selectedOptionTagRefs[selectedValueIndex] = ref;
          }
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
              multiSelectContextNonStateRef,
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
              // @ts-expect-error
              multiSelectContextNonStateRef.current.comboBoxDivElement?.querySelector('.combo-box-input')?.focus();
            } else {
              draftContext.focusedValueTagIndex = newIndex;
            }
          });
        }
      }}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      aria-label={`${selectedOption.label}, press delete to remove.`}
      aria-selected="true"
    >
      {children}
    </li>
  );
}
