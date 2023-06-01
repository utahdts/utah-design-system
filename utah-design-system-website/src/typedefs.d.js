// @ts-check
/* eslint-disable max-len */
/**
 * PageUrl
 * @typedef { '/guidelines/accessibility' | '/library/components/accordion/accordion' | '/library/components/widgetsIndicators/badges' | '/library/components/widgetsIndicators/banners' | '/library/components/navigation/breadcrumb' | '/library/components/buttons/button' | '/library/components/buttons/buttonGroup' | '/library/components/popups/callout' | '/library/components/containers/card' | '/library/components/containers/carousel' | '/library/components/forms/checkbox' | '/library/components/containers/codeBlock' | '/foundation/color' | '/guidelines/color' | '/resources/colorPicker' | '/library/components/forms/comboBox' | '/library/components/buttons/confirmationButton' | '/library/components/containers' | '/resources/contributeCommunity' | '/library/components/widgetsIndicators/counter' | '/library/components/forms/dateInput' | '/resources/demoPage' | '/foundation/depthElevationShadows' | '/guidelines/design' | '/library/components/containers/drawers' | '/errors/404' | '/library/components/forms' | '/foundation' | '/resources/gettingStarted' | '/resources/github' | '/guidelines' | '/library/components/navigation/hamburger' | '/library/components/basic/headings' | '/resources/help' | '/' | '/library/components/basic/dividers' | '/library/components/forms/fileInput' | '/library/components/buttons/iconBar' | '/library/components/buttons/iconButton' | '/resources/icons' | '/foundation/images' | '/library/components/forms/infoBox' | '/foundation/layout' | '/library' | '/library/components/basic/links' | '/library/components/lists/lists' | '/library/components/navigation/mainMenu' | '/library/components/maps' | '/resources/mockups' | '/library/modals' | '/foundation/motionTiming' | '/library/components/forms/multiSelect' | '/guidelines/notifications' | '/foundation/opacity' | '/library/components/navigation/pagination' | '/library/components/basic/paragraphs' | '/library/components/navigation/popups' | '/guidelines/principles' | '/library/components/widgetsIndicators/processList' | '/library/components/widgetsIndicators/progressBars' | '/library/components/forms/radioButton' | '/resources' | '/library/components/buttons/segmentedButton' | '/Library/components/forms/select' | '/foundation/shape' | '/library/components/navigation/sidePanel' | '/foundation/skeletons' | '/library/components/basic/skipLink' | '/foundation/spacing' | '/library/components/widgetsIndicators/spinners' | '/library/components/widgetsIndicators/stepIndicator' | '/library/components/widgetsIndicators/statusIndicator' | '/library/components/forms/switch' | '/library/components/table/table' | '/library/components/containers/tabs' | '/library/components/basic/tags' | '/library/components/forms/textArea' | '/library/components/forms/textInput' | '/library/components/forms/timeInput' | '/library/components/tooltips' | '/foundation/typography' | '/library/patterns/utahFooter' | '/library/patterns/utahHeader' | '/guidelines/uxBestPractices' | '/guidelines/validation' | '/library/components/navigation/verticalMenu' } PageUrl
 */
/**
 * WebsiteMainMenuKey
 * @typedef { 'menuMain' | 'menuFoundationSecondary' | 'menuGuidelinesSecondary' | 'menuLibraryComponentsSecondary' | 'menuLibraryPatternsSecondary' | 'menuResourcesSecondary' } WebsiteMainMenuKey
 */

/**
 * @typedef WebsiteMainMenuItem {
 *  @property {string} [id]
 *  @property {PageUrl} [link]
 *  @property {string} title
 *  @property {PageUrl[]} [parentLinks]
 *  @property {WebsiteMainMenuItem[]} [children]
 * }
 */

/**
 * see constructMainMenu() to see a website.WebsiteMainMenu being converted to a header.MainMenu
 * @typedef WebsiteMainMenu {
 *  @property {string} header
 *  @property {string} id
 *  @property {WebsiteMainMenuItem[]} menuItems
 * }
 */

/**
 * @typedef {{[key in WebsiteMainMenuKey]: WebsiteMainMenu}} WebsiteAllMenus
 */

export default false;
