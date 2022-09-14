import pages from './pages';

export const menuItemsMain = [
  { link: pages.main.path, title: pages.main.pageTitle },
  { link: pages.guidelines.path, title: pages.guidelines.pageTitle },
  { link: pages.foundation.path, title: pages.foundation.pageTitle },
  { link: pages.library.path, title: pages.library.pageTitle },
  { link: pages.resources.path, title: pages.resources.pageTitle },
];

export const menuItemsLibrarySecondary = [
  { link: pages.main.path, title: pages.main.pageTitle, children: [] },
  { link: pages.library.path, title: pages.library.pageTitle },
];

export const menuItemsFoundationSecondary = [];
