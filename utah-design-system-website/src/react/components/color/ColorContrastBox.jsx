import { joinClassNames } from '@utahdts/utah-design-system';

/**
 * @param {object} props
 * @param {string} props.color1
 * @param {boolean} props.color1IsLight
 * @param {boolean} props.color1ShowHex
 * @param {string} props.color1Title
 * @param {string} props.color2
 * @param {boolean} props.color2IsLight
 * @param {boolean} props.color2ShowHex
 * @param {string} props.color2Title
 * @returns {React.JSX.Element}
 */
export function ColorContrastBox({
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
