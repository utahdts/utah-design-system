/* eslint-disable no-console */
import https from 'https';

/*
 * Notify google that the site has changed and to recrawl the pages
 * Google probably recrawls all the time anyways, but this makes us feel better.
 *
 * https://www.google.com/ping?sitemap=https://example.com/sitemap.xml
 * https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
*/

console.log('google notification of sitemap.txt commenced');
https.get(
  // always point to prod; no reason to crawl dev; deploy script for prod is the only one calling submitSitemap
  'https://www.google.com/ping?sitemap=https://designsystem.utah.gov/sitemap.txt',
  (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(data);
    });
  }
)
  .on(
    'error',
    (err) => {
      console.log(`Error: ${err.message}`);
    }
  );
