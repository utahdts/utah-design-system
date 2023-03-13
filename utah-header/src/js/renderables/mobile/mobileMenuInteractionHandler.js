// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import { hideMobileMenu, showMobileMenu } from './hookupHamburger';

/**
 * @typedef {import('../../misc/jsDocTypes').AriaHasPopupType} AriaHasPopupType
*/

/**
 * @param {HTMLElement} mobileMenuWrapper
 * @param {HTMLElement} actionItemWrapper
 */
function showActionItem(mobileMenuWrapper, actionItemWrapper) {
  // deselect all actionItemElements
  mobileMenuWrapper.querySelectorAll(getCssClassSelector([
    domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER,
  ]))
    .forEach((actionItem) => actionItem.classList.remove(domConstants.ACTION_ITEM__SELECTED));

  // select passed in actionItemElement
  actionItemWrapper.classList.add(domConstants.ACTION_ITEM__SELECTED);
}

/**
 * @param {HTMLElement} mobileContentWrapper
 * @param {HTMLElement} mobileMenuContentItem
 */
function showContentItem(mobileContentWrapper, mobileMenuContentItem) {
  // hide all mobileMenuContentItems
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

  // show the passed in mobileMenuContentItem
  {
    const ariaLabelledBy = mobileMenuContentItem.getAttribute('aria-labelledby');
    if (ariaLabelledBy) {
      //  controller: aria-expanded="false"
      const ariaLabelledByElement = document.getElementById(ariaLabelledBy);
      if (ariaLabelledByElement) {
        ariaLabelledByElement.setAttribute('aria-expanded', 'false');
      }
    }
    mobileMenuContentItem.classList.add(domConstants.IS_OPEN);
  }
}

/**
 * @param {HTMLElement} interactiveElement - when clicked, the content will show
 * @param {HTMLElement} mobileMenuContentItem - the content item wrapper to show in the mobile content
 * @param {HTMLElement} actionItemWrapper - the action item that should have focus after showing (may be the same as opening/closingElement)
 * @param {Object} options
 * @param {AriaHasPopupType | null} options.ariaHasPopupType - null if there is no content
 * @param {function} [options.onClickHandler] - func returns true: no further action will be taken (for UtahID), false: click will behave normally
 * @param {boolean} options.shouldOnClickCloseMenu - when menu is open and the element is triggered, should the menu close
 */
export default function mobileMenuInteractionHandler(
  interactiveElement,
  mobileMenuContentItem,
  actionItemWrapper,
  {
    ariaHasPopupType,
    onClickHandler,
    shouldOnClickCloseMenu,
  }
) {
  if (mobileMenuContentItem && !ariaHasPopupType) {
    throw new Error('mobileMenuInteractionHandler: there is content, but the aria type is not given');
  }
  const mobileMenu = /** @type {HTMLElement} */ (document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU)));
  if (!mobileMenu) {
    throw new Error('mobileMenuInteractionHandler: mobileMenu not found');
  }
  const mobileMenuWrapper = /** @type {HTMLElement} */ (document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__WRAPPER)));
  if (!mobileMenuWrapper) {
    throw new Error('mobileMenuInteractionHandler: mobileMenuWrapper not found');
  }
  const mobileContentWrapper = /** @type {HTMLElement} */ (mobileMenuWrapper.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__CONTENT)));
  if (!mobileContentWrapper) {
    throw new Error('mobileMenuInteractionHandler: mobileContentWrapper not found');
  }

  // hookup aria to interactive & its content
  const interactiveElementId = interactiveElement.getAttribute('id');
  if (!interactiveElementId) {
    throw new Error('mobileMenuInteractionHandler: interactiveElementId not found');
  }
  if (mobileMenuContentItem) {
    const mobileMenuContentItemId = mobileMenuContentItem.getAttribute('id');
    if (!mobileMenuContentItemId) {
      throw new Error('mobileMenuInteractionHandler: mobileMenuContentId not found');
    }
    interactiveElement.setAttribute('aria-controls', mobileMenuContentItemId);
    interactiveElement.setAttribute('aria-haspopup', ariaHasPopupType || '');
    mobileMenuContentItem.setAttribute('aria-labelledby', interactiveElementId);
  }

  // openingElement.onclick - show mobile menu and show mobileMenuContentItem and select actionItemElement
  // eslint-disable-next-line no-param-reassign
  interactiveElement.onclick = (e) => {
    if (!(onClickHandler && onClickHandler(e))) {
      const isAlreadyOpen = mobileMenu.classList.contains(domConstants.IS_OPEN);
      if (isAlreadyOpen) {
        if (shouldOnClickCloseMenu) {
          hideMobileMenu();
        }
      } else {
        // show mobile menu
        showMobileMenu();

        if (mobileMenuContentItem) {
          showContentItem(mobileContentWrapper, mobileMenuContentItem);
        }

        showActionItem(mobileMenuWrapper, actionItemWrapper);
      }
    }
  };

  if (mobileMenuContentItem) {
    // eslint-disable-next-line no-param-reassign
    actionItemWrapper.onclick = (e) => {
      if (!(onClickHandler && onClickHandler(e))) {
        showContentItem(mobileContentWrapper, mobileMenuContentItem);
        showActionItem(mobileMenuWrapper, actionItemWrapper);
      }
    };
  }
}
