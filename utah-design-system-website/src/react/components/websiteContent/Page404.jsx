/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import { MainContent } from '@utahdts/utah-design-system';
import { pageUrls } from '../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function Page404() {
  return (
    <MainContent className="landing-page-template page-not-found">
      <div className="top-banner" />
      <div className="content-width page-not-found__content">
        <div>
          <h1 className="mt-spacing">
            Page Not Found
          </h1>
          <br />
          <p>You have reached a web address url for which there is no page.</p>
          <p>
            If you encountered this error while navigating this site, we would love to know how you got here. Please contact us using one of the
            methods listed on the <Link to={pageUrls.gettingStarted}>Getting Started</Link> page
            and let us know your experience!
          </p>
          <p>
            To return to reality you may navigate using the above menu or visit the <Link to={pageUrls.home}>home</Link> page.
          </p>
          <p className="mb-spacing-l">
            <Link to={pageUrls.home} className="button button--primary-color button--solid" style={{ display: 'inline-flex' }}>{/*
              */}<span className="button--icon button--icon-left"><span className="utds-icon-before-arrow-left" aria-hidden="true" style={{ fontSize: '.9rem' }} /></span>{' '}
              Home Page
            </Link>
          </p>
        </div>
      </div>
    </MainContent>
  );
}

Page404.propTypes = propTypes;
Page404.defaultProps = defaultProps;

export default Page404;
