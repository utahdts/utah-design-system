// @ts-check
import React from 'react';
import useRedirect from '../../../hooks/useRedirect';
import pageUrls from '../../routing/pageUrls';
import PlaceHolderDocumentation from '../PlaceHolderDocumentation';

const propTypes = {};
const defaultProps = {};

function FoundationLanding() {
  useRedirect({ pageUrl: pageUrls.typography, isImmediate: true });
  return <PlaceHolderDocumentation />;
}

FoundationLanding.propTypes = propTypes;
FoundationLanding.defaultProps = defaultProps;

export default FoundationLanding;
