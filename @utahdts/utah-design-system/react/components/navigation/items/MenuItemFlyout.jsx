import { popupFocusHandler } from '@utahdts/utah-design-system-header';
import { useEffect, useRef } from 'react';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';
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
  const popupRef = useRef(/** @type {HTMLDivElement | null} */(null));

  const { floatingStyles } = useFloating({
    elements: {
      reference: buttonRef.current,
      floating: popupRef.current,
    },
    open: isChildrenOpen,
    placement: 'right-start',
    middleware: [
      offset(10),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  useClickOutside([popupRef], () => setIsChildrenOpen(false), !isChildrenOpen);

  const isExpanded = () => {
    let retVal;
    if (!triggerOnHover) {
      retVal = isChildrenOpen;
    }
    return retVal;
  };

  useEffect(() => {
    if (triggerOnHover && buttonRef?.current && popupRef?.current && !buttonRef?.current.onclick) {
      popupFocusHandler(
        // @ts-expect-error
        wrapperElement.current,
        buttonRef.current,
        popupRef.current,
        'menu',
        {
          shouldFocusOnHover: true,
          doNotClosePopupOnClick: true,
          popupPlacement: 'right-start',
        }
      );
    }
  }, [triggerOnHover, buttonRef, popupRef]);

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
                className={joinClassNames(
                  'menu-item__button-title',
                  currentMenuItem?.parentLinks?.includes(menuItem.link ?? '') && (currentMenuItem?.children?.length ? '' : 'menu-item--selected_parent')
                )}
                id={encodeURI(`menu-item-${menuItem.id}-${menuItem.link || 'link'}`)}
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
                aria-labelledby={encodeURI(`menu-item-${menuItem.id}-${menuItem.link || 'link'}`)}
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
              aria-labelledby={encodeURI(`menu-item-${menuItem.id}-${menuItem.link || 'link'}`)}
              className={joinClassNames(
                'popup__wrapper',
                isChildrenOpen ? 'popup__wrapper--visible' : 'popup__wrapper--hidden'
              )}
              id={`menu-item__${menuItem.id}__${menuItem.link || 'link'}-popup`}
              ref={popupRef}
              style={floatingStyles}
            >
              <div className="popup__content flyout-menu">
                <ul className={menuType === menuTypes.VERTICAL ? 'vertical-menu' : ''}>
                  {menuItem.children?.map((menuItemChild) => (
                    <MenuItemFlyout
                      currentMenuItem={currentMenuItem}
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
