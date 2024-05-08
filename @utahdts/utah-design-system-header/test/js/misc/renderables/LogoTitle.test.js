import { describe, expect, test } from 'vitest';
import { LogoTitle } from '../../../../src/js/renderables/logoTitle/LogoTitle';
import { setUtahHeaderSettingsForTest } from '../../../util/setUtahHeaderSettingsForTest';

describe('LogoTitle', () => {
  test('titleUrl: blank (wrapper !link)', () => {
    setUtahHeaderSettingsForTest({ titleUrl: '' }, () => {
      LogoTitle();
      const wrapper = document.querySelector('.utds-title-wrapper');
      expect(wrapper).toBeTruthy();
      expect(wrapper?.tagName).toBe('DIV');
      expect(wrapper?.getAttribute('href')).toBeFalsy();
    });
  });

  test('titleUrl: value (!wrapper link)', () => {
    setUtahHeaderSettingsForTest({ titleUrl: 'just-a-test' }, () => {
      LogoTitle();
      const wrapper = document.querySelector('.utds-title-wrapper');
      expect(wrapper).toBeTruthy();
      expect(wrapper?.tagName).toBe('A');
      expect(wrapper?.getAttribute('href')).toBe('just-a-test');
    });
  });

  // backwards compatibility casing
  test('titleURL: blank (wrapper !link)', () => {
    setUtahHeaderSettingsForTest(
      {
        titleUrl: '',
        // @ts-ignore
        titleURL: '',
      },
      () => {
        LogoTitle();
        const wrapper = document.querySelector('.utds-title-wrapper');
        expect(wrapper).toBeTruthy();
        expect(wrapper?.tagName).toBe('DIV');
        expect(wrapper?.getAttribute('href')).toBeFalsy();
      }
    );
  });

  test('titleURL: value (!wrapper link)', () => {
    setUtahHeaderSettingsForTest(
      {
        titleUrl: '',
        // @ts-ignore
        titleURL: 'just-a-test',
      },
      () => {
        LogoTitle();
        const wrapper = document.querySelector('.utds-title-wrapper');
        expect(wrapper).toBeTruthy();
        expect(wrapper?.tagName).toBe('A');
        expect(wrapper?.getAttribute('href')).toBe('just-a-test');
      }
    );
  });
});
