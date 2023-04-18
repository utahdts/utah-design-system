import RefShape from '../../propTypesShapes/RefShape';
import OnThisPageHeadersLevel from './OnThisPageHeadersLevel';
import findElementsByTagNameMatch from './util/findElementsByTagNameMatch';
import groupElementsByHeaderLevel from './util/groupElementsByHeaderLevel';

const propTypes = {
  contentRef: RefShape.isRequired,
};
const defaultProps = {};

function OnThisPage({ contentRef }) {
  const headers = findElementsByTagNameMatch(contentRef.current);
  const headersTree = groupElementsByHeaderLevel(headers);

  return (
    <div className="on-this-page">
      {
        headersTree?.length
          ? (
            <>
              <h2 className="on-this-page__header">On this page</h2>
              <OnThisPageHeadersLevel headersLevel={headersTree} />
            </>
          )
          : null
      }
    </div>
  );
}

OnThisPage.propTypes = propTypes;
OnThisPage.defaultProps = defaultProps;

export default OnThisPage;
