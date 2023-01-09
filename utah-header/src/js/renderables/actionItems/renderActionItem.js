// @ts-check
import appendChildAll from '../../misc/appendChildAll';
import { renderDOM, renderDOMSingle } from '../../misc/renderDOM';
import cssClasses, { getCssClassSelector } from '../../enumerations/cssClasses';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ActionItemHtml from './html/ActionItem.html?raw';

/**
 * @typedef {import('../../misc/jsDocTypes').ActionItem} ActionItem
 */

/**
 * Renders an Action Item for the action bar area.
 * @param {ActionItem} actionItem - the action item to add
 * @returns {Element}
 */
export default function renderActionItem(actionItem) {
  const actionItemElement = renderDOMSingle(ActionItemHtml);
  const titleElement = document.createTextNode(actionItem.title);

  const actionItemWrapper = actionItemElement instanceof HTMLCollection ? actionItemElement[0] : actionItemElement;
  if (actionItem.showTitle) {
    actionItemWrapper.classList.add(cssClasses.ACTION_ITEM__ICON_BUTTON_TITLE);
  }

  const titleDiv = actionItemWrapper.querySelector(getCssClassSelector(cssClasses.ACTION_ITEM__TITLE));
  if (!titleDiv) {
    throw new Error('renderActionItem: titleDiv not found');
  }
  appendChildAll(titleDiv, titleElement);
  if (actionItem.showTitle) {
    titleDiv.classList.remove(cssClasses.VISUALLY_HIDDEN);
  } else {
    titleDiv.classList.add(cssClasses.VISUALLY_HIDDEN);
  }

  const iconButton = actionItemElement.querySelector(getCssClassSelector(cssClasses.ACTION_ITEM__ICON_BUTTON));
  if (!iconButton) {
    throw new Error('renderActionItem: iconButton not found');
  }
  if (actionItem.className) {
    iconButton.classList.add(actionItem.className);
  }
  // TODO: use title for accessibility
  appendChildAll(iconButton, renderDOM(actionItem.icon));

  if (!(iconButton instanceof HTMLElement)) {
    throw new Error('renderActionItem: iconButton is not an HTMLElement');
  }

  switch (typeof actionItem.action) {
    case 'function':
      iconButton.onclick = actionItem.action;
      break;

    case 'object':
      if (actionItem.action instanceof HTMLElement) {
        // TODO: show child node popup
        iconButton.onclick = () => console.log('Action Item: show child node popup', actionItem.action);
      } else {
        // TODO: show popup menu
        iconButton.onclick = () => console.log('Action Item: show menu', actionItem.action);
      }
      break;

    default:
      // eslint-disable-next-line no-console
      console.error(actionItem.action);
      throw new Error(`Action Item: unknown action type '${typeof actionItem.action}'`);
  }
  return actionItemElement;
}
