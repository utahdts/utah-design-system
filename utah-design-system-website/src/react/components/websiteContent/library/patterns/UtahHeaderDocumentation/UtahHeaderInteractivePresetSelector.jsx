import { Button, formElementSizesEnum } from '@utahdts/utah-design-system';

/**
 * @typedef PresetOption {
 *  @property {string} title
 * }
 */

/**
 * @param {Object} props
 * @param {(e: React.MouseEvent, option: PresetOption) => void} props.onSelect this function is triggered when a selection is made
 * @param {PresetOption[]} props.options options to show as a list from which the user selects
 * @param {string} props.title title representing the preset list
 * @returns {JSX.Element}
 */
export function UtahHeaderInteractivePresetSelector({
  onSelect,
  options,
  title,
}) {
  return (
    <div className="interactive-utah-header-preset">
      <div className="interactive-utah-header-preset__title">
        {title}
      </div>
      <div className="interactive-utah-header-preset__options">
        {
          options.map((option) => (
            <div key={`${title}__${option.title}`} className="interactive-utah-header-preset__single-option">
              <Button
                size={formElementSizesEnum.SMALL1X}
                id={`apply-option__${title}__${option.title}`}
                onClick={(e) => onSelect(e, option)}
              >
                {option.title}
              </Button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
