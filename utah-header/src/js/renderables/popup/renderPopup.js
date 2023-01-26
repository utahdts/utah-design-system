// @ts-check
import { renderDOMSingle } from '../../misc/renderDOM';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PopupHtml from './html/Popup.html?raw';

/**
 * @returns {HTMLElement}
 */
export default function renderPopup() {
  return renderDOMSingle(PopupHtml);
}
