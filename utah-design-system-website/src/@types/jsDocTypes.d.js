/* eslint-disable @stylistic/max-len */

/**
 * @template UpdaterT
 * @typedef {import('use-immer').Updater<UpdaterT>} Updater
 */

/** @typedef {import('@utahdts/utah-design-system').BannerPlacement} BannerPlacement */
/** @typedef {import('@utahdts/utah-design-system').ButtonAppearance} ButtonAppearance */
/** @typedef {import('@utahdts/utah-design-system').ButtonTypes} ButtonTypes */
/** @typedef {import('@utahdts/utah-design-system').DrawerPlacement} DrawerPlacement */
/** @typedef {import('@utahdts/utah-design-system').ComponentColors} ComponentColors */
/** @typedef {import('@utahdts/utah-design-system').FormElementSizes} FormElementSizes */
/** @typedef {import('@utahdts/utah-design-system').IconButtonAppearance} IconButtonAppearance */
/** @typedef {import('@utahdts/utah-design-system').WrapInElement} WrapInElement */
/** @typedef {import('@utahdts/utah-design-system').skeletonTypes} skeletonTypes */
/** @typedef {import('@utahdts/utah-design-system-header').ChildrenMenuTypes} ChildrenMenuTypes */

/** @typedef {import('@utahdts/utah-design-system-header').PopupPlacement} PopupPlacement */

// ========== Rename Types ========== //
/**
 * PageUrl - it is an enum, but listing ALL the individual pageUrls and keeping it up to date is impossible
 * @typedef {string} PageUrl
 */

// ========== Enums ========== //
/**
 * ColorInfo
 * @typedef {{ hexColor: string, isLight: boolean, title: string }} ColorInfo
 */

/**
 * ColorRating
 * @typedef {'AA' | 'AAA' | 'X'} ColorRating
 */

/**
 * CSS_VARIABLES_KEYS
 * 'selectedColorPicker' is a member just so an object can have a key of that value
 * @typedef { '--primary-color' | '--primary-color-dark' | '--primary-color-light' | '--gray-on-primary-color' | '--secondary-color' | '--secondary-color-dark' | '--secondary-color-light' | '--gray-on-secondary-color' | '--accent-color' | '--accent-color-dark' | '--accent-color-light' | '--gray-on-accent-color' | '--gray-color' | 'selectedColorPicker'} CSS_VARIABLES_KEYS
 */
/**
 * LayoutTemplate
 * @typedef {'documentation-template' | 'landing-template'} LayoutTemplate
 */

/**
 * NamedMenus
 * @typedef {'main-menu' | 'secondary-menu-guidelines' | 'secondary-menu-library' | 'secondary-menu-resources'} NamedMenus
 */

/**
 * DocumentationTypes
 * @typedef {'CSS' | 'Props'} DocumentationTypes
 */

/**
 * WebsiteMainMenuKey
 * @typedef { 'menuMain' | 'menuGuidelinesSecondary' | 'menuLibraryComponentsSecondary' | 'menuLibraryPatternsSecondary' | 'menuResourcesSecondary' } WebsiteMainMenuKey
 */

/**
 * @typedef AccordionExamplePropsShape {
 *  @property {string} children
 *  @property {string} className
 *  @property {string} contentClassName
 *  @property {string} headerClassName
 *  @property {string} headerContent
 *  @property {number} headingLevel
 *  @property {boolean} isOpen
 * }
 */

/**
 * @typedef AppContextValue {
 *  @property {Record<string, WebsiteMainMenu>} allMenus
 *  @property {Record<string, Page>} pages
 *  @property {Record<string, PageUrl>} pageUrls
 *  @property {AppState} appState
 *  @property {Updater<AppState>} setAppState
 * }
 */

/**
 * @typedef AppState {
 *  @property {boolean} isColorPickerShown
 * }
 */

/**
 * @typedef BadgesExamplePropsShape {
 *  @property {string} children
 *  @property {string} className
 *  @property {string} title
 * }
 */

/**
 * @typedef BannerExamplePropsShape {
 *  @property {string} className
 *  @property { 'banner--success' | 'banner--danger' | 'banner--info' } color
 *  @property {string} icon
 *  @property {string} message
 *  @property {BannerPlacement} position
 *  @property {'small' | 'medium' | 'large'} size
 * }
 */

/**
 * @typedef ButtonExamplePropsShape {
 *  @property {ButtonAppearance} appearance
 *  @property {boolean} isBusy
 *  @property {string} className
 *  @property {ComponentColors} color
 *  @property {boolean} isDisabled
 *  @property {string} iconLeft
 *  @property {string} iconRight
 *  @property {string} id
 *  @property {FormElementSizes} size
 *  @property {string} title
 *  @property {ButtonTypes} type
 * }
 */

/**
 * @typedef CharacterCountExamplePropsShape {
 *  @property {string} className
 *  @property {string} id
 *  @property {string} maxLength
 *  @property {string} text
 * }
 */

/**
 * @typedef CheckboxExamplePropsShape {
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {string} id
 *  @property {boolean} isDisabled
 *  @property {string} label
 *  @property {boolean} value
 * }
 */

/**
 * @typedef ComboBoxExamplePropsShape {
 *  @property {boolean} allowCustomEntry
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {string} id
 *  @property {boolean} isClearable
 *  @property {boolean} isDisabled
 *  @property {boolean} isRequired
 *  @property {string} label
 *  @property {string} value
 * }
 */

/**
 * @typedef ConfirmationButtonExamplePropsShape {
 *  @property {ButtonAppearance} appearance
 *  @property {boolean} isBusy
 *  @property {string} className
 *  @property {ComponentColors} color
 *  @property {ComponentColors} confirmationColor
 *  @property {boolean} isDisabled
 *  @property {string} id
 *  @property {string} promptChildren
 *  @property {FormElementSizes} size
 *  @property {string} title
 *  @property {ButtonTypes} type
 * }
 */

/**
 * @typedef DateInputExamplePropsShape {
 *  @property {string} className
 *  @property {string} dateFormat
 *  @property {string} errorMessage
 *  @property {boolean} hasCalendarPopup
 *  @property {string} id
 *  @property {boolean} isClearable
 *  @property {boolean} isDisabled
 *  @property {boolean} isRequired
 *  @property {string} label
 *  @property {string} placeholder
 *  @property {boolean} showCalendarTodayButton
 *  @property {string} value
 * }
 */

/**
 * @typedef DrawerExamplePropsShape {
 * @property {string} className
 * @property {boolean} closeOnEsc
 * @property {string} title
 * @property {string} content
 * @property {DrawerPlacement} position
 * @property {boolean} showCloseButton
 * }
 */

/**
 * @typedef FileInputExamplePropsShape {
 *  @property {string} acceptedFileTypes
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {string} hint
 *  @property {string} id
 *  @property {boolean} isDisabled
 *  @property {boolean} isRequired
 *  @property {string} label
 *  @property {boolean} multiple
 * }
 */

/** @typedef {Record<CSS_VARIABLES_KEYS, string>} CssContextState */

/**
 * @typedef CssContextValue {
 *  @property {CssContextState} cssState
 *  @property {Updater<CssContextState>} setCssState
 * }
 */

/**
 * @typedef IconButtonExampleProps {
 *  @property {IconButtonAppearance} appearance
 *  @property {'primary' | 'secondary' | 'accent' | 'none'} color
 *  @property {string} iconCssClass
 *  @property {string} id
 *  @property {boolean} isDisabled
 *  @property {'small1x' | 'small' | 'medium' | 'large' | 'large1x'} size
 *  @property {string} title
 * }
 */

/**
 * @typedef ModalExamplePropsShape {
 * @property {string} className
 * @property {string} title
 * @property {string} content
 * @property {string} size
 * @property {boolean} showCloseButton
 * @property {boolean} closeOnEsc
 * }
 */

/**
 * @typedef MultiSelectExamplePropsShape {
 *  @property {boolean} allowCustomEntry
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {string} id
 *  @property {boolean} isClearable
 *  @property {boolean} isDisabled
 *  @property {boolean} isRequired
 *  @property {string} label
 *  @property {string[]} values the currently selected/tagged option values
 * }
 */

/**
 * @typedef Page {
 *  @property {() => import('react').JSX.Element} content
 *  @property {string[]} [legacyLinks] old links for this component that now redirect to link
 *  @property {string} link !! when this changes, put the old value in legacyLinks !!
 *  @property {NamedMenus} [menuSecondary]
 *  @property {string} pageTitle
 *  @property {LayoutTemplate} template
 * }
 */

/**
 * @typedef PaginationExamplePropsShape {
 *  @property {string} className
 *  @property {string} id
 *  @property {string} itemsPerPage
 *  @property {string} totalNumberItems
 *  @property {string} value
 *  @property {WrapInElement} wrapInElement
 * }
 */

/**
 * @typedef PopupsExamplePropsShape {
 *  @property {boolean} hasCloseButton
 *  @property {boolean} isVisible
 *  @property {PopupPlacement} placement
 *  @property {'onClick' | 'onHover'} popupType
 * }
 */

/**
 * @typedef RadioButtonExamplePropsShape {
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {string} id
 *  @property {boolean} isDisabled
 *  @property {boolean} isRequired
 *  @property {string} label
 *  @property {string} value
 * }
 */

/**
 * @typedef SelectExamplePropsShape {
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {string} id
 *  @property {boolean} isClearable
 *  @property {boolean} isDisabled
 *  @property {boolean} isRequired
 *  @property {string} label
 *  @property {string} value
 * }
 */

/**
 * @typedef SpinnersExamplePropsShape {
 *  @property {string} className
 *  @property {string} id
 *  @property {string} label
 *  @property {string} size
 *  @property {string} strokeWidth
 *  @property {string} value
 * }
 */

/**
 * @typedef SkeletonExamplePropsShape {
 *  @property {string} className
 *  @property {skeletonTypes} type
 * }
 */

/**
 * @typedef SwitchExamplePropsShape {
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {string} icon
 *  @property {string} id
 *  @property {boolean} isDisabled
 *  @property {string} label
 *  @property {string} labelOff
 *  @property {string} labelOn
 *  @property {string} size
 *  @property {boolean} value
 *  @property {string} width
 * }
 */

/**
 * @typedef TabGroupExamplePropsShape {
 *  @property {boolean} isVertical
 *  @property {string} panelA
 *  @property {string} panelB
 *  @property {string} selectedTab
 *  @property {string} tabA
 *  @property {string} tabB
 * }
 */

/**
 * @typedef TableExamplePropsShape {
 *  @property {string} className
 *  @property {string} id
 *  @property {boolean} isFiltering
 *  @property {boolean} isPaginating
 *  @property {boolean} isSorting
 * }
 */

/**
 * @typedef TagExampleBasePropsShape
 *  @property {string} className
 *  @property {string} color
 *  @property {boolean} isDisabled
 *  @property {string} iconLeft
 *  @property {string} iconRight
 *  @property {string} id
 *  @property {FormElementSizes} size
 *  @property {string} title
 */
/** @typedef {TagExampleBasePropsShape & {isSelected: boolean}} TagExampleClickablePropsShape */
/** @typedef {TagExampleBasePropsShape & {isClearable: boolean}} TagExampleNonClickablePropsShape */
/**
 * @typedef TagExamplePropsShape {
 *  @property {TagExampleClickablePropsShape} clickable
 *  @property {TagExampleNonClickablePropsShape} nonClickable
 * }
 */

/**
 * @typedef TextAreaExamplePropsShape {
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {string} id
 *  @property {boolean} isClearable
 *  @property {boolean} isDisabled
 *  @property {boolean} isRequired
 *  @property {string} label
 *  @property {string} placeholder
 *  @property {string} value
 * }
 */

/**
 * @typedef TextInputExamplePropsShape {
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {string} id
 *  @property {boolean} isClearable
 *  @property {boolean} isDisabled
 *  @property {boolean} isRequired
 *  @property {string} label
 *  @property {string} placeholder
 *  @property {string} value
 * }
 */

/**
 * @typedef TimeInputExamplePropsShape {
 *  @property {boolean} allowCustomEntry
 *  @property {string} className
 *  @property {string} errorMessage
 *  @property {boolean} hasTimePopup
 *  @property {string} id
 *  @property {boolean} isClearable
 *  @property {boolean} isDisabled
 *  @property {boolean} isRequired
 *  @property {string} label
 *  @property {string} name
 *  @property {string} placeholder
 *  @property {string} timeFormat
 *  @property {string} timeRangeIncrement
 *  @property {string} timeRangeBegin
 *  @property {string} timeRangeEnd
 *  @property {string} value
 * }
 */

/**
 * @typedef TooltipsExamplePropsShape {
 *  @property {boolean} isPopupVisible
 *  @property {string} offsetDistance
 *  @property {string} offsetSkidding
 *  @property {PopupPlacement} placement
 *  @property {string} popupText
 * }
 */

/**
 * @typedef VerticalMenuExamplePropsShape {
 *  @property {'inline' | 'flyout' | 'plain'} childrenMenuType
 * }
 */

/**
 * @typedef {{[key in WebsiteMainMenuKey]: WebsiteMainMenu}} WebsiteAllMenus
 */

/**
 * see constructMainMenu() to see a website.WebsiteMainMenu being converted to a header.MainMenu
 * @typedef WebsiteMainMenu {
 *  @property {string} header
 *  @property {string} id
 *  @property {WebsiteMainMenuItem[]} menuItems
 *  @property {boolean} [isSelected]
 * }
 */

/**
 * @typedef WebsiteMainMenuItem {
 *  @property {string} [id]
 *  @property {PageUrl} [link]
 *  @property {string} title
 *  @property {PageUrl[]} [parentLinks]
 *  @property {WebsiteMainMenuItem[]} [children]
 *  @property {ChildrenMenuTypes | null} [childrenMenuType]
 *  @property {boolean} [isOverviewHidden]
 *  @property {boolean} [isSelected]
 *  @property {boolean} [isAlternatePath] there are more than one menu paths to this menu item, and this one is no the "source of truth"
 * }
 */

export default false;
