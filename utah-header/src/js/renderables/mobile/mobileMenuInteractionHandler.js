// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import { hideMobileMenu, showMobileMenu } from './hookupHamburger';

/**
 * @typedef {import('../../misc/jsDocTypes').AriaHasPopupType} AriaHasPopupType
*/

/**
 * @param {HTMLElement} interactiveElement - when clicked, the content will show
 * @param {HTMLElement} mobileMenuContent - the content item wrapper to show in the mobile content
 * @param {HTMLElement} actionItemWrapper - the action item that should have focus after showing (may be the same as opening/closingElement)
 * @param {Object} options
 * @param {AriaHasPopupType} options.ariaHasPopupType
 * @param {boolean} options.shouldOnClickCloseMenu - when menu is open and the element is triggered, should the menu close
 */
export default function mobileMenuInteractionHandler(
  interactiveElement,
  mobileMenuContent,
  actionItemWrapper,
  {
    ariaHasPopupType,
    shouldOnClickCloseMenu,
  }
) {
  const mobileMenu = /** @type {HTMLElement} */ (document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU)));
  if (!mobileMenu) {
    throw new Error('mobileMenuInteractionHandler: mobileMenu not found');
  }
  const mobileMenuWrapper = document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__WRAPPER));
  if (!mobileMenuWrapper) {
    throw new Error('addMobileMenuContentItem: mobileMenuWrapper not found');
  }
  const mobileContentWrapper = mobileMenuWrapper.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__CONTENT));
  if (!mobileContentWrapper) {
    throw new Error('addMobileMenuContentItem: mobileContentWrapper not found');
  }

  // hookup aria to interactive & its content
  const interactiveElementId = interactiveElement.getAttribute('id');
  if (!interactiveElementId) {
    throw new Error('hookupUtahIdInMobileMenu: interactiveElementId not found');
  }
  const mobileMenuContentId = mobileMenuContent.getAttribute('id');
  if (!mobileMenuContentId) {
    throw new Error('hookupUtahIdInMobileMenu: mobileMenuContentId not found');
  }
  interactiveElement.setAttribute('aria-controls', mobileMenuContentId);
  interactiveElement.setAttribute('aria-haspopup', ariaHasPopupType);
  mobileMenuContent.setAttribute('aria-labelledby', interactiveElementId);
  // openingElement.onclick - show mobile menu and show mobileMenuContent and select actionItemElement
  // eslint-disable-next-line no-param-reassign
  interactiveElement.onclick = () => {
    const isAlreadyOpen = mobileMenu.classList.contains(domConstants.IS_OPEN);
    if (isAlreadyOpen) {
      if (shouldOnClickCloseMenu) {
        hideMobileMenu();
      }
    } else {
      // show mobile menu
      showMobileMenu();

      // hide all mobileMenuContent
      mobileContentWrapper.querySelectorAll(getCssClassSelector(domConstants.MOBILE_MENU__CONTENT_ITEM))
        .forEach((contentItem) => {
          const ariaLabelledBy = contentItem.getAttribute('aria-labelledby');
          if (ariaLabelledBy) {
            const ariaLabelledByElement = document.getElementById(ariaLabelledBy);
            if (ariaLabelledByElement) {
              ariaLabelledByElement.setAttribute('aria-expanded', 'false');
            }
          }
          contentItem.classList.remove(domConstants.IS_OPEN);
        });

      // show the passed in mobileMenuContent
      {
        const ariaLabelledBy = mobileMenuContent.getAttribute('aria-labelledby');
        if (ariaLabelledBy) {
          //  controller: aria-expanded="false"
          const ariaLabelledByElement = document.getElementById(ariaLabelledBy);
          if (ariaLabelledByElement) {
            ariaLabelledByElement.setAttribute('aria-expanded', 'false');
          }
        }
        mobileMenuContent.classList.add(domConstants.IS_OPEN);
      }

      // deselect all actionItemElements
      mobileMenuWrapper.querySelectorAll(getCssClassSelector([
        domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER,
      ]))
        .forEach((actionItem) => actionItem.classList.remove(domConstants.ACTION_ITEM__SELECTED));

      // select passed in actionItemElement
      actionItemWrapper.classList.add(domConstants.ACTION_ITEM__SELECTED);
    }
  };

  // show Mobile Menu - no don't do this right away
  // showMobileMenu();

  // show content

  // select action item
}
