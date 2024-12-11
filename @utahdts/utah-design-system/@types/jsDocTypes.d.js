/* eslint-disable @stylistic/max-len */

/** @typedef {import('react')} React */
/** @typedef {import ('@utahdts/utah-design-system-header').ChildrenMenuTypes} ChildrenMenuTypes */
/** @typedef {import('@utahdts/utah-design-system-header').MenuItemFunctionUrlAction} MenuItemFunctionUrlAction */
/** @typedef {import('@utahdts/utah-design-system-header').MenuItemUrlAction} MenuItemUrlAction */

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
 * MenuTypes
 * @typedef { 'vertical' | 'horizontal' } MenuTypes
 */

/**
 * SkeletonTypes
 * @typedef { 'skeleton--circle' | 'skeleton--line' | 'skeleton--rectangle' } SkeletonTypes
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
 * DrawerPlacement
 * @typedef {'drawer--right' | 'drawer--left'} DrawerPlacement
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

/** @typedef {MouseEvent | TouchEvent | KeyboardEvent} Event */

// TODO: replace EventAction with import('react').MouseEventHandler<HTMLButtonElement>
/** @typedef {((e: Event) => void)} EventAction */
/** @typedef {((e: Event) => boolean)} EventActionBoolean */

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
 *  @property {TablePaginationType} [pagination]
 *  @property {Record<string, TableSortingRuleType<TableDataT>>} sortingRules
 *  @property {{ allData: TableDataT[], filteredData: TableDataT[] }} tableData
 *  @property {string} tableId this helps avoid `id` collisions in things like TableFilters
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
 *  @property {(sortingRule: TableSortingRuleType<TableDataT>) => void} registerSortingRule
 *  @property {(recordFieldPath: string) => void} unregisterSortingRule
 *  @property {(allData: TableDataT[], filteredData: TableDataT[]) => void} setBodyData
 *  @property {import('use-immer').Updater<TableContextState<TableDataT>>} setState
 *  @property {TableContextState<TableDataT>} state
 * }
 */

/**
 * @typedef TableContextStateFilterValueOptions {
 *  @property {boolean} [exactMatch]
 *  @property {string} [dateRangeDateFormat] the format of the date used in the date range
 *  @property {boolean} [isDateRange] the filter is a date range! ie '2022-10-03~~separator~~2023-01-22'  where begin and end dates are optional but separator is mandatory
 * }
 */
/**
 * @typedef TableContextStateFilterValue {
 *  @property {string | number} value
 *  @property {TableContextStateFilterValueOptions} options
 * }
 */
/**
 * key is recordFieldPath, value is the current filter value
 * @typedef {Record<string, TableContextStateFilterValue>} TableContextStateFilterValueObject
 */

/** @typedef {(value: string) => boolean} TableFilterFunction */

/**
 * For TableFilterX components, these are the options they can store in the Table context
 * to describe how they function.
 * @typedef TableFilterOptions {
 *  @property {boolean} exactMatch - The entered filter value is match exactly with the record data (cased to lower)
 * }
 */

/** @typedef {Record<string, any>} TableRecord */

/**
 * @typedef TableRecordForFiltering {
 *  @property {Record<string, any>} record
 *  @property {Record<string, string>} filterFields
 * }
 */

/**
 * @typedef TablePaginationType {
 *  @property {number} currentPageIndex what page to start on
 *  @property {number} itemsPerPage how many items per page
 * }
 */

/**
 * @typedef TabGroupContextValue {
 *  @property {boolean} isVertical
 *  @property {() => void} navigateNext
 *  @property {() => void} navigatePrevious
 *  @property {(tab: React.RefObject<HTMLButtonElement | null> | null) => void} registerTab
 *  @property {string} selectedTabId
 *  @property {(tabId: string) => void} setSelectedTabId
 *  @property {string} tabGroupId
 *  @property {(tab: React.RefObject<HTMLButtonElement | null> | null) => void} unRegisterTab
 * }
 */

/**
 * @typedef UtahDesignSystemContextBannerWithId {
 *  @property {string} [className]
 *  @property {number} [duration]
 *  @property {string} id
 *  @property {import('react').ReactNode} [icon]
 *  @property {import('react').ReactNode} message
 *  @property {(e: React.MouseEvent | undefined) => void} [onClose]
 *  @property {BannerPlacement} [position]
 *  @property {'small' | 'medium' | 'large'} [size]
 * }
 */

/**
 * @typedef UtahDesignSystemContextBanner {
 *  @property {string} [className]
 *  @property {number} [duration]
 *  @property {string} [id]
 *  @property {import('react').ReactNode} [icon]
 *  @property {import('react').ReactNode} message
 *  @property {(e: React.MouseEvent | undefined) => void} [onClose]
 *  @property {BannerPlacement} [position]
 *  @property {'small' | 'medium' | 'large'} [size]
 * }
 */

/**
 * @typedef UtahDesignSystemDefaultSettings {
 *  @property {number} [bannerDuration]
 *  @property {string} [defaultClassName]
 * }
 */
/**
 * @template TableDataT
 * @typedef {(param: { fieldValueA: any, fieldValueB: any, recordA: TableDataT, recordAIndex: number, recordB: TableDataT, recordBIndex: number, records: TableDataT[] }) => number} TableSortingFunc
 */

/**
 * @template TableDataT
 * @typedef TableSortingRuleType {
 *  @property {string} a11yLabel
 *  @property {TableSortingFunc<TableDataT> | null} customSort
 *  @property {boolean} defaultIsAscending
 *  @property {TableSortingRuleFieldType} fieldType
 *  @property {string} recordFieldPath
 *  @property {(a: {record: TableDataT, recordIndex: number}, b: {record: TableDataT, recordIndex: number}, records: TableDataT[]) => number} [sorter]
 * }
 */

/**
 * @template TableDataT
 * @typedef TableContextStateFilterValues {
 *  @property {Record<string, any> | null} defaultValue
 *  @property {((param: { recordFieldPath: string, value: TableDataT }) => TableDataT) | null} onChange
 *  @property {TableContextStateFilterValueObject} value key=filterPath value=TableContextStateFilterValue
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
 * @typedef CalendarGridValue {
 *  @property {Date} date current "date" object for this month grid (current month fills out around this date)
 *  @property {boolean} isFocusDate matches the date that is currently focused in the UI
 *  @property {boolean} isNextMonth the date belongs to the next month on the calendar
 *  @property {boolean} isPreviousMonth the date belongs to the previous month on the calendar
 *  @property {boolean} isSelectedDate matches the value selected by the user
 *  @property {boolean} isTodayDate matches today's date
 * }
 */

/** @typedef {[CalendarGridValue, CalendarGridValue, CalendarGridValue, CalendarGridValue, CalendarGridValue, CalendarGridValue, CalendarGridValue ]} CalendarGridWeek */

/** @typedef {CalendarGridWeek[]} CalendarGridMonth 4, 5, or 6 weeks */

/**
 * @typedef ComboBoxOptionType {
 *  @property {boolean} [isGroupLabel] some options like group titles are in the list so they can focus but are not filtered nor selectable
 *  @property {boolean} [isHidden] multi-select will "hide" options that have been selected (tags)
 *  @property {string} labelLowerCase
 *  @property {string} label
 *  @property {string} [optionGroupId]
 *  @property {string} value
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
 *  @property {ComboBoxOptionType[]} options the known options
 *  @property {ComboBoxOptionType[]} optionsFiltered the options filtered by the filterValue
 *  @property {ComboBoxOptionType[]} optionsFilteredWithoutGroupLabels group labels are taken out of the mix. they are usually left in so that they are focusable
 *
 *  -- events --
 *  @property {(newValue: string) => void} onChange
 *  @property {() => void} [onClear]
 *  @property {(e: Event, currentFilterValue: string) => boolean} [onKeyUp] return true if the key press was handled by this handler
 *
 *  -- options manipulation --
 *  @property {(option: ComboBoxOptionType) => void} registerOption add a new option
 *  @property {(value: string) => void} unregisterOption remove a known option by its value
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
 * @typedef MultiSelectContextNonStateRef {
 *  @property {HTMLElement | null} comboBoxDivElement the text input of the multi select (for forcing focused)
 *  @property {(HTMLLIElement | null)[]} selectedOptionTagRefs refs to the selected tags elements
 *  @property {HTMLInputElement | null} textInput the textInput used for this multi select's combo box
 * }
 */

/** @typedef {[MultiSelectContextValue, import('use-immer').Updater<MultiSelectContextValue>, import('react').MutableRefObject<MultiSelectContextNonStateRef> | null]} MultiSelectContext */

/**
 * @typedef MultiSelectContextValue {
 *  @property {boolean} clearButtonHasFocus (1 of 3) multi select has focus if any of the three have focus
 *  @property {ComboBoxOptionType[]} comboBoxOptions the known options in the comboBox context nested in the multi-select context
 *  @property {number} focusedValueTagIndex the index of the tag currently having focus; (2 of 3) multi select has focus if any of the three have focus
 *  @property {boolean} isOptionsExpanded ComboBoxContext updates this value to match
 *  @property {string} multiSelectId
 *  @property {((newValues: string[]) => void)} onChange
 *  @property {(() => void)} onClear
 *  @property {Record<string, string>} optionTagClassNames key is the option's `value`; value is the tag className associated with this option to put on its tag (helpful for coloring of tags)
 *  @property {string[]} selectedValues the values selected in the multi-select to show as tags
 *  @property {((selectedValue: string, selectedOption: ComboBoxOptionType) => React.JSX.Element) | null} tagTemplate is there a custom template for tags instead of rendering default tags
 *  @property {boolean} textInputHasFocus (3 of 3) multi select has focus if any of the three have focus
 * }
 */
/** @typedef {(selectedValue: string) => React.JSX.Element} MultiSelectTagTemplate */

/** @typedef {import('use-immer').ImmerHook<RadioButtonGroupContextValue | undefined>} RadioButtonGroupContext */
/**
 * @typedef RadioButtonGroupContextValue {
 *  @property {(newValue: string) => void} onChange the onChange to call when the value changes
 *  @property {string} name name of the radio button inputs to group them together
 *  @property {string | null} value currently selected radio button's value
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
 *  @property {UtahDesignSystemContextBannerWithId[]} banners
 * }
 */

/**
 * Vertical menu links need more options than just a string url
 * @typedef VerticalMenuMenuItemAdditions {
 *  @property {MenuItemUrlAction} [actionUrl] - link url
 *  @property {EventAction} [actionFunction] - onClick function
 *  @property {MenuItemFunctionUrlAction} [actionFunctionUrl] - single page apps render an <a> but call browser push; you should handle cmd click
 * }
 */

/**
 * copied from website types... maybe not correct?
 * @typedef WebsiteMainMenuItem {
 *  @property {string} [id]
 *  @property {string} [link]
 *  @property {string} title
 *  @property {string[]} [parentLinks]
 *  @property {WebsiteMainMenuItem[]} [children]
 *  @property {ChildrenMenuTypes | null} [childrenMenuType]
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

// export everything so that website sees everything
export * from '../index';
