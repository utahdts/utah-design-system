import { identity } from 'lodash';

/**
 * @param {string} codeRaw
 * @returns {string}
 */
export function formatPreCode(codeRaw) {
  // pull out first and last \n so there are not empty lines
  const withOutLinePadding = (codeRaw || '').replace(/(^\n)|(\n\s*$)/g, '');

  // split by line
  const lines = withOutLinePadding.split(/\n/);

  // get the starting blank spaces for each line; want to remove indentation
  const linePaddings = lines.filter(identity).map((line) => /(^\s*)/.exec(line)?.[0]);

  // what was the smallest padding found?
  const smallestPadding = linePaddings.reduce(
    (shortestLength, paddedLine) => Math.min(shortestLength, paddedLine?.length || 0),
    Infinity
  );
  const paddingRemovalSize = Number.isFinite(smallestPadding) ? smallestPadding : 0;

  // remove smallest padding from all the lines
  const smallerLines = lines.map((line) => line.substring(paddingRemovalSize));

  // put it all back together
  return smallerLines.join('\n');
}
