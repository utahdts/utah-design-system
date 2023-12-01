// @ts-check
import React from 'react';
import joinClassNames from '../../../util/joinClassNames';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import IconButton from '../../buttons/IconButton';
import { BANNER_PLACEMENT } from '../../../enums/bannerPlacement';

/** @typedef {import('../../../jsDocTypes').EventAction} EventAction */
/** @typedef {import('../../../jsDocTypes').BannerPlacement} BannerPlacement */
/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} props.id
 * @param {React.Ref<HTMLDivElement>} [props.innerRef]
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} props.onClose
 * @param {BannerPlacement} [props.position]
 * * @returns {JSX.Element}
 */
export function Banner({
  children,
  className,
  id,
  innerRef,
  onClose,
  position = BANNER_PLACEMENT.BOTTOM_LEFT,
}) {
  return (
    <div
      className={joinClassNames(
        'banner--wrapper',
        className,
        `banner--${position}`
      )}
      id={id}
      ref={innerRef}
    >
      {children}
      <div className="banner--close-button">
        <IconButton
          appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
          className="popup__close-button"
          icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
          onClick={onClose}
          title="Close banner"
          size="small"
        />
      </div>
    </div>
  );
}
