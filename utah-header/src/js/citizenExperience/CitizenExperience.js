import renderDOM from '../../misc/renderDOM';
// eslint-disable-next-line import/no-unresolved
import CitizenExperienceWrapper from './html/CitizenExperienceWrapper.html?raw';
// eslint-disable-next-line import/no-unresolved
import actionItemsWrapper from './html/ActionItemsWrapper.html?raw';
import UtahId from '../utahId/UtahId';

export default function CitizenExperience() {
  const citizenExperienceWrapper = renderDOM(CitizenExperienceWrapper);

  citizenExperienceWrapper.appendChildAll(renderDOM(actionItemsWrapper));

  citizenExperienceWrapper.appendChildAll(UtahId());

  return citizenExperienceWrapper;
}
