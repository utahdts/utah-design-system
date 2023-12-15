import { describe, expect, test } from 'vitest';
import { colorsFromUrlParams, colorsToUrlParams } from '../../../../src/react/components/color/colorPickerUrlParams';
import { CSS_VARIABLES_KEYS } from '../../../../src/react/enums/cssVariablesKeys';

describe('colorPickerColorsBase64 - sanity', () => {
  test('sanity check - colors list known and in specific order', () => {
    expect(Object.values(CSS_VARIABLES_KEYS)).toStrictEqual([
      CSS_VARIABLES_KEYS.PRIMARY_COLOR,
      CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK,
      CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT,
      CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR,
      CSS_VARIABLES_KEYS.SECONDARY_COLOR,
      CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK,
      CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT,
      CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR,
      CSS_VARIABLES_KEYS.ACCENT_COLOR,
      CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK,
      CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT,
      CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR,
      CSS_VARIABLES_KEYS.GRAY_COLOR,
    ]);
  });
});

describe('colorPickerColorsBase64 - colorsToUrlParams', () => {
  test('single color', () => {
    const colors = {
      [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: '#abcdef',
      [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: undefined,
      [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: undefined,
      [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: undefined,
      [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: undefined,
      [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: undefined,
      [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: undefined,
      [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: undefined,
      [CSS_VARIABLES_KEYS.ACCENT_COLOR]: undefined,
      [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: undefined,
      [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: undefined,
      [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: undefined,
      [CSS_VARIABLES_KEYS.GRAY_COLOR]: undefined,
    };
    expect(colorsToUrlParams(colors)).toEqual('colors=v1abcdef____________');
  });

  test('all colors', () => {
    const colors = {
      [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: '#abcdef',
      [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: '#012345',
      [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: '#ffffff',
      [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: '#000000',
      [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: '#eee',
      [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: '#0f0f0f',
      [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: '#111111',
      [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: '#222222',
      [CSS_VARIABLES_KEYS.ACCENT_COLOR]: '#333333',
      [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: '#aaaaaa',
      [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: '#AAAAAA',
      [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: '#FfFfFf',
      [CSS_VARIABLES_KEYS.GRAY_COLOR]: '#3c3c3c',
    };
    expect(colorsToUrlParams(colors)).toEqual('colors=v1abcdef012345ffffff000000eeeeee0f0f0f111111222222333333aaaaaaAAAAAAFfFfFf3c3c3c');
  });

  test('mixed colors missing', () => {
    const colors = {
      [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: '#abcdef',
      [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: '',
      [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: null,
      [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: '',
      [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: '#eee',
      [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: '#0f0f0f',
      [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: '#111111',
      [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: '#222222',
      [CSS_VARIABLES_KEYS.ACCENT_COLOR]: '#333333',
      [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: null,
      [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: null,
      [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: null,
      [CSS_VARIABLES_KEYS.GRAY_COLOR]: '#3c3c3c',
    };
    expect(colorsToUrlParams(colors)).toEqual('colors=v1abcdef___eeeeee0f0f0f111111222222333333___3c3c3c');
  });
});

describe('colorPickerColorsBase64 - colorsFromUrlParams', () => {
  test('single color', () => {
    expect(colorsFromUrlParams('colors=v1abcdef____________'))
      .toStrictEqual({
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: '#abcdef',
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: null,
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: null,
        [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: null,
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: null,
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: null,
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: null,
        [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: null,
        [CSS_VARIABLES_KEYS.ACCENT_COLOR]: null,
        [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: null,
        [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: null,
        [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: null,
        [CSS_VARIABLES_KEYS.GRAY_COLOR]: null,
      });
  });

  test('all colors', () => {
    expect(colorsFromUrlParams('colors=v1abcdef012345ffffff000000eeeeee0f0f0f111111222222333333aaaaaaAAAAAAFfFfFf3c3c3c'))
      .toStrictEqual({
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: '#abcdef',
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: '#012345',
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: '#ffffff',
        [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: '#000000',
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: '#eeeeee',
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: '#0f0f0f',
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: '#111111',
        [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: '#222222',
        [CSS_VARIABLES_KEYS.ACCENT_COLOR]: '#333333',
        [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: '#aaaaaa',
        [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: '#AAAAAA',
        [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: '#FfFfFf',
        [CSS_VARIABLES_KEYS.GRAY_COLOR]: '#3c3c3c',
      });
  });

  test('no parameter in url', () => {
    expect(colorsFromUrlParams(''))
      .toStrictEqual({
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: null,
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: null,
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: null,
        [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: null,
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: null,
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: null,
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: null,
        [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: null,
        [CSS_VARIABLES_KEYS.ACCENT_COLOR]: null,
        [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: null,
        [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: null,
        [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: null,
        [CSS_VARIABLES_KEYS.GRAY_COLOR]: null,
      });
  });

  test('mixed colors missing', () => {
    expect(colorsFromUrlParams('colors=v1abcdef___eeeeee0f0f0f111111222222333333___3c3c3c'))
      .toStrictEqual({
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: '#abcdef',
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: null,
        [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: null,
        [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: null,
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: '#eeeeee',
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: '#0f0f0f',
        [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: '#111111',
        [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: '#222222',
        [CSS_VARIABLES_KEYS.ACCENT_COLOR]: '#333333',
        [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: null,
        [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: null,
        [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: null,
        [CSS_VARIABLES_KEYS.GRAY_COLOR]: '#3c3c3c',
      });
  });
});
