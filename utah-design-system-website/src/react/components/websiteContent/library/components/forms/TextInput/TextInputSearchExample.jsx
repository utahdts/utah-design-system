import { joinClassNames, useBanner } from '@utahdts/utah-design-system';
import { useState } from 'react';

export function TextInputSearchExample() {
  const [query, setQuery] = useState('');
  const { addBanner } = useBanner();
  const search = /** @type {import('react').FormEventHandler} */ (
    (e) => {
      e.preventDefault();
      addBanner({ message: `You have searched for "${query}"!` });
    }
  );

  return (
    <div className="search-example search-input__wrapper">
      <form role="search" autoComplete="off" onSubmit={search}>
        <span className="utds-icon-before-search search-input__icon-search vcenter" aria-hidden="true" />
        <label htmlFor="search-example-id" className="visually-hidden">Enter your search terms</label>
        <input type="text" id="search-example-id" className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" />
        <div className={joinClassNames('search-input__button-wrapper vcenter', !query.length && 'visually-hidden')}>
          <button type="button" className="button button--solid button--primary-color button--small" onClick={search}>Search Now</button>
        </div>
      </form>
    </div>
  );
}
