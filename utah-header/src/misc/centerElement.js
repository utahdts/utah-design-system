// TODO: review this file for inclusion
/**
 * Center an HTML element (ele) relative to a parent element
 * If the element will go off the left or right side of the screen
 * then position it at the Left or Right screen boundaries.
 * @param {HTMLElement} parent - The parent element to center relative to
 * @param {HTMLElement} ele - The HTML element to be centered
 */
export default function centerElement({ parent, ele }) {
  const posTop = parent.offsetTop + parent.offsetHeight;
  let posLeft = parent.offsetLeft + ((parent.offsetWidth - ele.offsetWidth) / 2);

  if ((posLeft + ele.offsetWidth) > document.body.scrollWidth) {
    posLeft = document.body.scrollWidth - ele.offsetWidth;
  } else if (posLeft < 0) {
    posLeft = 0;
  }

  // eslint-disable-next-line no-param-reassign
  ele.style.top = `${posTop}px`;
  // eslint-disable-next-line no-param-reassign
  ele.style.left = `${posLeft}px`;
}
