// https://www.geeksforgeeks.org/how-to-detect-touch-screen-device-using-javascript/
export function isTouchDevice() {
  return (
    ('ontouchstart' in window)
    || (navigator.maxTouchPoints > 0)
    // @ts-expect-error stupid IE10... is this really needed still?
    || (navigator.msMaxTouchPoints > 0)
  );
}
