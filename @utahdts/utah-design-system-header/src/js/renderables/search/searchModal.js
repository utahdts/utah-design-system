// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import SearchModalHtml from './html/SearchModal.html?raw';

import { domConstants, getCssClassSelector } from '../../enumerations/domConstants';
import { globalKeyModifiers, globalKeyStatus } from '../../lifecycle/globalEvents';
import { notNull } from '../../misc/notNull';
import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';

/**
 * @typedef ModalElements {
 *  @property {HTMLElement} backdrop
 *  @property {HTMLElement} closeButton
 *  @property {HTMLElement} hiddenLastFocusableButton
 *  @property {HTMLElement} searchButton
 *  @property {HTMLElement} searchButtonWrapper
 *  @property {HTMLInputElement} searchInput
 *  @property {HTMLElement} searchModal
 * }
 */

/**
 * @param {HTMLElement} [searchModal] can provide root search modal element in case it's not rendered to DOM yet
 * @returns {ModalElements}
 */
function searchModalElements(searchModal) {
  const searchModalUse = notNull(searchModal || document.getElementById(domConstants.SEARCH__SEARCH_MODAL), `setupSearchModal: '#${domConstants.SEARCH__SEARCH_MODAL}' not found`);

  const backdrop = /** @type {HTMLElement} */ (
    notNull(searchModalUse.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_BACKDROP)), 'setupSearchModal: backdrop not found')
  );

  const closeButton = /** @type {HTMLElement} */ (
    notNull(searchModalUse.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_CLOSE_BUTTON)), 'setupSearchModal: closeButton not found')
  );

  const searchButton = /** @type {HTMLElement} */ (
    notNull(searchModalUse.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_BUTTON)), 'setupSearchModal: searchButton not found')
  );

  const searchButtonWrapper = /** @type {HTMLElement} */ (
    notNull(searchModalUse.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_BUTTON_WRAPPER)), 'setupSearchModal: searchButtonWrapper not found')
  );

  const searchInput = /** @type {HTMLInputElement} */ (
    notNull(searchModalUse.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_INPUT)), 'setupSearchModal: searchInput not found')
  );

  const hiddenLastFocusableButton = /** @type {HTMLElement} */ (
    notNull(searchModalUse.querySelector('.search-modal__hidden-last-focusable'), 'setupSearchModal: hiddenLastFocusableButton not found')
  );

  return {
    backdrop,
    closeButton,
    hiddenLastFocusableButton,
    searchButton,
    searchButtonWrapper,
    searchInput,
    searchModal: searchModalUse,
  };
}

function closeSearchModal() {
  const searchWrapper = notNull(document.getElementById(domConstants.SEARCH__SEARCH_MODAL), 'closeSearchModal: search modal not found');
  searchWrapper.classList.add(domConstants.VISUALLY_HIDDEN);

  const { closeButton, hiddenLastFocusableButton } = searchModalElements();

  const searchIcon = /** @type {HTMLElement} */ (document.querySelector(getCssClassSelector(domConstants.MAIN_MENU__SEARCH)));

  // only go to menu bar search icon if closing while inside search modal (may not exist if not yet rendered)
  if (searchIcon && document.activeElement?.closest(`#${domConstants.SEARCH__SEARCH_MODAL}`)) {
    searchIcon.focus();
  }

  closeButton.tabIndex = -1;
  hiddenLastFocusableButton.tabIndex = -1;
}

export function showSearchModal() {
  const searchWrapper = notNull(document.getElementById(domConstants.SEARCH__SEARCH_MODAL), 'showSearchModal: search modal not found');
  searchWrapper.classList.remove(domConstants.VISUALLY_HIDDEN);

  // focus on search input
  const { searchInput, closeButton, hiddenLastFocusableButton } = searchModalElements();
  searchInput.focus();

  closeButton.tabIndex = 0;
  hiddenLastFocusableButton.tabIndex = 0;
}

export function setupSearchModal() {
  // create the search DOM
  const searchModal = renderDOMSingle(SearchModalHtml);

  const {
    backdrop,
    closeButton,
    hiddenLastFocusableButton,
    searchButton,
    searchButtonWrapper,
    searchInput,
  } = searchModalElements(searchModal);

  // hookup events
  // button: on trigger will search
  searchButton.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSearchModal();
    const { onSearch } = getUtahHeaderSettings();
    if (onSearch) {
      onSearch?.(searchInput.value);
    }
  };

  // close button will close it
  closeButton.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSearchModal();
  };

  // clicking on backdrop will close it
  backdrop.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSearchModal();
  };

  // insert search DOM in to document
  document.body.appendChild(searchModal);

  // input: on enter will search
  // since it has a submit button, this happens naturally

  // button is hidden until typing occurs
  searchInput.oninput = () => {
    searchButtonWrapper.classList.remove(domConstants.VISUALLY_HIDDEN);
  };

  // button gets focus should remove visually hidden too
  searchButton.onfocus = () => {
    searchButtonWrapper.classList.remove(domConstants.VISUALLY_HIDDEN);
  };

  // escape key will close it
  searchModal.onkeyup = (e) => {
    if (e.code === 'Escape' || e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      closeSearchModal();
    }
  };

  // accessibility concerns?
  // when leaving the button/form it should circle back to the close button, can never leave the popup tab order
  closeButton.addEventListener('focusout', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // when closing the search modal, the close button does loose focus, but should not try to loop focus back to search modal
    if (!searchModal.classList.contains(domConstants.VISUALLY_HIDDEN)) {
      if (globalKeyStatus[globalKeyModifiers.SHIFT]) {
        searchButton.focus();
      } else {
        searchInput.focus();
      }
    }
  });

  // when focusing out of the search button it is the last element on the page, so chrome would bounce to the tab bar.
  // instead, this is the last focusable element so that when it gets focus, focus can be sent back to the close button.
  hiddenLastFocusableButton.addEventListener('focusin', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // if search isn't visible, don't loop focus back around (focus looping is for modal)
    if (!searchModal.classList.contains(domConstants.VISUALLY_HIDDEN)) {
      closeButton.focus();
    }
  });

  // make sure tab indexes are setup
  closeSearchModal();
}
