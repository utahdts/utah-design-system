// @ts-check

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ActionItemsWrapper from './html/ActionItemsWrapper.html?raw';

import renderDOMSingle from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/settings';
import renderActionItem from './renderActionItem';

/**
 * @returns {Element | null}
 */
export default function ActionItems() {
  const { actionItems } = getUtahHeaderSettings();
  let actionItemsWrapper = null;

  if (actionItems?.length) {
    actionItemsWrapper = renderDOMSingle(ActionItemsWrapper);

    getUtahHeaderSettings()
      .actionItems
      ?.map((actionItemToRender) => renderActionItem(actionItemToRender))
      ?.forEach((renderedActionItem) => actionItemsWrapper.appendChild(renderedActionItem));
  }

  return actionItemsWrapper;
}
