/**
 * @template ValueOrFunctionValueT
 * @param {ValueOrFunctionValueT | function(): ValueOrFunctionValueT} valueOrFunction
 * @returns {ValueOrFunctionValueT}
 */
export function valueOrFunctionValue(valueOrFunction) {
  return (
    (typeof valueOrFunction === 'function')
      // @ts-ignore
      ? valueOrFunction()
      : valueOrFunction
  );
}
