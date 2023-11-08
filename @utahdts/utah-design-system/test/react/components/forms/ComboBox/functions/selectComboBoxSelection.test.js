// @ts-check

import {
  describe,
  expect,
  test,
  vitest,
} from 'vitest';
import { selectComboBoxSelection } from '../../../../../../react/components/forms/ComboBox/functions/selectComboBoxSelection';

/** @typedef {import('../../../../../../react/jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */

describe('selectComboBoxSelection', () => {
  test(
    'no error if no submit method trying to be called',
    () => {
      const options = [
        { label: 'Test 1', value: 'test-1', labelLowerCase: 'test 1' },
        { label: 'Test 2', value: 'test-2', labelLowerCase: 'test 2' },
        { label: 'Test 3', value: 'test-3', labelLowerCase: 'test 3' },
      ];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: 'some value to be cleared',
        isOptionsExpanded: false,
        options,
        optionsFiltered: options,
        registerOption: /** @type {any} */ (null),
        selectedOptionValue: 'some other value to also be cleared',
        unregisterOption: /** @type {any} */ (null),
      };

      const preContext = JSON.parse(JSON.stringify(context));
      selectComboBoxSelection(context, undefined);
      expect(context).toStrictEqual(preContext);
    }
  );

  test(
    'call submit method',
    () => {
      const options = [
        { label: 'Test 1', value: 'test-1', labelLowerCase: 'test 1' },
        { label: 'Test 2', value: 'test-2', labelLowerCase: 'test 2' },
        { label: 'Test 3', value: 'test-3', labelLowerCase: 'test 3' },
      ];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: 'some value to be cleared',
        isOptionsExpanded: false,
        options,
        optionsFiltered: options,
        registerOption: /** @type {any} */ (null),
        selectedOptionValue: 'some other value to also be cleared',
        unregisterOption: /** @type {any} */ (null),
      };

      const preContext = JSON.parse(JSON.stringify(context));
      const onSubmit = vitest.fn();

      selectComboBoxSelection(context, onSubmit);

      expect(context).toStrictEqual(preContext);
      expect(onSubmit).toHaveBeenCalledTimes(1);
    }
  );

  test(
    'if opened, select highlighted value',
    () => {
      const options = [
        { label: 'Test 1', value: 'test-1', labelLowerCase: 'test 1' },
        { label: 'Test 2', value: 'test-2', labelLowerCase: 'test 2' },
        { label: 'Test 3', value: 'test-3', labelLowerCase: 'test 3' },
      ];
      /** @type {ComboBoxContextValue} */
      const context = {
        filterValue: 'some value that is not a real value',
        isOptionsExpanded: true,
        options,
        optionsFiltered: options,
        registerOption: /** @type {any} */ (null),
        selectedOptionValue: 'test-3',
        unregisterOption: /** @type {any} */ (null),
      };

      const onSubmit = vitest.fn();

      selectComboBoxSelection(context, onSubmit);

      expect(context.filterValue).toStrictEqual('Test 3');
      expect(context.isOptionsExpanded).toStrictEqual(false);
      expect(onSubmit).toHaveBeenCalledTimes(0);
    }
  );
});
