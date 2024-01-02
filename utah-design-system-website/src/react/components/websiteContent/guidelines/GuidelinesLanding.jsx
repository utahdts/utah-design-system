import { useRedirect } from '../../../hooks/useRedirect';
import { pageUrls } from '../../routing/pageUrls';
import { PlaceHolderDocumentation } from '../PlaceHolderDocumentation';

export function GuidelinesLanding() {
  useRedirect({ pageUrl: pageUrls.accessibility, isImmediate: true });
  return <PlaceHolderDocumentation />;
}
