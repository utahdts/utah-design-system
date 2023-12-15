// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import CitizenExperienceWrapper from './html/CitizenExperienceWrapper.html?raw';

import renderDOMSingle from '../../misc/renderDOMSingle';
import getUtahHeaderSettings from '../../settings/getUtahHeaderSettings';
import ActionItems from '../actionItems/ActionItems';
import { renderUtahIdForDesktop } from '../utahId/UtahId';

export default function CitizenExperience() {
  const citizenExperienceWrapper = renderDOMSingle(CitizenExperienceWrapper);

  const actionItems = ActionItems();
  if (actionItems) {
    citizenExperienceWrapper.appendChild(actionItems);
  }

  if (getUtahHeaderSettings().utahId !== false) {
    citizenExperienceWrapper.appendChild(renderUtahIdForDesktop());
  }

  return citizenExperienceWrapper;
}
