// @ts-check
import { describe, expect, test } from 'vitest';
import loadTestHeader from '../util/loadTestHeader';
import defaultTestSettings from './util/defaultTestSettings.json';
import {
  actionItemsOff,
  actionItemsOn,
  mainMenuOff,
  mainMenuOn,
  searchOff,
  searchOn,
  utahIdOff,
  utahIdOn,
} from './util/defaultValues';
import * as headerComponentsExist from './util/doHeaderComponentsExist';

/** @typedef {import('../../../src/js/misc/jsDocTypes').Settings} Settings */

/*
 *  There are four main dynamically positioned parts to the Utah Header:
 *  * Main Menu
 *  * Action Items
 *  * Utah ID
 *  * Search
 *
 *  The presence or lack of these items causes different parts to be rendered in different locations
 *  of the Header's Citizen Experience and Main Menu bar locations. Also, the Mobile content renders
 *  differently based on the presence or absence of these items.
 *
 *  scnrio menu  action  utahid  search  result
 *  A      -     -       -       -       No hamburger, no bar
 *  B      -     -       -       √       no hamburger, just search in top right
 *  C      √     -       -       -       move hamburger to top right, no bar
 *  D      -     √       -       -       move hamburger to top right, no bar
 *  E      √     √       -       -       move hamburger to top right, no bar
 *  G      -     -       √       -       normal bar
 *  H      √     -       √       -       normal bar
 *  I      √     -       -       √       normal bar
 *  J      -     √       √       -       normal bar
 *  K      -     √       -       √       normal bar
 *  L      -     -       √       √       normal bar
 *  M      √     √       √       -       normal bar
 *  N      √     √       -       √       normal bar
 *  O      √     -       √       √       normal bar
 *  P      -     √       √       √       normal bar
 *  X      √     √       √       √       normal bar (has it all)
 *
 *  These tests cover these scenarios to make sure they put the right things in
 *  the right place based on each scenario. This should help future changes to these areas not
 *  cause regressions.
 */

describe('Header Components', () => {
  headerComponentsExist.testSanity(headerComponentsExist);
  test.each([
    [
      'A - nothing',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOff,
        actionItems: actionItemsOff,
        onSearch: searchOff,
        utahId: utahIdOff,
      },
      {
        isActionItemsInCitizenExperience: false,
        isDesktopMainMenuOn: false,
        isMobileMainMenuOn: false,
        isMobileActionItemsInMobileContent: false,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: false,
        isMobileHomeActionItemInMobileContent: false,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: false,
        isMobileUtahIdInInMainMenu: false,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: false,
        isUtahIdInCitizenExperience: false,
      },
    ],
    [
      'B - just search',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOff,
        actionItems: actionItemsOff,
        onSearch: searchOn,
        utahId: utahIdOff,
      },
      {
        isActionItemsInCitizenExperience: false,
        isDesktopMainMenuOn: false,
        isMobileMainMenuOn: false,
        isMobileActionItemsInMobileContent: false,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: false,
        isMobileHomeActionItemInMobileContent: false,
        isMobileSearchInCitizenExperience: true,
        isMobileUtahIdActionItemInMobileContent: false,
        isMobileUtahIdInInMainMenu: false,
        isSearchInCitizenExperience: true,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: false,
        isUtahIdInCitizenExperience: false,
      },
    ],
    [
      'C - just main menu',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOn,
        actionItems: actionItemsOff,
        onSearch: searchOff,
        utahId: utahIdOff,
      },
      {
        isActionItemsInCitizenExperience: false,
        isDesktopMainMenuOn: true,
        isMobileMainMenuOn: false,
        isMobileActionItemsInMobileContent: false,
        isMobileHamburgerInCitizenExperience: true,
        isMobileHamburgerInMainMenu: false,
        isMobileHomeActionItemInMobileContent: true,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: false,
        isMobileUtahIdInInMainMenu: false,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: false,
        isUtahIdInCitizenExperience: false,
      },
    ],
    [
      'D - just action items',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOff,
        actionItems: actionItemsOn,
        onSearch: searchOff,
        utahId: utahIdOff,
      },
      {
        isActionItemsInCitizenExperience: true,
        isDesktopMainMenuOn: false,
        isMobileMainMenuOn: false,
        isMobileActionItemsInMobileContent: true,
        isMobileHamburgerInCitizenExperience: true,
        isMobileHamburgerInMainMenu: false,
        isMobileHomeActionItemInMobileContent: false,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: false,
        isMobileUtahIdInInMainMenu: false,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: false,
        isUtahIdInCitizenExperience: false,
      },
    ],
    [
      'E - menu & actions',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOn,
        actionItems: actionItemsOn,
        onSearch: searchOff,
        utahId: utahIdOff,
      },
      {
        isActionItemsInCitizenExperience: true,
        isDesktopMainMenuOn: true,
        isMobileMainMenuOn: false,
        isMobileActionItemsInMobileContent: true,
        isMobileHamburgerInCitizenExperience: true,
        isMobileHamburgerInMainMenu: false,
        isMobileHomeActionItemInMobileContent: true,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: false,
        isMobileUtahIdInInMainMenu: false,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: false,
        isUtahIdInCitizenExperience: false,
      },
    ],
    // where is F? spooky... 👻  🧙‍♂️🪄
    [
      'G - utahId',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOff,
        actionItems: actionItemsOff,
        onSearch: searchOff,
        utahId: utahIdOn,
      },
      {
        isActionItemsInCitizenExperience: false,
        isDesktopMainMenuOn: false,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: false,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: false,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: true,
        isMobileUtahIdInInMainMenu: true,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: false,
        isUtahIdInCitizenExperience: true,
      },
    ],
    [
      'H - menu & utahId',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOn,
        actionItems: actionItemsOff,
        onSearch: searchOff,
        utahId: utahIdOn,
      },
      {
        isActionItemsInCitizenExperience: false,
        isDesktopMainMenuOn: true,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: false,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: true,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: true,
        isMobileUtahIdInInMainMenu: true,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: false,
        isUtahIdInCitizenExperience: true,
      },
    ],
    [
      'I - menu & search',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOn,
        actionItems: actionItemsOff,
        onSearch: searchOn,
        utahId: utahIdOff,
      },
      {
        isActionItemsInCitizenExperience: false,
        isDesktopMainMenuOn: true,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: false,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: true,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: false,
        isMobileUtahIdInInMainMenu: false,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: true,
        isSearchInMobileMainMenu: true,
        isUtahIdInCitizenExperience: false,
      },
    ],
    [
      'J - action & utahId',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOff,
        actionItems: actionItemsOn,
        onSearch: searchOff,
        utahId: utahIdOn,
      },
      {
        isActionItemsInCitizenExperience: true,
        isDesktopMainMenuOn: false,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: true,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: false,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: true,
        isMobileUtahIdInInMainMenu: true,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: false,
        isUtahIdInCitizenExperience: true,
      },
    ],
    [
      'K - action & search',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOff,
        actionItems: actionItemsOn,
        onSearch: searchOn,
        utahId: utahIdOff,
      },
      {
        isActionItemsInCitizenExperience: true,
        isDesktopMainMenuOn: false,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: true,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: false,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: false,
        isMobileUtahIdInInMainMenu: false,
        isSearchInCitizenExperience: true,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: true,
        isUtahIdInCitizenExperience: false,
      },
    ],
    [
      'L - utahId & search',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOff,
        actionItems: actionItemsOff,
        onSearch: searchOn,
        utahId: utahIdOn,
      },
      {
        isActionItemsInCitizenExperience: false,
        isDesktopMainMenuOn: false,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: false,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: false,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: true,
        isMobileUtahIdInInMainMenu: true,
        isSearchInCitizenExperience: true,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: true,
        isUtahIdInCitizenExperience: true,
      },
    ],
    [
      'M - no search',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOn,
        actionItems: actionItemsOn,
        onSearch: searchOff,
        utahId: utahIdOn,
      },
      {
        isActionItemsInCitizenExperience: true,
        isDesktopMainMenuOn: true,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: true,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: true,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: true,
        isMobileUtahIdInInMainMenu: true,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: false,
        isUtahIdInCitizenExperience: true,
      },
    ],
    [
      'N - no utahId',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOn,
        actionItems: actionItemsOn,
        onSearch: searchOn,
        utahId: utahIdOff,
      },
      {
        isActionItemsInCitizenExperience: true,
        isDesktopMainMenuOn: true,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: true,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: true,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: false,
        isMobileUtahIdInInMainMenu: false,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: true,
        isSearchInMobileMainMenu: true,
        isUtahIdInCitizenExperience: false,
      },
    ],
    [
      'O - no action',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOn,
        actionItems: actionItemsOff,
        onSearch: searchOn,
        utahId: utahIdOn,
      },
      {
        isActionItemsInCitizenExperience: false,
        isDesktopMainMenuOn: true,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: false,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: true,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: true,
        isMobileUtahIdInInMainMenu: true,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: true,
        isSearchInMobileMainMenu: true,
        isUtahIdInCitizenExperience: true,
      },
    ],
    [
      'P - no menu',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOff,
        actionItems: actionItemsOn,
        onSearch: searchOn,
        utahId: utahIdOn,
      },
      {
        isActionItemsInCitizenExperience: true,
        isDesktopMainMenuOn: false,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: true,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: false,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: true,
        isMobileUtahIdInInMainMenu: true,
        isSearchInCitizenExperience: true,
        isSearchInDesktopMainMenu: false,
        isSearchInMobileMainMenu: true,
        isUtahIdInCitizenExperience: true,
      },
    ],
    [
      'X - all',
      {
        ...defaultTestSettings,
        mainMenu: mainMenuOn,
        actionItems: actionItemsOn,
        onSearch: searchOn,
        utahId: utahIdOn,
      },
      {
        isActionItemsInCitizenExperience: true,
        isDesktopMainMenuOn: true,
        isMobileMainMenuOn: true,
        isMobileActionItemsInMobileContent: true,
        isMobileHamburgerInCitizenExperience: false,
        isMobileHamburgerInMainMenu: true,
        isMobileHomeActionItemInMobileContent: true,
        isMobileSearchInCitizenExperience: false,
        isMobileUtahIdActionItemInMobileContent: true,
        isMobileUtahIdInInMainMenu: true,
        isSearchInCitizenExperience: false,
        isSearchInDesktopMainMenu: true,
        isSearchInMobileMainMenu: true,
        isUtahIdInCitizenExperience: true,
      },
    ],
  ])(
    'Header Components Scenarios - %s',
    (_title, settings, results) => {
      loadTestHeader(settings);

      expect(headerComponentsExist.isActionItemsInCitizenExperience()).toBe(results.isActionItemsInCitizenExperience);
      expect(headerComponentsExist.isDesktopMainMenuOn()).toBe(results.isDesktopMainMenuOn);
      expect(headerComponentsExist.isMobileMainMenuOn()).toBe(results.isMobileMainMenuOn);
      expect(headerComponentsExist.isMobileActionItemsInMobileContent()).toBe(results.isMobileActionItemsInMobileContent);
      expect(headerComponentsExist.isMobileHamburgerInCitizenExperience()).toBe(results.isMobileHamburgerInCitizenExperience);
      expect(headerComponentsExist.isMobileHamburgerInMainMenu()).toBe(results.isMobileHamburgerInMainMenu);
      expect(headerComponentsExist.isMobileHomeActionItemInMobileContent()).toBe(results.isMobileHomeActionItemInMobileContent);
      expect(headerComponentsExist.isMobileSearchInCitizenExperience()).toBe(results.isMobileSearchInCitizenExperience);
      expect(headerComponentsExist.isMobileUtahIdActionItemInMobileContent()).toBe(results.isMobileUtahIdActionItemInMobileContent);
      expect(headerComponentsExist.isMobileUtahIdInInMainMenu()).toBe(results.isMobileUtahIdInInMainMenu);
      expect(headerComponentsExist.isSearchInCitizenExperience()).toBe(results.isSearchInCitizenExperience);
      expect(headerComponentsExist.isSearchInDesktopMainMenu()).toBe(results.isSearchInDesktopMainMenu);
      expect(headerComponentsExist.isSearchInMobileMainMenu()).toBe(results.isSearchInMobileMainMenu);
      expect(headerComponentsExist.isUtahIdInCitizenExperience()).toBe(results.isUtahIdInCitizenExperience);
    }
  );
});
