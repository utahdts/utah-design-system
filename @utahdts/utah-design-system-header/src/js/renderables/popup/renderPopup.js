import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { uuidv4 } from '../../misc/uuidv4';
import PopupHtml from './html/Popup.html?raw';

/** @typedef {import('src/@types/jsDocTypes.d').RenderPopupOptions} RenderPopupOptions */

/**
 * @param {Element} labelledByElement - the triggering component (must have an `id`)
 * @param {RenderPopupOptions} [options] - for flyouts and their ilk, the popup arrow should not be shown
 * @returns {HTMLElement}
 */
export function renderPopup(labelledByElement, options) {
  const labelledById = labelledByElement.getAttribute('id');
  if (!labelledById) {
    throw new Error('renderPopup: labelledByElement does not have an `id` attribute');
  }

  const popupWrapperId = uuidv4();
  labelledByElement.setAttribute('aria-controls', popupWrapperId);

  const popupWrapper = renderDOMSingle(PopupHtml);
  popupWrapper.setAttribute('id', popupWrapperId);
  popupWrapper.setAttribute('aria-labelledby', labelledById);

  if (options?.removePopupArrow) {
    const popupArrow = popupWrapper.querySelector(getCssClassSelector(domConstants.POPUP_ARROW));
    if (!popupArrow) {
      throw new Error('renderPopup(): popup arrow missing (I wanted to remove it!!)');
    }
    popupArrow.remove();
  }

  return popupWrapper;
}
