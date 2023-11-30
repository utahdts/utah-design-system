// @ts-check
import React from 'react';
import formElementSizesEnum from '../../../enums/formElementSizesEnum';
import joinClassNames from '../../../util/joinClassNames';
import Tag from '../../buttons/Tag';
import useComboBoxContext from '../ComboBox/context/useComboBoxContext';
import useMultiSelectContext from './context/useMultiSelectContext';

/**
 * @param {Object} props
 * @param {boolean | undefined} props.isDisabled
 * @returns {JSX.Element | null}
 */
export function MultiSelectTags({ isDisabled }) {
  const [multiSelectContext, setMultiSelectContext] = useMultiSelectContext();
  const [comboBoxContext] = useComboBoxContext();

  return (
    multiSelectContext.hasTagTemplate
      // the MultiSelectTagTemplate component will do its own rendering, so return null here
      ? null
      : (
        <div className="multi-select__tag-container">
          {
            multiSelectContext.selectedValues.map((selectedValue) => {
              const selectedOption = comboBoxContext.options.find((option) => option.value === selectedValue);
              return (
                <Tag
                  className={joinClassNames('tag--primary-color', 'multi-select__tag')}
                  isDisabled={isDisabled}
                  key={`multi-select-tag__${multiSelectContext.multiSelectId}--${selectedValue}`}
                  onClear={() => setMultiSelectContext((draftContext) => {
                    draftContext.selectedValues = (
                      draftContext.selectedValues.filter((contextSelectedValue) => contextSelectedValue !== selectedValue)
                    );
                  })}
                  size={formElementSizesEnum.SMALL}
                // TODO: add a ?popupText? prop so can set a custom popup title saying the actual tag's name in the popup
                >
                  {comboBoxContext.options.find((option) => option.value === selectedValue)?.label}
                </Tag>
              );
            })
          }
          {/* Show an "X" icon button to remove this selected option */}
        </div>
      )
  );
}
