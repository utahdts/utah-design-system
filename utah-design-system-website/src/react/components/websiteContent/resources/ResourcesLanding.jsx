import { useRedirect } from '../../../hooks/useRedirect';
import { pageUrls } from '../../routing/pageUrls';
import { PlaceHolderDocumentation } from '../PlaceHolderDocumentation';

export function ResourcesLanding() {
  useRedirect({ pageUrl: pageUrls.gettingStarted, isImmediate: true });
  return <PlaceHolderDocumentation />;
}
