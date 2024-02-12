import { NavLink } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { useRef } from 'react';
import { usePopper } from 'react-popper';
import { joinClassNames } from '../../../util/joinClassNames';
import { IconButton } from '../../buttons/IconButton';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import { Icons } from '../../icons/Icons';
import { menuTypes } from '../../../enums/menuTypes';
import { useClickOutside } from '../../../hooks/useClickOutside';

/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes  */

/**
 * @param {object} props
 * @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
 * @param {WebsiteMainMenuItem} props.menuItem
 * @param {MenuTypes} [props.menuType]
 * @returns {import('react').JSX.Element}
 */
export function MenuItemFlyout({
  currentMenuItem,
  menuItem,
  menuType,
}) {
  const [isChildrenOpen, setIsChildrenOpen] = useImmer(false);
  const referenceElement = useRef(/** @type {HTMLLIElement | null} */(null));
  const popperRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const { styles, attributes } = usePopper(referenceElement.current, popperRef.current, { placement: 'right-start' });

  const navLinkRef = useRef(/** @type {HTMLAnchorElement | null} */(null));
  useClickOutside(popperRef, () => setIsChildrenOpen(false), !isChildrenOpen);

  return (
    <li className={menuType === menuTypes.VERTICAL ? 'vertical-menu__item' : 'menu-item'} ref={referenceElement}>
      <span className={menuType === menuTypes.VERTICAL ? 'vertical-menu__title' : 'menu-item__title'}>
        {
          (!menuItem?.link || menuItem?.link?.includes('::'))
            ? (
              <button
                aria-expanded={isChildrenOpen ? 'true' : 'false'}
                aria-controls={`menu-item-${menuItem.id}-${menuItem.link}-popup`}
                aria-haspopup="dialog"
                className="menu-item__button-title"
                id={`menu-item-${menuItem.id}-${menuItem.link}`}
                onClick={() => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
                type="button"
                title={menuItem.children ? 'Expand sub-menu' : ''}
              >
                <span className={menuType === menuTypes.VERTICAL ? 'vertical-menu__link-text' : 'menu__link-text'}>{menuItem.title}</span>
                {menuItem.children ? <span className="utds-icon-before-chevron-right vertical-menu__chevron is-closed" aria-hidden="true" /> : null}
              </button>
            )
            : (
              <NavLink
                className={(navData) => joinClassNames(
                  menuType === menuTypes.VERTICAL ? 'vertical-menu__link-title' : 'menu-item__link-title',
                  (currentMenuItem?.parentLinks?.includes(menuItem.link ?? '') || navData.isActive)
                      && (currentMenuItem?.children?.length ? 'menu-item--selected_parent' : 'menu-item--selected')
                )}
                end
                to={menuItem.link}
                ref={navLinkRef}
              >
                {menuItem.title}
              </NavLink>
            )
          }
        {
          (menuItem.children && menuItem?.link)
            ? (
              <IconButton
                appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                aria-labelledby={`menu-item-${menuItem.id}-${menuItem.link}`}
                aria-expanded={isChildrenOpen ? 'true' : 'false'}
                className="menu-item__chevron"
                onClick={() => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
                icon={<Icons.IconChevron />}
                title="Expand sub-menu"
              />
            )
            : null
        }
        <span className="menu-chiclet" />
      </span>
      {
        menuItem.children
          ? (
            <div
              aria-labelledby={`menu-item-${menuItem.id}-${menuItem.link}`}
              className={joinClassNames(
                'popup__wrapper',
                isChildrenOpen ? 'popup__wrapper--visible' : 'popup__wrapper--hidden'
              )}
              id={`menu-item-${menuItem.id}-${menuItem.link}-popup`}
              ref={popperRef}
              style={styles.popper}
              {...attributes.popper}
            >
              <div className="popup__content flyout-menu">
                <ul role="menu" className={menuType === menuTypes.VERTICAL ? 'vertical-menu' : ''}>
                  {menuItem.children?.map((menuItemChild) => (
                    <MenuItemFlyout
                      key={`menu-item__child__${menuItemChild.link}-${menuItemChild.title}}`}
                      menuItem={menuItemChild}
                      menuType={menuType}
                    />
                  ))}
                </ul>
              </div>
            </div>
          )
          : null
    }
    </li>
  );
}
