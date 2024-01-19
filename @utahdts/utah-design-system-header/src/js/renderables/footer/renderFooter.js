// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import footerHTML from './html/Footer.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import newTabAccessibilityHTML from '../_html/NewTabAccessibility.html?raw';

import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { checkForError } from '../../misc/checkForError';
import { notNull } from '../../misc/notNull';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import { renderFooterCopyrightYear } from './renderFooterCopyrightYear';

/** @typedef {import('src/@types/jsDocTypes.d').DomLocationTarget} DomLocationTarget */
/** @typedef {import('src/@types/jsDocTypes.d').Settings} Settings */

/**
 * @typedef PreviousFooterSettings {
 *  @property {string | null | undefined} copyrightYear
 *  @property {DomLocationTarget} domLocationTarget
 *  @property {boolean | undefined} showHorizontalRule
 * }
 */

/**
 * track last known settings for future comparison to see if something changed
 * make sure that shallow copying doesn't allow changing things outside of this function that
 * then change this "previous" data making it seem like a change did not occur.
 * @type {PreviousFooterSettings}
 */
const previousFooterSettings = {
  copyrightYear: undefined,
  domLocationTarget: {
    cssSelector: undefined,
    element: undefined,
    elementFunction: undefined,
  },
  showHorizontalRule: false,
};

/**
 * @returns {Element | null}
 */
export function renderFooter() {
  const settings = getUtahHeaderSettings();
  const previousFooter = document.querySelector(getCssClassSelector(domConstants.FOOTER));
  let footer = previousFooter;

  if (!settings.footer) {
    previousFooter?.remove();
  } else {
    const settingsChanged = (
      previousFooterSettings.domLocationTarget.cssSelector !== settings?.footer?.domLocationTarget?.cssSelector
      || previousFooterSettings.domLocationTarget.element !== settings?.footer?.domLocationTarget?.element
      || previousFooterSettings.domLocationTarget.elementFunction !== settings?.footer?.domLocationTarget?.elementFunction
      || previousFooterSettings.showHorizontalRule !== settings?.footer?.showHorizontalRule
      || previousFooterSettings.copyrightYear !== settings?.footer?.copyrightYear
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

      // add custom privacy policy link
      if (settings?.footer?.linkPrivacyPolicy) {
        const privacyLink = document.getElementById(domConstants.FOOTER_LINK_PRIVACY_ID);
        checkForError(!privacyLink, 'renderFooter: cannot find privacy policy link');
        privacyLink?.setAttribute('href', settings.footer.linkPrivacyPolicy);
      }

      // add custom terms of use link
      if (settings?.footer?.linkTermsOfUse) {
        const termsLink = document.getElementById(domConstants.FOOTER_LINK_TERMS_ID);
        checkForError(!termsLink, 'renderFooter: cannot find terms of use link');
        termsLink?.setAttribute('href', settings.footer.linkTermsOfUse);
      }

      // make links external links
      const footerLinks = notNull(document.querySelector(getCssClassSelector(domConstants.FOOTER_LINKS)), 'renderFooter: footer links not found');
      const lis = footerLinks.querySelectorAll('a');
      lis.forEach((link) => {
        link.appendChild(renderDOMSingle(newTabAccessibilityHTML));
      });

      renderFooterCopyrightYear(footer, settings?.footer?.copyrightYear);

      // make a copy for future comparison
      // this is not a shallow copy of the settings, so that external changes don't update internal values
      previousFooterSettings.copyrightYear = settings?.footer?.copyrightYear;
      previousFooterSettings.domLocationTarget.cssSelector = settings?.footer?.domLocationTarget?.cssSelector;
      previousFooterSettings.domLocationTarget.element = settings?.footer?.domLocationTarget?.element;
      previousFooterSettings.domLocationTarget.elementFunction = settings?.footer?.domLocationTarget?.elementFunction;
      previousFooterSettings.showHorizontalRule = settings?.footer?.showHorizontalRule;
    }
  }

  return footer;
}
