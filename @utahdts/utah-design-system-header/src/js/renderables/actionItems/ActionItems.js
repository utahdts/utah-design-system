import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import ActionItemsWrapper from './html/ActionItemsWrapper.html?raw';
import { renderActionItem } from './renderActionItem';
import { getNotificationsActionItem } from '../notifications/getNotificationsActionItem';

/**
 * @returns {Element | null}
 */
export function ActionItems() {
  const { actionItems, notifications } = getUtahHeaderSettings();
  /** @type {HTMLElement | null} */
  let actionItemsWrapper = null;

  if (actionItems?.length || notifications) {
    actionItemsWrapper = renderDOMSingle(ActionItemsWrapper);
  }

  if (actionItems?.length) {
    getUtahHeaderSettings()
      .actionItems
      ?.map((actionItemToRender) => renderActionItem(actionItemToRender))
      ?.forEach((renderedActionItem) => actionItemsWrapper?.appendChild(renderedActionItem));
  }

  if (notifications) {
    actionItemsWrapper?.append(renderActionItem(getNotificationsActionItem()))
  }

  return actionItemsWrapper;
}
