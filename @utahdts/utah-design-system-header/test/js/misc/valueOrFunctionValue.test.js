import { describe, expect, test } from 'vitest';
import { valueOrFunctionValue } from '../../../src/js/misc/valueOrFunctionValue';
import { dataOfAllDataTypes } from '../../util/dataOfAllDataTypes';

describe('valueOrFunctionValue', () => {
  test.each(
    // valueOrFunctionValue treats functions different so not testable this way
    dataOfAllDataTypes().filter((datum) => typeof datum !== 'function')
  )(
    'valueOrFunctionValue: dataOfAllDataTypes',
    (datum) => {
      expect(valueOrFunctionValue(datum)).toStrictEqual(datum);
      expect(valueOrFunctionValue(() => datum)).toStrictEqual(datum);
    }
  );

  test('returns a function', () => {
    const func = () => 'return value';
    expect(valueOrFunctionValue(func)).toBe('return value');
    expect(valueOrFunctionValue(() => func)).toBe(func);
  });
});
