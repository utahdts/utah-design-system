import PropTypes from 'prop-types';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  classNames: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
const defaultProps = {
  classNames: null,
  onClick: null,
};

function IconButton({ classNames, icon, onClick }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={joinClassNames(classNames, 'icon-button icon-button--plain mr-spacing')}
      type="button"
    >
      {icon}
    </button>
  );
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
