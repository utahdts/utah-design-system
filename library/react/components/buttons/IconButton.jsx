import PropTypes from 'prop-types';
import handleEvent from '../../util/handleEvent';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
const defaultProps = {
  className: null,
  onClick: null,
};

function IconButton({
  className,
  icon,
  onClick,
  ...rest
}) {
  return (
    <button
      {...rest}
      onClick={handleEvent(onClick)}
      className={joinClassNames(className, 'icon-button icon-button--plain mr-spacing')}
      type="button"
    >
      {icon}
    </button>
  );
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
