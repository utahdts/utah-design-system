// @ts-check
import React from 'react';
import useRedirect from '../../../hooks/useRedirect';
import pageUrls from '../../routing/pageUrls';
import PlaceHolderDocumentation from '../PlaceHolderDocumentation';

const propTypes = {};
const defaultProps = {};

function ResourcesLanding() {
  useRedirect({ pageUrl: pageUrls.gettingStarted, isImmediate: true });
  return <PlaceHolderDocumentation />;
}

ResourcesLanding.propTypes = propTypes;
ResourcesLanding.defaultProps = defaultProps;

export default ResourcesLanding;
