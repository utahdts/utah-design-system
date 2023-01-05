import renderDOM from '../../../misc/renderDOM';
// eslint-disable-next-line import/no-unresolved
import ActionItemsWrapper from './html/ActionItemsWrapper.html?raw';
// eslint-disable-next-line import/no-unresolved
import WaffleIcon from '../icons/html/Waffle.html?raw';
// eslint-disable-next-line import/no-unresolved
import QuestionIcon from '../icons/html/QuestionIcon.html?raw';
// eslint-disable-next-line import/no-unresolved
import AlertIcon from '../icons/html/AlertIcon.html?raw';
import actionItem from './ActionItem';

function waffleActionItem() {
  return actionItem({
    action: () => console.log('Waffle clicked'),
    className: 'icon-waffle',
    icon: WaffleIcon,
    showTitle: false,
    title: 'Waffle',
  });
}

function helpActionItem() {
  return actionItem({
    action: () => console.log('Help clicked'),
    icon: QuestionIcon,
    title: 'Help',
  });
}

function alertsActionItem() {
  return actionItem({
    action: () => console.log('Alerts clicked'),
    icon: AlertIcon,
    title: 'Alerts',
  });
}

export default function ActionItems() {
  const actionItemsWrapper = renderDOM(ActionItemsWrapper);

  actionItemsWrapper.appendChildAll(waffleActionItem());
  actionItemsWrapper.appendChildAll(helpActionItem());
  actionItemsWrapper.appendChildAll(alertsActionItem());

  return actionItemsWrapper;
}
