import { joinClassNames } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';

const propTypes = {
  color1: PropTypes.string.isRequired,
  color1IsLight: PropTypes.bool.isRequired,
  color1ShowHex: PropTypes.bool.isRequired,
  color1Title: PropTypes.string.isRequired,

  color2: PropTypes.string.isRequired,
  color2IsLight: PropTypes.bool.isRequired,
  color2ShowHex: PropTypes.bool.isRequired,
  color2Title: PropTypes.string.isRequired,
};
const defaultProps = {};

function ColorContrastBox({
  color1,
  color1IsLight,
  color1ShowHex,
  color1Title,
  color2,
  color2IsLight,
  color2ShowHex,
  color2Title,
}) {
  return (
    <div className="color-contrast-box">
      <div className="color-contrast-box__border" />
      <div
        className={joinClassNames('color-contrast-box__background', color1IsLight && 'color-is-light')}
        style={{ backgroundColor: color1 }}
      >
        <span>{color1Title}</span>
        {color1ShowHex ? <span className="fixed-width-font">{color1}</span> : null}
      </div>

      <hr />

      <div className={joinClassNames('color-contrast-box__foreground', color2IsLight && 'color-is-light')} style={{ backgroundColor: color2 }}>
        <span>{color2Title}</span>
        {color2ShowHex ? <span className="fixed-width-font">{color2}</span> : null}
      </div>
    </div>
  );
}

ColorContrastBox.propTypes = propTypes;
ColorContrastBox.defaultProps = defaultProps;

export default ColorContrastBox;
