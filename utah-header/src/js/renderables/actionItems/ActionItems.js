import renderDOM from '../../../misc/renderDOM';
// eslint-disable-next-line import/no-unresolved
import ActionItemsWrapper from './html/ActionItemsWrapper.html?raw';
// eslint-disable-next-line import/no-unresolved
import ActionItem from './html/ActionItem.html?raw';
// eslint-disable-next-line import/no-unresolved
import WaffleIcon from '../icons/html/Waffle.html?raw';
// eslint-disable-next-line import/no-unresolved
import QuestionIcon from '../icons/html/QuestionIcon.html?raw';
// eslint-disable-next-line import/no-unresolved
import AlertIcon from '../icons/html/AlertIcon.html?raw';

function actionItem({ title, icon, className }) {
  const actionItemElement = renderDOM(ActionItem);
  const titleElement = document.createTextNode(title);
  actionItemElement.querySelector('.utds-header-action-item__title').appendChildAll(titleElement);
  const iconButton = actionItemElement.querySelector('.utds-header-action-item__icon-button');
  if (className) {
    iconButton.classList.add(className);
  }
  iconButton.appendChildAll(renderDOM(icon));
  return actionItemElement;
}

function waffleActionItem() {
  return actionItem({ title: 'Waffle', icon: WaffleIcon, className: 'icon-waffle' });
}

function helpActionItem() {
  return actionItem({ title: 'Help', icon: QuestionIcon });
}

function alertsActionItem() {
  return actionItem({ title: 'Alerts', icon: AlertIcon });
}

export default function ActionItems() {
  const actionItemsWrapper = renderDOM(ActionItemsWrapper);

  actionItemsWrapper.appendChildAll(waffleActionItem());
  actionItemsWrapper.appendChildAll(helpActionItem());
  actionItemsWrapper.appendChildAll(alertsActionItem());

  return actionItemsWrapper;
}
