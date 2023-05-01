import PropTypes from 'prop-types';
import htmlDecode from '../../util/htmlDecode';

const headerShape = PropTypes.shape({ node: PropTypes.shape({}), level: PropTypes.oneOf([2, 3, 4]) });
headerShape.children = PropTypes.arrayOf(headerShape);

const propTypes = {
  headersLevel: PropTypes.arrayOf(headerShape).isRequired,
};
const defaultProps = {};

function OnThisPageHeadersLevel({ headersLevel }) {
  return (
    <ul className="on-this-page__list">
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

OnThisPageHeadersLevel.propTypes = propTypes;
OnThisPageHeadersLevel.defaultProps = defaultProps;

export default OnThisPageHeadersLevel;
