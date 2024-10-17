import { renderDOMSingle } from '../../misc/renderDOMSingle';
import { getUtahHeaderSettings } from '../../settings/getUtahHeaderSettings';
import { ActionItems } from '../actionItems/ActionItems';
import { renderUtahIdForDesktop } from '../utahId/UtahId';
import CitizenExperienceWrapper from './html/CitizenExperienceWrapper.html?raw';

export function CitizenExperience() {
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
