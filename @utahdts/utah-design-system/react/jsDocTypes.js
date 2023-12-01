/* eslint-disable max-len */
// @ts-check

/**
 * @template ImmerHookT
 * @typedef {import('use-immer').ImmerHook<ImmerHookT>} ImmerHook
 */

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
 * BannerPlacement
 * @typedef {'inline' | 'bottom' | 'bottom-left' | 'bottom-right' | 'top' | 'top-left' | 'top-right'} BannerPlacement
 */

/**
 * TableSortingRuleFieldType
 * @typedef {'date' | 'number' | 'string'} TableSortingRuleFieldType
 */

/**
 * WrapInElement
 * @typedef {'div' | 'nav'} WrapInElement
 */

/**
 * @typedef PoorMansTarget {
 *  @property {boolean} checked
 *  @property {string} key
 *  @property {string} type
 *  @property {any} value
 * }
 */

/** @typedef {(MouseEvent | TouchEvent | KeyboardEvent) & {key: string, target: PoorMansTarget}} Event */

/** @typedef {((e: Event) => void)} EventAction */
/** @typedef {((e: Event) => boolean)} EventActionBoolean */

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

/** @typedef {Object.<string, any>} TableRecord */

/**
 * @typedef TableRecordForFiltering {
 *  @property {Object.<string, any>} record
 *  @property {Object.<string, string>} filterFields
 * }
 */

/**
 * @typedef TablePagination {
 *  @property {number} currentPageIndex what page to start on
 *  @property {number} itemsPerPage how many items per page
 * }
 */

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
 * @typedef MenuItem {
 *  @property {string} link
 *  @property {string} pageTitle
 *  @property {string[]} parentLinks
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
 * @typedef TableContextStateFilterValue {
 *  @property {any} value
 *  @property {boolean} exactMatch
 *  @property {any} otherFilterSpecificSettings
 * }
 */
/** @typedef {Object.<string, TableContextStateFilterValue>} TableContextStateFilterValueObject */

/**
 * @template TableDataT
 * @typedef {(param: { recordFieldPath: string, value: TableDataT }) => TableDataT} RecordOnChangeFunc
 */

/**
 * @template TableDataT
 * @typedef TableContextStateFilterValues {
 *  @property {Object.<string, any> | null} defaultValue
 *  @property {((e) => TableDataT) | null} onChange
 *  @property {TableContextStateFilterValueObject} value
 * }
 */
/** @typedef {string} RecordFieldPath */
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

/**
 * @template TableDataT
 * @typedef TableBodyDataRowContextValue {
 *  @property {TableDataT | null} record
 * }
 */

/**
 * @typedef ComboBoxOption {
 *  @property {string} value
 *  @property {string} labelLowerCase
 *  @property {string} label
 * }
*/

/**
 * @typedef RadioButtonGroupContextValue {
 *  @property {(newValue: string) => void} onChange the onChange to call when the value changes
 *  @property {string} name name of the radio button inputs to group them together
 *  @property {string | null} value currently selected radio button's value
 * }
 */
/** @typedef {import('use-immer').ImmerHook<RadioButtonGroupContextValue | undefined>} RadioButtonGroupContext */

/**
 * @typedef ComboBoxContextValue {
 *  -- data --
 *  @property {string} filterValue the value the user is entering on which to filter the options to find a match
 *  @property {boolean} isFilterValueDirty when filter is changed it becomes dirty
 *  @property {boolean} isOptionsExpanded is the options list visible/expanded
 *  @property {string | null} optionValueFocused which option currently has focus; useful for handling text input on blur
 *  @property {string | null} optionValueHighlighted the option matching the filter or user has arrowed
 *  @property {string | null} optionValueSelected which option is chosen by user
 *
 *  -- options --
 *  @property {ComboBoxOption[]} options the known options
 *  @property {ComboBoxOption[]} optionsFiltered the options filtered by the filterValue
 *
 *  -- events --
 *  @property {(newValue: string) => void} onChange
 *  @property {() => void} [onClear]
 *  @property {() => void} [onSubmit]
 *
 *  -- options manipulation --
 *  @property {(option: ComboBoxOption) => void} registerOption add a new option
 *  @property {(value: string) => void} unregisterOption remove a known option by its value
 * }
 */

/** @typedef {[ComboBoxContextValue, import('use-immer').Updater<ComboBoxContextValue>, import('react').MutableRefObject<HTMLInputElement | null>]} ComboBoxContext */

// without this export, `@typedef import` reports this file 'is not a module'... (눈_눈)
export default false;
