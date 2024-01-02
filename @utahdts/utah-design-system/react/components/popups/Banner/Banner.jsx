import React from 'react';
import { BANNER_PLACEMENT } from '../../../enums/bannerPlacement';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import { joinClassNames } from '../../../util/joinClassNames';
import { IconButton } from '../../buttons/IconButton';

/** @typedef {import('@utahdts/utah-design-system').BannerPlacement} BannerPlacement */
/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {import('react').MouseEventHandler} props.onClose
 * @param {BannerPlacement} [props.position]
 * @param {'small' | 'medium' | 'large'} [props.size]
 * @returns {import('react').JSX.Element}
 */
export function Banner({
  children,
  className,
  id,
  innerRef,
  onClose,
  position = BANNER_PLACEMENT.BOTTOM_LEFT,
  size,
}) {
  return (
    <div
      className={joinClassNames(
        'banner__wrapper',
        className,
        `banner--${position}`,
        size && `banner--${size}`
      )}
      id={id}
      ref={innerRef}
      role="status"
    >
      {children}
      <div className="banner__close-button flex flex-col justify-center">
        <IconButton
          aria-hidden="true"
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
