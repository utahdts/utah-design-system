import { useCallback, useMemo } from 'react';
import useUtahDesignSystemContext from '../useUtahDesignSystemContext';
import uuidv4 from '../../../util/uuidv4';

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

  // eslint-disable-next-line function-paren-newline
  const addBanner = useCallback(
    /**
     * @param {Object} props
     * @param {string} [props.className]
     * @param {number} [props.duration]
     * @param {string} [props.id]
     * @param {React.ReactNode} [props.icon]
     * @param {React.ReactNode} props.message
     * @param {BannerPlacement} [props.position]
     */
    ({
      className,
      duration,
      id,
      icon,
      message,
      position = 'bottom-left',
    }) => {
      setState((draftState) => {
        draftState.banners.push({
          className,
          duration,
          icon,
          id: id || uuidv4(),
          message,
          position,
        });
      });
    }, [setState]);

  // eslint-disable-next-line function-paren-newline
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
    }, [setState]);

  return useMemo(() => ({ addBanner, removeBanner }), [addBanner, removeBanner]);
}
