// @ts-check
import React from 'react';
import useAriaMessaging from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import formElementSizesEnum from '../../../enums/formElementSizesEnum';
import joinClassNames from '../../../util/joinClassNames';
import notNull from '../../../util/notNull';
import { Tag } from '../../buttons/Tag';
import { useComboBoxContext } from '../ComboBox/context/useComboBoxContext';
import { MultiSelectTagWrapper } from './MultiSelectTagWrapper';
import useMultiSelectContext from './context/useMultiSelectContext';
import { removeSelectedOption } from './functions/removeSelectedOption';

/**
 * @param {Object} props
 * @param {boolean | undefined} props.isDisabled
 * @returns {JSX.Element | null}
 */
export function MultiSelectTags({ isDisabled }) {
  const [multiSelectContext, setMultiSelectContext, multiSelectContextNonStateRef] = useMultiSelectContext();
  const [comboBoxContext] = useComboBoxContext();
  const { addPoliteMessage } = useAriaMessaging();

  return (
    <div className="multi-select__tag-container">
      {
        multiSelectContext.selectedValues.map((selectedValue, selectedValueIndex) => {
          const selectedOption = notNull(comboBoxContext.options.find((option) => option.value === selectedValue), 'MultiSelectTags: missing option information');
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
                      className={joinClassNames('tag--primary-color', 'multi-select__tag')}
                      iconButtonProps={{
                        'aria-hidden': true,
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
                      {comboBoxContext.options.find((option) => option.value === selectedValue)?.label}
                    </Tag>
                  )
              }
            </MultiSelectTagWrapper>
          );
        })
      }
    </div>
  );
}
