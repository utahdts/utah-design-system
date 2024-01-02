import React from 'react';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { formElementSizesEnum } from '../../../enums/formElementSizesEnum';
import { joinClassNames } from '../../../util/joinClassNames';
import { notNull } from '../../../util/notNull';
import { Tag } from '../../buttons/Tag';
import { MultiSelectTagWrapper } from './MultiSelectTagWrapper';
import { useMultiSelectContext } from './context/useMultiSelectContext';
import { removeSelectedOption } from './functions/removeSelectedOption';

/**
 * @param {object} props
 * @param {boolean | undefined} props.isDisabled
 * @returns {import('react').JSX.Element[]}
 */
export function MultiSelectTags({ isDisabled }) {
  const [multiSelectContext, setMultiSelectContext, multiSelectContextNonStateRef] = useMultiSelectContext();
  const { addPoliteMessage } = useAriaMessaging();

  return (
    multiSelectContext.selectedValues.map((selectedValue, selectedValueIndex) => {
      const selectedOption = notNull(multiSelectContext.comboBoxOptions.find((option) => option.value === selectedValue), 'MultiSelectTags: missing option information');
      return (
        <MultiSelectTagWrapper
          key={`multi-select-tag-wrapper__${multiSelectContext.multiSelectId}--${selectedValue}`}
          selectedOption={selectedOption}
          selectedValueIndex={selectedValueIndex}
        >
          {
            multiSelectContext.tagTemplate
              // the MultiSelectTagTemplate component will do its own rendering, so return null here
              ? multiSelectContext.tagTemplate(selectedValue, selectedOption)
              : (
                <Tag
                  aria-label={`Press delete to remove ${selectedOption.label}`}
                  className={joinClassNames('multi-select__tag', multiSelectContext.optionTagClassNames[selectedOption.value])}
                  iconButtonProps={{
                    'aria-hidden': true,
                    tabIndex: -1,
                    // make title different for screen readers, but tooltipText is shown on hover
                    title: 'selected. Press delete to remove this tag',
                    tooltipText: 'Clear Tag',
                  }}
                  isDisabled={isDisabled}
                  onClear={
                    () => (
                      setMultiSelectContext((draftContext) => {
                        removeSelectedOption(
                          draftContext,
                          addPoliteMessage,
                          selectedValueIndex,
                          selectedOption,
                          multiSelectContextNonStateRef
                        );
                      })
                    )
                  }
                  size={formElementSizesEnum.SMALL}
                >
                  {selectedOption?.label}
                </Tag>
              )
          }
        </MultiSelectTagWrapper>
      );
    })
  );
}
