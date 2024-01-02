import { joinClassNames } from '../../../util/joinClassNames';
import { IconButton } from '../../buttons/IconButton';
import { useMultiSelectContext } from './context/useMultiSelectContext';

/**
 * @param {object} props
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @returns {import('react').JSX.Element | null}
 */
export function MultiSelectClearIcon({
  isClearable,
  isDisabled,
}) {
  const [multiSelectContextValue, setMultiSelectContextValue] = useMultiSelectContext();

  return (
    (isClearable && multiSelectContextValue.selectedValues.length)
      ? (
        <IconButton
          className={joinClassNames('multi-select__clear-button icon-button--borderless icon-button--small1x')}
          icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
          isDisabled={isDisabled}
          // @ts-ignore
          onClick={(e) => {
            e.stopPropagation();
            multiSelectContextValue.onClear();
          }}
          title="Clear all selected values"
          // @ts-ignore
          onFocus={() => setMultiSelectContextValue((draftContext) => { draftContext.clearButtonHasFocus = true; })}
          onBlur={() => setMultiSelectContextValue((draftContext) => { draftContext.clearButtonHasFocus = false; })}
        />
      )
      : null
  );
}
