// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import footerHTML from './html/Footer.html?raw';

import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import checkForError from '../../misc/checkForError';
import renderDOMSingle from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/settings';

/** @typedef {import ('../../misc/jsDocTypes').Settings} Settings */

/**
 * track last known settings for future comparison to see if something changed
 * @type {Settings | null}
 */
let previousSettings = null;

/**
 * @returns {Element | null}
 */
export default function renderFooter() {
  const settings = getUtahHeaderSettings();
  const previousFooter = document.querySelector(getCssClassSelector(domConstants.FOOTER));
  let footer = previousFooter;

  if (settings.footer === null) {
    previousFooter?.remove();
  } else {
    const settingsChanged = (
      previousSettings?.footer?.domLocationTarget !== settings?.footer?.domLocationTarget
      || previousSettings?.footer?.showHorizontalRule !== settings?.footer?.showHorizontalRule
    );

    if (settingsChanged || !previousFooter) {
      // kill old footer
      if (previousFooter) {
        previousFooter.remove();
      }

      // render footer in domLocationTarget (default body)
      footer = renderDOMSingle(footerHTML);
      /** @type {HTMLElement | null} */
      let domTarget = document.body;
      if (settings?.footer?.domLocationTarget) {
        const targets = (
          [
            settings?.footer?.domLocationTarget.cssSelector,
            settings?.footer?.domLocationTarget.element,
            settings?.footer?.domLocationTarget.elementFunction,
          ]
            .filter((setting) => setting)
        );
        checkForError(targets.length < 1, 'renderFooter: footer.domLocationTarget must either have a value for one of its properties or not be specified at all');
        checkForError(targets.length > 1, 'renderFooter: footer.domLocationTarget must only have one target specified');

        if (settings?.footer?.domLocationTarget.cssSelector) {
          domTarget = document.querySelector(settings?.footer?.domLocationTarget.cssSelector);
          checkForError(!domTarget, `renderFooter: element not found for domLocationTarget.cssSelector ${settings?.footer?.domLocationTarget.cssSelector}`);
        } else if (settings?.footer?.domLocationTarget.element) {
          domTarget = settings?.footer?.domLocationTarget.element;
        } else if (settings?.footer?.domLocationTarget.elementFunction) {
          domTarget = settings?.footer?.domLocationTarget.elementFunction();
          checkForError(!domTarget, 'renderFooter: element not returned from domLocationTarget.elementFunction');
        } else {
          throw new Error('renderFooter: domLocationTarget must have at least one field set');
        }
      }
      domTarget?.appendChild(footer);

      // remove horizontal rule if not wanted
      if (!settings?.footer?.showHorizontalRule) {
        const footerHr = document.querySelector(getCssClassSelector(domConstants.FOOTER_HORIZONTAL_DIVIDER));
        checkForError(!footerHr, 'renderFooter: cannot remove horizontal rule; not found');
        footerHr?.remove();
      }

      // make a copy for future comparison
      previousSettings = JSON.parse(JSON.stringify(settings));
    }
  }

  return footer;
}
