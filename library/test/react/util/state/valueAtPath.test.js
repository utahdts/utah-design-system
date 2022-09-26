import valueAtPath from '../../../../react/util/state/valueAtPath';

describe('valueAtPath:', () => {
  it('no path', () => {
    expect(valueAtPath({ object: {}, path: 'a' })).toBe(undefined);
  });

  it('no object', () => {
    expect(valueAtPath({ object: null, path: 'a' })).toBe(null);
  });

  it('single level', () => {
    expect(valueAtPath({ object: { a: 'a' }, path: 'a' })).toBe('a');
  });

  it('nested: doesn\'t exist', () => {
    expect(valueAtPath({ object: { a: 'a' }, path: 'a.b' })).toBe(undefined);
  });

  it('nested: doesn\'t exist', () => {
    expect(valueAtPath({ object: { a: { b: { c: 'c' } } }, path: 'a.b.c' })).toBe('c');
  });
});
