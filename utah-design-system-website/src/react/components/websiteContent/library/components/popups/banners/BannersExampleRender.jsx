import React from 'react';
import {
  Banner, BannerIcon, BannerMessage,
  Button,
  joinClassNames,
  useBanner,
} from '@utahdts/utah-design-system';

export default function BannersExampleRender({
  state: {
    props: {
      className,
      color,
      icon,
      message,
      position,
    },
  },
  innerRef,
}) {
  const { addBanner } = useBanner();
  return (
    <div>
      <Button
        onClick={() => addBanner({
          className: joinClassNames(className, color),
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
          innerRef={innerRef}
          className={joinClassNames(className, color)}
          position={position}
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
