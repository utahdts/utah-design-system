import layoutTemplatesEnum from '../../enums/layoutTemplatesEnum';
import menusEnum from '../../enums/menusEnum';
import Demo from '../demo/Demo';
import FoundationLanding from '../websiteContent/foundation/FoundationLanding';
import GuidelinesLanding from '../websiteContent/guidelines/GuidelinesLanding';
import HomeLanding from '../websiteContent/HomeLanding';
import SegmentedButtonDocumentation from '../websiteContent/library/components/buttons/SegmentedButtonDocumentation';
import LibraryLanding from '../websiteContent/library/LibraryLanding';
import ResourcesLanding from '../websiteContent/resources/ResourcesLanding';
import PLACEHOLDERDOCUMENTATION from '../websiteContent/PLACEHOLDERDOCUMENTATION';
import ButtonDocumentation from '../websiteContent/library/components/buttons/ButtonDocumentation';
import SwitchDocumentation from '../websiteContent/library/components/forms/SwitchDocumentation';
import TableDocumentation from '../websiteContent/library/components/table/TableDocumentation';

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
    content: <HomeLanding />,
    link: '/',
    pageTitle: 'Home',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  },

  guidelines: {
    content: <GuidelinesLanding />,
    link: '/guidelines',
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Guidelines/Standards',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  foundation: {
    content: <FoundationLanding />,
    link: '/foundation',
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Foundation',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  library: {
    content: <LibraryLanding />,
    link: '/library',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Library',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  resources: {
    content: <ResourcesLanding />,
    link: '/resources',
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Resources',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === guidelines documentation components === //
  principles: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/guidelines/principles',
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Principles',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  uxBestPractices: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/guidelines/uxBestPractices',
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'UX Best Practices',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  accessibility: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/guidelines/accessibility',
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Accessibility',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  colorGuidelines: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/guidelines/color',
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Color',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  design: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/guidelines/design',
    menuSecondary: menusEnum.SECONDARY_MENU_GUIDELINES,
    pageTitle: 'Design',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === foundation documentation components === //
  spacing: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/foundation/spacing',
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Spacing',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  typography: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/foundation/typography',
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Typography',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  depthElevationShadows: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/foundation/depthElevationShadows',
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Depth / Elevation / Shadows',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  shape: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/foundation/shape',
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Shape (rounded corners)',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  motionTiming: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/foundation/motionTiming',
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Motion / Timing',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  colorFoundation: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/foundation/color',
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Color',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  layout: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/foundation/layout',
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Layout (Flex, Grid System)',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  opacity: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/foundation/opacity',
    menuSecondary: menusEnum.SECONDARY_MENU_FOUNDATION,
    pageTitle: 'Opacity',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === library documentation components === //
  components: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/library/components',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Components',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  patterns: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/library/patterns',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Patterns',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  templates: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/library/templates',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Templates',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === resources documentation components === //
  github: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/resources/github',
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'GitHub',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  demo: {
    content: <Demo />,
    link: '/resources/demo',
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Demo Page',
    template: layoutTemplatesEnum.LANDING_TEMPLATE,
  },
  colorPicker: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/resources/colorPicker',
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Color Picker',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  icons: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/resources/icons',
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Icons',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  contributeCommunity: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/resources/contributeCommunity',
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Contribute / Community',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  help: {
    content: <PLACEHOLDERDOCUMENTATION />,
    link: '/resources/help',
    menuSecondary: menusEnum.SECONDARY_MENU_RESOURCES,
    pageTitle: 'Help',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === library documentation components === //
  // === basic atomic === //
  anchors: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/anchor',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Anchors',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  horizontalRule: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/hr',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Horizontal Rule',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  links: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/links',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Links',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  tags: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/tag',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Tags',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  type: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/basic/type',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Type and Text',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === buttons === //
  button: {
    content: <ButtonDocumentation />,
    link: '/library/components/buttons/button',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  buttonGroup: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/segmented',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Button Group',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  confirmationButton: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/segmented',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Confirmation Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  iconButton: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/iconButton',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Icon Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  segmentedButton: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/segmented-button',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Segmented Button',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === forms === //
  switch: {
    content: <SwitchDocumentation />,
    link: '/library/components/forms/switch',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Switch',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // === table === //
  table: {
    content: <TableDocumentation />,
    link: '/library/components/table/table',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Table',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  // will go away VVVVVVVV
  forms: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/forms',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Forms',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },
  form: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/form',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Form',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

  buttons: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons',
    menuSecondary: menusEnum.SECONDARY_MENU_LIBRARY,
    pageTitle: 'Buttons',
    template: layoutTemplatesEnum.DOCUMENTATION_TEMPLATE,
  },

};

export default pages;
