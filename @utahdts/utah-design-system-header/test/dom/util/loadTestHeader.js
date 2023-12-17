// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'vitest';
import { loadHeader, setUtahHeaderSettings } from '../../../src';

/** @typedef {import ('../../../src/@types/jsDocTypes.d.js').Settings} Settings */

/**
 * @param {Settings} settings
 */
export function loadTestHeader(settings) {
  setUtahHeaderSettings(settings);
  loadHeader();
  expect(document.querySelector('.utah-design-system.utds-header')).toBeTruthy();
}
