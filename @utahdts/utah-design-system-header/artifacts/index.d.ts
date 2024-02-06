/*
  Tried to auto generate this file from the JSDoc, but it becomes very ugly.
  Tried to massage the generated output, but it broke.
  This file appears to work, but requires manual creation.

  To Create:
    * run `npm run buildTypesTsc`
    * edit the file created in dist/index.d.ts
      * single module named "@utahdts/utah-design-system-header"
      * just the exports from the `declare module "src/index" {` need put in the module
    * put the updated contents in the /artifacts/index.d.ts file

  Super painful to have to do this manual. But a better way is sure to surface at some point of time.
*/
declare module "@utahdts/utah-design-system-header" {
  export type ChildrenMenuTypes = ('flyout' | 'inline' | 'mega-menu' | 'plain');
  export enum childrenMenuTypes {
    FLYOUT = 'flyout',
    INLINE = 'inline',
    MEGA_MENU = 'mega-menu',
    PLAIN = 'plain',
  }

  export type Events = 'utahHeaderLoaded' | 'utahHeaderUnloaded';
  export enum events {
    HEADER_LOADED = 'utahHeaderLoaded',
    HEADER_UNLOADED = 'utahHeaderUnloaded',
  }

  export type PopupPlacement = 'auto' | 'auto-start' | 'auto-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'top' | 'top-start' | 'top-end';
  export enum popupPlacement {
    AUTO = 'auto',
    AUTO_START = 'auto-start',
    AUTO_END = 'auto-end',
    BOTTOM = 'bottom',
    BOTTOM_START = 'bottom-start',
    BOTTOM_END = 'bottom-end',
    LEFT = 'left',
    LEFT_START = 'left-start',
    LEFT_END = 'left-end',
    RIGHT = 'right',
    RIGHT_START = 'right-start',
    RIGHT_END = 'right-end',
    TOP = 'top',
    TOP_START = 'top-start',
    TOP_END = 'top-end',
  }

  export type Sizes = 'SMALL' | 'MEDIUM' | 'LARGE';
  export enum sizes {
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    LARGE = 'LARGE',
  }

  export function renderDOMSingle(str: string | HTMLElement): HTMLElement;
  export const defaultSettings: Settings;

  export type DomLocationTarget = {
    cssSelector?: string | undefined;
    element?: HTMLElement | undefined;
    elementFunction?: (() => HTMLElement) | undefined;
  };

  export type EventAction = ((arg0: MouseEvent | TouchEvent | KeyboardEvent) => void);

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
    title: string;
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

  export type FooterSettings = {
    copyrightYear?: string | null | undefined;
    domLocationTarget?: DomLocationTarget | undefined;
    showHorizontalRule?: boolean | undefined;
  };

  export type Logo = {
    element?: HTMLElement | (() => HTMLElement) | undefined;
    htmlString?: string | (() => string) | undefined;
    imageUrl?: string | (() => string) | undefined;
  };

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
  };

  export type MediaSizes = {
    mobile: number;
    tabletLandscape: number;
    tabletPortrait: number;
  };

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
  export type SettingsInput = Partial<Settings>;

  export function getUtahHeaderSettings(): Settings;
  export function loadHeader(): void;
  export function removeHeader(shouldTriggerUnloadEvent: boolean): void;
  export function setUtahHeaderSettings(newSettings: SettingsInput): Settings;
  export function setUtahFooterSettings(footerSettings?: import("@utahdts/utah-design-system-header").FooterSettings | undefined): FooterSettings | undefined;
}
