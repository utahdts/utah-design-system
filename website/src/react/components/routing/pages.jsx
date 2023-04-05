import layoutTemplatesEnum from '../../enums/layoutTemplatesEnum';
import menusEnum from '../../enums/menusEnum';
import Demo from '../demo/Demo';
import HomeLanding from '../websiteContent/HomeLanding';
import PLACEHOLDERDOCUMENTATION from '../websiteContent/PLACEHOLDERDOCUMENTATION';
import FoundationLanding from '../websiteContent/foundation/FoundationLanding';
import GuidelinesLanding from '../websiteContent/guidelines/GuidelinesLanding';
import LibraryLanding from '../websiteContent/library/LibraryLanding';
import ButtonDocumentation from '../websiteContent/library/components/buttons/button/ButtonDocumentation';
import ConfirmationButtonDocumentation from '../websiteContent/library/components/buttons/confirmationButton/ConfirmationButtonDocumentation';
import IconButtonDocumentation from '../websiteContent/library/components/buttons/iconButton/IconButtonDocumentation';
import SegmentedButtonDocumentation from '../websiteContent/library/components/buttons/segmentedButton/SegmentedButtonDocumentation';
import DateInputDocumentation from '../websiteContent/library/components/forms/dateInput/DateInputDocumentation';
import SwitchDocumentation from '../websiteContent/library/components/forms/Switch/SwitchDocumentation';
import TextInputDocumentation from '../websiteContent/library/components/forms/TextInput/TextInputDocumentation';
import VerticalMenuDocumentation from '../websiteContent/library/components/navigation/verticalMenu/VerticalMenuDocumentation';
import PopupsDocumentation from '../websiteContent/library/components/popups/popups/PopupsDocumentation';
import TableDocumentation from '../websiteContent/library/components/table/TableDocumentation';
import TooltipsDocumentation from '../websiteContent/library/components/tooltips/TooltipsDocumentation';
import BadgesDocumentation from '../websiteContent/library/components/widgetsIndicators/badges/BadgesDocumentation';
import UtahHeaderDocumentation from '../websiteContent/library/patterns/UtahHeaderDocumentation/UtahHeaderDocumentation';
import IconsDocumentation from '../websiteContent/resources/IconsDocumentation/Icons/IconsDocumentation';
import Mockups from '../websiteContent/resources/Mockups';
import ResourcesLanding from '../websiteContent/resources/ResourcesLanding';
import pageUrls from './pageUrls';

/**
 * React Router v6 added the useRoutes() hook which takes a list of objects to treat as routes
 * WE WANT THIS! but it's not quite fully baked yet as it only returns a component and not the
 * full object of the matching page. So this is an attempt to be similar enough to useRoutes()
 * object styling that we can jump on the bandwagon at a later date but keep doing our machoer
 * approach at this time.
 *
 *  interface Page {
 *    content: React.FC,
 *    link: string | (() => string)),
 *    menuSecondary: PropTypes.oneOf(menusEnum.SECONDARY_MENU_...),
 *    pageTitle: string | (() => string)),
 *    template: PropTypes.oneOf(layoutTemplatesEnum),
 *  }
 *
 * helpful hooks:
 * --- usePageUrl ---
 *  const url = usePageUrl({page});
 *    Example:
 *      const history = useHistory();
 *      const url = usePageUrl({page: pages.home, anchor: 'exampleJunk'});
 *      const onClick = () => history.push(url);
 *
 * --- useGoToPageUrl ---
 *  const gotoUrl = useGoToPageUrl({page});
 *    Example:
 *      const gotoUrl = usePageUrl({page: pages.home, anchor: 'exampleJunk'});
 *      <button onClick={gotoUrl}>go to url</button>
 *
 * Rules of thumb:
 *  - Use react-router's <NavLink> as much as possible instead of history.push()
 *    This allows opening in a new tab and other common browser features
 *    that don't work when solely `history.push()` is used
 */

const pages = {
  // === Main top menu pages === //
  home: {
    content: HomeLanding,
    link: pageUrls.home,
    pageTitle: 'Home',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  },

  guidelines: {
    content: GuidelinesLanding,
    link: pageUrls.guidelines,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Guidelines/Standards',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  foundation: {
    content: FoundationLanding,
    link: pageUrls.foundation,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Foundation',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  library: {
    content: LibraryLanding,
    link: pageUrls.library,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Library',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  resources: {
    content: ResourcesLanding,
    link: pageUrls.resources,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Resources',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === guidelines documentation components === //
  accessibility: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.accessibility,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Accessibility',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  colorGuidelines: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.colorGuidelines,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Color',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  design: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.design,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Design',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  notifications: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.notifications,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Notifications',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  principles: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.principles,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Principles',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  uxBestPractices: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.uxBestPractices,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'UX Best Practices',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === foundation documentation components === //
  spacing: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.spacing,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Spacing',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  typography: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.typography,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Typography',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  depthElevationShadows: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.depthElevationShadows,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Depth / Elevation / Shadows',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  shape: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.shape,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Shape (rounded corners)',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  motionTiming: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.motionTiming,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Motion / Timing',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  colorFoundation: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.colorFoundation,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Color',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  layout: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.layout,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Layout (Flex, Grid System)',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  opacity: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.opacity,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Opacity',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === library documentation components === //
  components: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.components,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Components',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  patterns: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.patterns,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Patterns',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  utahHeader: {
    content: UtahHeaderDocumentation,
    link: pageUrls.utahHeader,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Utah Header',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  templates: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.templates,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Templates',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === resources documentation components === //
  github: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.github,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'GitHub',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  mockups: {
    content: Mockups,
    link: pageUrls.mockups,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Mockups',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  demo: {
    content: Demo,
    link: pageUrls.demoPage,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Demo Page',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  },
  colorPicker: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.colorPicker,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Color Picker',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  icons: {
    content: IconsDocumentation,
    link: pageUrls.icons,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Icons',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  contributeCommunity: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.contributeCommunity,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Contribute / Community',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  help: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.help,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Help',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === library documentation components === //
  // === basic atomic === //
  anchors: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.anchors,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Anchors',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  horizontalRule: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.horizontalRule,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Horizontal Rule',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  links: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.links,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Links',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  tags: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.tags,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Tags',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  type: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.type,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Type and Text',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === buttons === //
  button: {
    content: ButtonDocumentation,
    link: pageUrls.button,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  modals: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.modals,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Modals',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  buttonGroup: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.buttonGroup,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Button Group',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  confirmationButton: {
    content: ConfirmationButtonDocumentation,
    link: pageUrls.confirmationButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Confirmation Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  iconButton: {
    content: IconButtonDocumentation,
    link: pageUrls.iconButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Icon Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  segmentedButton: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.segmentedButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Segmented Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === widgets & indicators === //
  badges: {
    content: BadgesDocumentation,
    link: pageUrls.badges,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Badges',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === forms === //
  checkbox: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.checkbox,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Checkbox',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  comboBox: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.comboBox,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Combo Box',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  dateInput: {
    content: DateInputDocumentation,
    link: pageUrls.dateInput,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Date Input',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  multiSelect: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.multiSelect,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Multi Select',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  radioButton: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.radioButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Radio Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  switch: {
    content: SwitchDocumentation,
    link: pageUrls.switch,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Switch',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  textArea: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.textArea,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Text Area',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  textInput: {
    content: TextInputDocumentation,
    link: pageUrls.textInput,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Text Input',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  validation: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.validation,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Validation',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === Navigation === //
  sidePanelNavigation: {
    content: PLACEHOLDERDOCUMENTATION,
    link: pageUrls.sidePanelNavigation,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Side Panel Navigation',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  verticalMenu: {
    content: VerticalMenuDocumentation,
    link: pageUrls.verticalMenu,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Vertical Menu',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === Popups === //
  popups: {
    content: PopupsDocumentation,
    link: pageUrls.popups,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Popups',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === table === //
  table: {
    content: TableDocumentation,
    link: pageUrls.table,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Table',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === tooltips === //
  tooltips: {
    content: TooltipsDocumentation,
    link: pageUrls.tooltips,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Tooltips',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // will go away VVVVVVVV
  forms: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.forms,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Forms',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  form: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.form,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Form',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  buttons: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.buttons,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Buttons',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  errorPage404: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.errorPage404,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: '404 Page',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

};

export default pages;
