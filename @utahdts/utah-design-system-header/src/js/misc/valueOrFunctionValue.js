/**
 * @template ValueOrFunctionValueT
 * @param {ValueOrFunctionValueT | function(): ValueOrFunctionValueT} valueOrFunction
 * @returns {ValueOrFunctionValueT}
 */
export function valueOrFunctionValue(valueOrFunction) {
  return (valueOrFunction instanceof Function) ? valueOrFunction() : valueOrFunction;
}
