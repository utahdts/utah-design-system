// https://www.geeksforgeeks.org/how-to-detect-touch-screen-device-using-javascript/
export default function isTouchDevice() {
  return (
    ('ontouchstart' in window)
    || (navigator.maxTouchPoints > 0)
    // @ts-ignore
    || (navigator.msMaxTouchPoints > 0)
  );
}
