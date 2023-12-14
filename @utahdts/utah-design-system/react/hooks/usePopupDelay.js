const NO_POP_UP_TIMEOUT_MS = 350;
const POP_UP_TIMEOUT_MS = 350;

class PopupDelay {
  // timer ids
  #popupTimeoutId = NaN;

  #noPopupTimeoutId = NaN;

  // should popping occur immediately because the wait time has lapsed?
  #isImmediatePopup = false;

  /** wait a little while after a popup closes before turning off immediate popup flag */
  startNoPopupTimer = () => {
    clearTimeout(this.#noPopupTimeoutId);
    clearTimeout(this.#popupTimeoutId);

    if (this.#isImmediatePopup) {
      this.#noPopupTimeoutId = window.setTimeout(
        () => {
          this.#isImmediatePopup = false;
        },
        NO_POP_UP_TIMEOUT_MS
      );
    }
  };

  /**
   * wait to pop unless the popping period has already lapsed
   * Make sure to call startNoPopupTimer when the popup goes away
   * @param {() => void} callback function to call when waiting is done
   */
  startPopupTimer = (callback) => {
    clearTimeout(this.#noPopupTimeoutId);
    clearTimeout(this.#popupTimeoutId);

    if (this.#isImmediatePopup) {
      // if doing immediate popups, fire callback immediately
      callback();
    } else {
      // start timeout to pop
      this.#popupTimeoutId = window.setTimeout(
        () => {
          this.#isImmediatePopup = true;
          callback();
        },
        POP_UP_TIMEOUT_MS
      );
    }
  };
}

const POPUP_DELAY = new PopupDelay();

/**
 * This could easily have been a context, BUT trying to avoid requiring global contexts for the Design System library
 * plus this doesn't have to be a context because changing the isImmediatePopup state doesn't need to trigger a rerender (locally nor globally)
 * @returns {{startNoPopupTimer: () => void, startPopupTimer: (callback: () => void) => void}}
 */
export function usePopupDelay() {
  // even using useMemo would have created a new object for each usage of this hook.
  // By using a const variable, all components using this hook will get the same object (no need for a context)
  // again, this doesn't require rerendering on changes, so no need for context nor state
  return POPUP_DELAY;
}
