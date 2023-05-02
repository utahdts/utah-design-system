import utahIdUrls from '../enumerations/utahIdUrls';
import setTimeoutPromise from '../misc/setTimeoutPromise';
import { authChangedEventHandler } from '../renderables/utahId/UtahId';
import { getUtahHeaderSettings } from '../settings/settings';
/**
* @typedef {import('../misc/jsDocTypes').UtahIdData} UtahIdData
 */

/**
 * @type {UtahIdData}
 */
const utahIdData = {
  // null = not yet loaded, false = ajaxing, true = have a result (may be error or user data)
  isDefinitive: null,
  lastError: null,
  userInfo: null,
};

/**
 * when auth status changes, call this to notify the world including the Sign In button
 *
 * @param {UtahIdData} newUtahIdData the current information to store
 */
function maybeTriggerAuthEvent(newUtahIdData) {
  // something asked for new information, so fire off that new information has arrived
  if (newUtahIdData.isDefinitive) {
    // call auth changed so name updates in button
    authChangedEventHandler(newUtahIdData);

    // give settings callback a crack at the auth change
    getUtahHeaderSettings()?.utahId?.onAuthChanged?.(newUtahIdData);
  }
}

// give the application a bit of time to call setUtahHeaderSettings() so that they
// can tell the header if the application will be controlling the logged in user
// if the application controls the user, then the user is not fetched from UtahID
// within this "waitForLaunch" window, the application must call setUtahHeaderSettings()
// if the current user is not yet known, make sure to set `settings.utahId.currentUser = null`
// this way the header knows the user is controlled by the app and to not go fetch the user.
let waitingForLaunch = true;
const WAIT_FOR_LAUNCH_MS = 500;
/**
 * @returns Promise<UtahIdData>
 */
export async function fetchUtahIdUserDataAsync() {
  /** @type Promise<UtahIdData> */
  let result = null;

  if (utahIdData.isDefinitive === false) {
    // working on it... come back later...
    result = Promise.resolve(utahIdData);
  } else if (waitingForLaunch) {
    result = (
      setTimeoutPromise(WAIT_FOR_LAUNCH_MS)
        .promise
        .then(() => {
          // if the app hasn't called setUtahHeaderSettings() by now, too bad for them...
          waitingForLaunch = false;
          fetchUtahIdUserDataAsync()
            // eslint-disable-next-line no-console
            .catch((e) => console.error(e));
        })
    );
  } else {
    const settings = getUtahHeaderSettings();
    // if utahId is set and currentUser is undefined then the header has control of the user
    // otherwise, if utahId is false then it is turned off
    // otherwise, if utahId is an object and currentUser is not undefined, then the application will control the current user
    if (settings.utahId === false) {
      // utahId is turned off (probably shouldn't even have gotten here?)
      result = Promise.resolve({
        isDefinitive: true,
        lastError: 'Utah ID is off',
        userInfo: null,
      });
    } else if (settings.utahId === true || settings.utahId?.currentUser === undefined) {
      // 👆 catches true && null cases, both of which allow a refetch 👆

      // header is on OR utahId settings has an `undefined` user: Header controls the user!
      utahIdData.isDefinitive = false;
      result = fetch(utahIdUrls.USER_INFO, { credentials: 'include' })
        .then((resp) => resp.json())
        .then((authResult) => {
          if (authResult.status === 200) {
            utahIdData.lastError = null;
            utahIdData.userInfo = /** @type UserInfo */ (authResult.data);
          } else {
            throw new Error(authResult.err);
          }
        })
        .catch((error) => {
          utahIdData.lastError = error;
          utahIdData.userInfo = null;
        })
        .finally(() => {
          utahIdData.isDefinitive = true;
          maybeTriggerAuthEvent(utahIdData);
        });
    } else {
      // utahId settings have currentUser as null or a user, either way the application will be controlling the user, not the header
      const resultData = {
        isDefinitive: true,
        lastError: null,
        userInfo: settings.utahId?.currentUser,
      };
      result = Promise.resolve(resultData);
      maybeTriggerAuthEvent(resultData);
    }
  }
  return result;
}

/**
 * @returns {UtahIdData}
 */
export function getCurrentUtahIdData() {
  return utahIdData;
}
