// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved, import/order
import slackSvg from '../../../static/images/Slack-mark-black-RGB.svg';

import {
  FooterSocialMediaBar,
  IconButton
} from '@utahdts/utah-design-system';
import '@utahdts/utah-design-system-header/src/css/index.scss';
import '@utahdts/utah-design-system/css/3-generic/normalize.css';
import '@utahdts/utah-design-system/css/index.scss';
import React, { useCallback } from 'react';

const propTypes = {};
const defaultProps = {};

function DesignSystemFooterSocialMedia() {
  return (
    <FooterSocialMediaBar>
      <IconButton
        appearance="borderless"
        color="none"
        icon={<img src={slackSvg} alt="Slack" />}
        onClick={useCallback(() => { window.open('https://utahdesignsystem.slack.com', '_blank'); }, [])}
        title="Twitter"
      />
    </FooterSocialMediaBar>
  );
}

DesignSystemFooterSocialMedia.propTypes = propTypes;
DesignSystemFooterSocialMedia.defaultProps = defaultProps;

export default DesignSystemFooterSocialMedia;
