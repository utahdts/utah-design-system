/* eslint-disable max-len */

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
 * IconFunc
 * @typedef {(props: {className?: string, altText?: string}) => React.ReactNode} IconFunc
 */

/**
 * BannerPlacement
 * @typedef {'inline' | 'bottom' | 'bottom-left' | 'bottom-right' | 'top' | 'top-left' | 'top-right'} BannerPlacement
 */

/**
 * these match the popper's position options
 * PopupPlacement
 * @typedef {'auto' | 'auto-start' | 'auto-end' |
 *   'bottom' | 'bottom-start' | 'bottom-end' |
 *    'left' | 'left-start' | 'left-end' |
 *    'right' | 'right-start' | 'right-end' |
 *    'top' | 'top-start' | 'top-end'
 * } PopupPlacement
 */

/**
 * TableSortingRuleFieldType
 * @typedef {'date' | 'number' | 'string'} TableSortingRuleFieldType
 */

/**
 * WrapInElement
 * @typedef {'div' | 'nav'} WrapInElement
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
 *  @property {number} pageSize how many items per page
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
 *  @property {({e, fieldPath, value}: {e?: React.ChangeEvent, fieldPath: string, value: any}) => void} onChange a change triggered on a field; the field must always supply a new value
 *  @property {React.ChangeEventHandler<HTMLElement>} onSubmit submit the form
 *  @property {FormStateT} state current values of all the form elements
 *  @property {import('use-immer').Updater<FormStateT>} setState current values of all the form elements
 * }
*/

/**
 * @template FormContextT
 * @template ValueT
 * @template HTMLElementT
 * @typedef useFormContextInputResult {
 *  @property {React.ChangeEventHandler<HTMLElementT>} [onChange]
 *  @property {React.UIEventHandler<HTMLElementT>} [onClear]
 *  @property {React.ChangeEventHandler<HTMLElementT>} [onSubmit]
 *  @property {ValueT} [value]
 *  @property {React.KeyboardEventHandler} onFormKeyUp
 *  @property {import('use-immer').Updater<FormContextT>} [setState] current values of all the form elements
 *  @property {FormContextT} [state]
 * }
 */

/**
 * @typedef UtahDesignSystemContextBanner
 *  @property {string} [className]
 *  @property {number} [duration]
 *  @property {string} id
 *  @property {React.ReactNode} [icon]
 *  @property {React.ReactNode} message
 *  @property {(e: React.MouseEvent | undefined) => void} [onClose]
 *  @property {BannerPlacement} position
 */

/**
 * @typedef UtahDesignSystemDefaultSettings
 * @property {number} [bannerDuration]
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
 *  @property {UtahDesignSystemContextBanner[]} banners
 * }
 */

/**
 * @typedef TabGroupContextValue {
 *  @property {string} tabGroupId
 *  @property {string} selectedTabId
 *  @property {(tabId: string) => void} setSelectedTabId
 * }
 */

/**
 * @template TableDataT
 * @typedef {(param: { fieldValueA: any, fieldValueB: any, recordA: TableDataT, recordAIndex: number, recordB: TableDataT, recordBIndex: number, records: TableDataT[] }) => number} TableSortingFunc
 */

/**
 * @template TableDataT
 * @typedef TableSortingRule {
 *  @property {string} a11yLabel
 *  @property {TableSortingFunc<TableDataT> | null} customSort
 *  @property {boolean} defaultIsAscending
 *  @property {TableSortingRuleFieldType} fieldType
 *  @property {string} recordFieldPath
 *  @property {(a: {record: TableDataT, recordIndex: number}, b: {record: TableDataT, recordIndex: number}, records: TableDataT[]) => number} [sorter]
 * }
 */

/**
 * @typedef TableContextStateFilterValue {
 *  @property {any} value
 *  @property {boolean} exactMatch
 *  @property {any} [otherFilterSpecificSettings]
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
 *  @property {(({ recordFieldPath, value }: { recordFieldPath: string, value: TableDataT }) => TableDataT) | null} onChange
 *  @property {TableContextStateFilterValueObject} value
 * }
 */
/** @typedef {string} RecordFieldPath */
/**
 * @template TableDataT
 * @typedef TableContextState {
 *  @property {boolean} currentSortingOrderIsDefault
 *  @property {TableContextStateFilterValues<TableDataT>} filterValues
 *  @property {TablePagination} [pagination]
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
 *  @property {(TableDataT & Object.<string, any>) | null} record
 * }
 */

/**
 * @typedef ComboBoxOption {
 *  @property {boolean} [isGroupLabel] some options like group titles are in the list so they can focus but are not filtered nor selectable
 *  @property {string} labelLowerCase
 *  @property {string} label
 *  @property {string} [optionGroupId]
 *  @property {string} value
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
 *  @property {() => void} [onSubmit]
 *
 *  -- options manipulation --
 *  @property {(option: ComboBoxOption) => void} registerOption add a new option
 *  @property {(value: string) => void} unregisterOption remove a known option by its value
 * }
*/

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
 * copied from website types... maybe not correct?
 * @typedef WebsiteMainMenuItem {
 *  @property {string} [id]
 *  @property {string} [link]
 *  @property {string} title
 *  @property {string[]} [parentLinks]
 *  @property {WebsiteMainMenuItem[]} [children]
 *  @property {boolean} [isSelected]
 *  @property {boolean} [isAlternatePath] there are more than one menu paths to this menu item, and this one is no the "source of truth"
 * }
 */

/**
 * copied from website types... plus titleTag props... maybe not correct?
 * @typedef WebsiteMainMenu {
 *  @property {WebsiteMainMenuItem[]} [children]
 *  @property {string} header
 *  @property {string} id
 *  @property {WebsiteMainMenuItem[]} menuItems
 *  @property {boolean} [isSelected]
 *  @property {string[]} [parentLinks]
 *  @property {string} [titleTagName]
 *  @property {string} [titleTagClassName]
 * }
 */

/**
 * @typedef HierarchyNode {
 *  @property {HierarchyNode[]} children
 *  @property {number} level
 *  @property {Element} node
 * }
 */

// without this export, `@typedef import` reports this file 'is not a module'... (눈_눈)
export default false;
