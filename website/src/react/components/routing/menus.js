import pages from './pages';

export const menuItemsMain = [
  { link: pages.main.path, title: pages.main.pageTitle },
  { link: pages.library.path, title: pages.library.pageTitle },
];

export const menuItemsLibrarySecondary = [
  { link: pages.main.path, title: pages.main.pageTitle, children: [] },
  { link: pages.library.path, title: pages.library.pageTitle },
];

export const menuItemsFoundationSecondary = [];
