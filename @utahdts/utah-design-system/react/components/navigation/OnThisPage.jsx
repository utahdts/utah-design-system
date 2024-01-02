import { OnThisPageHeadersLevel } from './OnThisPageHeadersLevel';
import { findElementsByTagNameMatch } from './util/findElementsByTagNameMatch';
import { groupElementsByHeaderLevel } from './util/groupElementsByHeaderLevel';

/**
 * @param {object} props
 * @param {import('react').MutableRefObject<HTMLElement | null>} props.contentRef
 * @returns {import('react').JSX.Element}
 */
export function OnThisPage({ contentRef }) {
  const headers = findElementsByTagNameMatch(contentRef.current);
  const headersTree = groupElementsByHeaderLevel(headers);

  return (
    <div className="on-this-page">
      {
        headersTree?.length
          ? (
            <>
              <h2 className="on-this-page__header">On this page</h2>
              <ul className="on-this-page__list">
                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">Back to top</a>
                </li>
              </ul>
              <OnThisPageHeadersLevel headersLevel={headersTree} />
            </>
          )
          : null
      }
    </div>
  );
}
