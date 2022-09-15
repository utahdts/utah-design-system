import layoutTemplatesEnum from '../../enums/layoutTemplatesEnum';
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
    template: layoutTemplatesEnum.landingTemplate,
  },

  guidelines: {
    content: <GuidelinesLanding />,
    link: '/guidelines',
    pageTitle: 'Guidelines/Standards',
    template: layoutTemplatesEnum.landingTemplate,
  },

  foundation: {
    content: <FoundationLanding />,
    link: '/foundation',
    pageTitle: 'Foundation',
    template: layoutTemplatesEnum.landingTemplate,
  },

  library: {
    content: <LibraryLanding />,
    link: '/library',
    pageTitle: 'Library',
    template: layoutTemplatesEnum.landingTemplate,
  },

  resources: {
    content: <ResourcesLanding />,
    link: '/resources',
    pageTitle: 'Resources',
    template: layoutTemplatesEnum.landingTemplate,
  },

  // === library documentation components === //
  forms: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/forms',
    pageTitle: 'Forms',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.documentationTemplate,
  },
  form: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/form',
    pageTitle: 'Form',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.documentationTemplate,
  },

  buttons: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons',
    pageTitle: 'Buttons',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.documentationTemplate,
  },

  button: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/button',
    pageTitle: 'Button',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.documentationTemplate,
  },

  segmentedButton: {
    content: <SegmentedButtonDocumentation />,
    link: '/library/components/buttons/segmented-button',
    pageTitle: 'Segmented Button',
    mainMenuLinkFunc: () => pages.library.link,
    template: layoutTemplatesEnum.documentationTemplate,
  },

  // === purple page === //
  purple: {
    content: <Demo />,
    link: '/purple',
    pageTitle: 'Purple',
    template: layoutTemplatesEnum.landingTemplate,
  },
};

export default pages;
