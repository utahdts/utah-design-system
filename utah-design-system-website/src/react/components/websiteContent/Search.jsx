import { joinClassNames } from '@utahdts/utah-design-system';
import { useEffect, useState } from 'react';

/** @returns {JSX.Element} */
export function Search() {
  const [query, setQuery] = useState('');

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

  useEffect(() => {
    insertScript();
    getSearchTerm();
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
