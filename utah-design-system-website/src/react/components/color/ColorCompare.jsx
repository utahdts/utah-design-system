import tinycolor from 'tinycolor2';


/**
 * @param {object} props
 * @param {string} props.color1
 * @param {string} props.color2
 * @returns {import('react').JSX.Element}
 */
export function ColorCompare({ color1, color2 }) {
  const contrast = Number(tinycolor.readability(color1, color2)).toFixed(2);

  return (
    <div className="color-compare">
      <div className="color-compare__swatch" style={{ background: color1 }} />
      <div className="color-compare__swatch" style={{ background: color2 }} />
      <div className="color-compare__contrast">
        {contrast}
        :1
      </div>
    </div>
  );
}
