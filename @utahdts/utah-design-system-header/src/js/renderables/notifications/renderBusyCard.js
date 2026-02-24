import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { renderSpinner } from '../spinner/renderSpinner';

export function renderBusyCard() {
  const busyCard = renderDOMSingle('<li class="utds-notify-list-item utds-notify-list-item--busy-card" tabindex="0"></li>');

  busyCard.appendChild(renderSpinner({size: '120', strokeWidth: '8'}));

  return busyCard;
}
