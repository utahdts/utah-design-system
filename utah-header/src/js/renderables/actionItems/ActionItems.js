// @ts-check

import appendChildAll from '../../misc/appendChildAll';
import { renderDOM } from '../../misc/renderDOM';
import { getSettings } from '../../settings/settings';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ActionItemsWrapper from './html/ActionItemsWrapper.html?raw';
import renderActionItem from './renderActionItem';

/**
 * @returns {HTMLCollection | Element | null}
 */
export default function ActionItems() {
  const { actionItems } = getSettings();
  let actionItemsWrapper = null;

  if (actionItems?.length) {
    actionItemsWrapper = renderDOM(ActionItemsWrapper);

    getSettings()
      .actionItems
      ?.map((actionItemToRender) => renderActionItem(actionItemToRender))
      ?.forEach((renderedActionItem) => appendChildAll(actionItemsWrapper, renderedActionItem));
  }

  return actionItemsWrapper;
}
