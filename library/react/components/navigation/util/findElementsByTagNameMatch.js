import identity from 'lodash/identity';

export default function findElementsByTagNameMatch(element) {
  // console.warn('Need to jest unit test: findElementsByTagNameMatch');
  return [
    (element && element.tagName.match(/^h[23]$/i)) && element,
    ...((element && element.children) ? Array.from(element.children).map((child) => findElementsByTagNameMatch(child)) : []),
  ]
    .flat(Infinity)
    .filter(identity);
}
