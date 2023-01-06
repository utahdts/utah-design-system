import { renderDOM } from '../../misc/renderDOM';
// eslint-disable-next-line import/no-unresolved
import UtahIdHtml from './html/UtahIdWrapper.html?raw';

/**
 * @returns {HTMLCollection | Element}
 */
export default function UtahId() {
  return renderDOM(UtahIdHtml);
}
