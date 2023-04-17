import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

const propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
};
const defaultProps = {};

function ColorCompare({ color1, color2 }) {
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

ColorCompare.propTypes = propTypes;
ColorCompare.defaultProps = defaultProps;

export default ColorCompare;
