import { Icons } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';

/**
 * @param {Object} props
 * @param {{title: string, url: string}[]} props.pageLinks
 * @returns {JSX.Element}
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
            <span className="button--icon button--icon-right"><Icons.IconArrowRight /></span>
          </Link>
        ))
      }
    </div>
  );
}
