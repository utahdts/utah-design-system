export const mainMenuOn = { menuItems: [{ actionUrl: { url: '/' }, title: 'Home' }], title: 'Main Menu' };
export const mainMenuOff = undefined;
export const actionItemsOn = [{
  badge: { label: 'test badge' },
  showTitle: false,
  title: 'Help',
  actionDom: () => /** @type {HTMLElement} */(/** @type {any} */ (document.createTextNode('Hello'))),
  icon: '<span class="utds-icon-before-help" aria-hidden="true" />',
}];
export const actionItemsOff = undefined;
export const utahIdOn = true;
export const utahIdOff = false;
// eslint-disable-next-line no-alert
export const searchOn = (search) => alert(`${search}!`);
export const searchOff = undefined;
