import pages from './pages';

export const menuItemsMain = [
  { link: pages.home.link, title: pages.home.pageTitle },
  { link: pages.guidelines.link, title: pages.guidelines.pageTitle },
  { link: pages.foundation.link, title: pages.foundation.pageTitle },
  { link: pages.library.link, title: pages.library.pageTitle },
  { link: pages.resources.link, title: pages.resources.pageTitle },
];

export const menuItemsLibrarySecondary = [
  {
    link: pages.buttons.link,
    title: pages.buttons.pageTitle,
    parentLinks: [pages.library.link],
    children: [
      { link: pages.button.link, title: pages.button.pageTitle, parentLinks: [pages.library.link, pages.buttons.link] },
      { link: pages.segmentedButton.link, title: pages.segmentedButton.pageTitle, parentLinks: [pages.library.link, pages.buttons.link] },
    ],
  },
  {
    link: pages.forms.link,
    title: pages.forms.pageTitle,
    parentLinks: [pages.library.link],
    children: [
      { link: pages.form.link, title: pages.form.pageTitle, parentLinks: [pages.library.link, pages.forms.link] },
    ],
  },
  // placeholder VVVVVVVVV
  { link: pages.library.link, title: pages.library.pageTitle, parentLinks: [] },
];

export const menuItemsFoundationSecondary = [];
