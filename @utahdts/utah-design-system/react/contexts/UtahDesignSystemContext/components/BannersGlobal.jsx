// @ts-check
import {
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useImmer } from 'use-immer';
import { Banner } from '../../../components/popups/Banner/Banner';
import { BannerMessage } from '../../../components/popups/Banner/BannerMessage';
import { BannerIcon } from '../../../components/popups/Banner/BannerIcon';
import { useBanner } from '../hooks/useBanner';
import joinClassNames from '../../../util/joinClassNames';

/** @typedef {import('../../../jsDocTypes').UtahDesignSystemContextBanner} UtahDesignSystemContextBanner */
/**
 * @param {UtahDesignSystemContextBanner[]} banners
 * @returns {JSX.Element}
 * @constructor
 */
export function BannersGlobal({ banners }) {
  const { removeBanner } = useBanner();
  const timers = useMemo(() => ({}), []);
  const [zones, setZones] = useImmer({});
  const currentOnClose = useCallback((e, banner) => {
    if (banner.onClose) {
      banner.onClose(e);
    } else {
      removeBanner(banner);
    }
    clearTimeout(timers[banner.id]);
  }, [removeBanner, timers]);

  useEffect(() => {
    const draftZones = {};
    const uniqueZones = [...new Set(banners.map((banner) => banner.position))];
    uniqueZones.forEach((zone) => { draftZones[zone] = []; });
    banners.forEach((banner) => {
      if (banner.duration && !timers[banner.id]) {
        timers[banner.id] = setTimeout(() => {
          currentOnClose(undefined, banner);
        }, banner.duration);
      }
      draftZones[banner.position].push(banner);
    });
    setZones(draftZones);
  }, [banners, currentOnClose, removeBanner, setZones, timers]);

  useEffect(() => {
    // Cleaning timers
    Object.keys(timers).forEach((key) => clearTimeout(timers[key]));
  }, []);

  return (
    <div
      className="utah-design-system banner-global__wrapper"
      aria-live="polite"
    >
      {Object.keys(zones).map((zone) => (
        <div
          className={joinClassNames(`banner-global__${zone}`, 'banner-global__zone')}
          key={`banner-global__${zone}`}
        >
          {zones[zone].map((banner) => (
            <Banner
              key={`banner-${banner.id}`}
              id={`banner-${banner.id}`}
              className={banner.className}
              position={banner.position}
              onClose={(e) => currentOnClose(e, banner)}
            >
              {banner.icon ? <BannerIcon>{banner.icon}</BannerIcon> : ''}
              <BannerMessage>
                {banner.message}
              </BannerMessage>
            </Banner>
          ))}
        </div>
      ))}
    </div>
  );
}
