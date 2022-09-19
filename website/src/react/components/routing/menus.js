import pages from './pages';

export const menuItemsMain = [
  { link: pages.home.link, title: pages.home.pageTitle },
  { link: pages.guidelines.link, title: pages.guidelines.pageTitle },
  { link: pages.foundation.link, title: pages.foundation.pageTitle },
  { link: pages.library.link, title: pages.library.pageTitle },
  { link: pages.resources.link, title: pages.resources.pageTitle },
];

export const menuItemsFoundationSecondary = [
  {
    link: pages.spacing.link,
    title: pages.spacing.pageTitle,
    parentLinks: [pages.foundation.link],
  },
  {
    link: pages.typography.link,
    title: pages.typography.pageTitle,
    parentLinks: [pages.foundation.link],
  },
  {
    link: pages.depthElevationShadows.link,
    title: pages.depthElevationShadows.pageTitle,
    parentLinks: [pages.foundation.link],
  },
  {
    link: pages.shape.link,
    title: pages.shape.pageTitle,
    parentLinks: [pages.foundation.link],
  },
  {
    link: pages.motionTiming.link,
    title: pages.motionTiming.pageTitle,
    parentLinks: [pages.foundation.link],
  },
  {
    link: pages.colorFoundation.link,
    title: pages.colorFoundation.pageTitle,
    parentLinks: [pages.foundation.link],
  },
  {
    link: pages.layout.link,
    title: pages.layout.pageTitle,
    parentLinks: [pages.foundation.link],
  },
  {
    link: pages.opacity.link,
    title: pages.opacity.pageTitle,
    parentLinks: [pages.foundation.link],
  },
];

export const menuItemsGuidelinesSecondary = [
  {
    link: pages.principles.link,
    title: pages.principles.pageTitle,
    parentLinks: [pages.guidelines.link],
  },
  {
    link: pages.uxBestPractices.link,
    title: pages.uxBestPractices.pageTitle,
    parentLinks: [pages.guidelines.link],
  },
  {
    link: pages.accessibility.link,
    title: pages.accessibility.pageTitle,
    parentLinks: [pages.guidelines.link],
  },
  {
    link: pages.colorGuidelines.link,
    title: pages.colorGuidelines.pageTitle,
    parentLinks: [pages.guidelines.link],
  },
  {
    link: pages.design.link,
    title: pages.design.pageTitle,
    parentLinks: [pages.guidelines.link],
  },
];

export const menuItemsLibrarySecondary = [
  {
    title: 'Basic Atomic',
    parentLinks: [pages.library.link],
    children: [
      { link: pages.anchors.link, title: pages.anchors.pageTitle },
      { link: pages.horizontalRule.link, title: pages.horizontalRule.pageTitle },
      { link: pages.links.link, title: pages.links.pageTitle },
      { link: pages.tags.link, title: pages.tags.pageTitle },
      { link: pages.type.link, title: pages.type.pageTitle },
    ],
  },
  {
    title: 'Buttons',
    parentLinks: [pages.library.link],
    children: [
      { link: pages.button.link, title: pages.button.pageTitle },
      { link: pages.buttonGroup.link, title: pages.buttonGroup.pageTitle },
      { link: pages.confirmationButton.link, title: pages.confirmationButton.pageTitle },
      { link: pages.iconButton.link, title: pages.iconButton.pageTitle },
      { link: pages.segmentedButton.link, title: pages.segmentedButton.pageTitle },
    ],
  },
  {
    link: pages.patterns.link,
    title: pages.patterns.pageTitle,
    parentLinks: [pages.library.link],
  },
  {
    link: pages.templates.link,
    title: pages.templates.pageTitle,
    parentLinks: [pages.library.link],
  },
  // {
  //   link: pages.forms.link,
  //   title: pages.forms.pageTitle,
  //   children: [
  //     { link: pages.form.link, title: pages.form.pageTitle },
  //   ],
  // },
  // // placeholder VVVVVVVVV
  // { link: pages.library.link, title: pages.library.pageTitle },
];

export const menuItemsResourcesSecondary = [
  {
    link: pages.github.link,
    title: pages.github.pageTitle,
    parentLinks: [pages.resources.link],
  },
  {
    link: pages.demo.link,
    title: pages.demo.pageTitle,
    parentLinks: [pages.resources.link],
  },
  {
    link: pages.colorPicker.link,
    title: pages.colorPicker.pageTitle,
    parentLinks: [pages.resources.link],
  },
  {
    link: pages.icons.link,
    title: pages.icons.pageTitle,
    parentLinks: [pages.resources.link],
  },
  {
    link: pages.contributeCommunity.link,
    title: pages.contributeCommunity.pageTitle,
    parentLinks: [pages.resources.link],
  },
  {
    link: pages.help.link,
    title: pages.help.pageTitle,
    parentLinks: [pages.resources.link],
  },
];
