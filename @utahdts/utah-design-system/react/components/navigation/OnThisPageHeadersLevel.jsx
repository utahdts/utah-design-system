import PropTypes from 'prop-types';

const headerShape = PropTypes.shape({ node: PropTypes.shape({}), level: PropTypes.oneOf([2, 3]) });
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
                <a href={`#${header.node.id}`}>{header.node.innerHTML}</a>
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
