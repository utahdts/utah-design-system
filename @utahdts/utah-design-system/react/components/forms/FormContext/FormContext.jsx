// @ts-check
import React from 'react';

/**
 * @template FormContextT
 * @typedef {import('../../../jsDocTypes').FormContextValue<FormContextT>} FormContextValue
 */

/** @template FormContextT */
const FormContext = /** @type {typeof React.createContext<FormContextValue<FormContextT>>} */ (React.createContext)({});
export default FormContext;
