// @ts-check
import { ExternalLink } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  headingTag: PropTypes.string.isRequired,
  headingTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {string} props.headingTag
 * @param {string} props.headingTitle
 * @param {string} props.id
 * @param {string} props.linkUrl
 * @returns {JSX.Element}
 */
function HeadingWithLink({
  headingTag: HeadingTag,
  headingTitle,
  id,
  linkUrl,
}) {
  return (
    <div className="flex justify-between items-center">
      {/* @ts-ignore */}
      <HeadingTag id={id}>
        {headingTitle}
      </HeadingTag>
      <ExternalLink href={linkUrl}>
        See code on GitHub
      </ExternalLink>
    </div>
  );
}

HeadingWithLink.propTypes = propTypes;
HeadingWithLink.defaultProps = defaultProps;

export default HeadingWithLink;
