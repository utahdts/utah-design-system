import { htmlDecode } from '../../util/htmlDecode';

/** @typedef {import('@utahdts/utah-design-system').HierarchyNode} HierarchyNode */

/**
 * @typedef Header {
 *  @property {object} node
 *  @property {2 | 3 | 4} level
 *  @property {Header[]} children
 * }
 */

/**
 * @param {object} props
 * @param {HierarchyNode[]} props.headersLevel
 * @param {boolean} [props.backToTop]
 * @returns {import('react').JSX.Element}
 */
export function OnThisPageHeadersLevel({ headersLevel, backToTop = false }) {
  return (
    <ul className="on-this-page__list">
      {backToTop ? <li className="back-to-top"><a href="#">Back to top</a></li> : ''}
      {
        headersLevel.map((header) => {
          let node = null;
          if (header.node.id) {
            node = (
              <li key={`on-this-page-ul-${header.node.id}`}>
                <a href={`#${header.node.id}`}>{htmlDecode(header.node.innerHTML)}</a>
                {header.children?.length ? <OnThisPageHeadersLevel headersLevel={header.children} /> : null}
              </li>
            );
          }
          return node;
        })
      }
    </ul>
  );
}
