// @ts-check
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useImmer } from 'use-immer';
import joinClassNames from '../../../util/joinClassNames';
import { RadioButtonsContext } from './util/RadioButtonsContext';
import RefShape from '../../../propTypesShapes/RefShape';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  innerRef: RefShape,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
const defaultProps = {
  children: null,
  className: null,
  innerRef: null,
  value: null,
};
export function RadioButtonsWrapper({
  children,
  className,
  innerRef,
  label,
  name,
  value,
}) {
  const [state, setState] = useImmer(
    () => ({
      currentValue: value,
      currentName: name,
    })
  );
  const contextValue = useMemo(
    () => ({
      setValue: (newValue) => {
        setState((draftState) => {
          draftState.currentValue = newValue;
        });
      },
      setState,
      state,
    }),
    [setState, state]
  );
  return (
    <RadioButtonsContext.Provider value={contextValue}>
      <div className={joinClassNames(className, 'radio-buttons-wrapper')} ref={innerRef}>
        <fieldset>
          <legend>{label}</legend>
          {children}
        </fieldset>
      </div>
    </RadioButtonsContext.Provider>
  );
}

RadioButtonsWrapper.propTypes = propTypes;
RadioButtonsWrapper.defaultProps = defaultProps;
