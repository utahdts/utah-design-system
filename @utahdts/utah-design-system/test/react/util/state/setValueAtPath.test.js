import { isArray } from 'lodash';
import { describe, expect, it } from 'vitest';
import { setValueAtPath } from '../../../../react/util/state/setValueAtPath';

describe('test object at path reducer', () => {
  it('no path', () => {
    const object = {};

    // bad payload
    expect(setValueAtPath({ object, path: null, value: 3 })).toEqual({});

    // empty path means no change
    expect(setValueAtPath({ object, path: '', value: 3 })).toEqual({});
  });

  it('single path', () => {
    const object = {};

    // single path sets on root object
    expect(setValueAtPath({ object, path: 'a', value: 3 })).toEqual({ a: 3 });

    // existing
    expect(setValueAtPath({ object, path: 'a', value: 5 })).toEqual({ a: 5 });
  });

  it('path with levels', () => {
    const object = { a: {} };

    // double path
    expect(setValueAtPath({ object, path: 'a.b', value: 3 })).toEqual({ a: { b: 3 } });
  });

  it('path with more levels', () => {
    const object = {
      a: {
        b: {
          c: {
            d: {
              g: 'gggg',
            },
          },
          e: {
            f: 'ffff',
          },
          h: 'hhhh',
        },
        i: 'iiii',
      },
    };

    const result = setValueAtPath({ object, path: 'a.i', value: 3 });
    // value was set
    expect(result.a.i).toEqual(3);
    // make sure other parts of a were not lost
    expect(result.a.b.h).toEqual('hhhh');

    // non-existing
    expect(setValueAtPath({ object, path: 'a.j', value: 7 }).a.j).toEqual(7);
  });

  it('invalid paths', () => {
    const object = {
      a: {
        b: {
          c: {
            d: {
              g: 'gggg',
            },
          },
          e: {
            f: 'ffff',
          },
          h: 'hhhh',
        },
        i: 'iiii',
      },
    };

    const result = setValueAtPath({ object, path: 'a.b.c.d.j.k.l.m', value: 3 });
    expect(result.a.b.c.d).toEqual({ g: 'gggg', j: { k: { l: { m: 3 } } } });

    expect(setValueAtPath({ object: {}, path: 'a.b.c.d.j.k.l.m', value: 3 })).toEqual({
      a: { b: { c: { d: { j: { k: { l: { m: 3 } } } } } } },
    });
    expect(setValueAtPath({ object: { a: 3 }, path: 'a.b.c.d.j.k.l.m', value: 3 })).toEqual({ a: 3 });

    // setting field on non-object
    expect(setValueAtPath({ object: { a: 3 }, path: 'a.b.m', value: 3 })).toEqual({ a: 3 });
  });

  it('shallow & deep clones', () => {
    const object = {
      a: {
        b: 'bbbb',
        c: {
          d: 'dddd',
        },
      },
      e: 'eeee',
      f: {
        g: 'gggg',
      },
    };

    const expectedResult = {
      a: {
        b: 'bbbb',
        c: {
          d: {
            h: 'hhhh',
          },
        },
        i: {
          j: 'jjjj',
          k: {
            l: 'llll',
          },
        },
      },
      e: 'eeee',
      f: {
        g: 'gggg',
      },
    };

    const iObject = { j: 'jjjj', k: { l: 'llll' } };

    let testResult = setValueAtPath({
      object,
      path: 'a.c.d',
      value: {},
    });
    testResult = setValueAtPath({
      object: testResult,
      path: 'a.c.d.h',
      value: 'hhhh',
    });
    testResult = setValueAtPath({
      object: testResult,
      path: 'a.i',
      value: iObject,
    });

    // shallow clones state
    expect(testResult).toEqual(expectedResult);
    expect(testResult.f).toBe(object.f);

    // deep clones actual value
    expect(testResult.a.i).not.toBe(iObject);
    expect(testResult.a.i.k).not.toBe(iObject.k);
    expect(testResult.a.i).toEqual(iObject);
    expect(testResult.a.i.k).toEqual(iObject.k);
  });

  it('nested arrays in objects', () => {
    const object = {
      a: {
        b: [
          {
            c: 'cccc',
            d: 'dddd',
          },
          {
            c: 'eeee',
            d: 'ffff',
          },
        ],
        g: 'gggg',
      },
      b: 'hhhh',
    };

    const expectedResult = {
      a: {
        b: [
          {
            c: 'cccc',
            d: 'dddd',
          },
          {
            c: 'iiii',
            d: 'ffff',
          },
        ],
        g: 'gggg',
      },
      b: 'hhhh',
    };
    const testResult = setValueAtPath({
      object,
      path: 'a.b.1.c',
      value: 'iiii',
    });

    // set value in to array object
    expect(testResult).toEqual(expectedResult);
    // array object[0] is the exact same object pointer (no cloning)
    expect(testResult.a.b[0]).toEqual(object.a.b[0]);
    // must still be an array
    expect(isArray(testResult.a.b)).toBe(true);
  });

  it('array item setting', () => {
    const object = {
      test: [],
    };

    const expectedResult = {
      test: [undefined, { test: 'test' }],
    };

    const testResult = setValueAtPath({
      object,
      path: 'test.1',
      value: { test: 'test' },
    });
    expect(testResult).toEqual(expectedResult);
  });

  it('path missing object', () => {
    const object = {};

    // missing.field = value
    expect(setValueAtPath({ object, path: 'missing.field', value: 'i exist!' })).toEqual({ missing: { field: 'i exist!' } });
  });
});
