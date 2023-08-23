import { useEffect, useState } from 'react';

const propTypes = {};
const defaultProps = {};

function Search() {
  const [query, setQuery] = useState('');

  const insertScript = () => {
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=3369fa755d1f64303';
    script.id = 'google-search';
    if (!document.getElementById('google-search')) {
      document.documentElement.firstChild.appendChild(script);
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
    <div className="landing-page-template">
      <div className="content-width mb-spacing-l">
        <h1 className="mt-spacing">
          Search Results
        </h1>
        <form method="get" id="searchform" action="/search">
          <label htmlFor="searchInput">Type and Press “enter” to Search.</label>
          <input type="text" id="searchInput" name="q" value={query} onChange={(e) => setQuery(e.target.value)} />
        </form>
        <div className="gcse-searchresults-only" />
      </div>
    </div>
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
