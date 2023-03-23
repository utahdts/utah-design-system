// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import SearchModalHtml from './html/SearchModal.html?raw';

import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import renderDOMSingle from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/settings';
import { globalKeyModifiers, globalKeyStatus } from '../../lifecycle/globalEvents';

function closeSearchModal() {
  const searchModal = document.getElementById(domConstants.SEARCH__SEARCH_MODAL);
  if (!searchModal) {
    throw new Error('closSearchModal: searchModal not found');
  }
  searchModal.remove();
}

export default function showSearchModal() {
  // create the search DOM
  const searchModal = renderDOMSingle(SearchModalHtml);

  const backdrop = /** @type {HTMLElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_BACKDROP)));
  if (!backdrop) {
    throw new Error('showSearchModal: backdrop not found');
  }

  const closeButton = /** @type {HTMLElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_CLOSE_BUTTON)));
  if (!closeButton) {
    throw new Error('showSearchModal: closeButton not found');
  }

  const searchButton = /** @type {HTMLElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_BUTTON)));
  if (!searchButton) {
    throw new Error('showSearchModal: searchButton not found');
  }

  const searchButtonWrapper = /** @type {HTMLElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_BUTTON_WRAPPER)));
  if (!searchButtonWrapper) {
    throw new Error('showSearchModal: searchButtonWrapper not found');
  }

  const searchInput = /** @type {HTMLInputElement} */ (searchModal.querySelector(getCssClassSelector(domConstants.SEARCH__SEARCH_INPUT)));
  if (!searchInput) {
    throw new Error('showSearchModal: searchInput not found');
  }

  // hookup events
  // button: on trigger will search
  searchButton.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSearchModal();
    getUtahHeaderSettings().onSearch?.(searchInput.value);
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

  // focus on search input
  searchInput.focus();

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

    if (globalKeyStatus[globalKeyModifiers.SHIFT]) {
      searchButton.focus();
    } else {
      searchInput.focus();
    }
  });

  // when focusing out of the search button it is the last element on the page, so chrome would bounce to the tab bar.
  // instead, this is the last focusable element so that when it gets focus, focus can be sent back to the close button.
  const hiddenLastFocusableButton = searchModal.querySelector('.search-modal__hidden-last-focusable');
  if (!hiddenLastFocusableButton) {
    throw new Error('showSearchModal: hiddenLastFocusableButton not found');
  }
  hiddenLastFocusableButton.addEventListener('focusin', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeButton.focus();
  });
}
