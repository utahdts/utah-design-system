import PropTypes from 'prop-types';
import handleKeyPress from '../util/handleKeyPress';
import joinClassNames from '../util/joinClassNames';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
const defaultProps = {
  isSelected: false,
};

function ColorCircle({
  children,
  className,
  isSelected,
  onClick,
}) {
  return (
    <div
      className={joinClassNames(['color-circle', isSelected && 'selected', className])}
      onClick={onClick}
      onKeyUp={handleKeyPress('Enter', onClick)}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
}

ColorCircle.propTypes = propTypes;
ColorCircle.defaultProps = defaultProps;

export default ColorCircle;
