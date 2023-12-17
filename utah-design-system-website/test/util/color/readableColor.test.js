import tinycolor from 'tinycolor2';
import { describe, expect, test } from 'vitest';
import { readableColor } from '../../../src/react/util/color/readableColor';

const grayColors = [
  '#ffffff',
  '#f7f7f7',
  '#efefef',
  '#e7e7e7',
  '#dfdfdf',
  '#d7d7d7',
  '#cfcfcf',
  '#c7c7c7',
  '#bfbfbf',
  '#b7b7b7',
  '#afafaf',
  '#a7a7a7',
  '#9f9f9f',
  '#979797',
  '#8f8f8f',
  '#878787',
  '#7f7f7f',
  '#777767',
  '#6f6f6f',
  '#676767',
  '#5f5f5f',
  '#575757',
  '#4f4f4f',
  '#474747',
  '#3f3f3f',
  '#373737',
  '#2f2f2f',
  '#272727',
  '#1f1f1f',
  '#171717',
  '#0f0f0f',
  '#070707',
  '#000000',
];

/** @typedef {{color: string, contrast: number}} ColorContrast */

/**
 * @param {string} color
 * @param {string[]} colorList
 * @returns {ColorContrast[]}
 */
function colorContrasts(color, colorList) {
  return colorList.map((testColor) => ({
    color: testColor,
    contrast: tinycolor.readability(color, testColor),
  }));
}

/**
 * @param {string} testColor
 * @returns {{foundColor: ColorContrast, previousColor: ColorContrast | undefined}}
 */
function calcTest(testColor) {
  const contrasts = colorContrasts(testColor, grayColors);
  contrasts.sort((a, b) => a.contrast - b.contrast);
  const foundColor = readableColor({ color: testColor, colorList: grayColors });
  const foundColorContrast = tinycolor.readability(testColor, foundColor);
  const contrastIndex = contrasts.findIndex((contrast) => contrast.color === foundColor);
  const previousColor = contrasts[contrastIndex - 1];
  return { foundColor: { color: foundColor, contrast: foundColorContrast }, previousColor };
}

describe('readableColor', () => {
  test.each([
    ['#000000', '#777767', '#6f6f6f', 4.179216701217608],
    ['#070707', '#7f7f7f', '#777767', 4.430695534871117],
    ['#0f0f0f', '#7f7f7f', '#777767', 4.21616412785741],
    ['#171717', '#878787', '#7f7f7f', 4.477362979380586],
    ['#1f1f1f', '#878787', '#7f7f7f', 4.116517778851695],
    ['#272727', '#8f8f8f', '#878787', 4.1583027132021035],
    ['#2f2f2f', '#979797', '#8f8f8f', 4.139917227900854],
    ['#373737', '#a7a7a7', '#9f9f9f', 4.497555497305521],
    ['#3f3f3f', '#afafaf', '#a7a7a7', 4.377138350713294],
    ['#474747', '#b7b7b7', '#afafaf', 4.235823571703415],
    ['#4f4f4f', '#c7c7c7', '#bfbfbf', 4.454380665149258],
    ['#575757', '#cfcfcf', '#c7c7c7', 4.274555491648168],
    ['#5f5f5f', '#dfdfdf', '#d7d7d7', 4.436651631909514],
    ['#676767', '#e7e7e7', '#dfdfdf', 4.244444735415733],
    ['#6f6f6f', '#f7f7f7', '#efefef', 4.369992171920902],
    ['#777767', '#ffffff', '#070707', 4.430695534871117],
    ['#7f7f7f', '#0f0f0f', '#171717', 4.477362979380586],
    ['#878787', '#1f1f1f', '#272727', 4.1583027132021035],
    ['#8f8f8f', '#272727', '#2f2f2f', 4.139917227900854],
    ['#979797', '#2f2f2f', '#373737', 4.07540937388724],
    ['#9f9f9f', '#2f2f2f', '#373737', 4.497555497305521],
    ['#a7a7a7', '#373737', '#3f3f3f', 4.377138350713294],
    ['#afafaf', '#3f3f3f', '#474747', 4.235823571703415],
    ['#b7b7b7', '#474747', '#4f4f4f', 4.084109726020155],
    ['#bfbfbf', '#474747', '#4f4f4f', 4.454380665149258],
    ['#c7c7c7', '#4f4f4f', '#575757', 4.274555491648168],
    ['#cfcfcf', '#575757', '#5f5f5f', 4.098633864415619],
    ['#d7d7d7', '#575757', '#5f5f5f', 4.436651631909514],
    ['#dfdfdf', '#5f5f5f', '#676767', 4.244444735415733],
    ['#e7e7e7', '#676767', '#6f6f6f', 4.06345398537015],
    ['#efefef', '#676767', '#6f6f6f', 4.369992171920902],
    ['#f7f7f7', '#6f6f6f', '#777767', 4.2438479677646885],
    ['#ffffff', '#777767', '#7f7f7f', 4.0041069566148515],
  ])(
    'check matching contrast color: scenario: %s, %s',
    (testColor, expectedColor, expectedPreviousColor, expectedPreviousContrast) => {
      // get calculated results
      const { foundColor, previousColor } = calcTest(testColor);

      // found color should be expected and have contrast >= 4.5
      expect(foundColor.color).toBe(expectedColor);
      expect(foundColor.contrast).toBeGreaterThanOrEqual(4.5);

      // previous possible color should be < 4.5
      expect(previousColor?.contrast).toBeLessThan(4.5);
      expect(previousColor).toStrictEqual({
        color: expectedPreviousColor,
        contrast: expectedPreviousContrast,
      });
    }
  );
});
