import { useRedirect } from '../../../hooks/useRedirect';
import { pageUrls } from '../../routing/pageUrls';

export function GuidelinesLanding() {
  useRedirect({ pageUrl: pageUrls.accessibility, isImmediate: true });
  return <h1 id="h1-top">Guidelines Overview</h1>;
}
