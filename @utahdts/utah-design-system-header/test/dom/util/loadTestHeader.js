import { expect } from 'vitest';
import { loadHeader, setUtahHeaderSettings } from '../../../src';

/** @typedef {import ('@utahdts/utah-design-system-header').Settings} Settings */

/**
 * @param {Settings} settings
 */
export function loadTestHeader(settings) {
  setUtahHeaderSettings(settings);
  loadHeader();
  expect(document.querySelector('.utah-design-system.utds-header')).toBeTruthy();
}
