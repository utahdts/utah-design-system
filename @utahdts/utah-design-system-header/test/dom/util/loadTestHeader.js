// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'vitest';
import { loadHeader, setUtahHeaderSettings } from '../../../src';

/** @typedef {import ('../../../src/js/misc/jsDocTypes').Settings} Settings */

/**
 * @param {Settings} settings
 */
export default function loadTestHeader(settings) {
  setUtahHeaderSettings(settings);
  loadHeader();
  expect(document.querySelector('.utah-design-system.utds-header')).toBeTruthy();
}
