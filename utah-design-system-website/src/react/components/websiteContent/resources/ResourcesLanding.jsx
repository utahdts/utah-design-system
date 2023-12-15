import { useRedirect } from '../../../hooks/useRedirect';
import { pageUrls } from '../../routing/pageUrls';
import { PlaceHolderDocumentation } from '../PlaceHolderDocumentation';

/** @returns {JSX.Element} */
export function ResourcesLanding() {
  useRedirect({ pageUrl: pageUrls.gettingStarted, isImmediate: true });
  return <PlaceHolderDocumentation />;
}
