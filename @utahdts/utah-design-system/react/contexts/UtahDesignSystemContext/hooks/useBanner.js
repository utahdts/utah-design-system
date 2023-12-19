import { useCallback, useMemo } from 'react';
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
     * @param {string} [className]
     * @param {number} [duration]
     * @param {string} [id]
     * @param {React.ReactNode} [icon]
     * @param {React.ReactNode} message
     * @param {() => void} [onClose]
     * @param {BannerPlacement} [position]
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
