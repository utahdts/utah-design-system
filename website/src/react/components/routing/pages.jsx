import layoutTemplatesEnum from '../../enums/layoutTemplatesEnum';
import menusEnum from '../../enums/menusEnum';
import Demo from '../demo/Demo';
import FoundationLanding from '../websiteContent/foundation/FoundationLanding';
import GuidelinesLanding from '../websiteContent/guidelines/GuidelinesLanding';
import HomeLanding from '../websiteContent/HomeLanding';
import SegmentedButtonDocumentation from '../websiteContent/library/components/buttons/SegmentedButtonDocumentation';
import LibraryLanding from '../websiteContent/library/LibraryLanding';
import ResourcesLanding from '../websiteContent/resources/ResourcesLanding';

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
 */

const pages = {
  // === Main top menu pages === //
  home: {
    content: <HomeLanding />,
    link: '/',
    pageTitle: 'Home',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  },

  guidelines: {
    content: <GuidelinesLanding />,
    link: '/guidelines',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Guidelines/Standards',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  foundation: {
    content: <FoundationLanding />,
    link: '/foundation',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Foundation',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  library: {
    content: <LibraryLanding />,
    link: '/library',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Library',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  resources: {
    content: <ResourcesLanding />,
    link: '/resources',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Resources',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === library documentation components === //
  // === basic atomic === //
  anchors: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/anchor',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Anchors',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  horizontalRule: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/hr',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Horizontal Rule',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  links: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/links',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Links',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  tags: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/tag',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Tags',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  type: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/type',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Type and Text',
    // TODO: maybe mainMenuLinkFunc can be replaced by pages.parentLinks?
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === buttons === //
  button: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/button',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Button',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  buttonGroup: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/segmented',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Button Group',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  confirmationButton: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/segmented',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Confirmation Button',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  iconButton: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/iconButton',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Icon Button',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  segmentedButton: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/segmented-button',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Segmented Button',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // will go away VVVVVVVV
  forms: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/forms',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Forms',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  form: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/form',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Form',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  buttons: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Buttons',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === purple page === //
  purple: {
    content: <Demo />,
    link: '/purple',
    menuItemsSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Purple',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  },
};

export default pages;
