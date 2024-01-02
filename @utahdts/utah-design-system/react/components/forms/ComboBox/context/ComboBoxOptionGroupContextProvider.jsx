import { ComboBoxOptionGroupContext } from './ComboBoxOptionGroupContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} props.optionGroupId
 * @returns {import('react').JSX.Element}
 */
export function ComboBoxOptionGroupContextProvider({ children, optionGroupId }) {
  return (
    <ComboBoxOptionGroupContext.Provider value={optionGroupId}>
      {children}
    </ComboBoxOptionGroupContext.Provider>
  );
}
