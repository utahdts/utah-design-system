import layoutTemplatesEnum from '../../enums/layoutTemplatesEnum';
import menusEnum from '../../enums/menusEnum';
import Demo from '../demo/Demo';
import HomeLanding from '../websiteContent/HomeLanding';
import PlaceHolderDocumentation from '../websiteContent/PlaceHolderDocumentation';
import FoundationLanding from '../websiteContent/foundation/FoundationLanding';
import TypographyDocumentation from '../websiteContent/foundation/TypographyDocumentation';
import GuidelinesLanding from '../websiteContent/guidelines/GuidelinesLanding';
import LibraryLanding from '../websiteContent/library/LibraryLanding';
import DividersDocumentation from '../websiteContent/library/components/basicAtomic/Dividers/DividersDocumentation';
import HeadlineDocumentation from '../websiteContent/library/components/basicAtomic/Headings/HeadingsDocumentation';
import TagsDocumentation from '../websiteContent/library/components/basicAtomic/TagsDocumentation/TagsDocumentation';
import ButtonDocumentation from '../websiteContent/library/components/buttons/button/ButtonDocumentation';
import ConfirmationButtonDocumentation from '../websiteContent/library/components/buttons/confirmationButton/ConfirmationButtonDocumentation';
import IconButtonDocumentation from '../websiteContent/library/components/buttons/iconButton/IconButtonDocumentation';
import SegmentedButtonDocumentation from '../websiteContent/library/components/buttons/segmentedButton/SegmentedButtonDocumentation';
import AccordionDocumentation from '../websiteContent/library/components/containers/Accordion/AccordionDocumentation';
import CardDocumentation from '../websiteContent/library/components/containers/Card/CardDocumentation';
import DrawerDocumentation from '../websiteContent/library/components/containers/Drawer/DrawerDocumentation';
import TabGroupDocumentation from '../websiteContent/library/components/containers/TabGroup/TabGroupDocumentation';
import CheckboxDocumentation from '../websiteContent/library/components/forms/CheckBox/CheckboxDocumentation';
import ComboBoxDocumentation from '../websiteContent/library/components/forms/ComboBox/ComboBoxDocumentation';
import DateInputDocumentation from '../websiteContent/library/components/forms/DateInput/DateInputDocumentation';
import FileInputDocumentation from '../websiteContent/library/components/forms/FileInput/FileInputDocumentation';
import MultiSelectDocumentation from '../websiteContent/library/components/forms/MultiSelect/MultiSelectDocumentation';
import RadioButtonDocumentation from '../websiteContent/library/components/forms/RadioButton/RadioButtonDocumentation';
import SelectDocumentation from '../websiteContent/library/components/forms/Select/SelectDocumentation';
import SwitchDocumentation from '../websiteContent/library/components/forms/Switch/SwitchDocumentation';
import TextInputDocumentation from '../websiteContent/library/components/forms/TextInput/TextInputDocumentation';
import TimeInputDocumentation from '../websiteContent/library/components/forms/TimeInput/TimeInputDocumentation';
import ValidationDocumentation from '../websiteContent/library/components/forms/Validation/ValidationDocumentation';
import LinksDocumentation from '../websiteContent/library/components/links/LinksDocumentation';
import ListsDocumentation from '../websiteContent/library/components/lists/ListsDocumentation';
import BreadcrumbDocumentation from '../websiteContent/library/components/navigation/Breadcrumb/BreadcrumbDocumentation';
import HamburgerMenuDocumentation from '../websiteContent/library/components/navigation/HamburgerMenu/HamburgerMenuDocumentation';
import PaginationDocumentation from '../websiteContent/library/components/navigation/pagination/PaginationDocumentation';
import SidePanelDocumentation from '../websiteContent/library/components/navigation/sidePanel/SidePanelDocumentation';
import VerticalMenuDocumentation from '../websiteContent/library/components/navigation/verticalMenu/VerticalMenuDocumentation';
import BannersDocumentation from '../websiteContent/library/components/popups/banners/BannersDocumentation';
import ModalsDocumentation from '../websiteContent/library/components/popups/modals/ModalsDocumentation';
import PopupsDocumentation from '../websiteContent/library/components/popups/popups/PopupsDocumentation';
import TableDocumentation from '../websiteContent/library/components/table/TableDocumentation';
import TooltipsDocumentation from '../websiteContent/library/components/tooltips/TooltipsDocumentation';
import BadgesDocumentation from '../websiteContent/library/components/widgetsIndicators/badges/BadgesDocumentation';
import SkeletonsDocumentation from '../websiteContent/library/components/widgetsIndicators/skeletons/SkeletonsDocumentation';
import SpinnersDocumentation from '../websiteContent/library/components/widgetsIndicators/spinners/SpinnersDocumentation';
import UtahFooterDocumentation from '../websiteContent/library/patterns/UtahFooterDocumentation/UtahFooterDocumentation';
import UtahHeaderDocumentation from '../websiteContent/library/patterns/UtahHeaderDocumentation/UtahHeaderDocumentation';
import GettingStarted from '../websiteContent/resources/GettingStarted';
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
 *  - Use react-router's <NavLink> (external) and <Link> (internal) as much as possible instead of history.push()
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
    content: PlaceHolderDocumentation,
    link: pageUrls.accessibility,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Accessibility',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  colorGuidelines: {
    content: PlaceHolderDocumentation,
    link: pageUrls.colorGuidelines,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Color',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  design: {
    content: PlaceHolderDocumentation,
    link: pageUrls.design,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Design',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  notifications: {
    content: PlaceHolderDocumentation,
    link: pageUrls.notifications,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Notifications',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  principles: {
    content: PlaceHolderDocumentation,
    link: pageUrls.principles,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Principles',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  uxBestPractices: {
    content: PlaceHolderDocumentation,
    link: pageUrls.uxBestPractices,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'UX Best Practices',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  validation: {
    content: ValidationDocumentation,
    link: pageUrls.validation,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Form Validation',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === foundation documentation components === //
  spacing: {
    content: PlaceHolderDocumentation,
    link: pageUrls.spacing,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Spacing',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  typography: {
    content: TypographyDocumentation,
    link: pageUrls.typography,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Typography',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  depthElevationShadows: {
    content: PlaceHolderDocumentation,
    link: pageUrls.depthElevationShadows,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Depth / Elevation / Shadows',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  shape: {
    content: PlaceHolderDocumentation,
    link: pageUrls.shape,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Shape (rounded corners)',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  motionTiming: {
    content: PlaceHolderDocumentation,
    link: pageUrls.motionTiming,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Motion / Timing',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  colorFoundation: {
    content: PlaceHolderDocumentation,
    link: pageUrls.colorFoundation,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Color',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  layout: {
    content: PlaceHolderDocumentation,
    link: pageUrls.layout,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Layout (Flex, Grid System)',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  opacity: {
    content: PlaceHolderDocumentation,
    link: pageUrls.opacity,
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Opacity',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === library documentation components === //
  utahFooter: {
    content: UtahFooterDocumentation,
    link: pageUrls.utahFooter,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Utah Footer',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  utahHeader: {
    content: UtahHeaderDocumentation,
    link: pageUrls.utahHeader,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Utah Header',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === resources documentation components === //
  colorPicker: {
    content: PlaceHolderDocumentation,
    link: pageUrls.colorPicker,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Color Picker',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  contributeCommunity: {
    content: PlaceHolderDocumentation,
    link: pageUrls.contributeCommunity,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Contribute / Community',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  demo: {
    content: Demo,
    link: pageUrls.demoPage,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Demo Page',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  },
  gettingStarted: {
    content: GettingStarted,
    link: pageUrls.gettingStarted,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Getting Started',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  github: {
    content: PlaceHolderDocumentation,
    link: pageUrls.github,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'GitHub',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  help: {
    content: PlaceHolderDocumentation,
    link: pageUrls.help,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Help',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  icons: {
    content: IconsDocumentation,
    link: pageUrls.icons,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Icons',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  mockups: {
    content: Mockups,
    link: pageUrls.mockups,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Mockups',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === library documentation components === //
  // === basic atomic === //

  headings: {
    content: HeadlineDocumentation,
    link: pageUrls.headings,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Headings',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  dividers: {
    content: DividersDocumentation,
    link: pageUrls.dividers,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Dividers',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  links: {
    content: LinksDocumentation,
    link: pageUrls.links,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Links',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  lists: {
    content: ListsDocumentation,
    link: pageUrls.lists,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Lists',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  tags: {
    content: TagsDocumentation,
    link: pageUrls.tags,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Tags',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  paragraphs: {
    content: PlaceHolderDocumentation,
    link: pageUrls.paragraphs,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Paragraphs and Text',
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

  buttonGroup: {
    content: PlaceHolderDocumentation,
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

  modals: {
    content: ModalsDocumentation,
    link: pageUrls.modals,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Modals',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  segmentedButton: {
    content: SegmentedButtonDocumentation,
    link: pageUrls.segmentedButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Segmented Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === containers === //

  accordion: {
    content: AccordionDocumentation,
    link: pageUrls.accordion,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Accordion',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  card: {
    content: CardDocumentation,
    link: pageUrls.card,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Card',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  drawers: {
    content: DrawerDocumentation,
    link: pageUrls.drawers,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Drawer',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  infoBox: {
    content: PlaceHolderDocumentation,
    link: pageUrls.infoBox,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Info Box',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  tabs: {
    content: TabGroupDocumentation,
    link: pageUrls.tabs,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Tab Group',
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
  banners: {
    content: BannersDocumentation,
    link: pageUrls.banners,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Banners',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  carousel: {
    content: PlaceHolderDocumentation,
    link: pageUrls.carousel,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Carousel',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  processList: {
    content: PlaceHolderDocumentation,
    link: pageUrls.processList,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Process List',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  progressBars: {
    content: PlaceHolderDocumentation,
    link: pageUrls.progressBars,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Progress Bars',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  skeletons: {
    content: SkeletonsDocumentation,
    link: pageUrls.skeletons,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Skeletons',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  spinners: {
    content: SpinnersDocumentation,
    link: pageUrls.spinners,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Spinners',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  stepIndicator: {
    content: PlaceHolderDocumentation,
    link: pageUrls.stepIndicator,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Step Indicators',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === forms === //
  forms: {
    content: PlaceHolderDocumentation,
    link: pageUrls.forms,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Forms',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  checkbox: {
    content: CheckboxDocumentation,
    link: pageUrls.checkbox,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Checkbox',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  comboBox: {
    content: ComboBoxDocumentation,
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
  fileInput: {
    content: FileInputDocumentation,
    link: pageUrls.fileInput,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'File Input',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  multiSelect: {
    content: MultiSelectDocumentation,
    link: pageUrls.multiSelect,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Multi-select',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  radioButton: {
    content: RadioButtonDocumentation,
    link: pageUrls.radioButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Radio Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  select: {
    content: SelectDocumentation,
    link: pageUrls.select,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Select',
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
    content: PlaceHolderDocumentation,
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
  timeInput: {
    content: TimeInputDocumentation,
    link: pageUrls.timeInput,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Time Input',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === Navigation === //
  breadcrumb: {
    content: BreadcrumbDocumentation,
    link: pageUrls.breadcrumb,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Breadcrumb',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  hamburger: {
    content: HamburgerMenuDocumentation,
    link: pageUrls.hamburger,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Hamburger',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  mainMenu: {
    content: PlaceHolderDocumentation,
    link: pageUrls.mainMenu,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Main Menu',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  pagination: {
    content: PaginationDocumentation,
    link: pageUrls.pagination,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Pagination',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  sidePanelNavigation: {
    content: SidePanelDocumentation,
    link: pageUrls.sidePanelNavigation,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Side Panel',
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

  // templates
  errorPage404: {
    content: PlaceHolderDocumentation,
    link: pageUrls.errorPage404,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: '404 Page',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

};

export default pages;
