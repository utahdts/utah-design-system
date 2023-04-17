import { useEffect, useState } from 'react';

// got tired of writing a useState followed by a useEffect
// also was annoying that useState would need a default value function but then useEffect would also use the same function
// the useState and useEffect were so tethered together that it made sense to make a combo hook
/*
Example old code:
    const valueCalculatorFn = () => { return ...some cool value...; };
    const [state, setState] = useState(() => valueCalculatorFn());
    useEffect(
        () => {
            setState(valueCalculatorFn());
            return () => {..do something cool...});
        },
        [someValue1, someValue2]
    );

Example new code:
    const valueCalculatorFn = () => { return ...some cool value...; };
    const [state, setState] = useStateEffect({
        calculateValueFn: valueCalculatorFn,
        onUnMountFn: () => {..do something cool...}),
        dependencyList: [someValue1, someValue2]
    })
*/

// @param calculateValueFn : this function is the default setState value and will set state any time dependencyList changes
// @param onUnmountFn : (optional) this function is returned in the useEffect allowing unmount state events
// @param dependencyList : passed as second parameter to useEffect as the list of items to watch for changes
// @return [state, setState] : the state variables
export default ({ calculateValueFn, onUnmountFn, dependencyList }) => {
  const [state, setState] = useState(() => calculateValueFn(null));

  useEffect(
    () => {
      setState((previousState) => calculateValueFn(previousState));
      return onUnmountFn;
    },
    dependencyList
  );

  return [state, setState];
};
