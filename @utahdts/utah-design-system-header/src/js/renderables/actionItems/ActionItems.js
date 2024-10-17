// @ts-expect-error
import ActionItemsWrapper from './html/ActionItemsWrapper.html?raw';

import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import { renderActionItem } from './renderActionItem';

/**
 * @returns {Element | null}
 */
export function ActionItems() {
  const { actionItems } = getUtahHeaderSettings();
  /** @type {HTMLElement | null} */
  let actionItemsWrapper = null;

  if (actionItems?.length) {
    actionItemsWrapper = renderDOMSingle(ActionItemsWrapper);

    getUtahHeaderSettings()
      .actionItems
      ?.map((actionItemToRender) => renderActionItem(actionItemToRender))
      ?.forEach((renderedActionItem) => actionItemsWrapper?.appendChild(renderedActionItem));
  }

  return actionItemsWrapper;
}
