/**
 * @template T
 * @callback ResolveRejectFunc
 * @param {(value: T | PromiseLike<T>) => void} resolveFunc
 * @param {(reason?: any) => void} rejectFunc
 * @returns {void}
 */
/**
 * @template T
 * @typedef SetTimeoutPromiseResult {
 *   @property {Promise<T>} promise
 *   @property {ResolveRejectFunc<T>} clearTimeout
 * }
*/

/**
 * @template T
 * @param {number} length how many milliseconds to wait before resolving the promise
 * @returns {Promise<SetTimeoutPromiseResult>}
 */
export default function setTimeoutPromise(length) {
  let timeoutId = NaN;

  // types taken from Promise's definition
  /** @type {(value: T | PromiseLike<T>) => void} */
  let resolveFunc = null;
  /** @type {(reason?: any) => void} */
  let rejectFunc = null;

  /** @type {Promise<T>} */
  const promise = new Promise((resolve, reject) => {
    // start a timer
    timeoutId = setTimeout(
      () => {
        timeoutId = NaN;
        resolve();
      },
      length
    );
    resolveFunc = resolve;
    rejectFunc = reject;
  });

  return {
    promise,
    clearTimeout: (resolveRejectFunc) => {
      // if already cleared, don't do anything
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = NaN;
        // tempting to move this outside of the if, but then some "clever" coding opportunities get too tricky
        // give caller the opportunity to resolve/reject the promise so the promise isn't "hung" forever
        resolveRejectFunc(resolveFunc, rejectFunc);
      }
    },
  };
}
