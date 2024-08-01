import { layoutTemplatesEnum } from '../../enums/layoutTemplatesEnum';
import { menusEnum } from '../../enums/menusEnum';
import { Demo } from '../demo/Demo';
import { HomeLanding } from '../websiteContent/HomeLanding';
import { Search } from '../websiteContent/Search';
import { AccessibilityChecklistDocumentation } from '../websiteContent/guidelines/AccessibilityChecklistDocumentation';
import { AccessibilityDocumentation } from '../websiteContent/guidelines/AccessibilityDocumentation';
import { ColorGuidelinesDocumentation } from '../websiteContent/guidelines/ColorGuidelinesDocumentation';
import { DataPrivacyDocumentation } from '../websiteContent/guidelines/DataPrivacyDocumentation';
import { DataVisualizationsDocumentation } from '../websiteContent/guidelines/DataVisualizationsDocumentation';
import { DepthElevationShadowsDocumentation } from '../websiteContent/guidelines/DepthElevationShadowsDocumentation';
import { DigitalCredentials } from '../websiteContent/guidelines/DigitalCredentials';
import { FormGeneralDocumentation } from '../websiteContent/guidelines/FormGeneralDocumentation';
import { GuidelinesLanding } from '../websiteContent/guidelines/GuidelinesLanding';
import { ImagesDocumentation } from '../websiteContent/guidelines/ImagesDocumentation';
import { LayoutDocumentation } from '../websiteContent/guidelines/LayoutDocumentation';
import { OpacityDocumentation } from '../websiteContent/guidelines/OpacityDocumentation';
import { ShapesDocumentation } from '../websiteContent/guidelines/ShapesDocumentation';
import { SpacingDocumentation } from '../websiteContent/guidelines/SpacingDocumentation';
import { TypographyDocumentation } from '../websiteContent/guidelines/TypographyDocumentation';
import { LibraryLanding } from '../websiteContent/library/LibraryLanding';
import { BlockquoteDocumentation } from '../websiteContent/library/components/basicAtomic/Blockquote/BlockquoteDocumentation';
import { DividersDocumentation } from '../websiteContent/library/components/basicAtomic/Dividers/DividersDocumentation';
import { HeadlineDocumentation } from '../websiteContent/library/components/basicAtomic/Headings/HeadingsDocumentation';
import { ParagraphDocumentation } from '../websiteContent/library/components/basicAtomic/Paragraph/ParagraphDocumentation';
import { ButtonDocumentation } from '../websiteContent/library/components/buttons/button/ButtonDocumentation';
import { ConfirmationButtonDocumentation } from '../websiteContent/library/components/buttons/confirmationButton/ConfirmationButtonDocumentation';
import { IconBarDocumentation } from '../websiteContent/library/components/buttons/iconBar/IconBarDocumentation';
import { IconButtonDocumentation } from '../websiteContent/library/components/buttons/iconButton/IconButtonDocumentation';
import { SegmentedButtonDocumentation } from '../websiteContent/library/components/buttons/segmentedButton/SegmentedButtonDocumentation';
import { TagsDocumentation } from '../websiteContent/library/components/buttons/tag/TagsDocumentation';
import { AccordionDocumentation } from '../websiteContent/library/components/containers/Accordion/AccordionDocumentation';
import { CardDocumentation } from '../websiteContent/library/components/containers/Card/CardDocumentation';
import { CodeBlockDocumentation } from '../websiteContent/library/components/containers/CodeBlock/CodeBlockDocumentation';
import { DrawerDocumentation } from '../websiteContent/library/components/containers/Drawer/DrawerDocumentation';
import { InfoBoxDocumentation } from '../websiteContent/library/components/forms/InfoBox/InfoBoxDocumentation';
import { TabGroupDocumentation } from '../websiteContent/library/components/containers/TabGroup/TabGroupDocumentation';
import { CharacterCountDocumentation } from '../websiteContent/library/components/forms/CharacterCount/CharacterCountDocumentation';
import { CheckboxDocumentation } from '../websiteContent/library/components/forms/Checkbox/CheckboxDocumentation';
import { ComboBoxDocumentation } from '../websiteContent/library/components/forms/ComboBox/ComboBoxDocumentation';
import { DateInputDocumentation } from '../websiteContent/library/components/forms/DateInput/DateInputDocumentation';
import { FileInputDocumentation } from '../websiteContent/library/components/forms/FileInput/FileInputDocumentation';
import { MultiSelectDocumentation } from '../websiteContent/library/components/forms/MultiSelect/MultiSelectDocumentation';
import { RadioButtonDocumentation } from '../websiteContent/library/components/forms/RadioButton/RadioButtonDocumentation';
import { SelectDocumentation } from '../websiteContent/library/components/forms/Select/SelectDocumentation';
import { SwitchDocumentation } from '../websiteContent/library/components/forms/Switch/SwitchDocumentation';
import { TextAreaDocumentation } from '../websiteContent/library/components/forms/TextArea/TextAreaDocumentation';
import { TextInputDocumentation } from '../websiteContent/library/components/forms/TextInput/TextInputDocumentation';
import { TimeInputDocumentation } from '../websiteContent/library/components/forms/TimeInput/TimeInputDocumentation';
import { ValidationDocumentation } from '../websiteContent/library/components/forms/Validation/ValidationDocumentation';
import { LinksDocumentation } from '../websiteContent/library/components/links/LinksDocumentation';
import { ListsDocumentation } from '../websiteContent/library/components/lists/ListsDocumentation';
import { BreadcrumbDocumentation } from '../websiteContent/library/components/navigation/Breadcrumb/BreadcrumbDocumentation';
import { HamburgerMenuDocumentation } from '../websiteContent/library/components/navigation/HamburgerMenu/HamburgerMenuDocumentation';
import { MainMenuDocumentation } from '../websiteContent/library/components/navigation/MainMenu/MainMenuDocumentation';
import { BackToTopDocumentation } from '../websiteContent/library/components/navigation/backToTop/BackToTopDocumentation';
import { MegaMenuDocumentation } from '../websiteContent/library/components/navigation/megaMenu/MegaMenuDocumentation';
import { PaginationDocumentation } from '../websiteContent/library/components/navigation/pagination/PaginationDocumentation';
import { SidePanelDocumentation } from '../websiteContent/library/components/navigation/sidePanel/SidePanelDocumentation';
import { SkipLinkDocumentation } from '../websiteContent/library/components/navigation/skipLink/SkipLinkDocumentation';
import { VerticalMenuDocumentation } from '../websiteContent/library/components/navigation/verticalMenu/VerticalMenuDocumentation';
import { BannersDocumentation } from '../websiteContent/library/components/popups/banners/BannersDocumentation';
import { ModalsDocumentation } from '../websiteContent/library/components/popups/modals/ModalsDocumentation';
import { PopupsDocumentation } from '../websiteContent/library/components/popups/popups/PopupsDocumentation';
import { CarouselDocumentation } from '../websiteContent/library/components/sliders/carousel/CarouselDocumentation';
import { TableDocumentation } from '../websiteContent/library/components/table/TableDocumentation';
import { TooltipsDocumentation } from '../websiteContent/library/components/tooltips/TooltipsDocumentation';
import { BadgesDocumentation } from '../websiteContent/library/components/widgetsIndicators/badges/BadgesDocumentation';
import { ProcessListDocumentation } from '../websiteContent/library/components/widgetsIndicators/processList/ProcessListDocumentation';
import { ProgressBarDocumentation } from '../websiteContent/library/components/widgetsIndicators/progressBar/ProgressBarDocumentation';
import { SkeletonsDocumentation } from '../websiteContent/library/components/widgetsIndicators/skeletons/SkeletonsDocumentation';
import { SpinnersDocumentation } from '../websiteContent/library/components/widgetsIndicators/spinners/SpinnersDocumentation';
import { StatusIndicatorDocumentation } from '../websiteContent/library/components/widgetsIndicators/statusIndicator/StatusIndicatorDocumentation';
import { StepIndicatorDocumentation } from '../websiteContent/library/components/widgetsIndicators/stepIndicator/StepIndicatorDocumentation';
import { UtahFooterDocumentation } from '../websiteContent/library/patterns/UtahFooterDocumentation/UtahFooterDocumentation';
import { UtahHeaderDocumentation } from '../websiteContent/library/patterns/UtahHeaderDocumentation/UtahHeaderDocumentation';
import { AccessibilityTesting } from '../websiteContent/resources/AccessibilityTesting/AccessibilityTesting';
import { GettingStarted } from '../websiteContent/resources/GettingStarted';
import { GettingStartedDesigner } from '../websiteContent/resources/GettingStartedDesigner';
import { GettingStartedDeveloper } from '../websiteContent/resources/GettingStartedDeveloper';
import { IconsDocumentation } from '../websiteContent/resources/IconsDocumentation/Icons/IconsDocumentation';
import { WordPressHeaderPlugin } from '../websiteContent/resources/WordPressHeaderPlugin';
import { Mockups } from '../websiteContent/resources/Mockups';
import { ResourcesLanding } from '../websiteContent/resources/ResourcesLanding';
import { Showcase } from '../websiteContent/resources/Showcase/Showcase';
import { pageUrls } from './pageUrls';

/**
 * React Router v6 added the useRoutes() hook which takes a list of objects to treat as routes
 * WE WANT THIS! but it's not quite fully baked yet as it only returns a component and not the
 * full object of the matching page. So this is an attempt to be similar enough to useRoutes()
 * object styling that we can jump on the bandwagon at a later date but keep doing our machoer
 * approach at this time.
 *
 *  interface Page {
 *    content: React.FC,
 *    link: string | (() => string),
 *    menuSecondary: PropTypes.oneOf(menusEnum.SECONDARY_MENU_...),
 *    pageTitle: string | (() => string),
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

/** @typedef {import('utah-design-system-website').Page} Page */

/** @enum {Page} */
export const pages = {
  // === Main top menu pages === //
  home: /** @type {Page} */ ({
    content: HomeLanding,
    link: pageUrls.home,
    pageTitle: 'Home',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  }),

  guidelines: /** @type {Page} */ ({
    content: GuidelinesLanding,
    link: pageUrls.guidelines,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Guidelines/Standards',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  library: /** @type {Page} */ ({
    content: LibraryLanding,
    link: pageUrls.library,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Library',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  resources: /** @type {Page} */ ({
    content: ResourcesLanding,
    link: pageUrls.resources,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Resources',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === guidelines documentation components === //
  accessibility: /** @type {Page} */ ({
    content: AccessibilityDocumentation,
    link: pageUrls.accessibility,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Accessibility',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  accessibilityTesting: /** @type {Page} */ ({
    content: AccessibilityChecklistDocumentation,
    legacyLinks: [
      '/guidelinesStandards/accessibilityChecklist',
    ],
    link: pageUrls.accessibilityChecklist,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Accessibility Checklist & Testing',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  accessibilityTestingPage: /** @type {Page} */ ({
    content: AccessibilityTesting,
    link: pageUrls.accessibilityTesting,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Accessibility Testing',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  }),
  colorGuidelines: /** @type {Page} */ ({
    content: ColorGuidelinesDocumentation,
    link: pageUrls.colorGuidelines,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Color',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  validation: /** @type {Page} */ ({
    content: ValidationDocumentation,
    link: pageUrls.validation,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Form Validation',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === guidelines documentation components === //
  spacing: /** @type {Page} */ ({
    content: SpacingDocumentation,
    link: pageUrls.spacing,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Spacing',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  typography: /** @type {Page} */ ({
    content: TypographyDocumentation,
    link: pageUrls.typography,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Typography',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  depthElevationShadows: /** @type {Page} */ ({
    content: DepthElevationShadowsDocumentation,
    link: pageUrls.depthElevationShadows,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Depth / Elevation / Shadows',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  digitalCredentials: /** @type {Page} */ ({
    content: DigitalCredentials,
    link: pageUrls.digitalCredentials,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Verifiable Digital Credentials',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  formGeneralDocumentation: /** @type {Page} */ ({
    content: FormGeneralDocumentation,
    link: pageUrls.formGuidelines,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Form General Guidance',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
    legacyLinks: ['guidelinesStandards/formGuidelines'],
  }),
  shape: /** @type {Page} */ ({
    content: ShapesDocumentation,
    link: pageUrls.shape,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Shape (rounded corners)',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  images: /** @type {Page} */ ({
    content: ImagesDocumentation,
    link: pageUrls.images,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Images',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  layout: /** @type {Page} */ ({
    content: LayoutDocumentation,
    link: pageUrls.layout,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Layout (Flex, Grid System)',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  opacity: /** @type {Page} */ ({
    content: OpacityDocumentation,
    link: pageUrls.opacity,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Opacity',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  dataPrivacy: /** @type {Page} */ ({
    content: DataPrivacyDocumentation,
    link: pageUrls.dataPrivacy,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Data Privacy',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  dataVisualizations: /** @type {Page} */ ({
    content: DataVisualizationsDocumentation,
    link: pageUrls.dataVisualizations,
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Data Visualizations',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === library documentation components === //
  utahFooter: /** @type {Page} */ ({
    content: UtahFooterDocumentation,
    link: pageUrls.utahFooter,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Utah Footer',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  utahHeader: /** @type {Page} */ ({
    content: UtahHeaderDocumentation,
    link: pageUrls.utahHeader,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Utah Header',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === resources documentation components === //
  demo: /** @type {Page} */ ({
    content: Demo,
    link: pageUrls.demoPage,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Demo Page',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  }),
  gettingStarted: /** @type {Page} */ ({
    content: GettingStarted,
    legacyLinks: [
      '/resources/gettingStarted',
    ],
    link: pageUrls.gettingStarted,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Getting Started',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  gettingStartedDesigner: /** @type {Page} */ ({
    content: GettingStartedDesigner,
    legacyLinks: [
      '/resources/gettingStarted/designer',
    ],
    link: pageUrls.gettingStartedDesigner,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Getting Started - Designer',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  gettingStartedDeveloper: /** @type {Page} */ ({
    content: GettingStartedDeveloper,
    legacyLinks: [
      '/resources/gettingStarted/developer',
    ],
    link: pageUrls.gettingStartedDeveloper,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Getting Started - Developer',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  wordPressHeaderPlugin: /** @type {Page} */ ({
    content: WordPressHeaderPlugin,
    link: pageUrls.wordPressHeaderPlugin,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'WordPress Header Plugin',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  icons: /** @type {Page} */ ({
    content: IconsDocumentation,
    link: pageUrls.icons,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Icons',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  mockups: /** @type {Page} */ ({
    content: Mockups,
    link: pageUrls.mockups,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Mockups',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  showcase: /** @type {Page} */ ({
    content: Showcase,
    link: pageUrls.showcase,
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Showcase',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === library documentation components === //
  // === basic atomic === //

  headings: /** @type {Page} */ ({
    content: HeadlineDocumentation,
    link: pageUrls.headings,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Headings',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  dividers: /** @type {Page} */ ({
    content: DividersDocumentation,
    link: pageUrls.dividers,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Dividers',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  blockquote: /** @type {Page} */ ({
    content: BlockquoteDocumentation,
    link: pageUrls.blockquote,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Block Quote',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  links: /** @type {Page} */ ({
    content: LinksDocumentation,
    link: pageUrls.links,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Links',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  skipLink: /** @type {Page} */ ({
    content: SkipLinkDocumentation,
    link: pageUrls.skipLink,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Skip Link',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  backTopTop: /** @type {Page} */ ({
    content: BackToTopDocumentation,
    link: pageUrls.backTopTop,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Back to Top',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  lists: /** @type {Page} */ ({
    content: ListsDocumentation,
    link: pageUrls.lists,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Lists',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  tags: /** @type {Page} */ ({
    content: TagsDocumentation,
    link: pageUrls.tags,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Tags',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  paragraphs: /** @type {Page} */ ({
    content: ParagraphDocumentation,
    link: pageUrls.paragraphs,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Basic and Semantic Text',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === buttons === //
  button: /** @type {Page} */ ({
    content: ButtonDocumentation,
    link: pageUrls.button,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  confirmationButton: /** @type {Page} */ ({
    content: ConfirmationButtonDocumentation,
    link: pageUrls.confirmationButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Confirmation Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  iconButton: /** @type {Page} */ ({
    content: IconButtonDocumentation,
    link: pageUrls.iconButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Icon Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  modals: /** @type {Page} */ ({
    content: ModalsDocumentation,
    link: pageUrls.modals,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Modals',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  segmentedButton: /** @type {Page} */ ({
    content: SegmentedButtonDocumentation,
    link: pageUrls.segmentedButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Segmented Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === containers === //

  accordion: /** @type {Page} */ ({
    content: AccordionDocumentation,
    link: pageUrls.accordion,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Accordion',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  card: /** @type {Page} */ ({
    content: CardDocumentation,
    link: pageUrls.card,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Card',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  codeBlock: /** @type {Page} */ ({
    content: CodeBlockDocumentation,
    link: pageUrls.codeBlock,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Code Block',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  drawers: /** @type {Page} */ ({
    content: DrawerDocumentation,
    link: pageUrls.drawers,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Drawers',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  infoBox: /** @type {Page} */ ({
    content: InfoBoxDocumentation,
    link: pageUrls.infoBox,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Info Box',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  tabs: /** @type {Page} */ ({
    content: TabGroupDocumentation,
    link: pageUrls.tabs,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Tab Group',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === widgets & indicators === //
  badges: /** @type {Page} */ ({
    content: BadgesDocumentation,
    link: pageUrls.badges,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Badges',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  banners: /** @type {Page} */ ({
    content: BannersDocumentation,
    link: pageUrls.banners,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Banners',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  carousel: /** @type {Page} */ ({
    content: CarouselDocumentation,
    link: pageUrls.carousel,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Carousel',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  processList: /** @type {Page} */ ({
    content: ProcessListDocumentation,
    link: pageUrls.processList,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Process List',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  progressBars: /** @type {Page} */ ({
    content: ProgressBarDocumentation,
    link: pageUrls.progressBars,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Progress Bar',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  skeletons: /** @type {Page} */ ({
    content: SkeletonsDocumentation,
    link: pageUrls.skeletons,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Skeletons',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  spinners: /** @type {Page} */ ({
    content: SpinnersDocumentation,
    link: pageUrls.spinners,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Spinners',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  statusIndicator: /** @type {Page} */ ({
    content: StatusIndicatorDocumentation,
    link: pageUrls.statusIndicator,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Status Indicators',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  stepIndicator: /** @type {Page} */ ({
    content: StepIndicatorDocumentation,
    link: pageUrls.stepIndicator,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Step Indicators',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === forms === //
  forms: /** @type {Page} */ ({
    content: LibraryLanding,
    link: pageUrls.library,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Forms',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  checkbox: /** @type {Page} */ ({
    content: CheckboxDocumentation,
    link: pageUrls.checkbox,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Checkbox',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  characterCount: /** @type {Page} */ ({
    content: CharacterCountDocumentation,
    link: pageUrls.characterCount,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Character Count',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  comboBox: /** @type {Page} */ ({
    content: ComboBoxDocumentation,
    link: pageUrls.comboBox,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Combo Box',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  dateInput: /** @type {Page} */ ({
    content: DateInputDocumentation,
    link: pageUrls.dateInput,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Date Input',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  fileInput: /** @type {Page} */ ({
    content: FileInputDocumentation,
    link: pageUrls.fileInput,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'File Input',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  multiSelect: /** @type {Page} */ ({
    content: MultiSelectDocumentation,
    link: pageUrls.multiSelect,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Multi-select',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  radioButton: /** @type {Page} */ ({
    content: RadioButtonDocumentation,
    link: pageUrls.radioButton,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Radio Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  select: /** @type {Page} */ ({
    content: SelectDocumentation,
    link: pageUrls.select,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Select',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  switch: /** @type {Page} */ ({
    content: SwitchDocumentation,
    link: pageUrls.switch,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Switch',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  textArea: /** @type {Page} */ ({
    content: TextAreaDocumentation,
    link: pageUrls.textArea,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Text Area',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  textInput: /** @type {Page} */ ({
    content: TextInputDocumentation,
    link: pageUrls.textInput,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Text Input',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  timeInput: /** @type {Page} */ ({
    content: TimeInputDocumentation,
    link: pageUrls.timeInput,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Time Input',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === Navigation === //
  breadcrumb: /** @type {Page} */ ({
    content: BreadcrumbDocumentation,
    link: pageUrls.breadcrumb,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Breadcrumb',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  hamburger: /** @type {Page} */ ({
    content: HamburgerMenuDocumentation,
    link: pageUrls.hamburger,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Hamburger',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  mainMenu: /** @type {Page} */ ({
    content: MainMenuDocumentation,
    link: pageUrls.mainMenu,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Main Menu',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  megaMenu: /** @type {Page} */ ({
    content: MegaMenuDocumentation,
    link: pageUrls.megaMenu,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Mega Menu',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  pagination: /** @type {Page} */ ({
    content: PaginationDocumentation,
    link: pageUrls.pagination,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Pagination',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  sidePanelNavigation: /** @type {Page} */ ({
    content: SidePanelDocumentation,
    link: pageUrls.sidePanelNavigation,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Side Panel',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),
  verticalMenu: /** @type {Page} */ ({
    content: VerticalMenuDocumentation,
    link: pageUrls.verticalMenu,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Vertical Menu',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === Popups === //
  popups: /** @type {Page} */ ({
    content: PopupsDocumentation,
    link: pageUrls.popups,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Popups',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === table === //
  table: /** @type {Page} */ ({
    content: TableDocumentation,
    link: pageUrls.table,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Table',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  iconBar: /** @type {Page} */ ({
    content: IconBarDocumentation,
    link: pageUrls.iconBar,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Icon Bar',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // === tooltips === //
  tooltips: /** @type {Page} */ ({
    content: TooltipsDocumentation,
    link: pageUrls.tooltips,
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Tooltips',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  }),

  // templates
  search: /** @type {Page} */ ({
    content: Search,
    link: pageUrls.search,
    pageTitle: 'Search Results',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  }),

};
