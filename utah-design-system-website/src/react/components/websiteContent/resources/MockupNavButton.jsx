import { Icons } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
  pageLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};
const defaultProps = {};

function MockupNavButton({ pageLinks }) {
  return (
    <div className="flex flex-wrap gap justify-center mb-spacing">
      {
        pageLinks.map((pageLink) => (
          <Link
            className="button button--primary-color"
            key={pageLink.url}
            to={pageLink.url}
          >
            View {pageLink.title} Page
            <span className="button--icon button--icon-right"><Icons.IconArrowRight /></span>
          </Link>
        ))
      }
    </div>
  );
}

MockupNavButton.propTypes = propTypes;
MockupNavButton.defaultProps = defaultProps;

export default MockupNavButton;
