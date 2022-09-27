/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useImmer } from 'use-immer';
import joinClassNames from '../../util/joinClassNames';
import setValueAtPath from '../../util/state/setValueAtPath';
import FormContext from './FormContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  // key/value pairs of data, where the key is the `id` of the nested form components
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,

  // should be a "setState" compliant state setter
  setState: PropTypes.func,
  state: PropTypes.shape({}),
};
const defaultProps = {
  className: null,
  onChange: null,
  onSubmit: null,
  setState: null,
  state: null,
};

let nextFormId = 0;

function Form({
  children,
  className,
  onChange,
  onSubmit,
  setState,
  state,
  ...rest
}) {
  const [formState] = useImmer(() => {
    nextFormId += 1;
    return {
      formId: nextFormId,
      originalState: state,
      validationStyle: 'BLURRED',
    };
  });

  // use memo so that context's state object pointer doesn't change every render
  const contextValue = useMemo(
    () => ({
      formId: formState.formId,
      dirtyIds: {}, // id: oldValue  ; null object for not dirty
      validationErrors: {}, // id:[errors] ; null object for isValid
      onChange: ({ e, id }) => {
        if (onChange) {
          onChange(id, e.target.value);
        }
        if (setState) {
          setState(produce((draftState) => {
            setValueAtPath({ object: draftState, path: id, value: e.target.value });
          }));
        }
      },
      onSubmit: () => {
        // calculate validation errors
        if (onSubmit) {
          onSubmit({
            validationErrors: null,
            state,
          });
        }
      },
      state,
    }),
    [formState, state]
  );

  return (
    <FormContext.Provider value={contextValue}>
      <form className={joinClassNames('form', className)} id={`form-${formState.formId}`} {...rest}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
