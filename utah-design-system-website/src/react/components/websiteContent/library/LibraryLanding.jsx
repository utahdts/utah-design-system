// @ts-check
import React from 'react';
import useRedirect from '../../../hooks/useRedirect';
import pageUrls from '../../routing/pageUrls';
import PlaceHolderDocumentation from '../PlaceHolderDocumentation';

const propTypes = {};
const defaultProps = {};

function LibraryLanding() {
  useRedirect({ pageUrl: pageUrls.utahHeader, isImmediate: true });
  return <PlaceHolderDocumentation />;
}

LibraryLanding.propTypes = propTypes;
LibraryLanding.defaultProps = defaultProps;

export default LibraryLanding;
