import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
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
  const tooltipArrow = tooltip.querySelector(getCssClassSelector(domConstants.TOOLTIP__ARROW));
  /**
     * @type {() => void}
   */
  let cleanup;
  if (!tooltipContent) {
    throw new Error('hookupTooltip: tooltipContent not found');
  }
  tooltipContent.appendChild(dom);

  element.appendChild(tooltip);

  const middleware = [
    offset(5),
    flip(),
    shift(),
  ]
  if (tooltipArrow) {
    middleware.push(arrow({element: tooltipArrow}));
  }

  const updatePosition = () => computePosition(
    element,
    tooltip,
    {
      placement: PopupPlacement.BOTTOM,
      middleware,
    }
  ).then(({x, y, middlewareData}) => {
    tooltip.setAttribute('data-popup-placement', PopupPlacement.BOTTOM);
    Object.assign(tooltip.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
    if(tooltipArrow) {
      // @ts-expect-error Position the arrow
      Object.assign(tooltipArrow?.style, {
        left: `${middlewareData.arrow?.x}px`,
        top: `${middlewareData?.arrow?.y}px`,
      });
    }
  });

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
          const close = () => {
            clearTimeout(tooltipOpenTimeoutId);
            tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__HIDDEN);
            tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__VISIBLE);
            // Call the cleanup function to stop the auto updates
            if (typeof cleanup === 'function') {
              cleanup();
            }
            tooltipCloseTimeoutId = window.setTimeout(
              () => {
                tooltipCloseTimeoutId = NaN;
              },
              500
            );
          };
          const onEscape = (/** @type {KeyboardEvent} */ e) => {
            if (e.code === 'Escape' || e.key === 'Escape') {
              close();
              document.removeEventListener('keyup', onEscape);
            }
          };

          tooltip.classList.remove(domConstants.TOOLTIP__WRAPPER__HIDDEN);
          tooltip.classList.add(domConstants.TOOLTIP__WRAPPER__VISIBLE);
          // Call autoUpdate() only when the floating element is open
          cleanup = autoUpdate(
            element,
            tooltip,
            updatePosition
          );

          // Add listeners
          // eslint-disable-next-line no-param-reassign
          element.onmouseleave = close;
          document.addEventListener('keyup', onEscape);
        }
      },
      // tooltip was already opened on another item, so instantly open tooltip
      tooltipCloseTimeoutId ? 0 : 500
    );
  };
}
