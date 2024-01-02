import React, { useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useUtahDesignSystemContext } from '../useUtahDesignSystemContext';

/** @typedef {import('@utahdts/utah-design-system').BannerPlacement} BannerPlacement */
/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextBanner} UtahDesignSystemContextBanner */
/**
 * @returns {{
 * addBanner: function(UtahDesignSystemContextBanner): void,
 * removeBanner: function(UtahDesignSystemContextBanner): void
 * }}
 */
export function useBanner() {
  const [, setState] = useUtahDesignSystemContext();

  const addBanner = useCallback(
    /**
     * @param {object} param
     * @param {string} [param.className]
     * @param {number} [param.duration]
     * @param {string} [param.id]
     * @param {import('react').ReactNode} [param.icon]
     * @param {import('react').ReactNode} param.message
     * @param {(e: React.MouseEvent | undefined) => void} [param.onClose]
     * @param {BannerPlacement} [param.position]
     */
    ({
      className,
      duration,
      id,
      icon,
      message,
      onClose,
      position = 'bottom-left',
    }) => {
      setState((draftState) => {
        draftState.banners.push({
          className,
          duration,
          icon,
          id: id || uuidv4(),
          message,
          onClose,
          position,
        });
      });
    },
    [setState]
  );

  const removeBanner = useCallback(
    /**
     * @param {UtahDesignSystemContextBanner} banner
     * @returns {void}
     */
    (banner) => {
      setState((draftState) => {
        const currentIndex = draftState.banners.findIndex((item) => item.id === banner.id);
        if (currentIndex !== -1) { draftState.banners.splice(currentIndex, 1); }
      });
    },
    [setState]
  );

  return useMemo(() => ({ addBanner, removeBanner }), [addBanner, removeBanner]);
}
