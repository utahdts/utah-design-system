// @ts-check
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Button from '../../buttons/Button';
import useComboBoxContext from './useComboBoxContext';

const propTypes = {
  // can show any "label" children you want; trumps label
  children: PropTypes.node,
  // value used for filtering and auto complete; children trumps this for display, but if there are no children then this is shown in options list
  label: PropTypes.string.isRequired,
  // the actual value to return if this option is selected
  value: PropTypes.string.isRequired,
};
const defaultProps = {
  children: null,
};

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string} props.value
 * @returns {JSX.Element | null}
 */
function ComboBoxOption({
  children = null,
  label,
  value,
}) {
  const [
    {
      optionsFiltered,
      registerOption,
      selectedOptionValue,
      unregisterOption,
    },
    setComboBoxContext,
  ] = useComboBoxContext();
  const isVisible = optionsFiltered.find((option) => option.value === value);
  const isSelected = selectedOptionValue === value;

  // let comboBox context know this option exists
  useEffect(
    () => {
      registerOption({ value, label, labelLowerCase: label.toLocaleLowerCase() });
      return () => unregisterOption(value);
    },
    [registerOption, unregisterOption, value, label]
  );

  return (
    isVisible
      ? (
        <div role="listitem">
          <Button
            aria-selected={isSelected}
            className={isSelected ? 'combo-box-option--selected' : undefined}
            // TODO: this `style` attribute is bogus! remove it!
            // @ts-ignore
            style={isSelected ? { color: 'red' } : undefined}
            onClick={() => setComboBoxContext((draftContext) => {
              draftContext.filterValue = label;
              draftContext.selectedOptionValue = value;
              draftContext.isOptionsExpanded = false;
            })}
            // @ts-ignore
            role="option"
          >
            {children ?? label}
          </Button>
        </div>
      )
      : null

  );
}

ComboBoxOption.propTypes = propTypes;
ComboBoxOption.defaultProps = defaultProps;

export default ComboBoxOption;
