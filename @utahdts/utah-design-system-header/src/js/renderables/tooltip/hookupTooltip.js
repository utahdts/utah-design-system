import { createPopper } from '@popperjs/core';
import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { PopupPlacement } from '../../enumerations/popupPlacement';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import TooltipHTML from './html/Tooltip.html?raw';

let tooltipCloseTimeoutId = NaN;
/**
 * @param {HTMLElement} element the element from which the tooltip will trigger
 * @param {Node} dom the dom to show in the tooltip
 */
export function hookupTooltip(element, dom) {
  const tooltip = renderDOMSingle(TooltipHTML);
  const tooltipContent = tooltip.querySelector(getCssClassSelector(domConstants.TOOLTIP__CONTENT));
  if (!tooltipContent) {
    throw new Error('hookupTooltip: tooltipContent not found');
  }
  tooltipContent.appendChild(dom);

  element.appendChild(tooltip);

  const tooltipPopper = createPopper(
    element,
    tooltip,
    {
      placement: PopupPlacement.BOTTOM,
      modifiers: [
        {
          name: 'offset',
          options: { offset: [0, 5] },
        },
      ],
    }
  );

  if (element.onmouseenter || element.onmouseleave) {
    throw new Error('hookupTooltip: element already has an onmouseenter and/or onmouseleave event');
  }

  let tooltipOpenTimeoutId = NaN;
  // eslint-disable-next-line no-param-reassign
  element.onmouseenter = () => {
    clearTimeout(tooltipOpenTimeoutId);
    tooltipOpenTimeoutId = window.setTimeout(
      () => {
        clearTimeout(tooltipCloseTimeoutId);
        tooltipCloseTimeoutId = -1;

        // if a popup tied to this same item is open, don't open the tooltip
        const popup = element.querySelector(getCssClassSelector(domConstants.POPUP_WRAPPER));
        if (!popup || popup.classList.contains(domConstants.POPUP__HIDDEN)) {
          tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__HIDDEN);
          tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__VISIBLE);
          tooltipPopper.update()
            // eslint-disable-next-line no-console
            .catch((e) => console.error(e));
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
    tooltipCloseTimeoutId = window.setTimeout(
      () => {
        tooltipCloseTimeoutId = NaN;
      },
      500
    );
  };
}
