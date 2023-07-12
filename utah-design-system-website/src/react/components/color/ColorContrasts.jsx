import PropTypes from 'prop-types';
import ColorContrast from './ColorContrast';
import useContrastsForColorContrasts from './useContrastsForColorContrasts';

const propTypes = {
  colorGray: PropTypes.string.isRequired,
};
const defaultProps = {};

/**
 * @param {object} props
 * @param {string} props.colorGray
 * @returns {JSX.Element}
 */
function ColorContrasts({ colorGray }) {
  const contrastsLists = useContrastsForColorContrasts(colorGray);

  return (
    <div className="color-contrasts__wrapper">
      {
        contrastsLists.map((contrastsList, contrastsListIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="color-contrasts__column" key={`contrastsList-${contrastsListIndex}`}>
            {
              contrastsList.map((contrast) => (
                <ColorContrast
                  key={`color-contrast__${contrast.color1Title}-${contrast.color2Title}`}
                  color1={contrast.color1}
                  color1Title={contrast.color1Title}
                  color2={contrast.color2}
                  color2Title={contrast.color2Title}
                />
              ))
            }
          </div>

        ))
      }
    </div>
  );
}

ColorContrasts.propTypes = propTypes;
ColorContrasts.defaultProps = defaultProps;

export default ColorContrasts;
