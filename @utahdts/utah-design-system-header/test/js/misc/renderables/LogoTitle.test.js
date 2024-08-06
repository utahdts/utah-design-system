import { describe, expect, test, vi } from 'vitest';
import { notNull } from '../../../../src/js/misc/notNull';
import { LogoTitle } from '../../../../src/js/renderables/logoTitle/LogoTitle';
import { setUtahHeaderSettingsForTest } from '../../../util/setUtahHeaderSettingsForTest';

describe('LogoTitle', () => {
  test('titleUrlAction.actionFunction: blank (wrapper !link), no func', () => {
    setUtahHeaderSettingsForTest({ titleUrlAction: { actionUrl: '' } }, () => {
      LogoTitle();
      const wrapper = /** @type {HTMLElement} */ (notNull(document.querySelector('.utds-title-wrapper'), 'LogoTitle test A'));
      expect(wrapper).toBeTruthy();
      expect(wrapper.tagName).toBe('DIV');
      expect(wrapper.getAttribute('href')).toBeFalsy();
      expect(wrapper.onclick).toBeFalsy();
    });
  });

  test('titleUrlAction.actionFunction: value (!wrapper link), has func', () => {
    setUtahHeaderSettingsForTest({ titleUrlAction: { actionUrl: 'just-a-test', actionFunction: vi.fn() } }, () => {
      LogoTitle();
      const wrapper = /** @type {HTMLElement} */ (notNull(document.querySelector('.utds-title-wrapper'), 'LogoTitle test B'));
      expect(wrapper).toBeTruthy();
      expect(wrapper.tagName).toBe('A');
      expect(wrapper.getAttribute('href')).toBe('just-a-test');
      expect(wrapper.onclick).toBeTruthy();
    });
  });

  // ======= Backwards Compatibility: titleUrl ======= //
  test('titleUrlAction.actionFunction: **backwards compatibility (titleUrl)** blank (wrapper !link)', () => {
    setUtahHeaderSettingsForTest(
      {
        // @ts-expect-error
        titleUrlAction: null,
        titleUrl: '',
      },
      () => {
        LogoTitle();
        const wrapper = /** @type {HTMLElement} */ (notNull(document.querySelector('.utds-title-wrapper'), 'LogoTitle test C'));
        expect(wrapper).toBeTruthy();
        expect(wrapper.tagName).toBe('DIV');
        expect(wrapper.getAttribute('href')).toBeFalsy();
        expect(wrapper.getAttribute('href')).toBeFalsy();
      }
    );
  });

  test('titleUrlAction.actionFunction: **backwards compatibility (titleUrl)** value (!wrapper link)', () => {
    setUtahHeaderSettingsForTest(
      {
        // @ts-expect-error
        titleUrlAction: null,
        titleUrl: 'just-a-test',
      },
      () => {
        LogoTitle();
        const wrapper = /** @type {HTMLElement} */ (notNull(document.querySelector('.utds-title-wrapper'), 'LogoTitle test D'));
        expect(wrapper).toBeTruthy();
        expect(wrapper.tagName).toBe('A');
        expect(wrapper.getAttribute('href')).toBe('just-a-test');
      }
    );
  });

  // ======= Backwards Compatibility: titleURL ======= //
  test('titleUrlAction.actionFunction: **backwards compatibility (titleURL)** blank (wrapper !link)', () => {
    setUtahHeaderSettingsForTest(
      {
        // @ts-expect-error
        titleUrlAction: null,
        titleURL: '',
      },
      () => {
        LogoTitle();
        const wrapper = /** @type {HTMLElement} */ (notNull(document.querySelector('.utds-title-wrapper'), 'LogoTitle test E'));
        expect(wrapper).toBeTruthy();
        expect(wrapper.tagName).toBe('DIV');
        expect(wrapper.getAttribute('href')).toBeFalsy();
        expect(wrapper.getAttribute('href')).toBeFalsy();
      }
    );
  });

  test('titleUrlAction.actionFunction: **backwards compatibility (titleURL)** value (!wrapper link)', () => {
    setUtahHeaderSettingsForTest(
      {
        // @ts-expect-error
        titleUrlAction: null,
        titleUrl: 'just-a-test',
      },
      () => {
        LogoTitle();
        const wrapper = /** @type {HTMLElement} */ (notNull(document.querySelector('.utds-title-wrapper'), 'LogoTitle test F'));
        expect(wrapper).toBeTruthy();
        expect(wrapper.tagName).toBe('A');
        expect(wrapper.getAttribute('href')).toBe('just-a-test');
      }
    );
  });
});
