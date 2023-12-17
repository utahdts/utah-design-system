import { describe, expect, test } from 'vitest';
import { formatPreCode } from '../../../../src/react/components/preCode/formatPreCode';

describe('formatPreCode', () => {
  test('remove last/first \n', () => {
    expect(formatPreCode(`
      `)).toEqual('');
  });

  test('remove last/first \n w/ line', () => {
    expect(formatPreCode(`
      
      `)).toEqual('');
  });

  test('indent single line of text', () => {
    expect(formatPreCode(`
      test it   
      `)).toEqual('test it   ');
  });

  test('no begin/end \ns', () => {
    expect(formatPreCode('test it   ')).toEqual('test it   ');
    expect(formatPreCode('   test it   ')).toEqual('test it   ');
  });

  test('\n at begin end, but have a character in front/behind it (no replace)', () => {
    expect(formatPreCode(`X
      test it   
      Y`)).toEqual(`X
      test it   
      Y`);
  });

  test('varying indent levels, go to smallest', () => {
    expect(formatPreCode(`
                function App() {
                  useEffect(
                    () => {
                      setUtahHeaderSettings({});
                    },
                    []
                  );

                  return (;
                    <div className="App">
                  ...
              `))
      .toEqual(
        `function App() {
  useEffect(
    () => {
      setUtahHeaderSettings({});
    },
    []
  );

  return (;
    <div className="App">
  ...`
      );
  });
});
