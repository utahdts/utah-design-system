import { popupFocusHandler } from '@utahdts/utah-design-system-header';
import { useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { useImmer } from 'use-immer';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import { menuTypes } from '../../../enums/menuTypes';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { joinClassNames } from '../../../util/joinClassNames';
import { IconButton } from '../../buttons/IconButton';
import { MenuItemNavLink } from './MenuItemNavLink';

/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes  */
/** @typedef {import('@utahdts/utah-design-system').VerticalMenuMenuItemAdditions} VerticalMenuMenuItemAdditions  */

/**
 * @param {object} props
 * @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
 * @param {WebsiteMainMenuItem & VerticalMenuMenuItemAdditions} props.menuItem
 * @param {MenuTypes} [props.menuType]
 * @param {boolean} [props.triggerOnHover]
 * @returns {import('react').JSX.Element}
 */
export function MenuItemFlyout({
  currentMenuItem,
  menuItem,
  menuType,
  triggerOnHover = true,
}) {
  const [isChildrenOpen, setIsChildrenOpen] = useImmer(false);
  const wrapperElement = useRef(/** @type {HTMLLIElement | null} */(null));
  const buttonRef = useRef(/** @type {HTMLButtonElement | null} */(null));
  const popperRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const { styles, attributes } = usePopper(wrapperElement.current, popperRef.current, { placement: 'right-start' });

  useClickOutside([popperRef], () => setIsChildrenOpen(false), !isChildrenOpen);

  const isExpanded = () => {
    let retVal;
    if (!triggerOnHover) {
      retVal = isChildrenOpen;
    }
    return retVal;
  };

  useEffect(() => {
    if (triggerOnHover && buttonRef?.current && popperRef?.current && !buttonRef?.current.onclick) {
      popupFocusHandler(
        // @ts-ignore
        wrapperElement.current,
        buttonRef.current,
        popperRef.current,
        'menu',
        {
          shouldFocusOnHover: true,
          doNotClosePopupOnClick: true,
          popupPlacement: 'right-start',
        }
      );
    }
  }, [triggerOnHover, buttonRef, popperRef, buttonRef]);

  return (
    <li className={menuType === menuTypes.VERTICAL ? 'vertical-menu__item' : 'menu-item'} ref={wrapperElement}>
      <span className={menuType === menuTypes.VERTICAL ? 'vertical-menu__title' : 'menu-item__title'}>
        {
          ((!menuItem?.link && !menuItem.actionFunction && !menuItem.actionFunctionUrl && !menuItem.actionUrl) || menuItem?.link?.includes('::'))
            ? (
              <button
                aria-expanded={isExpanded()}
                aria-controls={`menu-item-${menuItem.id}-${menuItem.link || 'link'}-popup`}
                aria-haspopup="menu"
                className="menu-item__button-title"
                id={`menu-item-${menuItem.id}-${menuItem.link || 'link'}`}
                onClick={triggerOnHover ? undefined : () => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
                type="button"
                title={!triggerOnHover && menuItem.children ? 'Expand sub-menu' : ''}
                ref={buttonRef}
              >
                <span className={menuType === menuTypes.VERTICAL ? 'vertical-menu__link-text' : 'menu__link-text'}>{menuItem.title}</span>
                {menuItem.children ? <span className="utds-icon-before-chevron-right vertical-menu__chevron is-closed" aria-hidden="true" /> : null}
              </button>
            )
            : (
              <MenuItemNavLink
                currentMenuItem={currentMenuItem}
                menuItem={menuItem}
                menuType={menuType}
              />
            )
        }
        {
          (menuItem.children && menuItem.link)
            ? (
              <IconButton
                appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                aria-labelledby={`menu-item-${menuItem.id}-${menuItem.link}`}
                aria-expanded={isChildrenOpen ? 'true' : 'false'}
                className="menu-item__chevron"
                onClick={() => setIsChildrenOpen((previouslyOpen) => !previouslyOpen)}
                icon={<span className="utds-icon-before-chevron-right icon" aria-hidden="true" />}
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
              aria-labelledby={`menu-item-${menuItem.id}-${menuItem.link || 'link'}`}
              className={joinClassNames(
                'popup__wrapper',
                isChildrenOpen ? 'popup__wrapper--visible' : 'popup__wrapper--hidden'
              )}
              id={`menu-item-${menuItem.id}-${menuItem.link || 'link'}-popup`}
              ref={popperRef}
              style={styles.popper}
              {...attributes.popper}
            >
              <div className="popup__content flyout-menu">
                <ul role="menu" className={menuType === menuTypes.VERTICAL ? 'vertical-menu' : ''}>
                  {menuItem.children?.map((menuItemChild) => (
                    <MenuItemFlyout
                      key={`menu-item__child__${menuItemChild.link || 'link'}-${menuItemChild.title}}`}
                      menuItem={menuItemChild}
                      menuType={menuType}
                      triggerOnHover={triggerOnHover}
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
