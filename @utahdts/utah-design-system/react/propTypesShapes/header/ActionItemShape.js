// @ts-check
import PropTypes from 'prop-types';
import BadgeShape from './BadgeShape';
import EventActionShape from './EventActionShape';
import PopupMenuShape from './PopupMenuShape';

/**
 * see jsDocTypes.ActionItem (should always be matched)
 */

export default PropTypes.shape({
  actionFunction: EventActionShape,
  actionPopupMenu: PopupMenuShape,
  actionDom: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  badge: BadgeShape,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  mobileMenuLocation: PropTypes.oneOf(['left', 'none', 'right']),
  showTitle: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
});
