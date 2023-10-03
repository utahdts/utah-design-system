// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import SearchModalHtml from './html/SearchModal.html?raw';

import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import { globalKeyModifiers, globalKeyStatus } from '../../lifecycle/globalEvents';
import notNull from '../../misc/notNull';
import renderDOMSingle from '../../misc/renderDOMSingle';
import getUtahHeaderSettings from '../../settings/getUtahHeaderSettings';

function closeSearchModal() {
  const searchWrapper = notNull(document.getElementById(domConstants.SEARCH__SEARCH_MODAL), 'closeSearchModal: search modal not found');
  searchWrapper.classList.add(domConstants.VISUALLY_HIDDEN);

  const searchIcon = /** @type {HTMLElement} */ (document.querySelector(getCssClassSelector(domConstants.MAIN_MENU__SEARCH)));
  if (!searchIcon) {
    throw new Error('closSearchModal: searchIcon not found');
  }
  searchIcon.focus();
}

export function showSearchModal() {
  const searchWrapper = notNull(document.getElementById(domConstants.SEARCH__SEARCH_MODAL), 'showSearchModal: search modal not found');
  searchWrapper.classList.remove(domConstants.VISUALLY_HIDDEN);

  // focus on search input
  const searchInput = notNull(
    /** @type {HTMLInputElement} */(searchWrapper.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_INPUT))),
    'showSearchModal: searchInput not found'
  );
  searchInput.focus();
}

export function setupSearchModal() {
  // create the search DOM
  const searchModal = renderDOMSingle(SearchModalHtml);

  const backdrop = /** @type {HTMLElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_BACKDROP)));
  if (!backdrop) {
    throw new Error('setupSearchModal: backdrop not found');
  }

  const closeButton = /** @type {HTMLElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_CLOSE_BUTTON)));
  if (!closeButton) {
    throw new Error('setupSearchModal: closeButton not found');
  }

  const searchButton = /** @type {HTMLElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_BUTTON)));
  if (!searchButton) {
    throw new Error('setupSearchModal: searchButton not found');
  }

  const searchButtonWrapper = /** @type {HTMLElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_BUTTON_WRAPPER)));
  if (!searchButtonWrapper) {
    throw new Error('setupSearchModal: searchButtonWrapper not found');
  }

  const searchInput = /** @type {HTMLInputElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_INPUT)));
  if (!searchInput) {
    throw new Error('setupSearchModal: searchInput not found');
  }

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
  const hiddenLastFocusableButton = searchModal.querySelector('.search-modal__hidden-last-focusable');
  if (!hiddenLastFocusableButton) {
    throw new Error('setupSearchModal: hiddenLastFocusableButton not found');
  }
  hiddenLastFocusableButton.addEventListener('focusin', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeButton.focus();
  });
}
