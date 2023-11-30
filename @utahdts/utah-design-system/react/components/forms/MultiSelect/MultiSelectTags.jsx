// @ts-check
import React from 'react';
import joinClassNames from '../../../util/joinClassNames';
import IconButton from '../../buttons/IconButton';
import useComboBoxContext from '../ComboBox/context/useComboBoxContext';
import useMultiSelectContext from './context/useMultiSelectContext';

/** @returns {JSX.Element | null} */
export function MultiSelectTags() {
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
                <div className="multi-select__tag" key={`multi-select-tag__${multiSelectContext.multiSelectId}--${selectedValue}`}>
                  {comboBoxContext.options.find((option) => option.value === selectedValue)?.label}
                  <IconButton
                    className={joinClassNames('multi-select-option__clear-button icon-button--borderless icon-button--small1x')}
                    icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                    onClick={() => setMultiSelectContext((draftContext) => {
                      draftContext.selectedValues = (
                        draftContext.selectedValues.filter((contextSelectedValue) => contextSelectedValue !== selectedValue)
                      );
                    })}
                    title={`Remove ${selectedOption ? selectedOption.label : 'Selection'}`}
                  />

                </div>
              );
            })
          }
          {/* Show an "X" icon button to remove this selected option */}
        </div>
      )
  );
}
