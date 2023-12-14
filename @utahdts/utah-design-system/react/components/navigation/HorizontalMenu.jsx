import { joinClassNames } from '../../util/joinClassNames';
import { MenuItem } from './MenuItem';

/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {WebsiteMainMenuItem} [props.currentMenuItem]
 * @param {string} props.id
 * @param {WebsiteMainMenu} props.menu
 * @param {string} [props.titleTagClassName]
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [props.titleTagName]
 * @returns {JSX.Element}
 */
export function HorizontalMenu({
  className,
  currentMenuItem,
  id,
  menu,
  titleTagClassName = 'visually-hidden',
  titleTagName: TitleTagName = 'h2',
}) {
  return (
    <nav className={joinClassNames(className, 'horizontal-menu')} aria-labelledby={id}>
      <TitleTagName id={id} className={titleTagClassName}>Main Menu</TitleTagName>
      <ul>
        {menu?.menuItems?.map((menuItem) => (
          <MenuItem menuItem={menuItem} key={`horizontal-menu__nav-link__${menuItem.link}-${menuItem.title}}`} currentMenuItem={currentMenuItem} />
        ))}
      </ul>
    </nav>
  );
}
