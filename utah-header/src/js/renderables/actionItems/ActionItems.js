// @ts-check

import appendChildAll from '../../misc/appendChildAll';
import { renderDOM } from '../../misc/renderDOM';
import { getUtahHeaderSettings } from '../../settings/settings';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ActionItemsWrapper from './html/ActionItemsWrapper.html?raw';
import renderActionItem from './renderActionItem';

/**
 * @returns {HTMLCollection | Element | null}
 */
export default function ActionItems() {
  const { actionItems } = getUtahHeaderSettings();
  let actionItemsWrapper = null;

  if (actionItems?.length) {
    actionItemsWrapper = renderDOM(ActionItemsWrapper);

    getUtahHeaderSettings()
      .actionItems
      ?.map((actionItemToRender) => renderActionItem(actionItemToRender))
      ?.forEach((renderedActionItem) => appendChildAll(actionItemsWrapper, renderedActionItem));
  }

  return actionItemsWrapper;
}
