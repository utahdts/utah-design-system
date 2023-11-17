// @ts-check
import React from 'react';
import joinClassNames from '../../../util/joinClassNames';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import formElementSizesEnum from '../../../enums/formElementSizesEnum';
import IconButton from '../../buttons/IconButton';

/** @typedef {import('../../../jsDocTypes').EventAction} EventAction */
/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} props.id
 * @param {React.RefObject} [props.innerRef]
 * @param {EventAction} [props.onClose]
 * @param {string} [props.position]
 * * @returns {JSX.Element}
 */
export function Banner({
  children,
  className,
  id,
  innerRef,
  onClose,
  position,
}) {
  return (
    <div
      className={joinClassNames(
        'banner--wrapper',
        className,
        position ? `banner--${position}` : 'banner--bottom-left'
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
          size={formElementSizesEnum.SMALL}
        />
      </div>
    </div>
  );
}
