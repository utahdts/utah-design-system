import PropTypes from 'prop-types';

const menuItem = {
  // true if the menu item does not have a target but is a header for a group of sub menu items
  // if true, then do not provide a "link" prop value
  isMenuHeader: PropTypes.oneOf([true, false, undefined]),

  // if isMenuHeader is set, then the link is computed so there will always be a link even if it wasn't initially passed in
  link: PropTypes.string,

  // the title to show for the menu item
  title: PropTypes.string.isRequired,
};

// add in property for children to be a list of `menuItem`. This is recursive so had to be coded in two phases
menuItem.children = PropTypes.arrayOf(PropTypes.shape(menuItem));

export default PropTypes.shape(menuItem);
