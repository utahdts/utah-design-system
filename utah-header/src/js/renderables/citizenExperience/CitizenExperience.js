// @ts-check

import appendChildAll from '../../misc/appendChildAll';
import { renderDOMSingle } from '../../misc/renderDOM';
import ActionItems from '../actionItems/ActionItems';
import UtahId from '../utahId/UtahId';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import CitizenExperienceWrapper from './html/CitizenExperienceWrapper.html?raw';

export default function CitizenExperience() {
  const citizenExperienceWrapper = renderDOMSingle(CitizenExperienceWrapper);

  const actionItems = ActionItems();
  if (actionItems) {
    appendChildAll(citizenExperienceWrapper, actionItems);
  }

  appendChildAll(citizenExperienceWrapper, UtahId());

  return citizenExperienceWrapper;
}
