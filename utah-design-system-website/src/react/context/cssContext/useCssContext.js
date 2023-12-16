import { useContext } from 'react';
import { CssContext } from './CssContext';

export function useCssContext() {
  return useContext(CssContext);
}
