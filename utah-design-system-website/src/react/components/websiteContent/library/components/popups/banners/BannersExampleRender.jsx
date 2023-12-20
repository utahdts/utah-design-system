import {
  Banner, BannerIcon, BannerMessage,
  Button,
  joinClassNames,
  useBanner,
} from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').BannerExamplePropsShape} BannerExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: BannerExamplePropsShape}} props.state
 * @param {React.RefObject<HTMLDivElement>} props.innerRef
 * @returns {React.JSX.Element}
 */
export function BannersExampleRender({
  state: {
    props: {
      className,
      color,
      icon,
      message,
      position,
      size,
    },
  },
  innerRef,
}) {
  const { addBanner } = useBanner();
  return (
    <div>
      <Button
        onClick={() => addBanner({
          className: joinClassNames(className, color, size),
          duration: 5000,
          icon: icon !== 'none' ? <span className={icon} aria-hidden="true" /> : null,
          message,
          position,
        })}
      >
        Show me a banner
      </Button>
      <div className="visually-hidden">
        <Banner
          id="banners-example-render"
          innerRef={innerRef}
          className={joinClassNames(className, color, size)}
          position={position}
          // eslint-disable-next-line no-console
          onClose={() => console.log('Make sure to close the banner!')}
        >
          {icon !== 'none'
            ? (
              <BannerIcon>
                <span className={icon} aria-hidden="true" />
              </BannerIcon>
            )
            : null}
          <BannerMessage>
            {message}
          </BannerMessage>
        </Banner>
      </div>
    </div>
  );
}
