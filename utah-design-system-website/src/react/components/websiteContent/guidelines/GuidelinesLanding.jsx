// @ts-check
import React from 'react';
import useRedirect from '../../../hooks/useRedirect';
import pageUrls from '../../routing/pageUrls';
import PlaceHolderDocumentation from '../PlaceHolderDocumentation';

const propTypes = {};
const defaultProps = {};

function GuidelinesLanding() {
  useRedirect({ pageUrl: pageUrls.validation, isImmediate: true });
  return <PlaceHolderDocumentation />;
}

GuidelinesLanding.propTypes = propTypes;
GuidelinesLanding.defaultProps = defaultProps;

export default GuidelinesLanding;
