import { joinClassNames } from '@utahdts/utah-design-system';
import { useEffect, useState } from 'react';

export function Search() {
  const [query, setQuery] = useState('');
  const [observer, setObserver] = useState(/** @type {MutationObserver | null} */null);

  const insertScript = () => {
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=3369fa755d1f64303';
    script.id = 'google-search';
    if (!document.getElementById('google-search')) {
      document.documentElement.firstChild?.appendChild(script);
    }
  };

  const getSearchTerm = () => {
    const url = new URL(window.location.toLocaleString());
    const param = url?.searchParams?.get('q');
    if (param) { setQuery(param); }
  };

  const checkSkipLink = () => {
    const link = document.getElementById('skip-link');
    if (link) {
      setSkipLink(link);
    } else {
      // Create observer to watch for new nodes
      const obs = new MutationObserver(() => {
        const link = document.getElementById('skip-link');
        if (link) {
          setSkipLink(link);
        }
      });
      // @ts-ignore
      if (!observer) setObserver(obs);
    }
  };

  const setSkipLink = (/** @type {HTMLElement} */ link) => {
    // Update skip link
    link.onclick = (e) => {
      e.preventDefault();
      // Focus on search input
      const content = document.getElementById('searchInput');
      content?.focus();
    };
    // Disconnect observer when done
    // @ts-ignore
    if (observer) observer.disconnect();
  };

  useEffect(() => {
    if (observer) {
      // @ts-ignore
      observer.observe(document, { subtree: true, childList: true });
    }
  }, [observer]);

  useEffect(() => {
    insertScript();
    getSearchTerm();
    checkSkipLink();
  }, []);

  useEffect(() => () => {
    // Disconnect observer on unmount
    // @ts-ignore
    if (observer) observer.disconnect();
    // Reset link behavior
    const link = document.getElementById('skip-link');
    if (link) link.onclick = () => null;
  }, []);

  return (
    <div className="landing-page-template search-page">
      <div className="content-width mb-spacing-l">
        <h1 className="mt-spacing">
          Search Results
        </h1>
        <label htmlFor="searchInput">Type and Press “enter” to Search.</label>
        <form method="get" action="/search" className="search-modal__form hcenter" role="search" aria-label="Sitewide">
          <span className="utds-icon-before-search search-modal__icon-search vcenter" aria-hidden="true" />
          <input type="text" id="searchInput" name="q" className="search-modal__input" value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className={joinClassNames('search-modal__button-wrapper vcenter', !query.length && 'visually-hidden')}>
            <button type="submit" className="search-modal__button button button--solid button--primary-color">Search Now</button>
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div aria-hidden tabIndex={0} className="search-modal__hidden-last-focusable visually-hidden">end of search form</div>
        </form>
        <div className="gcse-searchresults-only" />
      </div>
    </div>
  );
}
