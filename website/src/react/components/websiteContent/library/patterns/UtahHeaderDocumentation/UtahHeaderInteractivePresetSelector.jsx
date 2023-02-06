import { Button, formElementSizesEnum } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';

const propTypes = {
  // this function is triggered when a selection is made: (e, option) => { ... do something with the selected option ... }
  onSelect: PropTypes.func.isRequired,

  // options to show as a list from which the user selects
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,

  // title representing the preset list
  title: PropTypes.string.isRequired,
};
const defaultProps = {};

function UtahHeaderInteractivePresetSelector({
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

UtahHeaderInteractivePresetSelector.propTypes = propTypes;
UtahHeaderInteractivePresetSelector.defaultProps = defaultProps;

export default UtahHeaderInteractivePresetSelector;
