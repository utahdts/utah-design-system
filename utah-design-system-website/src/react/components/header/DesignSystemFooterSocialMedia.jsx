import { FooterSocialMediaBar } from '@utahdts/utah-design-system';
import { IconsWebsite } from '../websiteContent/IconsWebsite';

export function DesignSystemFooterSocialMedia() {
  return (
    <FooterSocialMediaBar title="Connect with us">
      <a
        href="mailto:dxp@utah.gov"
        className="icon-link"
        target="_blank"
        rel="noreferrer"
      >
        <span className="utds-icon-before-mail" aria-hidden="true" />
        <span className="visually-hidden">Email us, opens in a new tab</span>
      </a>
      <a
        href="https://utahdesignsystem.slack.com"
        className="icon-link"
        target="_blank"
        rel="noreferrer"
      >
        <IconsWebsite.IconSlack />
        <span className="visually-hidden">Utah Design System Slack, opens in a new tab</span>
      </a>
      <a
        href="https://github.com/utahdts/utah-design-system"
        className="icon-link"
        target="_blank"
        rel="noreferrer"
      >
        <IconsWebsite.IconGitHub />
        <span className="visually-hidden">Utah Design System Git Hub, opens in a new tab</span>
      </a>
    </FooterSocialMediaBar>
  );
}
