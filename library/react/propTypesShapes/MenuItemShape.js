import PropTypes from 'prop-types';

const menuItem = {
  // if no link, then it is a "menu header" then the link is computed so there will always be a link even if it wasn't initially passed in
  link: PropTypes.string,

  // the parent menu links for this menu as calculated in `calculateMenuItemsParents()`
  parentLinks: PropTypes.arrayOf(PropTypes.string),

  // the title to show for the menu item
  title: PropTypes.string.isRequired,
};

// add in property for children to be a list of `menuItem`. This is recursive so had to be coded in two phases
menuItem.children = PropTypes.arrayOf(PropTypes.exact(menuItem));

export default PropTypes.exact(menuItem);
