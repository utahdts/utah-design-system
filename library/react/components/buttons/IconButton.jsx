import PropTypes from 'prop-types';
import handleEvent from '../../util/handleEvent';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  // css classes for the button
  className: PropTypes.string,
  // the icon for the button
  icon: PropTypes.node.isRequired,
  // what to do when the button is clicked
  onClick: PropTypes.func,
  // A title is used for accessibility purposes to describe the button for screen readers
  title: PropTypes.string.isRequired,
};
const defaultProps = {
  className: null,
  onClick: null,
};

function IconButton({
  className,
  icon,
  onClick,
  title,
  ...rest
}) {
  return (
    <button
      {...rest}
      onClick={handleEvent(onClick)}
      className={joinClassNames(className, 'icon-button icon-button--plain')}
      type="button"
    >
      {icon}
      <span className="visually-hidden">{title}</span>
    </button>
  );
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
