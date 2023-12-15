import { joinClassNames } from '@utahdts/utah-design-system';
import React, { useState } from 'react';

const propTypes = {};
const defaultProps = {};

function TextInputSearchExample() {
  const [query, setQuery] = useState('');
  const search = (e) => {
    e.preventDefault();
    console.log('You are searching!');
  };

  return (
    <div className="search-page">
      <form className="search-modal__form hcenter" role="search" aria-label="Sitewide" autoComplete="off" onSubmit={search}>
        <span className="utds-icon-before-search search-modal__icon-search vcenter" aria-hidden="true" />
        <label htmlFor="search-example-id" className="search-modal__input-label visually-hidden">Enter your search terms</label>
        <input type="text" id="search-example-id" className="search-modal__input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" />
        <div className={joinClassNames('search-modal__button-wrapper vcenter', !query.length && 'visually-hidden')}>
          <button type="button" className="search-modal__button button button--solid button--primary-color" onClick={search}>Search Now</button>
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div aria-hidden tabIndex={0} className="search-modal__hidden-last-focusable visually-hidden">end of search form example</div>
      </form>
    </div>
  );
}

TextInputSearchExample.propTypes = propTypes;
TextInputSearchExample.defaultProps = defaultProps;

export default TextInputSearchExample;
