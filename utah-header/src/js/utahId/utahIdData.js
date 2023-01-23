import domConstants from '../enumerations/domConstants';
import toHash from '../misc/toHash';
/**
* @typedef {import('../misc/jsDocTypes').UtahIdData} UtahIdData
 */

/**
 * @type {UtahIdData}
 */
const utahIdData = {
  isDefinitive: false,
  lastError: null,
  userInfo: null,
  userInfoHash: NaN,
};

/**
 * @type {UtahIdData}
 */
let previousUtahIdData = {
  isDefinitive: false,
  lastError: null,
  userInfo: null,
  userInfoHash: NaN,
};

/**
 * when auth status changes, call this to notify the world including the Sign In button
 *
 * @param {UserData} data the current information to store
 */
function maybeTriggerAuthEvent(newUtahIdData) {
  console.log('trigger auth:', newUtahIdData);
  if (
    newUtahIdData?.userInfoHash !== previousUtahIdData.userInfoHash
    || newUtahIdData?.isDefinitive !== previousUtahIdData.isDefinitive
  ) {
    document.dispatchEvent(
      new CustomEvent(
        domConstants.EVENT_AUTH_CHANGED,
        {
          bubbles: true,
          cancelable: true,
          detail: newUtahIdData,
        }
      )
    );
  }
  previousUtahIdData = { ...utahIdData.userInfoHash };
}

/**
 * @returns Promise<UtahIdData>
 */
export async function fetchUtahIdUserDataAsync() {
  utahIdData.isDefinitive = false;

  return fetch(
    'https://id.utah.gov/api/userInfo',
    {
      credentials: 'include',
    }
  )
    .then((resp) => resp.json())
    .then((result) => {
      if (result.status === 200) {
        utahIdData.lastError = null;
        utahIdData.userInfo = /** @type UserInfo */ (result.data);
        utahIdData.userInfoHash = toHash(result.data);
      } else {
        throw new Error(result.err);
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

/**
 * @returns {UtahIdData}
 */
export function getCurrentUtahIdData() {
  return utahIdData;
}
