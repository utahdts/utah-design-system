import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from '@utahdts/utah-design-system';
import LightBox from '../../../lightbox/LightBox';

const propTypes = {
  agency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
const defaultProps = {
  text: null,
};

function ShowcaseExample({
  agency,
  id,
  image,
  text,
  title,
  url,
}) {
  return (
    <div className="showcase-example">
      <h2 id={id}>{title}</h2>
      <div><ExternalLink href={url}>{url}</ExternalLink></div>
      <div>Agency: {agency}</div>
      <div>{text}</div>
      <hr />
      <div><LightBox image={image} alt={`${title} Screenshot`} /></div>
    </div>
  );
}

ShowcaseExample.propTypes = propTypes;
ShowcaseExample.defaultProps = defaultProps;

export default ShowcaseExample;
