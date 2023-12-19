// @ts-check
import { useCallback, useMemo } from 'react';
import useUtahDesignSystemContext from '../useUtahDesignSystemContext';
import uuidv4 from '../../../util/uuidv4';

/** @typedef {import('../../../jsDocTypes').UtahDesignSystemContextBanner} UtahDesignSystemContextBanner */
/** @typedef {import('../../../jsDocTypes').BannerPlacement} BannerPlacement */
/**
 * @returns {{
 * addBanner: function(UtahDesignSystemContextBanner): void,
 * removeBanner: function(UtahDesignSystemContextBanner): void
 * }}
 */
export function useBanner() {
  const [, setState] = useUtahDesignSystemContext();

  // eslint-disable-next-line function-paren-newline
  const addBanner = useCallback(
    /**
     * @param {string} [className]
     * @param {number} [duration]
     * @param {string} [id]
     * @param {HTMLElement} [icon]
     * @param {HTMLElement | string} message
     * @param {() => void} [onClose]
     * @param {string} [position]
     * @returns {void}
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
    }, [setState]);

  // eslint-disable-next-line function-paren-newline
  const removeBanner = useCallback(
    /**
     * @param {UtahDesignSystemContextValue} banner
     * @returns {void}
     */
    (banner) => {
      setState((draftState) => {
        const currentIndex = draftState.banners.findIndex((item) => item.id === banner.id);
        if (currentIndex !== -1) { draftState.banners.splice(currentIndex, 1); }
      });
    }, [setState]);

  return useMemo(() => ({ addBanner, removeBanner }), [addBanner, removeBanner]);
}
