import events from '../enumerations/events';
import toHash from '../misc/toHash';
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
  userInfoHash: NaN,
};

/**
 * when auth status changes, call this to notify the world including the Sign In button
 *
 * @param {UtahIdData} newUtahIdData the current information to store
 */
function maybeTriggerAuthEvent(newUtahIdData) {
  // something asked for new information, so fire off that new information has arrived
  if (newUtahIdData.isDefinitive) {
    document.dispatchEvent(
      new CustomEvent(
        events.AUTH_CHANGED,
        {
          bubbles: true,
          cancelable: true,
          detail: newUtahIdData,
        }
      )
    );
  }
}

/**
 * @returns Promise<UtahIdData>
 */
export async function fetchUtahIdUserDataAsync() {
  /** @type Promise<UtahIdData> */
  let result = null;
  if (utahIdData.isDefinitive === false) {
    result = Promise.resolve(utahIdData);
  } else {
    // catches true && null cases, both of which allow a refetch
    utahIdData.isDefinitive = false;
    result = fetch(
      'https://id.utah.gov/api/userInfo',
      {
        credentials: 'include',
      }
    )
      .then((resp) => resp.json())
      .then((authResult) => {
        if (authResult.status === 200) {
          utahIdData.lastError = null;
          utahIdData.userInfo = /** @type UserInfo */ (authResult.data);
          utahIdData.userInfoHash = toHash(authResult.data);
        } else {
          throw new Error(authResult.err);
        }
      })
      .catch((error) => {
        utahIdData.lastError = error;
        utahIdData.userInfo = null;
        utahIdData.userInfoHash = NaN;
      })
      .finally(() => {
        utahIdData.isDefinitive = true;
        maybeTriggerAuthEvent(utahIdData);
      });
  }
  return result;
}

/**
 * @returns {UtahIdData}
 */
export function getCurrentUtahIdData() {
  return utahIdData;
}
