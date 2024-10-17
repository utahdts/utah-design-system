/* eslint-disable no-new-wrappers */
/**
 * https://www.w3schools.com/js/js_datatypes.asp
 * when testing, sometimes it is helpful to test against all possible data type scenarios.
 * Having data of all scenario types then can be helpful and finds combinations not
 * previously noticed.
 *
 * While this can not ever be completely inclusive of all data and scenarios that
 * your code may experience, this goes a long ways to covering all your base cases.
 */

export const DATA_OF_ALL_DATATYPES = {
  string: {
    empty: '',
    notEmpty: 'i am not empty',
    utf: '😄',
  },
  stringObject: {
    empty: new String(''),
    notEmpty: new String('i am not empty'),
    utf: new String('😄'),
  },
  number: {
    // https://www.w3schools.com/js/js_numbers.asp
    decimal: 3.14,
    hex: 0xf3f2,
    int: 628,
    nan: NaN,
    // https://www.w3schools.com/jsref/jsref_obj_number.asp
    infinity: Number.POSITIVE_INFINITY,
    negativeInfinity: Number.NEGATIVE_INFINITY,
    maxSafeInteger: Number.MAX_SAFE_INTEGER,
    maxValue: Number.MAX_VALUE,
    minSafeInteger: Number.MIN_SAFE_INTEGER,
    minValue: Number.MIN_VALUE,
  },
  numberObject: {
    decimal: Number(3.14),
    hex: Number(0xf3f2),
    infinity: Number(Number.POSITIVE_INFINITY),
    int: Number(628),
    maxSafeInteger: Number(Number.MAX_SAFE_INTEGER),
    maxValue: Number(Number.MAX_VALUE),
    minSafeInteger: Number(Number.MIN_SAFE_INTEGER),
    minValue: Number(Number.MIN_VALUE),
    nan: Number(NaN),
    negativeInfinity: Number(Number.NEGATIVE_INFINITY),
  },
  bigint: {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
    bin: BigInt('0b11111111111111111111111111111111111111111111111111111'),
    hex: BigInt('0x1fffffffffffff'),
    number: BigInt(9007199254740991),
    octal: BigInt('0o377777777777777777'),
    string: BigInt('9007199254740991'),
  },
  boolean: {
    False: Boolean(false),
    false: false,
    True: Boolean(true),
    true: true,
  },
  undefined: {
    undefined,
  },
  null: {
    null: null,
  },
  symbol: {
    number: Symbol(42),
    string: Symbol('string value'),
  },
  object: {
    arrayEmpty: [],
    arrayFull: [1, 2, 3, '4', '5', [6, '7', ['8'], []]],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    func: function () { },
    funcArrow: () => undefined,
    // eslint-disable-next-line @typescript-eslint/no-extraneous-class
    objectClass: new (class { })(),
    objectSimpleEmpty: {},
    objectSimpleFull: { one: 1, two: { three: 3, four: { five: 5 } } },
    date: new Date('2023-05-10T10:40:42'),
  },
  truthy: {
    // quiz: https://eqeq.js.org/
    // cheat: https://dorey.github.io/JavaScript-Equality-Table/
    true: true,
    false: false,
    one: 1,
    zero: 0,
    negativeOne: -1,
    trueString: 'true',
    falseString: 'false',
    oneString: '1',
    zeroString: '0',
    negativeOneString: '-1',
    emptyString: '',
    null: null,
    undefined,
    Infinity,
    negativeInfinity: -Infinity,
    arrayEmpty: [],
    objectEmpty: {},
    arrayNested: [[]],
    arrayZero: [0],
    arrayOne: [1],
    NaN,
  },
};

/**
 * made a function so maybe in the future could pass in options as to what
 * type of data to test
 * @param {object} [options]
 * @param {string[]} [options.includes] allDataTypes enum
 * @param {string[]} [options.excludes] allDataTypes enum
 * @returns {any[]}
 */
export function dataOfAllDataTypes({ includes, excludes } = {}) {
  return (
    Object.keys(DATA_OF_ALL_DATATYPES)
      .filter((key) => (!includes || includes.includes(key)) && (!excludes?.includes(key)))
      // @ts-expect-error intentional for testing
      .map((dataTypeKey) => Object.values(DATA_OF_ALL_DATATYPES[dataTypeKey]))
      .flat()
  );
}

export const allDataTypes = {
  BIGINT: 'bigint',
  BOOLEAN: 'boolean',
  NULL: 'null',
  NUMBER: 'number',
  NUMBER_OBJECT: 'numberObject',
  OBJECT: 'object',
  STRING: 'string',
  STRING_OBJECT: 'stringObject',
  SYMBOL: 'symbol',
  TRUTHY: 'truthy',
  UNDEFINED: 'undefined',
};
