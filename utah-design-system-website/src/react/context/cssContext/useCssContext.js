import { useContext } from 'react';
import { CssContext } from './CssContext';

export default function useCssContext() {
  return useContext(CssContext);
}
