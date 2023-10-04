// @ts-check
import { describe, expect, test } from 'vitest';
import menus from '../../../../src/react/components/routing/menus';
import valuesForKey from '../../../util/valuesForKey';

describe('menus - menu items are single pathed', () => {
  test(
    'menus - find duplicate paths',
    () => {
      // follow each menu tree to find the leaves
      // make sure there are no duplicate leaves
      // ignore a leaf if its `isSecondaryMenuItem` flag is set

      /** @type {Set<string>} */
      const knownPaths = new Set();

      const allLinks = valuesForKey(menus, 'link', (_, linkObject) => !linkObject.isAlternatePath);

      allLinks.forEach((link) => {
        const knownPathsHasLink = knownPaths.has(link);
        if (knownPathsHasLink) {
          console.error(`menus: duplicate path found for link '${link}'`);
        }
        expect(knownPathsHasLink).toBeFalsy();
        knownPaths.add(link);
      });
    }
  );
});
