import { useRedirect } from '../../../hooks/useRedirect';
import { pageUrls } from '../../routing/pageUrls';

export function ResourcesLanding() {
  useRedirect({ pageUrl: pageUrls.gettingStarted, isImmediate: true });
  return <h1 id="h1-top">Resources Overview</h1>;
}
