// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved, import/order

import {
  FooterSocialMediaBar,
  Icons,
} from '@utahdts/utah-design-system';
import '@utahdts/utah-design-system-header/src/css/index.scss';
import '@utahdts/utah-design-system/css/3-generic/normalize.css';
import '@utahdts/utah-design-system/css/index.scss';
import React from 'react';

const propTypes = {};
const defaultProps = {};

function DesignSystemFooterSocialMedia() {
  return (
    <FooterSocialMediaBar title="Connect with us">
      <a
        href="mailto:dts_ui@utah.gov"
        className="icon-link"
        target="_blank"
        rel="noreferrer"
      >
        {Icons.IconEnvelope()}
        <span className="visually-hidden">Email us, opens in a new tab</span>
      </a>
      <a
        href="https://utahdesignsystem.slack.com"
        className="icon-link"
        target="_blank"
        rel="noreferrer"
      >
        {Icons.IconSlack()}
        <span className="visually-hidden">Utah Design System Slack, opens in a new tab</span>
      </a>
      <a
        href="https://github.com/utahdts/utah-design-system"
        className="icon-link"
        target="_blank"
        rel="noreferrer"
      >
        {Icons.IconGitHub()}
        <span className="visually-hidden">Utah Design System Git Hub, opens in a new tab</span>
      </a>
    </FooterSocialMediaBar>
  );
}

DesignSystemFooterSocialMedia.propTypes = propTypes;
DesignSystemFooterSocialMedia.defaultProps = defaultProps;

export default DesignSystemFooterSocialMedia;
