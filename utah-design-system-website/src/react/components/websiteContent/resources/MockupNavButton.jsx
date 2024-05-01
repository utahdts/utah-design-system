import { Link } from 'react-router-dom';

/**
 * @param {object} props
 * @param {{title: string, url: string}[]} props.pageLinks
 * @returns {import('react').JSX.Element}
 */
export function MockupNavButton({ pageLinks }) {
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
            <span className="button--icon button--icon-right utds-icon-before-arrow-right" aria-hidden="true" />
          </Link>
        ))
      }
    </div>
  );
}
