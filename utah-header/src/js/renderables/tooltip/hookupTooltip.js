// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ToolTipHTML from './html/Tooltip.html?raw';

// eslint-disable-next-line import/order
import { createPopper } from '@popperjs/core';
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import popupPlacement from '../../enumerations/popupPlacement';
import { renderDOMSingle } from '../../misc/renderDOM';

let tooltipCloseTimeoutId = NaN;
/**
 * @param {HTMLElement} element the element from which the tooltip will trigger
 * @param {string} title the title shown in the tooltip
*/
export default function hookupToolTip(element, title) {
  const tooltip = renderDOMSingle(ToolTipHTML);
  const tooltipContent = tooltip.querySelector(getCssClassSelector(domConstants.TOOLTIP__CONTENT));
  if (!tooltipContent) {
    throw new Error('hookupToolTip: toolTipContent not found');
  }
  tooltipContent.appendChild(document.createTextNode(title));

  element.appendChild(tooltip);

  const tooltipPopper = createPopper(
    element,
    tooltip,
    {
      placement: popupPlacement.BOTTOM,
      modifiers: [
        {
          name: 'offset',
          options: { offset: [0, 5] },
        },
      ],
    }
  );

  if (element.onmouseenter || element.onmouseleave) {
    throw new Error(`hookupToolTip: element already has an onmouseenter and/or onmouseleave event (${title})`);
  }

  let tooltipOpenTimeoutId = NaN;
  // eslint-disable-next-line no-param-reassign
  element.onmouseenter = () => {
    clearTimeout(tooltipOpenTimeoutId);
    tooltipOpenTimeoutId = setTimeout(
      () => {
        clearTimeout(tooltipCloseTimeoutId);
        tooltipCloseTimeoutId = -1;

        // if a popup tied to this same item is open, don't open the tooltip
        const popup = element.querySelector(getCssClassSelector(domConstants.POPUP_WRAPPER));
        if (!popup || popup.classList.contains(domConstants.POPUP__HIDDEN)) {
          tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__HIDDEN);
          tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__VISIBLE);
          tooltipPopper.update();
        }
      },
      // tooltip was already opened on another item, so instantly open tooltip
      tooltipCloseTimeoutId ? 0 : 500
    );
  };

  // eslint-disable-next-line no-param-reassign
  element.onmouseleave = () => {
    clearTimeout(tooltipOpenTimeoutId);
    tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__HIDDEN);
    tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__VISIBLE);
    clearTimeout(tooltipCloseTimeoutId);
    tooltipCloseTimeoutId = setTimeout(
      () => {
        tooltipCloseTimeoutId = NaN;
      },
      500
    );
  };
}
