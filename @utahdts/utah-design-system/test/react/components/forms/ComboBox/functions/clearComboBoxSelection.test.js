// @ts-check

import { describe, expect, test } from 'vitest';
import { clearComboBoxSelection } from '../../../../../../react/components/forms/ComboBox/functions/clearComboBoxSelection';

/** @typedef {import('../../../../../../react/jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

describe('clearComboBoxSelection', () => {
  test(
    'clear values',
    () => {
      const options = [
        { label: 'Test 1', value: 'test-1', labelLowerCase: 'test 1' },
        { label: 'Test 2', value: 'test-2', labelLowerCase: 'test 2' },
        { label: 'Test 3', value: 'test-3', labelLowerCase: 'test 3' },
      ];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: 'some value to be cleared',
        isOptionsExpanded: true,
        options,
        optionsFiltered: options,
        registerOption: () => { },
        selectedOptionValue: 'some other value to also be cleared',
        unregisterOption: () => { },
      };

      clearComboBoxSelection(context);

      expect(context.filterValue).toBe('');
      expect(context.selectedOptionValue).toBe('');
      expect(context.isOptionsExpanded).toBe(false);
    }
  );
});
