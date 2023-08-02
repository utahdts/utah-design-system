// @ts-check
/**
 * Google information on sitemaps:
 * https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#createsitemap
 *
 * All our urls are found in utah-design-system-website/src/react/components/routing/pageUrls.js
 * Create a sitemap file with a list of all these links.
 *
 * There appear to be 3 possible formats for a sitemap:
 * 1) XML
 * XML provides `lastMod`, `changeFreq`, and `priority` additional data over a text file. Google says it ignores `changeFreq` and `priority`.
 * We don't track `lastMod` so can't provide it and it has to be verifiable in order for Google to accept it.
 * So XML has no value over a text file for us at this time, though this would probably be the default option if there were
 * value in the additional fields.
 * 2) RSS/Atom
 * Same as XML, extra fields have no value for us.
 * 3) text file
 * Just a simple list of urls. This is easy to create and we have the list of urls in pageUrls.js. It just needs compiled.
 *
 * Will use the Text File approach until the additional information that XML exposes is obtainable and worthwhile.
 * NOTE: only build sitemap for production website
 */
import fs from 'fs';
import { EOL } from 'node:os';
import pageUrls from '../src/react/components/routing/pageUrls';

// use absolute urls, so will need to check branch during deploy
// BUT only submit for the prod site, so no need to use multiple urls
const ROOT_URL = 'https://designsystem.utah.gov';

// collect list of pageUrl urls
const urls = (
  Object.values(pageUrls)
    .map((pageUrl) => ROOT_URL + pageUrl)
    .sort()
);

// place sitemap file at root of site
const content = urls.join(EOL);

// create public folder if it is missing
const dir = 'utah-design-system-website/public';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// write file to root of site
fs.writeFile(
  'utah-design-system-website/public/sitemap.txt',
  content,
  (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw err;
    }
    // eslint-disable-next-line no-console
    console.log('Sitemap Created!');
  }
);
