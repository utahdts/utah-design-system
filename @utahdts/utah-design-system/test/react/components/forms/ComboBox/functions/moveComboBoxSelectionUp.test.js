// @ts-check

import { describe, expect, test } from 'vitest';
import { moveComboBoxSelectionUp } from '../../../../../../react/components/forms/ComboBox/functions/moveComboBoxSelectionUp';

/** @typedef {import('../../../../../../react/jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

describe('moveComboBoxSelectionUp', () => {
  test(
    'nothing selected : defaults to last',
    () => {
      const options = [
        { label: 'Test 1', value: 'test-1', labelLowerCase: 'test 1' },
        { label: 'Test 2', value: 'test-2', labelLowerCase: 'test 2' },
        { label: 'Test 3', value: 'test-3', labelLowerCase: 'test 3' },
      ];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: '',
        isOptionsExpanded: false,
        options,
        optionsFiltered: options,
        registerOption: () => { },
        selectedOptionValue: null,
        unregisterOption: () => { },
      };

      moveComboBoxSelectionUp(context);

      expect(context.selectedOptionValue).toBe('test-3');
      expect(context.isOptionsExpanded).toBe(true);
    }
  );

  test(
    'second selected -> first selected',
    () => {
      const options = [
        { label: 'Test 1', value: 'test-1', labelLowerCase: 'test 1' },
        { label: 'Test 2', value: 'test-2', labelLowerCase: 'test 2' },
        { label: 'Test 3', value: 'test-3', labelLowerCase: 'test 3' },
      ];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: '',
        isOptionsExpanded: true,
        options,
        optionsFiltered: options,
        registerOption: () => { },
        selectedOptionValue: 'test-2',
        unregisterOption: () => { },
      };

      moveComboBoxSelectionUp(context);

      expect(context.selectedOptionValue).toBe('test-1');
    }
  );

  test(
    'if !opened, opens and doesn\'t move',
    () => {
      const options = [
        { label: 'Test 1', value: 'test-1', labelLowerCase: 'test 1' },
        { label: 'Test 2', value: 'test-2', labelLowerCase: 'test 2' },
        { label: 'Test 3', value: 'test-3', labelLowerCase: 'test 3' },
      ];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: '',
        isOptionsExpanded: false,
        options,
        optionsFiltered: options,
        registerOption: () => { },
        selectedOptionValue: 'test-2',
        unregisterOption: () => { },
      };

      moveComboBoxSelectionUp(context);

      expect(context.selectedOptionValue).toBe('test-2');
    }
  );

  test(
    'wrap',
    () => {
      const options = [
        { label: 'Test 1', value: 'test-1', labelLowerCase: 'test 1' },
        { label: 'Test 2', value: 'test-2', labelLowerCase: 'test 2' },
        { label: 'Test 3', value: 'test-3', labelLowerCase: 'test 3' },
      ];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: '',
        isOptionsExpanded: true,
        options,
        optionsFiltered: options,
        registerOption: () => { },
        selectedOptionValue: 'test-1',
        unregisterOption: () => { },
      };

      moveComboBoxSelectionUp(context);

      expect(context.selectedOptionValue).toBe('test-3');
    }
  );

  test(
    'single item',
    () => {
      const options = [
        { label: 'Test 1', value: 'test-1', labelLowerCase: 'test 1' },
      ];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: '',
        isOptionsExpanded: true,
        options,
        optionsFiltered: options,
        registerOption: () => { },
        selectedOptionValue: 'test-1',
        unregisterOption: () => { },
      };

      moveComboBoxSelectionUp(context);

      expect(context.selectedOptionValue).toBe('test-1');
    }
  );

  test(
    'no items',
    () => {
      const options = [];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: '',
        isOptionsExpanded: true,
        options,
        optionsFiltered: options,
        registerOption: () => { },
        selectedOptionValue: 'test-1',
        unregisterOption: () => { },
      };

      moveComboBoxSelectionUp(context);

      expect(context.selectedOptionValue).toBeNull();
    }
  );
});
