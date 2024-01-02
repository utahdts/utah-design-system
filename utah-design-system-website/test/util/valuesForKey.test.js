import { describe, expect, test } from 'vitest';
import { valuesForKey } from './valuesForKey';

describe(
  'valuesForKey',
  () => {
    test(
      'valuesForKey: empty object / no matches',
      () => {
        expect(valuesForKey({}, 'testField')).toStrictEqual([]);
        expect(valuesForKey([], 'testField')).toStrictEqual([]);
        expect(valuesForKey('trust me', 'testField')).toStrictEqual([]);
        expect(valuesForKey(() => 'hee hee', 'testField')).toStrictEqual([]);
        expect(valuesForKey(/123/, 'testField')).toStrictEqual([]);
        // eslint-disable-next-line no-new-wrappers
        expect(valuesForKey(new Number(-Infinity), 'testField')).toStrictEqual([]);
      }
    );

    test(
      'valuesForKey: primitives - no match',
      () => {
        expect(valuesForKey(null, 'testField')).toStrictEqual([]);
        expect(valuesForKey(undefined, 'testField')).toStrictEqual([]);
        expect(valuesForKey('testField', 'testField')).toStrictEqual([]);
        expect(valuesForKey(1234, 'testField')).toStrictEqual([]);
        expect(valuesForKey(BigInt(32), 'testField')).toStrictEqual([]);
        expect(valuesForKey(true, 'testField')).toStrictEqual([]);
        expect(valuesForKey(Symbol('testField'), 'testField')).toStrictEqual([]);
      }
    );

    test(
      'valuesForKey: top level match',
      () => {
        expect(valuesForKey({ id: 32, testField: 44 }, 'testField')).toStrictEqual([44]);
      }
    );

    test(
      'valuesForKey: nested match',
      () => {
        expect(
          valuesForKey(
            {
              id: 32,
              testField: 44,
              child: {
                id: 32,
                testField: 45,
                child: {
                  id: 32,
                  testField: 46,
                  child: {
                    id: 32,
                    testField: 47,
                    child: {
                      id: 32,
                      testField: 48,
                      child: {
                        id: 32,
                        testField: 49,
                      },
                    },
                  },
                },
              },
            },
            'testField'
          )
        )
          .toStrictEqual([44, 45, 46, 47, 48, 49]);
      }
    );

    test(
      'valuesForKey: filterFunc',
      () => {
        expect(
          valuesForKey(
            {
              id: 32,
              testField: 44,
              child: {
                id: 33,
                testField: 45,
              },
            },
            'testField',
            (_, testObj) => testObj?.id !== 33
          )
        )
          .toStrictEqual([44]);
      }
    );
  }
);
