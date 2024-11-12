import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import MenuWithTitle from './html/MenuWithTitle.html?raw';

/**
 * @param {HTMLElement} menu
 * @param {string} title
 * @returns {HTMLElement}
 */
export function renderMenuWithTitle(menu, title) {
  const menuWithTitle = renderDOMSingle(MenuWithTitle);
  const menuTitleDiv = menuWithTitle.querySelector(getCssClassSelector(domConstants.VERTICAL_MENU_WRAPPER__WRAPPER_TITLE));
  if (!menuTitleDiv) {
    throw new Error('renderMenuWithTitle: menuTitleDiv not found');
  }
  menuTitleDiv.appendChild(document.createTextNode(title));

  menuWithTitle.appendChild(menu);
  return menuWithTitle;
}
