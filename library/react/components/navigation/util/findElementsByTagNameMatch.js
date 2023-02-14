// @ts-check
import identity from 'lodash/identity';

// takes an element and all its children and pulls out an ordered lists of all the valid h2/h3 elements
// this could probably be a cooler function if it also reported back the "depth" of the matching header
// relevant to previous matching headers, but this function is tightly coupled to groupElementsByHeaderLevel()
// so it'd be a larger change.
export default function findElementsByTagNameMatch(element) {
  return [
    (element && element.tagName.match(/^h[23]$/i)) ? element : null,
    ...((element && element.children) ? Array.from(element.children).map((child) => findElementsByTagNameMatch(child)) : []),
  ]
    .flat(Infinity)
    .filter(identity);
}
