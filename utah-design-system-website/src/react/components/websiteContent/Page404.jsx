/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import pageUrls from '../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function Page404() {
  return (
    <div className="documentation-template__content">
      <h1>
        404: Page Not Found
      </h1>
      <br />
      <p>You have reached a url for which there is not a page.</p>
      <p>
        We would love to know how you got here. Please contact us using one of the
        methods listed on the <Link to={pageUrls.gettingStarted}>Getting Started</Link> page
        and let us know your experience!
      </p>
      <p>
        You may go to the <Link to={pageUrls.home}>Home</Link> page to return to reality.
      </p>
    </div>
  );
}

Page404.propTypes = propTypes;
Page404.defaultProps = defaultProps;

export default Page404;
