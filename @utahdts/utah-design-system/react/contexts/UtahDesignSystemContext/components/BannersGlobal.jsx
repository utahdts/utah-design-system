import {
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useImmer } from 'use-immer';
import { Banner } from '../../../components/popups/Banner/Banner';
import { BannerIcon } from '../../../components/popups/Banner/BannerIcon';
import { BannerMessage } from '../../../components/popups/Banner/BannerMessage';
import { joinClassNames } from '../../../util/joinClassNames';
import { useBanner } from '../hooks/useBanner';

/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextBannerWithId} UtahDesignSystemContextBannerWithId */
/**
 * @param {object} props
 * @param {UtahDesignSystemContextBannerWithId[]} props.banners
 * @param {number} [props.bannerDuration]
 * @returns {import('react').JSX.Element}
 */
export function BannersGlobal({ banners, bannerDuration }) {
  const { removeBanner } = useBanner();
  const timers = useMemo(() => /** @type {Record<string, number>} */({}), []);
  const [zones, setZones] = useImmer(/** @type {Record<string, UtahDesignSystemContextBannerWithId[]>} */({}));
  const currentOnClose = useCallback(
    /**
     * @param {import('react').MouseEvent | undefined} e
     * @param {UtahDesignSystemContextBannerWithId} banner
     */
    (e, banner) => {
      if (banner.onClose) {
        banner.onClose(e);
      } else {
        removeBanner(banner);
      }
      if (banner.id) {
        clearTimeout(timers[banner.id]);
      }
    },
    [removeBanner, timers]
  );

  useEffect(() => {
    const draftZones = /** @type {Record<string, UtahDesignSystemContextBannerWithId[]>} */ ({});
    const uniqueZones = [...new Set(banners.map((banner) => banner.position))];
    uniqueZones.forEach((zone) => {
      if (zone) {
        // @ts-ignore
        draftZones[zone] = [];
      }
    });
    banners.forEach((banner) => {
      const duration = banner.duration || bannerDuration;
      if (duration && !timers[banner.id]) {
        timers[banner.id] = window.setTimeout(() => {
          currentOnClose(undefined, banner);
        }, duration);
      }
      // @ts-ignore
      draftZones[banner.position].push(banner);
    });
    setZones(draftZones);
  }, [bannerDuration, banners, currentOnClose, removeBanner, setZones, timers]);

  useEffect(
    () => {
      // Cleaning timers
      Object.keys(timers).forEach((key) => clearTimeout(timers[key]));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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
          {zones[zone]?.map((banner) => (
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
