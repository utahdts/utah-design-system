declare module "@utahdts/utah-design-system-header" {
  const _default: false;
  export default _default;
  export type ChildNode = Element;
  export type EventAction = ((arg0: MouseEvent | TouchEvent | KeyboardEvent) => void);
  export type AriaHasPopupType = 'dialog' | 'grid' | 'listbox' | 'menu' | 'tree';
  export type ChildrenMenuTypes = ('flyout' | 'inline' | 'mega-menu' | 'plain');
  export type Environments = 'none' | 'a1' | 'a2' | 'a3' | 'custom' | 'unittest';
  export type Events = 'utahHeaderLoaded' | 'utahHeaderUnloaded';
  export type PopupPlacement = 'auto' | 'auto-start' | 'auto-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'top' | 'top-start' | 'top-end';
  export type Size = 'SMALL' | 'MEDIUM' | 'LARGE';
  export type UtahIdFetchStyle = 'Automatic' | 'None' | 'Provided';
  export type MainMenuItem = {
    actionUrl?: MenuItemUrlAction | undefined;
    actionFunction?: EventAction | undefined;
    actionFunctionUrl?: MenuItemFunctionUrlAction | undefined;
    actionMenu?: MenuItem[] | undefined;
    childrenMenuType?: ChildrenMenuTypes | undefined;
    className?: string | undefined;
    icon?: Element | undefined;
    isAlternatePath?: boolean | undefined;
    isDivider?: boolean | undefined;
    isSelected?: boolean | undefined;
    title: string;
  };
  export type MainMenu = {
    menuItems: MainMenuItem[];
    title: string;
    parentMenuLinkSuffix?: string | ((menuItem: MainMenuItem | MenuItem) => string) | undefined;
  };
  export type MenuItemUrlAction = {
    url: string;
    openInNewTab?: boolean | undefined;
  };
  export type MenuItemFunctionUrlAction = {
    actionFunction: EventAction;
    skipHandleEvent?: boolean | undefined;
    openInNewTab?: boolean | undefined;
    url: string;
  };
  export type MenuItem = {
    actionUrl?: MenuItemUrlAction | undefined;
    actionFunction?: EventAction | undefined;
    actionFunctionUrl?: MenuItemFunctionUrlAction | undefined;
    actionMenu?: MenuItem[] | undefined;
    className?: string | undefined;
    icon?: Element | undefined;
    isAlternatePath?: boolean | undefined;
    isDivider?: boolean | undefined;
    isSelected?: boolean | undefined;
    title: string;
  };
  export type PopupMenu = {
    className?: string | undefined;
    menuItems: MenuItem[];
    parentMenuLinkSuffix?: string | ((menuItem: MainMenuItem | MenuItem) => string) | undefined;
    title: string;
  };
  export type MediaSizes = {
    mobile: number;
    tabletLandscape: number;
    tabletPortrait: number;
  };
  export type PopupFocusHandlerOptions = {
    isPerformPopup?: (() => boolean) | undefined;
    onClick?: ((arg0: UIEvent) => void) | undefined;
    popupPlacement?: PopupPlacement | undefined;
    preventOnClickHandling?: boolean | undefined;
    shouldFocusOnHover?: boolean | undefined;
    doNotClosePopupOnClick?: boolean | undefined;
  };
  export type RenderPopupOptions = {
    removePopupArrow?: boolean | undefined;
  };
  export type RenderPopupMenuOptions = {
    childrenMenuType: ChildrenMenuTypes;
    parentMenuLinkSuffix?: string | ((menuItem: MainMenuItem | MenuItem) => string) | undefined;
    removePopupArrow?: boolean | undefined;
  };
  export type Badge = {
    className?: string | undefined;
    label: string;
    value?: number | undefined;
  };
  export type ActionItem = {
    actionFunction?: EventAction | undefined;
    actionPopupMenu?: PopupMenu | undefined;
    actionDom?: (() => HTMLElement | string) | undefined;
    className?: string | undefined;
    badge?: Badge | undefined;
    icon: HTMLElement | string;
    mobileMenuLocation?: "none" | "left" | "right" | undefined;
    showTitle: boolean;
    title: string;
  };
  export type DomLocationTarget = {
    cssSelector?: string | undefined;
    element?: HTMLElement | undefined;
    elementFunction?: (() => HTMLElement) | undefined;
  };
  export type GlobalEventType = {
    globalOnClick: (e: MouseEvent) => void;
    globalOnKeydown: (e: KeyboardEvent) => void;
    globalOnKeyup: (e: KeyboardEvent) => void;
  };
  export type SettingsInput = Partial<Settings>;
  export type UserInfo = {
    authenticated: boolean;
    disabled?: boolean | null | undefined;
    env?: string | undefined;
    first: string | null | undefined;
    id?: string | null | undefined;
    last?: string | null | undefined;
    mail?: string[] | null | undefined;
    middle?: string | null | undefined;
    status?: string | null | undefined;
    type?: string | undefined;
    username?: string | null | undefined;
  };
  export type UtahIdData = {
    isDefinitive: boolean | null;
    lastError: string | null;
    userInfo: UserInfo | null;
  };
  export type UtahIDSettings = {
    currentUser: UserInfo | undefined | null;
    onAuthChanged?: ((arg0: UtahIdData) => void | undefined) | undefined;
    onProfile?: ((arg0: UIEvent) => void | undefined) | undefined;
    onSignIn?: ((arg0: UIEvent) => void | undefined) | undefined;
    onSignOut?: ((arg0: UIEvent) => void | undefined) | undefined;
    menuItems?: MenuItem[] | undefined;
  };
  export type Logo = {
    element?: HTMLElement | (() => HTMLElement) | undefined;
    htmlString?: string | (() => string) | undefined;
    imageUrl?: string | (() => string) | undefined;
  };
  export type FooterSettings = {
    copyrightYear?: string | null | undefined;
    domLocationTarget?: DomLocationTarget | undefined;
    linkPrivacyPolicy?: string | null | undefined;
    linkTermsOfUse?: string | null | undefined;
    showHorizontalRule?: boolean | undefined;
  };
  export type Settings = {
    actionItems?: ActionItem[] | undefined;
    domLocationTarget?: DomLocationTarget | undefined;
    footer?: FooterSettings | null | undefined;
    logo?: Logo | undefined;
    mainMenu?: false | MainMenu | undefined;
    mediaSizes: MediaSizes;
    onSearch?: false | ((search: string) => void) | undefined;
    showTitle: boolean;
    size: string;
    skipLinkUrl?: string | undefined;
    title: string;
    titleURL: string;
    utahId?: boolean | UtahIDSettings | undefined;
  };
  export namespace childrenMenuTypes {
    let FLYOUT: ChildrenMenuTypes;
    let INLINE: ChildrenMenuTypes;
    let MEGA_MENU: ChildrenMenuTypes;
    let PLAIN: ChildrenMenuTypes;
  }
  export namespace PopupPlacement {
    let AUTO: PopupPlacement;
    let AUTO_START: PopupPlacement;
    let AUTO_END: PopupPlacement;
    let BOTTOM: PopupPlacement;
    let BOTTOM_START: PopupPlacement;
    let BOTTOM_END: PopupPlacement;
    let LEFT: PopupPlacement;
    let LEFT_START: PopupPlacement;
    let LEFT_END: PopupPlacement;
    let RIGHT: PopupPlacement;
    let RIGHT_START: PopupPlacement;
    let RIGHT_END: PopupPlacement;
    let TOP: PopupPlacement;
    let TOP_START: PopupPlacement;
    let TOP_END: PopupPlacement;
  }
  export type events = Events;
  export namespace events {
    let HEADER_LOADED: Events;
    let HEADER_UNLOADED: Events;
  }
  export type sizes = Size;
  export namespace sizes {
    let SMALL: Size;
    let MEDIUM: Size;
    let LARGE: Size;
  }
  export function getCssClassSelector(domConstants: string | string[]): string;
  export type domConstants = string;
  export namespace domConstants {
    let UTAH_DESIGN_SYSTEM: string;
    let HEADER: string;
    let FOOTER: string;
    let ICON_BUTTON: string;
    let CSS_HEADER_MEDIA_TAG_ID: string;
    let IS_CLOSED: string;
    let IS_OPEN: string;
    let VISUALLY_HIDDEN: string;
    let MEDIA_SIZE__MOBILE__PLACEHOLDER: string;
    let MEDIA_SIZE__TABLET_LANDSCAPE__PLACEHOLDER: string;
    let MEDIA_SIZE__TABLET_PORTRAIT__PLACEHOLDER: string;
    let ACTION_ITEM: string;
    let ACTION_ITEM__ICON_BUTTON: string;
    let ACTION_ITEM__ICON_BUTTON_TITLE: string;
    let ACTION_ITEM__TITLE: string;
    let ACTION_ITEMS__WRAPPER: string;
    let BADGE__LABEL: string;
    let BADGE__VALUE: string;
    let BADGE_WRAPPER: string;
    let BADGE_WRAPPER__SMALL: string;
    let BADGE_WRAPPER__ACTION_ITEM: string;
    let CITIZEN_EXPERIENCE: string;
    let CITIZEN_EXPERIENCE_MOBILE: string;
    let FOOTER_COPYRIGHT_YEAR: string;
    let FOOTER_HORIZONTAL_DIVIDER: string;
    let FOOTER_LINK_PRIVACY_ID: string;
    let FOOTER_LINK_TERMS_ID: string;
    let FOOTER_LINKS: string;
    let LOGO: string;
    let LOGO_OFFICIAL_CLOSE_BUTTON: string;
    let LOGO_OFFICIAL_WRAPPER: string;
    let LOGO_SVG: string;
    let LOGO_VERT_LINE: string;
    let MAIN_MENU: string;
    let MAIN_MENU__HAMBURGER: string;
    let MAIN_MENU__HAMBURGER_ID: string;
    let MAIN_MENU__HAMBURGER_ICON_ID: string;
    let MAIN_MENU__MENU_TOP: string;
    let MAIN_MENU__NAV: string;
    let MAIN_MENU__OUTER: string;
    let MAIN_MENU__REMOVED: string;
    let MAIN_MENU__SEARCH: string;
    let MAIN_MENU__TITLE: string;
    let MENU_ITEM: string;
    let MENU_ITEM__ARROW: string;
    let MENU_ITEM__BUTTON_TITLE: string;
    let MENU_ITEM__LINK_TITLE: string;
    let MENU_ITEM__LINK_TITLE_SPAN: string;
    let MENU_ITEM__SELECTED: string;
    let MENU_ITEM__SELECTED_PARENT: string;
    let MENU_ITEM__TITLE: string;
    let MENU_ITEM__FLY_OUT: string;
    let MENU_ITEM__INLINE: string;
    let MENU_ITEM__MEGA_MENU: string;
    let DESKTOP__HIDDEN: string;
    let MOBILE__HIDDEN: string;
    let MOBILE__UTAH_ID: string;
    let MOBILE__VIP_ACTION_ITEMS__LEFT: string;
    let MOBILE__VIP_ACTION_ITEMS__RIGHT: string;
    let ACTION_ITEM__SELECTED: string;
    let MOBILE_MENU: string;
    let MOBILE_MENU__ACTION_BAR: string;
    let MOBILE_MENU__BACKDROP: string;
    let MOBILE_MENU__CONTENT: string;
    let MOBILE_MENU__CONTENT_ITEM: string;
    let MOBILE_MENU__LAST_FOCUSABLE: string;
    let MOBILE_MENU__WRAPPER: string;
    let MOBILE_MENU_ACTON_BAR__HOME_ID: string;
    let MOBILE_MENU_ACTON_BAR__PROFILE_ID: string;
    let MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER: string;
    let VERTICAL_MENU: string;
    let VERTICAL_MENU__BUTTON_TITLE: string;
    let VERTICAL_MENU__CHEVRON: string;
    let VERTICAL_MENU__DIVIDER: string;
    let VERTICAL_MENU__LINK_TEXT: string;
    let VERTICAL_MENU__LINK_TITLE: string;
    let VERTICAL_MENU__PLAIN_TITLE: string;
    let VERTICAL_MENU__TITLE: string;
    let VERTICAL_MENU_WRAPPER__WRAPPER: string;
    let VERTICAL_MENU_WRAPPER__WRAPPER_TITLE: string;
    let POPUP__HIDDEN: string;
    let POPUP__VISIBLE: string;
    let POPUP__WRAPPER: string;
    let EXTERNAL_LINK: string;
    let EXTERNAL_LINK__NEW_TAB: string;
    let POPUP_ARROW: string;
    let POPUP_CONTENT_WRAPPER: string;
    let POPUP_WRAPPER: string;
    let SEARCH__SEARCH_BACKDROP: string;
    let SEARCH__SEARCH_CLOSE_BUTTON: string;
    let SEARCH__SEARCH_BUTTON: string;
    let SEARCH__SEARCH_BUTTON_WRAPPER: string;
    let SEARCH__SEARCH_INPUT: string;
    let SEARCH__SEARCH_MODAL: string;
    let SIZE__LARGE: string;
    let SIZE__MEDIUM: string;
    let SKIP_LINK_LINK: string;
    let SKIP_LINK_WRAPPER: string;
    let TITLE: string;
    let TITLE__LOGO: string;
    let TITLE__TITLE: string;
    let TOOLTIP: string;
    let TOOLTIP__CONTENT: string;
    let TOOLTIP__WRAPPER: string;
    let TOOLTIP__WRAPPER__HIDDEN: string;
    let TOOLTIP__WRAPPER__VISIBLE: string;
    let UTAH_ID: string;
    let UTAH_ID__BUTTON: string;
  }
  export function checkForError(isError: boolean, errorMessage: string): void;
  export function notNull<T>(value: T, errorMessage: string): NonNullable<T>;
  export function isString(s: any): boolean;
  export function renderDOMSingle(str: string | HTMLElement): HTMLElement;
  export const defaultSettings: Settings;
  export const settingsKeeper: SettingsKeeper;
  class SettingsKeeper {
    settings: {
      actionItems?: ActionItem[] | undefined;
      domLocationTarget?: DomLocationTarget | undefined;
      footer?: FooterSettings | null | undefined;
      logo?: Logo | undefined;
      mainMenu?: false | MainMenu | undefined;
      mediaSizes: MediaSizes;
      onSearch?: false | ((search: string) => void) | undefined;
      showTitle: boolean;
      size: string;
      skipLinkUrl?: string | undefined;
      title: string;
      titleURL: string;
      utahId?: boolean | UtahIDSettings | undefined;
    };
    setSettings(settings: SettingsInput): void;
    getSettings(): Settings;
  }
  export function getUtahHeaderSettings(): Settings;
  export function uuidv4(): string;
  export function addMobileMenuContentItem(mobileMenuContentItem: HTMLElement): HTMLElement;
  export function valueOrFunctionValue<ValueOrFunctionValueT>(valueOrFunction: ValueOrFunctionValueT | (() => ValueOrFunctionValueT)): ValueOrFunctionValueT;
  export function getHamburgerElements(callerContext: string): {
    hamburger: HTMLElement | null;
    hamburgerIcon: HTMLElement | null;
    mobileMenu: HTMLElement;
  };
  export function hideMobileMenu(): void;
  export function showMobileMenu(): void;
  export function showActionItem(mobileMenuWrapper: HTMLElement, actionItemWrapper: HTMLElement): void;
  export function showContentItem(mobileContentWrapper: HTMLElement, mobileMenuContentItem: HTMLElement): void;
  export function mobileMenuInteractionHandler(interactiveElement: HTMLElement, mobileMenuContentItem: HTMLElement | (() => HTMLElement | null), actionItemWrapper: HTMLElement | (() => HTMLElement), { ariaHasPopupType, additionalOnClick, onClickHandler, shouldOnClickCloseMenu, }: {
    additionalOnClick?: ((e: MouseEvent) => void) | undefined;
    ariaHasPopupType: AriaHasPopupType | null;
    onClickHandler?: ((e: MouseEvent) => boolean) | undefined;
    shouldOnClickCloseMenu: boolean;
  }): void;
  export function findRecursive<T>(object: T | T[], recursiveFields: string[], isMatchFunc: (o: T) => boolean): boolean;
  export function showHideElement(element: Element, isShown: boolean, visibleClass: string, hiddenClass: string): void;
  export function unloadGlobalEvents(): void;
  export function hideAllMenus(): void;
  export function loadGlobalEvents(): void;
  export const globalKeyStatus: {
    [key: string]: boolean;
  };
  export namespace globalKeyModifiers {
    let SHIFT: string;
  }
  export function isTouchDevice(): boolean;
  export function popupFocusHandler(wrapper: HTMLElement, button: HTMLElement, popup: HTMLElement, ariaHasPopup: AriaHasPopupType, options: PopupFocusHandlerOptions | undefined): void;
  export function renderPopup(labelledByElement: Element, options?: RenderPopupOptions | undefined): HTMLElement;
  export function suffixForMenuItemTitle(menuItem: MenuItem | MainMenuItem, parentMenuLinkSuffix?: string | ((menuItem: MainMenuItem | MenuItem) => string) | undefined): string;
  export function renderMenu(menuItems: MenuItem[] | undefined, options: RenderPopupMenuOptions): HTMLElement;
  export function renderPopupMenu(popupMenu: PopupMenu, labelledByElement: Element, options: RenderPopupMenuOptions): HTMLElement;
  export function renderActionItemBadge(badge: Badge | undefined): HTMLElement | null;
  export function renderMobileActionItem(actionItem: ActionItem): {
    actionItemElement: HTMLElement;
    actionItemContent: HTMLElement | null;
  };
  export function renderMobileActionItems(): void;
  export function renderFooterCopyrightYear(footerElement: Element, copyrightYear: string | null | undefined): void;
  export function renderFooter(): Element | null;
  export type PreviousFooterSettings = {
    copyrightYear: string | null | undefined;
    domLocationTarget: DomLocationTarget;
    showHorizontalRule: boolean | undefined;
  };
  export function hookupTooltip(element: HTMLElement, dom: Node): void;
  export function renderActionItem(actionItem: ActionItem): Element;
  export function ActionItems(): Element | null;
  export type utahIdUrls = string;
  export namespace utahIdUrls {
    let PROFILE: string;
    let SIGN_IN: string;
    let SIGN_OUT: string;
    let USER_INFO: string;
  }
  export function renderMenuWithTitle(menu: HTMLElement, title: string): HTMLElement;
  export function authChangedEventHandler(newUtahIdData: UtahIdData): void;
  export function renderUtahIdButton(): HTMLElement;
  export function renderUtahIdMenu(shouldAddMenuTitle: boolean): HTMLElement;
  export function renderUtahIdForDesktop(): HTMLElement;
  export function renderUtahIdForMobile(): {
    button: HTMLElement;
    menu: HTMLElement;
  };
  export function CitizenExperience(): HTMLElement;
  export function LogoTitle(): Element;
  export function UtahLogo(): Element;
  export function HeaderWrapper(): Element;
  export function showSearchModal(): void;
  export function setupSearchModal(): void;
  export function renderMainMenu(): {
    mainMenuWrapper: HTMLElement;
    utahIdPopup: HTMLElement | null;
  };
  export function closeOfficialWebsite(): void;
  export function openOfficialWebsite(): void;
  export function renderOfficialWebsite(): Element;
  export function hookupHamburger(mobileMainMenuContentItem: HTMLElement): void;
  export function fetchUtahIdUserDataAsync(): Promise<UtahIdData>;
  export function getCurrentUtahIdData(): UtahIdData;
  export function removeUtahIdInMobileMenu(): void;
  export function hookupUtahIdInMobileMenu(mobileMenuWrapper: HTMLElement, utahIdPopup: HTMLElement): void;
  export function renderMobileMenuHomeMenu(): HTMLElement;
  export function hookupMobileActionItemKeyboarding(): void;
  export function SkipLink(): Element | null;
  export function loadHeader(): void;
  export function removeHeader(shouldTriggerUnloadEvent: boolean): void;
  export function setUtahHeaderSettings(newSettings: SettingsInput): Settings;
  export function setUtahFooterSettings(footerSettings?: FooterSettings | undefined): FooterSettings | undefined;
  export type environments = Environments;
  export namespace environments {
    let NONE: Environments;
    let PROD: Environments;
    let AT: Environments;
    let DEV: Environments;
    let CUSTOM: Environments;
    let UNITTEST: Environments;
  }
  export function toHash(thing: object | string): number;
  export function httpRequest({ url, method, headers, timeout, onResolve, onReject, }: {
    url: string;
    method: string;
    headers: Record<string, string>;
    timeout: number;
    onResolve: Function;
    onReject: Function;
  }): void;
  export function loadTestHeader(settings: Settings): void;
  export namespace mainMenuOn {
    let menuItems: {
      actionUrl: {
        url: string;
      };
      title: string;
    }[];
    let title: string;
  }
  export const mainMenuOff: undefined;
  export const actionItemsOn: {
    badge: {
      label: string;
    };
    showTitle: boolean;
    title: string;
    actionDom: () => HTMLElement;
    icon: string;
  }[];
  export const actionItemsOff: undefined;
  export const utahIdOn: true;
  export const utahIdOff: false;
  export function searchOn(search: string): void;
  export const searchOff: undefined;
  export function testSanity(headerComponentsExist: any): void;
  export function expectHeaderComponentsExistSanityCheck(): void;
  export function isDesktopMainMenuOn(): boolean;
  export function isMobileMainMenuOn(): boolean;
  export function isUtahIdInCitizenExperience(): boolean;
  export function isMobileUtahIdInInMainMenu(): boolean;
  export function isMobileUtahIdActionItemInMobileContent(): boolean;
  export function isActionItemsInCitizenExperience(): boolean;
  export function isMobileActionItemsInMobileContent(): boolean;
  export function isSearchInCitizenExperience(): boolean;
  export function isMobileSearchInCitizenExperience(): boolean;
  export function isSearchInDesktopMainMenu(): boolean;
  export function isSearchInMobileMainMenu(): boolean;
  export function isMobileHomeActionItemInMobileContent(): boolean;
  export function isMobileHamburgerInMainMenu(): boolean;
  export function isMobileHamburgerInCitizenExperience(): boolean;
  export function dataOfAllDataTypes({ includes, excludes }?: {
    includes?: string[] | undefined;
    excludes?: string[] | undefined;
  } | undefined): any[];
  export namespace DATA_OF_ALL_DATATYPES {
    export namespace string {
      let empty: string;
      let notEmpty: string;
      let utf: string;
    }
    export namespace stringObject {
      let empty_1: String;
      export { empty_1 as empty };
      let notEmpty_1: String;
      export { notEmpty_1 as notEmpty };
      let utf_1: String;
      export { utf_1 as utf };
    }
    export namespace number {
      let decimal: number;
      let hex: number;
      let int: number;
      let nan: number;
      let infinity: number;
      let negativeInfinity: number;
      let maxSafeInteger: number;
      let maxValue: number;
      let minSafeInteger: number;
      let minValue: number;
    }
    export namespace numberObject {
      let decimal_1: number;
      export { decimal_1 as decimal };
      let hex_1: number;
      export { hex_1 as hex };
      let infinity_1: number;
      export { infinity_1 as infinity };
      let int_1: number;
      export { int_1 as int };
      let maxSafeInteger_1: number;
      export { maxSafeInteger_1 as maxSafeInteger };
      let maxValue_1: number;
      export { maxValue_1 as maxValue };
      let minSafeInteger_1: number;
      export { minSafeInteger_1 as minSafeInteger };
      let minValue_1: number;
      export { minValue_1 as minValue };
      let nan_1: number;
      export { nan_1 as nan };
      let negativeInfinity_1: number;
      export { negativeInfinity_1 as negativeInfinity };
    }
    export namespace bigint {
      export let bin: bigint;
      let hex_2: bigint;
      export { hex_2 as hex };
      let number_1: bigint;
      export { number_1 as number };
      export let octal: bigint;
      let string_1: bigint;
      export { string_1 as string };
    }
    export namespace boolean {
      export let False: boolean;
      let _false: boolean;
      export { _false as false };
      export let True: boolean;
      let _true: boolean;
      export { _true as true };
    }
    export namespace undefined {
      let undefined_1: undefined;
      export { undefined_1 as undefined };
    }
    export namespace _null {
      let _null_1: null;
      export { _null_1 as null };
    }
    export { _null as null };
    export namespace symbol {
      let number_2: symbol;
      export { number_2 as number };
      let string_2: symbol;
      export { string_2 as string };
    }
    export namespace object {
      let arrayEmpty: never[];
      let arrayFull: (string | number | (string | number | string[])[])[];
      function func(): void;
      function funcArrow(): undefined;
      let objectClass: {};
      let objectSimpleEmpty: {};
      namespace objectSimpleFull {
        let one: number;
        namespace two {
          let three: number;
          namespace four {
            let five: number;
          }
        }
      }
      let date: Date;
    }
    export namespace truthy {
      let _true_1: boolean;
      export { _true_1 as true };
      let _false_1: boolean;
      export { _false_1 as false };
      let one_1: number;
      export { one_1 as one };
      export let zero: number;
      export let negativeOne: number;
      export let trueString: string;
      export let falseString: string;
      export let oneString: string;
      export let zeroString: string;
      export let negativeOneString: string;
      export let emptyString: string;
      let _null_2: null;
      export { _null_2 as null };
      let undefined_2: undefined;
      export { undefined_2 as undefined };
      export let Infinity: number;
      let negativeInfinity_2: number;
      export { negativeInfinity_2 as negativeInfinity };
      let arrayEmpty_1: never[];
      export { arrayEmpty_1 as arrayEmpty };
      export let objectEmpty: {};
      export let arrayNested: never[][];
      export let arrayZero: number[];
      export let arrayOne: number[];
      export let NaN: number;
    }
  }
  export namespace allDataTypes {
    let BIGINT: string;
    let BOOLEAN: string;
    let NULL: string;
    let NUMBER: string;
    let NUMBER_OBJECT: string;
    let OBJECT: string;
    let STRING: string;
    let STRING_OBJECT: string;
    let SYMBOL: string;
    let TRUTHY: string;
    let UNDEFINED: string;
  }
}
