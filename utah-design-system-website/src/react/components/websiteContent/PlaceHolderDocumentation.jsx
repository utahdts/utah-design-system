/* eslint-disable react/jsx-one-expression-per-line */
import { ExternalLink } from '@utahdts/utah-design-system';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAppContext from '../../context/AppContext/useAppContext';
import useCurrentMenuItem from '../../hooks/useCurrentMenuItem';
import pageUrls from '../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function PlaceHolderDocumentation() {
  const { pages, allMenus } = useAppContext();
  const { pathname } = useLocation();

  const currentMenuItem = useCurrentMenuItem(Object.values(allMenus));

  // this page may not yet be in the menu, so may not have a current menuItem
  const currentPage = Object.values(pages).find((page) => page.link === pathname);
  const currentPageUrl = Object.values(pageUrls).find((pageUrl) => pageUrl.includes(pathname));

  return (
    <>
      <h1>
        {
          currentMenuItem?.header
          || currentPage?.pageTitle
          || currentPageUrl?.split('/')?.pop?.()
        }
      </h1>
      <br />
      <p>🚧 work in progress 🚧</p>
      <p>This page is currently under construction and will be implemented soon.</p>
      <p>
        You can find our contact information on
        the <Link to={pageUrls.gettingStarted}>Getting Started</Link> page.
      </p>
      <p>
        Our <ExternalLink href="https://github.com/utahdts/utah-design-system">GitHub Repository</ExternalLink> is
        a great place to report issues.
      </p>
      <p>
        The <Link to={pageUrls.home}>Home</Link> page shows our latest progress.
      </p>
    </>
  );
}

PlaceHolderDocumentation.propTypes = propTypes;
PlaceHolderDocumentation.defaultProps = defaultProps;

export default PlaceHolderDocumentation;
