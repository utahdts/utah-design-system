import renderDOM from '../../misc/renderDOM';
// eslint-disable-next-line import/no-unresolved
import CitizenExperienceWrapper from './html/CitizenExperienceWrapper.html?raw';
import ActionItems from '../actionItems/ActionItems';
import UtahId from '../utahId/UtahId';

export default function CitizenExperience() {
  const citizenExperienceWrapper = renderDOM(CitizenExperienceWrapper);

  citizenExperienceWrapper.appendChildAll(ActionItems());

  citizenExperienceWrapper.appendChildAll(UtahId());

  return citizenExperienceWrapper;
}
