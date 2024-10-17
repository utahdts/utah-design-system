import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { valueOrFunctionValue } from '../../misc/valueOrFunctionValue';
import { hideMobileMenu, showMobileMenu } from './util/showHideHamburgerElements';

/** @typedef {import('src/@types/jsDocTypes.d').AriaHasPopupType} AriaHasPopupType */

/**
 * @param {HTMLElement} mobileMenuWrapper
 * @param {HTMLElement} actionItemWrapper
 */
export function showActionItem(mobileMenuWrapper, actionItemWrapper) {
  // deselect all actionItemElements
  mobileMenuWrapper.querySelectorAll(getCssClassSelector(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER))
    .forEach((actionItem) => {
      actionItem.classList.remove(domConstants.ACTION_ITEM__SELECTED);
      const button = actionItem.querySelector('button');
      if (!button) {
        throw new Error('showActionItem: actionWrapper does not have actionItem A');
      }
      button.setAttribute('aria-selected', 'false');
      button.setAttribute('tabIndex', '-1');
    });

  // select passed in actionItemElement
  actionItemWrapper.classList.add(domConstants.ACTION_ITEM__SELECTED);
  const button = actionItemWrapper.querySelector('button');
  if (!button) {
    throw new Error('showActionItem: actionWrapper does not have actionItem B');
  }
  button.setAttribute('aria-selected', 'true');
  button.removeAttribute('tabIndex');

  // for accessibility, set focus on the selected action item
  button.focus();
}

/**
 * @param {HTMLElement} mobileContentWrapper
 * @param {HTMLElement} mobileMenuContentItem
 */
export function showContentItem(mobileContentWrapper, mobileMenuContentItem) {
  // hide all mobileMenuContentItems
  mobileContentWrapper.querySelectorAll(getCssClassSelector(domConstants.MOBILE_MENU__CONTENT_ITEM))
    .forEach((contentItem) => contentItem.classList.remove(domConstants.IS_OPEN));

  // show the passed in mobileMenuContentItem
  mobileMenuContentItem.classList.add(domConstants.IS_OPEN);
}

/**
 * @param {HTMLElement} interactiveElement - when clicked, the content will show
 * @param {HTMLElement | (() => HTMLElement | null)} mobileMenuContentItem - the content item wrapper to show in the mobile content
 * @param {HTMLElement | (() => HTMLElement)} actionItemWrapper - actionItem having focus after showing (may be the same as opening/closingElement)
 * @param {object} options
 * @param {(e: MouseEvent) => void} [options.additionalOnClick] - can be given the opportunity to perform more when clicked
 * @param {AriaHasPopupType | null} options.ariaHasPopupType - null if there is no content
 * @param {(e: MouseEvent) => boolean} [options.onClickHandler] - returns true: no further action will be taken (for UtahID), false: behave normally
 * @param {boolean} options.shouldOnClickCloseMenu - when menu is open and the element is triggered, should the menu close
 */
export function mobileMenuInteractionHandler(
  interactiveElement,
  mobileMenuContentItem,
  actionItemWrapper,
  {
    ariaHasPopupType,
    additionalOnClick,
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

  const actionItemWrapperValue = valueOrFunctionValue(actionItemWrapper);
  const actionItemButton = valueOrFunctionValue(actionItemWrapper)?.querySelector?.('button');

  // hookup aria to interactive & its content
  const interactiveElementId = (actionItemButton || interactiveElement).getAttribute('id');
  if (!interactiveElementId) {
    throw new Error('mobileMenuInteractionHandler: interactiveElementId not found');
  }
  if (mobileMenuContentItem) {
    const mobileMenuContentItemValue = valueOrFunctionValue(mobileMenuContentItem);
    if (mobileMenuContentItemValue) {
      const mobileMenuContentItemId = mobileMenuContentItemValue.getAttribute('id');
      if (!mobileMenuContentItemId) {
        throw new Error('mobileMenuInteractionHandler: mobileMenuContentId not found');
      }
      (actionItemButton || interactiveElement).setAttribute('aria-controls', mobileMenuContentItemId);
      mobileMenuContentItemValue.setAttribute('aria-labelledby', interactiveElementId);
    }
  }

  // openingElement.onclick - show mobile menu and show mobileMenuContentItem and select actionItemElement
  if (interactiveElement.onclick) {
    throw new Error('mobileMenuInteractionHandler: interactiveElement already has onclick');
  }

  // setup opening closing for things like utahid/hamburger
  // eslint-disable-next-line no-param-reassign
  interactiveElement.onclick = (e) => {
    if (!onClickHandler?.(e)) {
      additionalOnClick?.(e);
      const isAlreadyOpen = mobileMenu.classList.contains(domConstants.IS_OPEN);
      if (isAlreadyOpen) {
        if (shouldOnClickCloseMenu) {
          hideMobileMenu();
        }
      } else {
        // show mobile menu
        showMobileMenu();

        const mobileMenuContentItemValue = valueOrFunctionValue(mobileMenuContentItem);
        if (mobileMenuContentItemValue) {
          showContentItem(mobileContentWrapper, mobileMenuContentItemValue);
        }

        showActionItem(mobileMenuWrapper, valueOrFunctionValue(actionItemWrapper));
      }
    }
  };

  // do mobile content item show/hide
  if (mobileMenuContentItem) {
    if (actionItemWrapperValue !== interactiveElement && actionItemWrapperValue.onclick) {
      throw new Error('mobileMenuInteractionHandler: actionItemWrapperValue already has onclick');
    }
    actionItemWrapperValue.onclick = (e) => {
      if (!onClickHandler?.(e)) {
        const contentWrapper = valueOrFunctionValue(mobileMenuContentItem);
        if (contentWrapper) {
          showContentItem(mobileContentWrapper, contentWrapper);
        }
        showActionItem(mobileMenuWrapper, valueOrFunctionValue(actionItemWrapper));
      }
    };
  }
}
