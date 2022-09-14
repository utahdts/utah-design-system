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
 *    path: string | (() => string)),
 *    pageTitle: string | (() => string)),
 *    template: PropTypes.oneOf(layoutTemplatesEnum),
 *  }
 *
 * helpful hooks:
 * --- usePageUrl ---
 *  const url = usePageUrl({page});
 *    Example:
 *      const history = useHistory();
 *      const url = usePageUrl({page: pages.main, anchor: 'exampleJunk'});
 *      const onClick = () => history.push(url);
 *
 * --- useGoToPageUrl ---
 *  const gotoUrl = useGoToPageUrl({page});
 *    Example:
 *      const gotoUrl = usePageUrl({page: pages.main, anchor: 'exampleJunk'});
 *      <button onClick={gotoUrl}>go to url</button>
 *
 * Rules of thumb:
 *  - Use react-router's <NavLink> as much as possible instead of history.push()
 *    This allows opening in a new tab and other common browser features
 */

const pages = {
  // === Main top menu pages === //
  main: {
    content: <HomeLanding />,
    path: '/',
    pageTitle: 'Home',
    template: layoutTemplatesEnum.landingTemplate,
  },

  guidelines: {
    content: <GuidelinesLanding />,
    path: '/guidelines',
    pageTitle: 'Guidelines/Standards',
    template: layoutTemplatesEnum.landingTemplate,
  },

  foundation: {
    content: <FoundationLanding />,
    path: '/foundation',
    pageTitle: 'Foundation',
    template: layoutTemplatesEnum.landingTemplate,
  },

  library: {
    content: <LibraryLanding />,
    path: '/library',
    pageTitle: 'Library',
    template: layoutTemplatesEnum.landingTemplate,
  },

  resources: {
    content: <ResourcesLanding />,
    path: '/resources',
    pageTitle: 'Resources',
    template: layoutTemplatesEnum.landingTemplate,
  },

  // === library documentation components === //
  segmentedButton: {
    content: <SegmentedButtonDocumentation />,
    path: '/library/components/buttons/segmented-button',
    pageTitle: 'Segmented Button',
    template: layoutTemplatesEnum.documentationTemplate,
  },

  // === purple page === //
  purple: {
    content: <Demo />,
    path: '/purple',
    pageTitle: 'Purple',
    template: layoutTemplatesEnum.landingTemplate,
  },
};

export default pages;
