import { renderDOMSingle } from '../../misc/renderDOMSingle';
import NotificationsIFrame from './html/NotificationsIFrame.html?raw';

export function renderNotificationsIFrame() {
  const iframe = renderDOMSingle(NotificationsIFrame);

  return iframe;
}
