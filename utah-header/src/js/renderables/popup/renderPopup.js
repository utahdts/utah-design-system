// @ts-check
import { renderDOMSingle } from '../../misc/renderDOM';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PopupHtml from './html/Popup.html?raw';
import uuidv4 from '../../misc/uuidv4';

/**
 * @param {Element} labelledByElement - the triggering component (must have an `id`)
 * @returns {HTMLElement}
 */
export default function renderPopup(labelledByElement) {
  const labelledById = labelledByElement.getAttribute('id');
  if (!labelledById) {
    throw new Error('renderPopup: labelledByElement does not have an `id` attribute');
  }

  const popupWrapperId = uuidv4();
  labelledByElement.setAttribute('aria-controls', popupWrapperId);

  const popupWrapper = renderDOMSingle(PopupHtml);
  popupWrapper.setAttribute('id', popupWrapperId);
  popupWrapper.setAttribute('aria-labelledby', labelledById);

  return popupWrapper;
}
