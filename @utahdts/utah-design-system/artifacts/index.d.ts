declare module "@utahdts/utah-design-system" {
  export namespace popupPlacement {
    let BOTTOM: import("@utahdts/utah-design-system-header").PopupPlacement;
    let BOTTOM_START: import("@utahdts/utah-design-system-header").PopupPlacement;
    let BOTTOM_END: import("@utahdts/utah-design-system-header").PopupPlacement;
    let LEFT: import("@utahdts/utah-design-system-header").PopupPlacement;
    let LEFT_START: import("@utahdts/utah-design-system-header").PopupPlacement;
    let LEFT_END: import("@utahdts/utah-design-system-header").PopupPlacement;
    let RIGHT: import("@utahdts/utah-design-system-header").PopupPlacement;
    let RIGHT_START: import("@utahdts/utah-design-system-header").PopupPlacement;
    let RIGHT_END: import("@utahdts/utah-design-system-header").PopupPlacement;
    let TOP: import("@utahdts/utah-design-system-header").PopupPlacement;
    let TOP_START: import("@utahdts/utah-design-system-header").PopupPlacement;
    let TOP_END: import("@utahdts/utah-design-system-header").PopupPlacement;
  }
  export function usePopupDelay(): {
    startNoPopupTimer: () => void;
    startPopupTimer: (callback: () => void) => void;
  };
  export function useRefAlways<UseRefAlwaysT>(value: UseRefAlwaysT): React.MutableRefObject<UseRefAlwaysT>;
  export function joinClassNames(...classNames: (string | boolean | any[] | null | undefined)[]): string;
  export function Tooltip({ children, className, innerRef: draftInnerRef, isPopupVisible, offset, placement, referenceElement: draftReferenceElement, }: {
    children: React.ReactNode;
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLDivElement | null> | undefined;
    isPopupVisible?: boolean | undefined;
    offset?: number | {mainAxis: number, crossAxis: number, alignmentAxis?: number} | undefined;
    placement?: import("@utahdts/utah-design-system-header").PopupPlacement | undefined;
    referenceElement: HTMLElement | null;
  }): React.JSX.Element;
  export namespace formElementSizesEnum {
    let SMALL3X: FormElementSizes;
    let SMALL2X: FormElementSizes;
    let SMALL1X: FormElementSizes;
    let SMALL: FormElementSizes;
    let MEDIUM: FormElementSizes;
    let LARGE: FormElementSizes;
    let LARGE1X: FormElementSizes;
  }
  export function handleEvent(func: React.MouseEventHandler<HTMLButtonElement>): React.MouseEventHandler<HTMLButtonElement>;
  export function ClickableTag({ children, className, id, innerRef, iconLeft, iconRight, isDisabled, isSelected, onClick, size, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    isDisabled?: boolean | undefined;
    isSelected?: boolean | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    size?: FormElementSizes | undefined;
  }): React.JSX.Element;
  export function Spinner({ children, className, id, innerRef, size, strokeWidth, value, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    size?: number | undefined;
    strokeWidth?: number | undefined;
    value?: number | undefined;
  }): React.JSX.Element;
  export const ConfirmationButtonContext: React.Context<boolean>;
  export function ConfirmationButtonContextProvider({ children, isClicked, }: {
    children: React.ReactNode;
    isClicked: boolean;
  }): React.JSX.Element;
  export function ConfirmationButton({ appearance, children, className, color, confirmationColor, id, innerRef, isBusy, isDisabled, onClick, size, type, ...rest }: {
    appearance?: ButtonAppearance | undefined;
    children: React.ReactNode;
    className?: string | undefined;
    color?: ComponentColors | undefined;
    confirmationColor?: ComponentColors | undefined;
    innerRef?: React.RefObject<HTMLButtonElement> | undefined;
    isBusy?: boolean | undefined;
    isDisabled?: boolean | undefined;
    id?: string | undefined;
    onClick: React.MouseEventHandler;
    size?: FormElementSizes | undefined;
    type?: ButtonTypes | undefined;
  }): React.JSX.Element;
  export function useConfirmationButtonContext(): boolean;
  export function ConfirmationChildren({ children, }: {
    children: React.ReactNode;
  }): React.JSX.Element | null;
  export function InitialChildren({ children, }: {
    children: React.ReactNode;
  }): React.JSX.Element | null;
  export namespace componentColors {
    let PRIMARY: ComponentColors;
    let SECONDARY: ComponentColors;
    let ACCENT: ComponentColors;
    let NONE: ComponentColors;
  }
  export function IconButton({ appearance, children, className, color, icon, id, innerRef: draftInnerRef, isDisabled, isTitleVisible, onClick, size, title, tooltipText, ...rest }: {
    appearance?: IconButtonAppearance | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    color?: "accent" | "none" | "primary" | "secondary" | undefined;
    icon: React.ReactNode;
    id?: string | undefined;
    innerRef?: React.MutableRefObject<HTMLButtonElement | null> | undefined;
    isDisabled?: boolean | undefined;
    isTitleVisible?: boolean | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    size?: "small" | "medium" | "large" | "small1x" | "large1x" | undefined;
    title: string;
    tooltipText?: string | null | undefined;
  }): React.JSX.Element;
  export function Tag({ children, className, clearMessage, iconButtonProps, innerRef, iconLeft, iconRight, isDisabled, id, onClear, size, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    clearMessage?: string | undefined;
    id?: string | undefined;
    iconButtonProps?: object | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    isDisabled?: boolean | undefined;
    onClear?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    size?: FormElementSizes | undefined;
  }): React.JSX.Element;
  export function Accordion({ children, className, contentClassName, headingLevel, headerClassName, headerContent, id, isOpen, onToggle, }: {
    children: React.ReactNode;
    className?: string | undefined;
    contentClassName?: string | undefined;
    headingLevel?: number | undefined;
    headerClassName?: string | undefined;
    headerContent: React.ReactNode;
    id: string;
    isOpen?: boolean | undefined;
    onToggle?: ((previousIsOpen: boolean) => void) | undefined;
  }): React.JSX.Element;
  export const UtahDesignSystemContext: React.Context<ImmerHookUtahDesignSystemContext>;
  export function useUtahDesignSystemContext(): ImmerHookUtahDesignSystemContext;
  export type ImmerHookUtahDesignSystemContext = import("use-immer").ImmerHook<UtahDesignSystemContextValue>;
  export function useAriaMessaging(): {
    addAssertiveMessage: (message: string) => void;
    addPoliteMessage: (message: string) => void;
  };
  export function getFocusableElements(element: HTMLDialogElement): HTMLElement[];
  export function useHandleEscape(onEscape?: React.KeyboardEventHandler<Element> | undefined): (...args: any[]) => void;
  export function useHandleTab(firstTabElement: HTMLElement | undefined, lastTabElement: HTMLElement | undefined): (...args: any[]) => void;
  export type DRAWER_PLACEMENT = DrawerPlacement;
  export namespace DRAWER_PLACEMENT {
    let RIGHT: DrawerPlacement;
    let LEFT: DrawerPlacement;
  }
  export function Drawer({ ariaLabelledBy, children, className, id, innerRef, onClose, onEscape, position, }: {
    ariaLabelledBy: string;
    children: React.ReactNode;
    className?: string | undefined;
    id: string;
    innerRef?: React.Ref<HTMLDivElement> | undefined;
    onEscape?: React.KeyboardEventHandler<Element> | undefined;
    onClose?: React.MouseEventHandler<Element> | undefined;
    position?: DrawerPlacement | undefined;
  }): React.JSX.Element;
  export function DrawerContent({ children, className, id, }: {
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
  }): React.JSX.Element;
  export function DrawerFooter({ children, className, id, }: {
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
  }): React.JSX.Element;
  export function DrawerTitle({ children, className, id, tagName: TagName, }: {
    children: React.ReactNode;
    className?: string | undefined;
    id: string;
    tagName?: string | undefined;
  }): React.JSX.Element;
  export const TabGroupContext: React.Context<TabGroupContextValue>;
  export function useTabGroupContext(): TabGroupContextValue;
  export function generateTabId(tabGroupId: string, tabId: string): string;
  export function Tab({ children, id }: {
    children: React.ReactNode;
    id: string;
  }): React.JSX.Element;
  export function TabGroup({ children, className, defaultValue, isVertical, onChange, value, }: {
    children: React.ReactNode;
    className?: string | undefined;
    defaultValue?: string | undefined;
    isVertical?: boolean | undefined;
    onChange?: ((newTabId: string) => void) | undefined;
    value?: string | undefined;
  }): React.JSX.Element;
  export function TabGroupTitle({ children, className, tagName: TagName }: {
    children: React.ReactNode;
    className?: string | undefined;
    tagName?: string | undefined;
  }): React.JSX.Element;
  export function TabList({ children, className, }: {
    children: React.ReactNode;
    className?: string | undefined;
  }): React.JSX.Element;
  export function TabPanel({ children, className, tabId }: {
    children: React.ReactNode;
    className?: string | undefined;
    tabId: string;
  }): React.JSX.Element;
  export function TabPanels({ children }: {
    children: React.ReactNode;
  }): React.JSX.Element;
  export function FooterAgencyInformation({ children }: {
    children: React.ReactNode;
  }): React.JSX.Element;
  export function FooterAgencyInformationColumn({ children }: {
    children: React.ReactNode;
  }): React.JSX.Element;
  export function FooterAgencyInformationInfo({ agencyTitleFirstLine, agencyTitleSecondLine, address, email, logo, phone, }: {
    agencyTitleFirstLine: string;
    agencyTitleSecondLine: string;
    address: Address;
    email: string;
    logo: React.ReactNode;
    phone?: string | undefined;
  }): React.JSX.Element;
  export function FooterSocialMediaBar({ children, title }: {
    children: React.ReactNode;
    title: string | null;
  }): React.JSX.Element;
  export function useOnKeyUp<KeyboardEventElementT>(targetKey: string, func: React.KeyboardEventHandler<KeyboardEventElementT>, stopPropagation?: boolean | undefined): (event: React.KeyboardEvent<KeyboardEventElementT>) => boolean;
  export function ErrorMessage({ errorMessage, id }: {
    errorMessage?: string | undefined;
    id: string;
  }): React.JSX.Element | null;
  export function RequiredStar(): React.JSX.Element;
  export function calendarGrid(focusDate: Date | null, selectedDate: Date | null): CalendarGridMonth;
  export function CalendarInput({ className, dateFormat, errorMessage, id, innerRef, isDisabled, isHidden, isRequired, label, labelClassName, onChange, shouldSetFocusOnMount, showTodayButton, value, wrapperClassName, ...rest }: {
    className?: string | undefined;
    dateFormat?: string | undefined;
    errorMessage?: string | undefined;
    id: string;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    isDisabled?: boolean | undefined;
    isHidden?: boolean | undefined;
    isRequired?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    onChange: (newValue: string) => void;
    shouldSetFocusOnMount?: boolean | undefined;
    showTodayButton?: boolean | undefined;
    value?: string | null | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function trailingS(value: number): string;
  export function CharacterCount({ className, id, maxLength, text, }: {
    className?: string | null | undefined;
    id: string;
    maxLength: number;
    text?: string | null | undefined;
  }): React.JSX.Element | null;
  export function Checkbox({ className, defaultValue, errorMessage, innerRef, id, isDisabled, isRequired, label, labelClassName, name, onChange, value, wrapperClassName, ...rest }: {
    className?: string | undefined;
    defaultValue?: boolean | undefined;
    errorMessage?: string | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    id: string;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value?: boolean | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function useMultiSelectContext(): MultiSelectContext;
  export function ComboBoxContextProvider({ children, comboBoxId, defaultValue, isValueClearedOnSelection, onChange, onClear, onKeyUp, value, }: {
    children: React.ReactNode;
    comboBoxId: string;
    defaultValue?: string | undefined;
    isValueClearedOnSelection?: boolean | undefined;
    onChange?: ((newValue: string) => void) | undefined;
    onClear?: (() => void) | undefined;
    onKeyUp?: ((e: Event, currentFilterValue: string) => boolean) | undefined;
    value?: string | undefined;
  }): React.JSX.Element;
  export function useDebounceFunc(func: (...args: any[]) => void, delay?: number | undefined): (...args: any[]) => Promise<any[]>;
  export function useComboBoxContext(): ComboBoxContext;
  export const ComboBoxOptionGroupContext: React.Context<string>;
  export function useComboBoxOptionGroupContext(): ComboBoxOptionGroupContextValue;
  export function isOptionGroupVisible(optionGroupId: string | null, optionLabel: string, optionsFiltered: ComboBoxOptionType[], selectedValues: string[]): boolean;
  export function moveComboBoxSelectionDown(draftContext: import("immer").Draft<ComboBoxContextValue>, multiSelectContext: MultiSelectContextValue): void;
  export function moveComboBoxSelectionUp(draftContext: import("immer").Draft<ComboBoxContextValue>, textInput: HTMLInputElement | null, multiSelectContext: MultiSelectContextValue): void;
  export function selectComboBoxSelection(draftContext: import("immer").Draft<ComboBoxContextValue>, textInput: HTMLInputElement | null): void;
  export function ComboBoxOption({ children, className, isDisabled, identifiesWithOptionGroupId, isStatic, isHidden, label, value, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    identifiesWithOptionGroupId?: string | undefined;
    isDisabled?: boolean | undefined;
    isHidden?: boolean | undefined;
    isStatic?: boolean | undefined;
    label: string;
    value: string;
  }): React.JSX.Element | null;
  export function CombBoxListBox({ allowCustomEntry, ariaLabelledById, children, id, popupReferenceElement, }: {
    allowCustomEntry?: boolean | undefined;
    ariaLabelledById: string;
    children?: React.ReactNode | null;
    popupReferenceElement: HTMLElement | null;
    id: string;
  }): React.JSX.Element;
  export function useRememberCursorPosition(ref: React.RefObject<HTMLElement>, value: string): React.ChangeEventHandler<HTMLElement>;
  export function TextInput({ className, clearIconRef, defaultValue, errorMessage, innerRef, id, isClearable, isDisabled, isLabelSkipped, isRequired, isShowingClearableIcon, label, labelClassName, name, onChange, onClear, onKeyUp, placeholder, rightContent, value, wrapperClassName, ...rest }: {
    className?: string | undefined;
    clearIconRef?: React.MutableRefObject<HTMLButtonElement | null> | undefined;
    defaultValue?: string | undefined;
    errorMessage?: string | undefined;
    id: string;
    innerRef?: React.Ref<HTMLDivElement> | undefined;
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isLabelSkipped?: boolean | undefined;
    isRequired?: boolean | undefined;
    isShowingClearableIcon?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onClear?: React.UIEventHandler<HTMLInputElement> | undefined;
    placeholder?: string | undefined;
    rightContent?: React.ReactNode;
    value?: string | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function clearComboBoxSelection(draftContext: import("immer").Draft<ComboBoxContextValue>): void;
  export function ComboBoxTextInput({ allowCustomEntry, className, comboBoxListId, errorMessage, iconCallback, id, innerRef: draftInnerRef, isClearable, isShowingClearableIcon, isDisabled, onBlur, onClear, onCustomEntry, onKeyUp, placeholder, ...rest }: {
    allowCustomEntry?: boolean | undefined;
    className?: string | undefined;
    comboBoxListId: string;
    errorMessage?: string | undefined;
    iconCallback?: ((isOptionsExpanded: boolean) => React.ReactNode) | undefined;
    id: string;
    innerRef?: MutableRef<HTMLInputElement | null> | undefined;
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    isShowingClearableIcon?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onBlur?: React.UIEventHandler<Element> | undefined;
    onClear?: EventAction | undefined;
    onCustomEntry?: ((customValue: string) => void) | undefined;
    onKeyUp?: ((e: Event, currentFilterValue: string) => boolean) | undefined;
    placeholder?: string | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function ComboBox({ allowCustomEntry, children, className, defaultValue, errorMessage, iconCallback, id, innerRef: draftInnerRef, isClearable, isDisabled, isRequired, isShowingClearableIcon, label, labelClassName, name, onChange, onCustomEntry, onClear, onKeyUp, placeholder, popupContentRef, isValueClearedOnSelection, isWrapperSkipped, tagChildren, textInputClassName, value, wrapperClassName, ...rest }: {
    allowCustomEntry?: boolean | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    defaultValue?: string | undefined;
    errorMessage?: string | undefined;
    iconCallback?: ((isOptionsExpanded: boolean) => React.ReactNode) | undefined;
    id: string;
    innerRef?: MutableRef<HTMLDivElement | null> | undefined;
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    isShowingClearableIcon?: boolean | undefined;
    isValueClearedOnSelection?: boolean | undefined;
    isWrapperSkipped?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onChange?: ((newValue: string) => void) | undefined;
    onClear?: (() => void) | undefined;
    onCustomEntry?: ((customValue: string) => void) | undefined;
    onKeyUp?: ((e: Event, currentFilterValue: string) => boolean) | undefined;
    placeholder?: string | undefined;
    popupContentRef?: HTMLElement | null | undefined;
    tagChildren?: React.ReactNode;
    textInputClassName?: string | undefined;
    value?: string | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function ComboBoxOptionGroupContextProvider({ children, optionGroupId }: {
    children: React.ReactNode;
    optionGroupId: string;
  }): React.JSX.Element;
  export function ComboBoxOptionGroup({ children, className, label, }: {
    children: React.ReactNode;
    className?: string | undefined;
    label: string;
  }): React.JSX.Element;
  export function useInterval(callback: () => void, delay: number, options?: UseIntervalOptions | undefined): void;
  export type UseIntervalOptions = {
    isDisabled?: boolean | undefined;
  };
  export function DateInput({ ariaLabel, className, dateFormat, defaultValue, errorMessage, hasCalendarPopup, id, innerRef: draftInnerRef, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, onKeyUp, placeholder, showCalendarTodayButton, value, wrapperClassName, ...rest }: {
    ariaLabel?: string | undefined;
    className?: string | undefined;
    dateFormat?: string | undefined;
    defaultValue?: string | undefined;
    errorMessage?: string | undefined;
    hasCalendarPopup?: boolean | undefined;
    id: string;
    innerRef?: React.RefObject<HTMLDivElement | null> | undefined;
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onChange?: ((newValue: string) => void) | undefined;
    onClear?: (() => void) | undefined;
    onKeyUp?: ((e: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
    placeholder?: string | undefined;
    showCalendarTodayButton?: boolean | undefined;
    value?: string | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function FileInput({ acceptedFileTypes, children, className, errorMessage, hint, id, innerRef, isDisabled, isRequired, label, multiple, name, onChange, value, }: {
    acceptedFileTypes?: string | undefined;
    children?: ((file: File, removeFile: (file: File) => void) => React.ReactNode) | undefined;
    className?: string | undefined;
    errorMessage?: string | undefined;
    hint?: string | undefined;
    id: string;
    innerRef?: React.Ref<HTMLDivElement> | undefined;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    label: string;
    multiple?: boolean | undefined;
    name?: string | undefined;
    onChange?: ((files: FileList | null, event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    value?: FileList | undefined;
  }): React.JSX.Element;
  export function Form({ children, className, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
  }): React.JSX.Element;
  export function MultiSelectClearIcon({ isClearable, isDisabled, }: {
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
  }): React.JSX.Element | null;
  export function removeSelectedOption(draftContext: MultiSelectContextValue, addPoliteMessage: (message: string) => void, selectedValueIndex: number, selectedOption: ComboBoxOptionType, multiSelectContextNonStateRef: React.MutableRefObject<MultiSelectContextNonStateRef> | null, onChange: (newValues: string[]) => void): void;
  export function MultiSelectTagWrapper({ children, selectedOption, selectedValueIndex }: {
    children: React.ReactNode;
    selectedOption: ComboBoxOptionType;
    selectedValueIndex: number;
  }): React.JSX.Element | null;
  export function MultiSelectTags({ isDisabled }: {
    isDisabled: boolean | undefined;
  }): React.JSX.Element;
  export function MultiSelectComboBox({ allowCustomEntry, children, className, errorMessage, innerRef: draftInnerRef, isClearable, isDisabled, isRequired, label, labelClassName, name, onBlur, onCustomEntry, onFocus, placeholder, wrapperClassName, ...rest }: {
    allowCustomEntry?: boolean | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    errorMessage?: string | undefined;
    innerRef?: MutableRef<HTMLDivElement | null> | undefined;
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onBlur?: React.UIEventHandler<Element> | undefined;
    onFocus?: React.UIEventHandler<Element> | undefined;
    onCustomEntry?: ((customValue: string) => void) | undefined;
    placeholder?: string | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export default function MultiSelectContextProvider({ children, multiSelectId, defaultValues, onChange, onClear, values, }: {
    children: React.ReactNode;
    multiSelectId: string;
    defaultValues?: string[] | undefined;
    onChange?: ((newValues: string[]) => void) | undefined;
    onClear?: (() => void) | undefined;
    values?: string[] | undefined;
  }): React.JSX.Element;
  export function MultiSelect({ allowCustomEntry, children, className, defaultValues, errorMessage, id, innerRef, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, onCustomEntry, placeholder, values, wrapperClassName, ...rest }: {
    allowCustomEntry?: boolean | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    defaultValues?: string[] | undefined;
    errorMessage?: string | undefined;
    id: string;
    innerRef?: React.RefObject<HTMLDivElement | null> | undefined;
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onChange?: ((newValue: string[]) => void) | undefined;
    onClear?: (() => void) | undefined;
    onCustomEntry?: ((customValue: string) => void) | undefined;
    placeholder?: string | undefined;
    values?: string[] | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function MultiSelectOption({ children, isDisabled, isStatic, label, tagClassName, value, }: {
    children?: React.ReactNode;
    isDisabled?: boolean | undefined;
    isStatic?: boolean | undefined;
    label: string;
    tagClassName?: string | undefined;
    value: string;
  }): React.JSX.Element | null;
  export function MultiSelectOptionGroup({ children, label, }: {
    children: React.ReactNode;
    label: string;
  }): React.JSX.Element;
  export function MultiSelectTagTemplate({ children }: {
    children: (selectedValue: string, selectedOption: ComboBoxOptionType) => React.JSX.Element;
  }): null;
  export function PlainText({ className, innerRef, id, isLabelSkipped, label, labelClassName, value, wrapperClassName, ...rest }: {
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.Ref<HTMLDivElement> | undefined;
    isLabelSkipped?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    value?: React.ReactNode;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function useRadioButtonGroupContext(): RadioButtonGroupContext;
  export function RadioButton({ className, defaultIsChecked, id, innerRef, isDisabled, label, labelClassName, name, value, wrapperClassName, ...rest }: {
    className?: string | undefined;
    defaultIsChecked?: boolean | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    id: string;
    isDisabled?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    value: string;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function RadioButtonGroupContextProvider({ children, defaultValue, name, onChange, value, }: {
    children: React.ReactNode;
    defaultValue?: string | undefined;
    name: string;
    onChange?: ((newValue: string) => void) | undefined;
    value?: string | undefined;
  }): React.JSX.Element;
  export function RadioButtonGroup({ children, className, defaultValue, errorMessage, id, isRequired, label, onChange, value, }: {
    children: React.ReactNode;
    className?: string | undefined;
    defaultValue?: string | undefined;
    errorMessage?: string | undefined;
    id: string;
    isRequired?: boolean | undefined;
    label: string;
    onChange?: ((newValue: string) => void) | undefined;
    value?: string | undefined;
  }): React.JSX.Element;
  export function SelectOption({ className, innerRef, isDisabled, label, value, ...rest }: {
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLOptionElement> | undefined;
    isDisabled?: boolean | undefined;
    label: string;
    value: string | number;
  }): React.JSX.Element;
  export function Select({ children, className, defaultValue, errorMessage, innerRef, id, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, placeholder, value, wrapperClassName, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    defaultValue?: string | undefined;
    errorMessage?: string | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    id: string;
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onClear?: React.UIEventHandler<HTMLElement> | undefined;
    placeholder?: string | undefined;
    value?: string | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function Switch({ className, defaultValue, errorMessage, id, innerRef, isDisabled, label, labelClassName, labelOn, labelOff, name, onChange, size, sliderChildren, value, width, ...rest }: {
    className?: string | undefined;
    defaultValue?: boolean | undefined;
    errorMessage?: string | undefined;
    id: string;
    innerRef?: React.Ref<HTMLDivElement> | undefined;
    isDisabled?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    labelOn?: string | undefined;
    labelOff?: string | undefined;
    name?: string | undefined;
    onChange?: ((e: React.KeyboardEvent) => void) | undefined;
    size?: "small" | "medium" | "large" | undefined;
    sliderChildren?: React.ReactNode;
    value?: boolean | undefined;
    width?: number | undefined;
  }): React.JSX.Element;
  export function TextArea({ className, defaultValue, errorMessage, innerRef, id, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, placeholder, value, wrapperClassName, ...rest }: {
    className?: string | undefined;
    defaultValue?: string | undefined;
    errorMessage?: string | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    id: string;
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onChange?: React.ChangeEventHandler<Element> | undefined;
    onClear?: React.UIEventHandler<Element> | undefined;
    placeholder?: string | undefined;
    value?: string | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function TimeInput({ allowCustomEntry, className, defaultValue, errorMessage, hasTimePopup, id, innerRef, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, placeholder, timeFormat, timeRangeBegin, timeRangeEnd, timeRangeIncrement, value, wrapperClassName, ...rest }: {
    allowCustomEntry?: boolean | undefined;
    className?: string | undefined;
    defaultValue?: string | undefined;
    errorMessage?: string | undefined;
    hasTimePopup?: boolean | undefined;
    id: string;
    innerRef?: React.Ref<HTMLDivElement> | undefined;
    isClearable?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isRequired?: boolean | undefined;
    label: string;
    labelClassName?: string | undefined;
    name?: string | undefined;
    onChange?: ((newValue: string) => void) | undefined;
    onClear?: (() => void) | undefined;
    placeholder?: string | undefined;
    timeFormat?: string | undefined;
    timeRangeIncrement?: number | undefined;
    timeRangeBegin?: string | undefined;
    timeRangeEnd?: string | undefined;
    value?: string | undefined;
    wrapperClassName?: string | undefined;
  }): React.JSX.Element;
  export function ExternalLink({ children, href, ...rest }: {
    children: React.ReactNode;
    href: string;
  }): React.JSX.Element;
  export namespace menuTypes {
    let VERTICAL: MenuTypes;
    let HORIZONTAL: MenuTypes;
  }
  export function MenuItemNavLink({ currentMenuItem, innerRef, menuItem, menuType, }: {
    currentMenuItem?: WebsiteMainMenu | WebsiteMainMenuItem | undefined;
    innerRef?: React.RefObject<HTMLAnchorElement> | undefined;
    menuItem: WebsiteMainMenuItem & VerticalMenuMenuItemAdditions;
    menuType?: MenuTypes | undefined;
  }): React.JSX.Element;
  export function MenuItemInline({ currentMenuItem, menuItem, menuType, }: {
    currentMenuItem?: WebsiteMainMenu | WebsiteMainMenuItem | undefined;
    menuItem: WebsiteMainMenuItem & VerticalMenuMenuItemAdditions;
    menuType?: MenuTypes | undefined;
  }): React.JSX.Element;
  export function HorizontalMenu({ className, currentMenuItem, id, menu, titleTagClassName, titleTagName: TitleTagName, }: {
    className?: string | undefined;
    currentMenuItem?: WebsiteMainMenuItem | undefined;
    id: string;
    menu: WebsiteMainMenu;
    titleTagClassName?: string | undefined;
    titleTagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
  }): React.JSX.Element;
  export function LinkCallback({ actionDescription, callback, children, href, ...rest }: {
    actionDescription: string;
    callback: React.MouseEventHandler;
    children: React.ReactNode;
    href: string;
  }): React.JSX.Element;
  export function htmlDecode(input: string): string;
  export function OnThisPageHeadersLevel({ headersLevel }: {
    headersLevel: HierarchyNode[];
  }): React.JSX.Element;
  export type Header = {
    node: object;
    level: 2 | 3 | 4;
    children: Header[];
  };
  export function notNull<T>(value: T, errorMessage: string): NonNullable<T>;
  export function notNullArray<T>(array: T[] | null | undefined, errorMessage: string): NonNullable<T>[];
  export function findElementsByTagNameMatch(element: HTMLElement | null): Element[];
  export function groupElementsByHeaderLevel(headers: Element[]): HierarchyNode[];
  export function OnThisPage({ contentRef }: {
    contentRef: React.MutableRefObject<HTMLElement | null>;
  }): React.JSX.Element;
  export function MenuItemPlain({ currentMenuItem, menuItem, menuType, }: {
    currentMenuItem?: WebsiteMainMenu | WebsiteMainMenuItem | undefined;
    menuItem: WebsiteMainMenuItem & VerticalMenuMenuItemAdditions;
    menuType?: MenuTypes | undefined;
  }): React.JSX.Element;
  export function useClickOutside(refs: React.RefObject<HTMLElement | null>[], handler: React.EventHandler<any>, isDisabled?: boolean): void;
  export function MenuItemFlyout({ currentMenuItem, menuItem, menuType, triggerOnHover, }: {
    currentMenuItem?: WebsiteMainMenu | WebsiteMainMenuItem | undefined;
    menuItem: WebsiteMainMenuItem & VerticalMenuMenuItemAdditions;
    menuType?: MenuTypes | undefined;
    triggerOnHover?: boolean | undefined;
  }): React.JSX.Element;
  export function VerticalMenu({ className, currentMenuItem, menus, triggerOnHover, }: {
    className?: string | undefined;
    currentMenuItem?: WebsiteMainMenu | WebsiteMainMenuItem | undefined;
    menus: WebsiteMainMenu[];
    triggerOnHover?: boolean | undefined;
  }): React.JSX.Element;
  export function PaginationLink({ className, currentPageIndex, onChange, numberOfPages, label, pageIndex, ...rest }: {
    className?: string | undefined;
    currentPageIndex: number;
    label: string;
    numberOfPages: number;
    onChange: (newPageIndex: number) => void;
    pageIndex: number;
  }): React.JSX.Element;
  export function determinePaginationLinks({ currentPageIndex, numberOfPages }: {
    currentPageIndex: number;
    numberOfPages: number;
  }): {
    isEllipsis: boolean;
    title?: string;
    label: string | null;
    pageIndex: number;
  }[];
  export function Pagination({ ariaLabel, className, defaultValue, id, innerRef, onChange, itemsPerPage, totalNumberItems, value, wrapInElement, ...rest }: {
    ariaLabel?: string | undefined;
    className?: string | undefined;
    defaultValue?: number | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLElement | null> | undefined;
    onChange?: ((newValue: number) => void) | undefined;
    itemsPerPage: number;
    totalNumberItems: number;
    value?: number | undefined;
    wrapInElement?: "div" | "nav" | undefined;
  }): React.JSX.Element;
  export function usePaginatedList<ListT>({ list, pageIndex, itemsPerPage }: {
    list: ListT[];
    pageIndex: number;
    itemsPerPage: number;
  }): ListT[];
  export type BANNER_PLACEMENT = BannerPlacement;
  export namespace BANNER_PLACEMENT {
    let INLINE: BannerPlacement;
    let BOTTOM_LEFT: BannerPlacement;
    let BOTTOM_RIGHT: BannerPlacement;
    let BOTTOM_MIDDLE: BannerPlacement;
    let TOP_LEFT: BannerPlacement;
    let TOP_RIGHT: BannerPlacement;
    let TOP_MIDDLE: BannerPlacement;
  }
  export function Banner({ children, className, id, innerRef, onClose, position, size, }: {
    children?: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.Ref<HTMLDivElement> | undefined;
    onClose: React.MouseEventHandler;
    position?: BannerPlacement | undefined;
    size?: "small" | "medium" | "large" | undefined;
  }): React.JSX.Element;
  export function BannerIcon({ children, className, }: {
    children?: React.ReactNode;
    className?: string | undefined;
  }): React.JSX.Element;
  export function BannerMessage({ children, className, }: {
    children: React.ReactNode;
    className?: string | undefined;
  }): React.JSX.Element;
  export function Modal({ ariaLabelledBy, children, className, id, innerRef, onEscape, onClose, }: {
    ariaLabelledBy: string;
    children?: React.ReactNode;
    className?: string | undefined;
    id: string;
    innerRef?: React.Ref<HTMLDivElement> | undefined;
    onEscape?: React.KeyboardEventHandler<Element> | undefined;
    onClose?: React.MouseEventHandler<Element> | undefined;
  }): React.JSX.Element;
  export function ModalContent({ children, className, id, }: {
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
  }): React.JSX.Element;
  export function ModalFooter({ children, className, id, }: {
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
  }): React.JSX.Element;
  export function ModalTitle({ children, className, id, }: {
    children: React.ReactNode;
    className?: string | undefined;
    id: string;
  }): React.JSX.Element;
  export function useGlobalKeyEvent<KeyboardEventHandlerT>({ whichKeyCode, onKeyDown, onKeyUp }: {
    whichKeyCode: string;
    onKeyDown?: React.KeyboardEventHandler<KeyboardEventHandlerT> | undefined;
    onKeyUp?: React.KeyboardEventHandler<KeyboardEventHandlerT> | undefined;
  }): boolean;
  export function Popup({ ariaLabelledBy, children, className, hasCloseButton, id, innerRef: draftInnerRef, isVisible, offset, onVisibleChange, placement, referenceElement, role, ...rest }: {
    ariaLabelledBy: string;
    children: React.ReactNode;
    className?: string | undefined;
    hasCloseButton?: boolean | undefined;
    id: string;
    innerRef?: React.RefObject<HTMLDivElement | null> | undefined;
    isVisible: boolean;
    offset?: number | {mainAxis: number, crossAxis: number, alignmentAxis?: number} | undefined;
    onVisibleChange: (e: React.UIEvent, isVisible: boolean) => void;
    placement?: import("@utahdts/utah-design-system-header").PopupPlacement | undefined;
    referenceElement: React.RefObject<HTMLElement | null>;
    role: "dialog" | "grid" | "listbox" | "menu" | "tree";
  }): React.JSX.Element;
  export function Table({ children, className, id, innerRef, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLTableElement> | undefined;
    id?: string | undefined;
  }): React.JSX.Element;
  export function TableBody({ children, className, innerRef, id, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLTableSectionElement> | undefined;
    id?: string | undefined;
  }): React.JSX.Element;
  export function chainSorters(sorters: ((a: any, b: any, ...rest: any[]) => number)[], ...sorterParams: any): (a: any, b: any) => number;
  export function notNullMap<T>(value: T): NonNullable<T>;
  export function valueAtPath<ObjectT, ValueT>({ object, path }: {
    object: ObjectT | null;
    path: string;
  }): ValueT;
  export function useTableContext(): TableContextValue<any>;
  export function toSafeString(value: string | number | null | undefined): string;
  export function convertRecordsToFilterValue(records: TableRecord[], filterValues: Record<string, TableContextStateFilterValue>): TableRecordForFiltering[];
  export namespace tableConstants {
    let dateFilterSeparator: string;
  }
  export function createTableFilterFunctions(filterValues: Record<string, TableContextStateFilterValue>): Record<string, TableFilterFunction>;
  export function filterTableRecords(records: TableRecordForFiltering[], filterRules: Record<string, TableFilterFunction>): TableRecord[];
  export function TableBodyData<RecordT>({ children, recordIdField, records, }: {
    children: React.ReactNode;
    recordIdField: string;
    records: (RecordT & object)[];
  }): React.JSX.Element[] | null;
  export function TableCell({ children, className, id, innerRef, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
  }): React.JSX.Element;
  export function TableBodyDataCellTemplate<TableDataT>({ children, className, id, innerRef, onClick, onDoubleClick, recordFieldPath, ...rest }: {
    children?: React.ReactNode | ((record: TableBodyDataRowContextValue<TableDataT>) => React.JSX.Element);
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
    onClick?: ((param: (TableBodyDataRowContextValue<TableDataT> & {
      e: React.MouseEvent;
      record: TableDataT;
    })) => void) | undefined;
    onDoubleClick?: ((param: (TableBodyDataRowContextValue<TableDataT> & {
      e: React.MouseEvent;
      record: TableDataT;
    })) => void) | undefined;
    recordFieldPath?: string | undefined;
  }): React.JSX.Element;
  export function TableRow({ children, className, innerRef, id, onClick, onDoubleClick, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLTableRowElement> | undefined;
    id?: string | undefined;
    onClick?: React.MouseEventHandler<HTMLTableRowElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLTableRowElement> | undefined;
  }): React.JSX.Element | null;
  export function TableBodyDataRowTemplate<TableDataT>({ children, className, innerRef, onClick, onDoubleClick, ...rest }: {
    children: React.ReactNode;
    className?: string | ((rowContextData: TableBodyDataRowContextValue<TableDataT>) => string) | undefined;
    innerRef?: React.RefObject<HTMLTableRowElement> | undefined;
    onClick?: ((param: (TableBodyDataRowContextValue<TableDataT> & {
      e: React.MouseEvent;
    })) => void) | undefined;
    onDoubleClick?: ((param: (TableBodyDataRowContextValue<TableDataT> & {
      e: React.MouseEvent;
    })) => void) | undefined;
  }): React.JSX.Element;
  export function useTableFilterRegistration(recordFieldPath: string, defaultValue: string | number | undefined | null, filterOptions: TableContextStateFilterValueOptions): void;
  export function setValueAtPath<SetValueAtPathT>({ object, path, value }: {
    object: Record<string, any>;
    path: string;
    value: SetValueAtPathT;
  }): Record<string, any>;
  export function useCurrentValuesFromStateContext<ChangeEventT, TableDataT>({ contextStatePath, defaultOnChange, defaultValue, onChange, value, }: {
    contextStatePath: string;
    defaultOnChange: (e: ChangeEventT) => TableDataT;
    defaultValue: TableDataT | null;
    onChange?: ((e: ChangeEventT) => void) | undefined;
    value: TableDataT | null;
  }): {
    currentOnChange: (e: ChangeEventT) => TableDataT;
    currentValue: (TableDataT | null);
    setValue: (newValue: TableDataT) => void;
  };
  export function TableFilterComboBox({ a11yLabel, children, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    defaultValue?: string | number | undefined;
    exactMatch?: boolean | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
    id?: string | undefined;
    a11yLabel: string;
    onChange?: (() => {}) | undefined;
    placeholder?: string | undefined;
    recordFieldPath: string;
    value?: string | number | undefined;
  }): React.JSX.Element;
  export function TableFilterComboBoxAllOptions({ a11yLabel, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }: {
    className?: string | undefined;
    defaultValue?: string | number | undefined;
    exactMatch?: boolean | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
    a11yLabel: string;
    onChange?: (() => {}) | undefined;
    placeholder?: string | undefined;
    recordFieldPath: string;
    value?: string | undefined;
  }): React.JSX.Element;
  export function TableFilterComboBoxOption({ className, label, value, ...rest }: {
    className?: string | undefined;
    label: string;
    value: string;
  }): React.JSX.Element;
  export function TableContextConsumer<TableDataT>({ children }: {
    children: (tableContext: TableContextValue<TableDataT>) => (React.JSX.Element | null);
  }): React.JSX.Element | null;
  export function TableFilterCustom({ children, className, id, innerRef, ...rest }: {
    children: (params: {
      filterValues: TableContextStateFilterValueObject;
      setFilterValues: SetterFunc;
    }) => React.JSX.Element;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
  }): React.JSX.Element;
  export type SetterFunc = (setter: ((param: TableContextStateFilterValueObject) => void)) => void;
  export function TableFilterDateRangeButtonTitle({ currentValue, placeholder }: {
    currentValue: string | null;
    placeholder?: string | undefined;
  }): React.JSX.Element;
  export function TableFilterDateRangePopup({ dateFormat, id, isPopupOpen, onChange, popupReferenceElement, setIsPopupOpen, tableFilterDateId, value, }: {
    dateFormat?: string | undefined;
    id: string;
    isPopupOpen: boolean;
    onChange: (newValue: string) => void;
    popupReferenceElement: React.RefObject<HTMLDivElement>;
    setIsPopupOpen: (isPopupOpen: boolean) => void;
    tableFilterDateId: string;
    value: string;
  }): React.JSX.Element;
  export type BeginEndDate = "BEGIN" | "END";
  export function TableFilterDateRange({ className, dateFormat, defaultValue, innerRef, id, a11yLabel, onChange, placeholder, recordFieldPath, value, ...rest }: {
    className?: string | undefined;
    dateFormat?: string | undefined;
    defaultValue?: string | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
    id: string;
    a11yLabel: string;
    onChange?: ((newValue: string) => void) | undefined;
    placeholder?: string | undefined;
    recordFieldPath: string;
    value?: string | undefined;
  }): React.JSX.Element;
  export function TableFilterNone({ children, className, id, innerRef, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
  }): React.JSX.Element;
  export function TableFilterSelect<TableDataT>({ a11yLabel, children, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    defaultValue?: string | number | undefined;
    exactMatch?: boolean | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
    id?: string | undefined;
    a11yLabel: string;
    onChange?: ((e: React.ChangeEvent) => TableDataT) | undefined;
    placeholder?: string | undefined;
    recordFieldPath: string;
    value?: string | number | undefined;
  }): React.JSX.Element;
  export function TableFilterSelectAllOptions({ a11yLabel, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }: {
    className?: string | undefined;
    defaultValue?: string | number | undefined;
    exactMatch?: boolean | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
    a11yLabel: string;
    onChange?: (() => {}) | undefined;
    placeholder?: string | undefined;
    recordFieldPath: string;
    value?: string | undefined;
  }): React.JSX.Element;
  export function TableFilterSelectOption({ className, innerRef, label, value, ...rest }: {
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLOptionElement> | undefined;
    label: string;
    value: string | number;
  }): React.JSX.Element;
  export function TableFilterTextInput({ a11yLabel, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }: {
    className?: string | undefined;
    defaultValue?: string | undefined;
    exactMatch?: boolean | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
    id?: string | undefined;
    a11yLabel: string;
    onChange?: ((e: React.ChangeEvent) => (string | void | undefined)) | undefined;
    placeholder?: string | undefined;
    recordFieldPath: string;
    value?: string | undefined;
  }): React.JSX.Element;
  export function TableFilters<TableDataT>({ children, className, defaultValue, id, innerRef, onChange, value, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    defaultValue?: TableContextStateFilterValueObject | undefined;
    innerRef?: React.RefObject<HTMLTableRowElement> | undefined;
    id?: string | undefined;
    onChange?: ((param: {
      recordFieldPath: string;
      value: TableDataT;
    }) => TableDataT) | null | undefined;
    value?: TableContextStateFilterValueObject | undefined;
  }): React.JSX.Element;
  export function TableFoot({ children, className, id, innerRef, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableSectionElement> | undefined;
  }): React.JSX.Element;
  export function TableFootCell({ children, className, id, innerRef, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
  }): React.JSX.Element;
  export function TableFootRow({ children, className, id, innerRef, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableRowElement> | undefined;
  }): React.JSX.Element;
  export function TableHead({ children, className, id, innerRef, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLTableSectionElement> | undefined;
    id?: string | undefined;
  }): React.JSX.Element;
  export function TableHeadCell({ children, className, id, innerRef, onClick, recordFieldPath, scope, tableSortingFieldPaths, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
    onClick?: ((e: React.MouseEvent<HTMLElement>) => {}) | undefined;
    recordFieldPath?: string | undefined;
    scope?: "col" | "colgroup" | "row" | "rowgroup" | undefined;
    tableSortingFieldPaths?: string[] | undefined;
  }): React.JSX.Element;
  export function TableHeadRow({ children, className, innerRef, id, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLTableRowElement> | undefined;
    id?: string | undefined;
  }): React.JSX.Element;
  export function TablePagination({ ariaLabel, className, id, innerRef, itemsPerPage, wrapInElement, ...rest }: {
    ariaLabel?: string | undefined;
    className?: string | undefined;
    id: string;
    innerRef?: React.RefObject<HTMLElement | HTMLDivElement | null> | undefined;
    itemsPerPage: number;
    wrapInElement?: "div" | "nav" | undefined;
  }): React.JSX.Element;
  export function TableSortingRule<TableDataT>({ a11yLabel, customSort, defaultIsAscending, fieldType, recordFieldPath, }: {
    a11yLabel: string;
    customSort?: TableSortingFunc<TableDataT> | undefined;
    defaultIsAscending?: boolean | undefined;
    fieldType?: TableSortingRuleFieldType | undefined;
    recordFieldPath?: string | undefined;
  }): null;
  export function TableSortingRules({ children, defaultValue, onChange, value, }: {
    children: React.ReactNode;
    defaultValue?: string | undefined;
    onChange?: ((param: {
      recordFieldPath: string;
    }) => void) | undefined;
    value?: string | undefined;
  }): React.JSX.Element;
  export namespace tableSortingRuleFieldType {
    let DATE: TableSortingRuleFieldType;
    let NUMBER: TableSortingRuleFieldType;
    let STRING: TableSortingRuleFieldType;
  }
  export function TableWrapper<TableDataT>({ children, className, id, innerRef, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    id?: string | undefined;
  }): React.JSX.Element;
  export function MainContent({ children, className, id, innerRef, ...rest }: {
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    innerRef?: React.RefObject<HTMLElement> | undefined;
  }): React.JSX.Element;
  export function DocumentationTemplate({ content: Content, contentRef, sidePanelRightContent, sidePanelLeftContent, }: {
    content: () => React.JSX.Element;
    contentRef?: React.RefObject<HTMLElement> | undefined;
    sidePanelRightContent: React.ReactNode;
    sidePanelLeftContent?: React.ReactNode;
  }): React.JSX.Element;
  export function LandingTemplate({ content: Content }: {
    content: () => React.JSX.Element;
  }): React.JSX.Element;
  export function Badge({ children, className, innerRef, title, ...rest }: {
    children?: React.ReactNode;
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    title: string;
  }): React.JSX.Element;
  export namespace skeletonTypes {
    let CIRCULAR: SkeletonTypes;
    let LINEAR: SkeletonTypes;
    let RECTANGULAR: SkeletonTypes;
  }
  export function Skeleton({ className, innerRef, type, ...rest }: {
    className?: string | undefined;
    innerRef?: React.RefObject<HTMLDivElement> | undefined;
    type?: SkeletonTypes | undefined;
  }): React.JSX.Element;
  export type ariaLiveTypes = AriaLiveType;
  export namespace ariaLiveTypes {
    let ASSERTIVE: AriaLiveType;
    let POLITE: AriaLiveType;
  }
  export function AriaLiveMessages({ ariaLiveType, messages }: {
    ariaLiveType: AriaLiveType;
    messages: React.ReactNode[];
  }): React.JSX.Element;
  export type MessageObject = {
    id: string;
    message: React.ReactNode;
  };
  export function useBanner(): {
    addBanner: (arg0: UtahDesignSystemContextBanner) => void;
    removeBanner: (arg0: UtahDesignSystemContextBanner) => void;
  };
  export function BannersGlobal({ banners, bannerDuration }: {
    banners: UtahDesignSystemContextBannerWithId[];
    bannerDuration?: number | undefined;
  }): React.JSX.Element;
  export function UtahDesignSystemContextProvider({ children, defaultSettings }: {
    children: React.ReactNode;
    defaultSettings?: UtahDesignSystemDefaultSettings | undefined;
  }): React.JSX.Element;
  export const UtahHeaderContext: React.Context<{
    settings: import("@utahdts/utah-design-system-header").Settings;
    setSettings: import("use-immer").Updater<import("@utahdts/utah-design-system-header").Settings>;
    settingsRef: React.RefObject<import("@utahdts/utah-design-system-header").Settings>;
  }>;
  export function useImmerRef<StateT>(defaultState: StateT): [StateT, import("use-immer").Updater<StateT>, React.MutableRefObject<StateT>];
  export function UtahHeaderContextProvider({ children, defaultSettings }: {
    children: React.ReactNode;
    defaultSettings?: Partial<import("@utahdts/utah-design-system-header").Settings> | undefined;
  }): React.JSX.Element;
  export function useUtahHeaderContext(): {
    settings: import("@utahdts/utah-design-system-header").Settings;
    setSettings: import("use-immer").Updater<import("@utahdts/utah-design-system-header").Settings>;
    settingsRef: React.RefObject<import("@utahdts/utah-design-system-header").Settings>;
  };
  export function useMountingTracker(title: string): void;
  export function useRefLazy<T>(lazyValue: T | (() => T)): React.MutableRefObject<T>;
  export function useTimeout(delay: number, isDebounced: boolean): (callback: (() => void)) => void;
  export function handleKeyPress<KeyboardEventHandlerT>(code: string, handler: React.EventHandler<any>): React.KeyboardEventHandler<KeyboardEventHandlerT>;
  export type KeyboardEventHandler<KeyboardEventHandlerT> = React.KeyboardEventHandler<KeyboardEventHandlerT>;
  export function rectContainsPoint(rect: DOMRect, point: {
    x: number;
    y: number;
  }): boolean;
  export function stringToId(inputString: string): string;
  export const version: string;
  export type ChildrenMenuTypes = import("@utahdts/utah-design-system-header").ChildrenMenuTypes;
  export type MenuItemFunctionUrlAction = import("@utahdts/utah-design-system-header").MenuItemFunctionUrlAction;
  export type MenuItemUrlAction = import("@utahdts/utah-design-system-header").MenuItemUrlAction;
  export type ImmerHook<ImmerHookT> = import("use-immer").ImmerHook<ImmerHookT>;
  export type MutableRef<MutableRefT> = React.RefCallback<MutableRefT> | React.MutableRefObject<MutableRefT> | null;
  export type AriaLiveType = "assertive" | "polite";
  export type ButtonAppearance = "solid" | "outlined";
  export type ButtonTypes = "button" | "reset" | "submit";
  export type ComponentColors = "primary" | "secondary" | "accent" | "none";
  export type FormElementSizes = "small3x" | "small2x" | "small1x" | "small" | "medium" | "large" | "large1x";
  export type MenuTypes = "vertical" | "horizontal";
  export type SkeletonTypes = "skeleton--circle" | "skeleton--line" | "skeleton--rectangle";
  export type IconButtonAppearance = "solid" | "outlined" | "borderless";
  export type BannerPlacement = "inline" | "bottom" | "bottom-left" | "bottom-right" | "top" | "top-left" | "top-right";
  export type DrawerPlacement = "drawer--right" | "drawer--left";
  export type PopupPlacement = "auto" | "auto-start" | "auto-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end" | "top" | "top-start" | "top-end";
  export type TableSortingRuleFieldType = "date" | "number" | "string";
  export type WrapInElement = "div" | "nav";
  export type Event = MouseEvent | TouchEvent | KeyboardEvent;
  export type EventAction = ((e: Event) => void);
  export type EventActionBoolean = ((e: Event) => boolean);
  export type RecordFieldPath = string;
  export type RecordOnChangeFunc<TableDataT> = (param: {
    recordFieldPath: string;
    value: TableDataT;
  }) => TableDataT;
  export type TableBodyDataRowContextValue<TableDataT> = {
    record: TableDataT | null;
  };
  export type TableContextState<TableDataT> = {
    currentSortingOrderIsDefault: boolean;
    filterValues: TableContextStateFilterValues<TableDataT>;
    pagination?: TablePaginationType | undefined;
    sortingRules: Record<string, TableSortingRuleType<TableDataT>>;
    tableData: {
      allData: TableDataT[];
      filteredData: TableDataT[];
    };
    tableId: string;
    tableSortingOnChange: ((param: {
      recordFieldPath: RecordFieldPath;
    }) => void) | null;
    tableSortingFieldPath: RecordFieldPath | null;
    tableSortingFieldPaths: RecordFieldPath[] | null;
  };
  export type TableContextValue<TableDataT> = {
    allData: TableDataT[];
    filteredData: TableDataT[];
    registerSortingRule: (sortingRule: TableSortingRuleType<TableDataT>) => void;
    unregisterSortingRule: (recordFieldPath: string) => void;
    setBodyData: (allData: TableDataT[], filteredData: TableDataT[]) => void;
    setState: import("use-immer").Updater<TableContextState<TableDataT>>;
    state: TableContextState<TableDataT>;
  };
  export type TableContextStateFilterValueOptions = {
    exactMatch?: boolean | undefined;
    dateRangeDateFormat?: string | undefined;
    isDateRange?: boolean | undefined;
  };
  export type TableContextStateFilterValue = {
    value: string | number;
    options: TableContextStateFilterValueOptions;
  };
  export type TableContextStateFilterValueObject = Record<string, TableContextStateFilterValue>;
  export type TableFilterFunction = (value: string) => boolean;
  export type TableFilterOptions = {
    exactMatch: boolean;
  };
  export type TableRecord = Record<string, any>;
  export type TableRecordForFiltering = {
    record: Record<string, any>;
    filterFields: Record<string, string>;
  };
  export type TablePaginationType = {
    currentPageIndex: number;
    itemsPerPage: number;
  };
  export type TabGroupContextValue = {
    isVertical: boolean;
    navigateNext: () => void;
    navigatePrevious: () => void;
    registerTab: (tab: React.RefObject<HTMLButtonElement | null> | null) => void;
    selectedTabId: string;
    setSelectedTabId: (tabId: string) => void;
    tabGroupId: string;
    unRegisterTab: (tab: React.RefObject<HTMLButtonElement | null> | null) => void;
  };
  export type UtahDesignSystemContextBannerWithId = {
    className?: string | undefined;
    duration?: number | undefined;
    id: string;
    icon?: React.ReactNode;
    message: React.ReactNode;
    onClose?: ((e: React.MouseEvent | undefined) => void) | undefined;
    position?: BannerPlacement | undefined;
    size?: "small" | "medium" | "large" | undefined;
  };
  export type UtahDesignSystemContextBanner = {
    className?: string | undefined;
    duration?: number | undefined;
    id?: string | undefined;
    icon?: React.ReactNode;
    message: React.ReactNode;
    onClose?: ((e: React.MouseEvent | undefined) => void) | undefined;
    position?: BannerPlacement | undefined;
    size?: "small" | "medium" | "large" | undefined;
  };
  export type UtahDesignSystemDefaultSettings = {
    bannerDuration?: number | undefined;
  };
  export type TableSortingFunc<TableDataT> = (param: {
    fieldValueA: any;
    fieldValueB: any;
    recordA: TableDataT;
    recordAIndex: number;
    recordB: TableDataT;
    recordBIndex: number;
    records: TableDataT[];
  }) => number;
  export type TableSortingRuleType<TableDataT> = {
    a11yLabel: string;
    customSort: TableSortingFunc<TableDataT> | null;
    defaultIsAscending: boolean;
    fieldType: TableSortingRuleFieldType;
    recordFieldPath: string;
    sorter?: ((a: {
      record: TableDataT;
      recordIndex: number;
    }, b: {
      record: TableDataT;
      recordIndex: number;
    }, records: TableDataT[]) => number) | undefined;
  };
  export type TableContextStateFilterValues<TableDataT> = {
    defaultValue: Record<string, any> | null;
    onChange: ((param: {
      recordFieldPath: string;
      value: TableDataT;
    }) => TableDataT) | null;
    value: TableContextStateFilterValueObject;
  };
  export type Address = {
    city: string;
    state: string;
    streetAddress1: string;
    streetAddress2?: string | undefined;
    zipCode: string;
  };
  export type CalendarGridValue = {
    date: Date;
    isFocusDate: boolean;
    isNextMonth: boolean;
    isPreviousMonth: boolean;
    isSelectedDate: boolean;
    isTodayDate: boolean;
  };
  export type CalendarGridWeek = [CalendarGridValue, CalendarGridValue, CalendarGridValue, CalendarGridValue, CalendarGridValue, CalendarGridValue, CalendarGridValue];
  export type CalendarGridMonth = CalendarGridWeek[];
  export type ComboBoxOptionType = {
    isGroupLabel?: boolean | undefined;
    isHidden?: boolean | undefined;
    labelLowerCase: string;
    label: string;
    optionGroupId?: string | undefined;
    value: string;
  };
  export type ComboBoxContextNonStateRef = {
    textInput: HTMLInputElement | null;
  };
  export type ComboBoxContext = [ComboBoxContextValue, import("use-immer").Updater<ComboBoxContextValue>, React.MutableRefObject<ComboBoxContextNonStateRef>];
  export type ComboBoxOptionGroupContextValue = string;
  export type ComboBoxContextValue = {
    filterValue: string;
    isFilterValueDirty: boolean;
    isOptionsExpanded: boolean;
    isValueClearedOnSelection: boolean;
    optionValueFocused: string | null;
    optionValueFocusedId: string | null;
    optionValueHighlighted: string | null;
    optionValueSelected: string | null;
    options: ComboBoxOptionType[];
    optionsFiltered: ComboBoxOptionType[];
    optionsFilteredWithoutGroupLabels: ComboBoxOptionType[];
    onChange: (newValue: string) => void;
    onClear?: (() => void) | undefined;
    onKeyUp?: ((e: Event, currentFilterValue: string) => boolean) | undefined;
    registerOption: (option: ComboBoxOptionType) => void;
    unregisterOption: (value: string) => void;
  };
  export type MenuItem = {
    link: string;
    pageTitle: string;
    parentLinks: string[];
  };
  export type MultiSelectContextNonStateRef = {
    comboBoxDivElement: HTMLElement | null;
    selectedOptionTagRefs: (HTMLLIElement | null)[];
    textInput: HTMLInputElement | null;
  };
  export type MultiSelectContext = [MultiSelectContextValue, import("use-immer").Updater<MultiSelectContextValue>, React.MutableRefObject<MultiSelectContextNonStateRef> | null];
  export type MultiSelectContextValue = {
    clearButtonHasFocus: boolean;
    comboBoxOptions: ComboBoxOptionType[];
    focusedValueTagIndex: number;
    isOptionsExpanded: boolean;
    multiSelectId: string;
    onChange: ((newValues: string[]) => void);
    onClear: (() => void);
    optionTagClassNames: Record<string, string>;
    selectedValues: string[];
    tagTemplate: ((selectedValue: string, selectedOption: ComboBoxOptionType) => React.JSX.Element) | null;
    textInputHasFocus: boolean;
  };
  export type MultiSelectTagTemplate = (selectedValue: string) => React.JSX.Element;
  export type RadioButtonGroupContext = import("use-immer").ImmerHook<RadioButtonGroupContextValue | undefined>;
  export type RadioButtonGroupContextValue = {
    onChange: (newValue: string) => void;
    name: string;
    value: string | null;
  };
  export type UtahDesignSystemContextAria = {
    assertiveMessages: string[];
    politeMessages: string[];
  };
  export type UtahDesignSystemContextValue = {
    ariaLive: UtahDesignSystemContextAria;
    banners: UtahDesignSystemContextBannerWithId[];
  };
  export type VerticalMenuMenuItemAdditions = {
    actionUrl?: import("@utahdts/utah-design-system-header").MenuItemUrlAction | undefined;
    actionFunction?: EventAction | undefined;
    actionFunctionUrl?: import("@utahdts/utah-design-system-header").MenuItemFunctionUrlAction | undefined;
  };
  export type WebsiteMainMenuItem = {
    id?: string | undefined;
    link?: string | undefined;
    title: string;
    parentLinks?: string[] | undefined;
    children?: WebsiteMainMenuItem[] | undefined;
    childrenMenuType?: import("@utahdts/utah-design-system-header").ChildrenMenuTypes | null | undefined;
    isSelected?: boolean | undefined;
    isAlternatePath?: boolean | undefined;
  };
  export type WebsiteMainMenu = {
    children?: WebsiteMainMenuItem[] | undefined;
    header: string;
    id: string;
    menuItems: WebsiteMainMenuItem[];
    isSelected?: boolean | undefined;
    parentLinks?: string[] | undefined;
    titleTagName?: string | undefined;
    titleTagClassName?: string | undefined;
  };
  export type HierarchyNode = {
    children: HierarchyNode[];
    level: number;
    node: Element;
  };
  export type BUTTON_APPEARANCE = ButtonAppearance;
  export namespace BUTTON_APPEARANCE {
    let SOLID: ButtonAppearance;
    let OUTLINED: ButtonAppearance;
  }
  export type BUTTON_TYPES = ButtonTypes;
  export namespace BUTTON_TYPES {
    let BUTTON: ButtonTypes;
    let RESET: ButtonTypes;
    let SUBMIT: ButtonTypes;
  }
  export type ICON_BUTTON_APPEARANCE = IconButtonAppearance;
  export namespace ICON_BUTTON_APPEARANCE {
    let SOLID_1: IconButtonAppearance;
    export { SOLID_1 as SOLID };
    let OUTLINED_1: IconButtonAppearance;
    export { OUTLINED_1 as OUTLINED };
    export let BORDERLESS: IconButtonAppearance;
  }
  export function Button({ appearance, children, className, color, innerRef, isBusy, iconLeft, iconRight, isDisabled, id, onClick, size, type, ...rest }: {
    appearance?: ButtonAppearance | undefined;
    children: React.ReactNode;
    className?: string | undefined;
    color?: ComponentColors | undefined;
    innerRef?: React.RefObject<HTMLButtonElement> | undefined;
    iconLeft?: React.ReactNode | undefined;
    iconRight?: React.ReactNode | undefined;
    id?: string | undefined;
    isBusy?: boolean | undefined;
    isDisabled?: boolean | undefined;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    size?: FormElementSizes | undefined;
    type?: ButtonTypes | undefined;
  }): React.JSX.Element;
  export function TableFilterDate<TableDataT>({ a11yLabel, className, defaultValue, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }: {
    className?: string | undefined;
    defaultValue?: TableDataT | undefined;
    innerRef?: React.RefObject<HTMLTableCellElement> | undefined;
    id?: string | undefined;
    a11yLabel: string;
    onChange?: ((e: React.ChangeEvent) => TableDataT) | undefined;
    placeholder?: string | undefined;
    recordFieldPath: string;
    value?: TableDataT | undefined;
  }): React.JSX.Element;
  export function useDebugDidIChange<FieldT>(field: FieldT, fieldName: string): void;
  export function useDebugDidIChanges(fields: Record<string, any> | undefined | null, description?: string | undefined): void;
}
