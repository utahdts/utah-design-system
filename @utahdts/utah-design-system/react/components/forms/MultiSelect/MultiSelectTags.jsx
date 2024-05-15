import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { formElementSizesEnum } from '../../../enums/formElementSizesEnum';
import { joinClassNames } from '../../../util/joinClassNames';
import { Tag } from '../../buttons/Tag';
import { MultiSelectTagWrapper } from './MultiSelectTagWrapper';
import { useMultiSelectContext } from './context/useMultiSelectContext';
import { removeSelectedOption } from './functions/removeSelectedOption';

/**
 * @param {object} props
 * @param {boolean | undefined} props.isDisabled
 * @returns {import('react').JSX.Element}
 */
export function MultiSelectTags({ isDisabled }) {
  const [multiSelectContext, setMultiSelectContext, multiSelectContextNonStateRef] = useMultiSelectContext();
  const { addPoliteMessage } = useAriaMessaging();

  return (
    <ul className="multi-select-tags flex flex-wrap gap-xs">
      {
        multiSelectContext.selectedValues.map((selectedValue, selectedValueIndex) => {
          // option may not exist yet if the multi-select's `values` are a "defaultValue" and the options have not yet registered
          const selectedOption = multiSelectContext.comboBoxOptions.find((option) => option.value === selectedValue);
          return (
            selectedOption
              ? (
                <MultiSelectTagWrapper
                  key={`multi-select-tag-wrapper__${multiSelectContext.multiSelectId}--${selectedValue}`}
                  selectedOption={selectedOption}
                  selectedValueIndex={selectedValueIndex}
                >
                  {
                    multiSelectContext.tagTemplate
                      // the MultiSelectTagTemplate component will do its own rendering
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
                                  multiSelectContextNonStateRef,
                                  multiSelectContext.onChange
                                );
                              })
                            )
                          }
                          size={formElementSizesEnum.SMALL}
                        >
                          {selectedOption.label}
                        </Tag>
                      )
                  }
                </MultiSelectTagWrapper>
              )
              : null
          );
        })
      }
    </ul>
  );
}
