// @ts-check
import { useCallback, useMemo } from 'react';
import useUtahDesignSystemContext from '../useUtahDesignSystemContext';
import uuidv4 from '../../../util/uuidv4';

/** @typedef {import('../../../jsDocTypes').UtahDesignSystemContextBanner} UtahDesignSystemContextBanner */
/** @typedef {import('../../../jsDocTypes').BannerPlacement} BannerPlacement */
/**
 * @returns {{
 * addBanner: function({
 *  className: string | undefined,
 *  duration: number | undefined,
 *  icon: HTMLElement | undefined,
 *  message: HTMLElement | string,
 *  position: BannerPlacement | undefined
 * }): void,
 * removeBanner: function(UtahDesignSystemContextBanner): void
 * }}
 */
export function useBanner() {
  const [, setState] = useUtahDesignSystemContext();

  // eslint-disable-next-line function-paren-newline
  const addBanner = useCallback(
    /**
     * @param {string | undefined} [className]
     * @param {number | undefined} [duration]
     * @param {HTMLElement | undefined} [icon]
     * @param {HTMLElement | string} message
     * @param {string | undefined} position
     * @returns {void}
     */
    ({
      className,
      duration,
      icon,
      message,
      position = 'bottom-left',
    }) => {
      setState((draftState) => {
        draftState.banners.push({
          className,
          duration,
          id: uuidv4(),
          icon,
          message,
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
        if (currentIndex !== -1) draftState.banners.splice(currentIndex, 1);
      });
    }, [setState]);

  return useMemo(() => ({ addBanner, removeBanner }), [addBanner, removeBanner]);
}
