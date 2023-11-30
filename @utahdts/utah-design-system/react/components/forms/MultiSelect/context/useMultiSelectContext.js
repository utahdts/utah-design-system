// @ts-check
import { useContext } from 'react';
import { MultiSelectContext } from './MultiSelectContext';

/** @typedef { import('../../../../jsDocTypes').MultiSelectContext} MultiSelectContextType */

/**
 * @return {MultiSelectContextType}
 */
export default function useMultiSelectContext() {
  return useContext(MultiSelectContext);
}
