// @ts-check

/**
 * @template ImmerHookT
 * @typedef {import('use-immer').ImmerHook<ImmerHookT>} ImmerHook
 */

/**
 * ButtonAppearance
 * @typedef {'solid' | 'outline'} ButtonAppearance
 */

/**
 * ButtonTypes
 * @typedef {'button' | 'reset' | 'submit'} ButtonTypes
 */

/**
 * IconButtonAppearance
 * @typedef {'solid' | 'outlined' | 'borderless'} IconButtonAppearance
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
 * AriaLiveType
 * @typedef {'assertive' | 'polite'} AriaLiveType
 */

/**
 * @typedef PoorMansTarget {
 *  @property {boolean} checked
 *  @property {string} key
 *  @property {string} type
 *  @property {any} value
 * }
 * @typedef {(MouseEvent | TouchEvent | KeyboardEvent) & {key: string, target: PoorMansTarget}} Event
 * @typedef {((e: Event) => void)} EventAction
 *
 * @typedef {(value: string) => boolean} TableFilterFunction
 *
 * For TableFilterX components, these are the options they can store in the Table context
 * to describe how they function.
 * @typedef TableFilterOptions {
 *  @property {boolean} exactMatch - The entered filter value is match exactly with the record data (cased to lower)
 * }
 *
 * The filter's current value in the TableContext
 * @typedef TableFilterValue {
 *  @property {boolean} exactMatch
 *  @property {string} value
 * }
 *
 * @typedef {Object.<string, any>} TableRecord
 *
 * @typedef TableRecordForFiltering {
 *  @property {Object.<string, any>} record
 *  @property {Object.<string, string>} filterFields
 * }
 *
 * @typedef Address {
 *  @property {string} city
 *  @property {string} state ie UT (usually not fully spelled out)
 *  @property {string} streetAddress1
 *  @property {string} [streetAddress2]
 *  @property {string} zipCode
 * }
 *
 * @typedef MenuItem {
 *  @property {string} link
 *  @property {string} pageTitle
 *  @property {string[]} parentLinks
 * }
 */

/** @typedef {Object.<string, any>} FormContextState {} */

/**
 * @typedef FormContextValue {
 *  @property {Object.<string, any>} dirtyIds
 *  @property {string} formId
 *  @property {({e, id, newValue}: {e: Event, id: string, newValue: any}) => void} onChange
 *  @property {() => void} onSubmit
 *  @property {Object.<string, string[]> | null} validationErrors
 *  @property {FormContextState} state
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
