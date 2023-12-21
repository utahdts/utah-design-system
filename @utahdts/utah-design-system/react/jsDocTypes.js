/* eslint-disable max-len */
// @ts-check

/**
 * @template ImmerHookT
 * @typedef {import('use-immer').ImmerHook<ImmerHookT>} ImmerHook
 */

/**
 * react.Ref<T> is immutable! this version is mutable and follows the same semantics
 * @template MutableRefT
 * @typedef {import('react').RefCallback<MutableRefT> | import('react').MutableRefObject<MutableRefT> | null} MutableRef
 */

// ========== Enums ========== //
/**
 * AriaLiveType
 * @typedef {'assertive' | 'polite'} AriaLiveType
 */

/**
 * ButtonAppearance
 * @typedef {'solid' | 'outlined'} ButtonAppearance
 */

/**
 * ButtonTypes
 * @typedef {'button' | 'reset' | 'submit'} ButtonTypes
 */

/**
 * ComponentColors
 * @typedef { 'primary' | 'secondary' | 'accent' | 'none' } ComponentColors
 */

/**
 * FormElementSizes
 * @typedef { 'small3x' | 'small2x' | 'small1x' | 'small' | 'medium' | 'large' | 'large1x' } FormElementSizes
 */

/**
 * IconButtonAppearance
 * @typedef {'solid' | 'outlined' | 'borderless'} IconButtonAppearance
 */

/**
 * TableSortingRuleFieldType
 * @typedef {'date' | 'number' | 'string'} TableSortingRuleFieldType
 */

/**
 * WrapInElement
 * @typedef {'div' | 'nav'} WrapInElement
 */

// ========== Events ========== //
// TODO: these need made more accurate...
/** @typedef {(MouseEvent | TouchEvent | KeyboardEvent) & {key: string, target: PoorMansTarget}} Event */

/** @typedef {((e: Event) => void)} EventAction */
/** @typedef {((e: Event) => boolean)} EventActionBoolean */

/**
 * @typedef PoorMansTarget {
 *  @property {boolean} checked
 *  @property {string} key
 *  @property {string} type
 *  @property {any} value
 * }
 */

// ========== Table stuff ========== //
/** @typedef {string} RecordFieldPath */

/**
 * @template TableDataT
 * @typedef {(param: { recordFieldPath: string, value: TableDataT }) => TableDataT} RecordOnChangeFunc
 */

/**
 * @template TableDataT
 * @typedef TableBodyDataRowContextValue {
 *  @property {TableDataT | null} record
 * }
 */

/**
 * @template TableDataT
 * @typedef TableContextState {
 *  @property {boolean} currentSortingOrderIsDefault
 *  @property {TableContextStateFilterValues<TableDataT>} filterValues
 *  @property {Object.<string, TableSortingRule<TableDataT>>} sortingRules
 *  @property {{ allData: TableDataT[], filteredData: TableDataT[] }} tableData
 *  @property {((param: { recordFieldPath: RecordFieldPath }) => void) | null} tableSortingOnChange
 *  @property {RecordFieldPath | null} tableSortingFieldPath
 *  @property {RecordFieldPath[] | null} tableSortingFieldPaths
 * }
 */

/**
 * @typedef TableContextStateFilterValue {
 *  @property {any} value
 *  @property {boolean} exactMatch
 *  @property {any} otherFilterSpecificSettings
 * }
 */
/** @typedef {Object.<string, TableContextStateFilterValue>} TableContextStateFilterValueObject */

/**
 * @template TableDataT
 * @typedef TableContextValue {
 *  @property {TableDataT[]} allData
 *  @property {TableDataT[]} filteredData
 *  @property {(sortingRule: TableSortingRule<TableDataT>) => void} registerSortingRule
 *  @property {(recordFieldPath: string) => void} unregisterSortingRule
 *  @property {(allData: TableDataT[], filteredData: TableDataT[]) => void} setBodyData
 *  @property {import('use-immer').Updater<TableContextState<TableDataT>>} setState
 *  @property {TableContextState<TableDataT>} state
 * }
 */

/** @typedef {(value: string) => boolean} TableFilterFunction */

/**
 * For TableFilterX components, these are the options they can store in the Table context
 * to describe how they function.
 * @typedef TableFilterOptions {
 *  @property {boolean} exactMatch - The entered filter value is match exactly with the record data (cased to lower)
 * }
 */

/**
 * The filter's current value in the TableContext
 * @typedef TableFilterValue {
 *  @property {boolean} exactMatch
 *  @property {string} value
 * }
 */

/**
 * @typedef TablePagination {
 *  @property {number} currentPageIndex what page to start on
 *  @property {number} itemsPerPage how many items per page
 * }
 */

/** @typedef {Object.<string, any>} TableRecord */

/**
 * @typedef TableRecordForFiltering {
 *  @property {Object.<string, any>} record
 *  @property {Object.<string, string>} filterFields
 * }
 */

/**
 * @template TableDataT
 * @typedef {(param: { fieldValueA: any, fieldValueB: any, recordA: TableDataT, recordB: TableDataT, records: TableDataT[] }) => number} TableSortingFunc
 */

/**
 * @template TableDataT
 * @typedef TableSortingRule {
 *  @property {string} a11yLabel
 *  @property {TableSortingFunc<TableDataT> | null} customSort
 *  @property {boolean} defaultIsAscending
 *  @property {TableSortingRuleFieldType} fieldType
 *  @property {string} recordFieldPath
 *  @property {(a: TableDataT, b: TableDataT) => number} [sorter]
 * }
 */

/**
 * @template TableDataT
 * @typedef TableContextStateFilterValues {
 *  @property {Object.<string, any> | null} defaultValue
 *  @property {((e) => TableDataT) | null} onChange
 *  @property {TableContextStateFilterValueObject} value
 * }
 */

// ========== Objects ========== //
/**
 * @typedef Address {
 *  @property {string} city
 *  @property {string} state ie UT (usually not fully spelled out)
 *  @property {string} streetAddress1
 *  @property {string} [streetAddress2]
 *  @property {string} zipCode
 * }
 */

/**
 * @typedef ComboBoxOption {
 *  @property {boolean} [isGroupLabel] some options like group titles are in the list so they can focus but are not filtered nor selectable
 *  @property {boolean} [isHidden] multi-select will "hide" options that have been selected (tags)
 *  @property {string} labelLowerCase
 *  @property {string} label
 *  @property {string} [optionGroupId]
 *  @property {string} value
 * }

/**
 * These are items that don't get updated with state
 * @typedef ComboBoxContextNonStateRef {
 *  @property {HTMLInputElement | null} textInput the textInput used for this combo box
 * }
 */

/**
 * @typedef {[ComboBoxContextValue, import('use-immer').Updater<ComboBoxContextValue>, import('react').MutableRefObject<ComboBoxContextNonStateRef>]} ComboBoxContext
 */

/**
/**
 * the current comb box option group's id
 * @typedef {string} ComboBoxOptionGroupContextValue
 */

/**
 * @typedef ComboBoxContextValue {
 *  -- data --
 *  @property {string} filterValue the value the user is entering on which to filter the options to find a match
 *  @property {boolean} isFilterValueDirty when filter is changed it becomes dirty
 *  @property {boolean} isOptionsExpanded is the options list visible/expanded
 *  @property {boolean} isValueClearedOnSelection after selection, is the value cleared so it appears to not be selected (multi-select uses this)
 *  @property {string | null} optionValueFocused which option currently has focus; useful for handling text input on blur
 *  @property {string | null} optionValueFocusedId which option DOM element has focus
 *  @property {string | null} optionValueHighlighted the option matching the filter or user has arrowed
 *  @property {string | null} optionValueSelected which option is chosen by user
 *
 *  -- options --
 *  @property {ComboBoxOption[]} options the known options
 *  @property {ComboBoxOption[]} optionsFiltered the options filtered by the filterValue
 *  @property {ComboBoxOption[]} optionsFilteredWithoutGroupLabels group labels are taken out of the mix. they are usually left in so that they are focusable
 *
 *  -- events --
 *  @property {(newValue: string) => void} onChange
 *  @property {() => void} [onClear]
 *  @property {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp] return true if the key press was handled by this handler
 *  @property {() => void} [onSubmit]
 *
 *  -- options manipulation --
 *  @property {(option: ComboBoxOption) => void} registerOption add a new option
 *  @property {(value: string) => void} unregisterOption remove a known option by its value
 * }
*/

/**
 * @template FormStateT
 * @typedef FormContextValue {
 *  @property {({e, fieldPath, value}: {e?: Event, fieldPath: string, value: any}) => void} [onChange] a change triggered on a field; the field must always supply a new value
 *  @property {(e?: Event) => void} [onSubmit] submit the form
 *  @property {FormStateT} [state] current values of all the form elements
 *  @property {import('use-immer').Updater<FormStateT>} [setState] current values of all the form elements
 * }
*/

/**
 * @typedef MenuItem {
 *  @property {string} link
 *  @property {string} pageTitle
 *  @property {string[]} parentLinks
 * }
 */

/** @typedef MultiSelectContextNonStateRef {
 *  @property {HTMLElement | null} comboBoxDivElement the text input of the multi select (for forcing focused)
 *  @property {(HTMLDivElement | null)[]} selectedOptionTagRefs refs to the selected tags elements
 *  @property {HTMLInputElement | null} textInput the textInput used for this multi select's combo box
 * } */

/** @typedef {[MultiSelectContextValue, import('use-immer').Updater<MultiSelectContextValue>, import('react').MutableRefObject<MultiSelectContextNonStateRef>]} MultiSelectContext */

/**
 * @typedef MultiSelectContextValue {
 *  @property {boolean} clearButtonHasFocus (1 of 3) multi select has focus if any of the three have focus
 *  @property {ComboBoxOption[]} comboBoxOptions the known options in the comboBox context nested in the multi-select context
 *  @property {number} focusedValueTagIndex the index of the tag currently having focus; (2 of 3) multi select has focus if any of the three have focus
 *  @property {boolean} isOptionsExpanded ComboBoxContext updates this value to match
 *  @property {string} multiSelectId
 *  @property {((newValues: string[]) => void)} onChange
 *  @property {(() => void)} onClear
 *  @property {string[]} selectedValues the values selected in the multi-select to show as tags
 *  @property {((selectedValue: string, selectedOption: ComboBoxOption) => JSX.Element) | null} tagTemplate is there a custom template for tags instead of rendering default tags
 *  @property {boolean} textInputHasFocus (3 of 3) multi select has focus if any of the three have focus
 * }
*/
/** @typedef {(selectedValue: string) => JSX.Element} MultiSelectTagTemplate */

/** @typedef {import('use-immer').ImmerHook<RadioButtonGroupContextValue | undefined>} RadioButtonGroupContext */
/**
 * @typedef RadioButtonGroupContextValue {
 *  @property {(newValue: string) => void} onChange the onChange to call when the value changes
 *  @property {string} name name of the radio button inputs to group them together
 *  @property {string | null} value currently selected radio button's value
 * }
 */

/**
 * @template FormContextT
 * @template ValueT
 * @typedef useFormContextInputResult {
 *  @property {EventAction} [onChange]
 *  @property {EventAction} [onClear]
 *  @property {() => void} [onSubmit]
 *  @property {ValueT} [value]
 *  @property {EventAction} onFormKeyUp
 *  @property {import('use-immer').Updater<FormContextT>} [setState] current values of all the form elements
 *  @property {FormContextT} [state]
 * }
 */

/**
 * @typedef UtahDesignSystemContextAria {
 *  @property {string[]} assertiveMessages
 *  @property {string[]} politeMessages
 * }
 */

/**
 * @typedef UtahDesignSystemContextValue {
 *  @property {UtahDesignSystemContextAria} ariaLive
 * }
 */

// without this export, `@typedef import` reports this file 'is not a module'... (눈_눈)
export default false;
