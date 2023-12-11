// @ts-check
import React from 'react';
import joinClassNames from '../../../util/joinClassNames';
import IconButton from '../../buttons/IconButton';
import useMultiSelectContext from './context/useMultiSelectContext';

/**
 * @param {Object} props
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @returns {JSX.Element | null}
 */
export function MultiSelectClearIcon({
  isClearable,
  isDisabled,
}) {
  const [multiSelectContextValue] = useMultiSelectContext();

  return (
    (isClearable && multiSelectContextValue.selectedValues.length)
      ? (
        <IconButton
          className={joinClassNames('multi-select__clear-button icon-button--borderless icon-button--small1x')}
          icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
          isDisabled={isDisabled}
          onClick={multiSelectContextValue.onClear}
          title="Clear all selected values"
        />
      )
      : null
  );
}
