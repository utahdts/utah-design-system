import spinnerHTML from './html/spinner.html?raw';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { notNull } from '../../misc/notNull';
import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';

/**
 * Renders a spinner element with customizable size and stroke width.
 *
 * @param {object} options - The options for rendering the spinner.
 * @param {string} options.size - The size of the spinner (e.g., diameter in pixels).
 * @param {string} options.strokeWidth - The width of the spinner's stroke (e.g., in pixels).
 */
export function renderSpinner({size, strokeWidth} = {size: '64', strokeWidth: '2'}) {
  const spinner = renderDOMSingle(spinnerHTML);

  const spinnerSVG = /** @type {HTMLElement} */ (
    notNull(spinner.querySelector(`${getCssClassSelector(domConstants.SPINNER__ANIMATION)} svg`), 'renderSpinner: spinnerSVG not found')
  );

  const spinnerValue = /** @type {HTMLElement} */ (
    notNull(spinner.querySelector(getCssClassSelector(domConstants.SPINNER__VALUE)), 'renderSpinner: spinnerValue not found')
  );

  spinnerSVG.setAttribute('height', size);
  spinnerSVG.setAttribute('width', size);

  spinnerValue.setAttribute('stroke-width', strokeWidth);

  return spinner;
}
