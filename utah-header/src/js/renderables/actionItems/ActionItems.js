import renderDOM from '../../../misc/renderDOM';
// eslint-disable-next-line import/no-unresolved
import ActionItemsWrapper from './html/ActionItemsWrapper.html?raw';
// eslint-disable-next-line import/no-unresolved
import ActionItem from './html/ActionItem.html?raw';
// eslint-disable-next-line import/no-unresolved
import WaffleIcon from '../icons/html/Waffle.html?raw';

function actionItem({ title, icon }) {
  const actionItemElement = renderDOM(ActionItem);
  const titleElement = document.createTextNode(title);
  actionItemElement.querySelector('.utds-header-action-item__title').appendChildAll(titleElement);
  actionItemElement.querySelector('.utds-header-action-item__icon-button').appendChildAll(renderDOM(icon));
  return actionItemElement;
}

function waffleActionItem() {
  return actionItem({ title: 'Waffle', icon: WaffleIcon });
}

function helpActionItem() {
  return actionItem({ title: 'Help', icon: WaffleIcon });
}

function alertsActionItem() {
  return actionItem({ title: 'Alerts', icon: WaffleIcon });
}

export default function ActionItems() {
  const actionItemsWrapper = renderDOM(ActionItemsWrapper);

  actionItemsWrapper.appendChildAll(waffleActionItem());
  actionItemsWrapper.appendChildAll(helpActionItem());
  actionItemsWrapper.appendChildAll(alertsActionItem());

  return actionItemsWrapper;
}
