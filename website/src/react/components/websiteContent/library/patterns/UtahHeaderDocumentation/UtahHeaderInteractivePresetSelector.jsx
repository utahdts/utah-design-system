import PropTypes from 'prop-types';

const propTypes = {
  // this function is triggered when a selection is made: (e, option) => { ... do something with the selected option ... }
  onSelect: PropTypes.func.isRequired,

  // options to show as a list from which the user selects
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,

  // title representing the preset list
  title: PropTypes.string.isRequired,

  // the current selected value of the list (must have something required even if it is "none")
  value: PropTypes.string.isRequired,
};
const defaultProps = {};

function UtahHeaderInteractivePresetSelector({
  onSelect,
  options,
  title,
  value,
}) {
  return (
    <div className="interactive-utah-header-preset">
      <div className="interactive-utah-header-preset__title">
        {title}
      </div>
      <div className="interactive-utah-header-preset__options">
        {
          options.map((option) => (
            <div key={`${title}__${option.value}`} className="interactive-utah-header-preset-option">
              <span className="interactive-utah-header-preset-option__title">
                {option.title}
              </span>
              <input type="checkbox" checked={value === option.value} onChange={(e) => onSelect(e, option)} />
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
