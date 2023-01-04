import renderDOM from '../../misc/renderDOM';
// eslint-disable-next-line import/no-unresolved
import LogoTitleWrapper from './html/LogoTitleWrapper.html?raw';
import { getSettings } from '../settings/settings';

export default function LogoTitle() {
  const titleWrapper = renderDOM(LogoTitleWrapper);

  // TODO: Render the Agency Logo out of settings()
  getSettings();

  // There are two things to render: Agency Logo and/or Title
  // TODO: get title out of settings()
  const title = document.createTextNode('Utah Design System');
  titleWrapper.appendChild(title);

  return titleWrapper;
}
