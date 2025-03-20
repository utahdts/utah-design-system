import { getCurrentUtahIdData } from "../../utahId/utahIdData";
import { utahIdUrls } from "../../enumerations/utahIdUrls";
import { getUtahHeaderSettings } from "../../settings/getUtahHeaderSettings";

/** @typedef {import ('@utahdts/utah-design-system-header').UserInfo} UserInfo */

/**
 * by default, go to utah id to log in
 * @param {MouseEvent | UIEvent} e
 * @returns {void}
 */
function defaultOnSignIn(e) {
  e.preventDefault();
  e.stopPropagation();
  window.location.href = utahIdUrls.SIGN_IN;
}

/**
 * given the utahId settings, what is the correct sign in function
 * @returns {((e: MouseEvent | UIEvent) => void) | null}
 */
function getSignInFn() {
  /** @type {((e: MouseEvent | UIEvent) => void) | null} */
  let onSignInFn;

  const settings = getUtahHeaderSettings();
  if (settings.utahId === false) {
    onSignInFn = null;
  } else if (settings.utahId === true) {
    // generic default sign method
    onSignInFn = defaultOnSignIn;
  } else {
    // custom onSignIn passed in settings?
    onSignInFn = settings.utahId?.onSignIn ?? defaultOnSignIn;
  }
  return onSignInFn;
}

/**
 * Get the current user info based on whether the header's utahId user is controlled by the app.
 * @returns {UserInfo | null}
 */
function getUtahIdUserInfo() {
  const currentUtahIdData = getCurrentUtahIdData();
  const settings = getUtahHeaderSettings();

  const isUserControlledByApp = (
    settings.utahId !== false
    && settings.utahId !== true
    && !!settings.utahId?.currentUser
  );

  const appControlledUser = typeof settings.utahId === 'object' ? settings.utahId.currentUser ?? null : currentUtahIdData.userInfo;
  return isUserControlledByApp ? appControlledUser : currentUtahIdData.userInfo;
}

/**
 * @param {MouseEvent | UIEvent} e
 * @returns {void}
 */
export function doUtahIdOnSignIn(e) {
  const userInfo = getUtahIdUserInfo();
  if (!userInfo || !userInfo.authenticated) {
    getSignInFn()?.(e);
  }
}
