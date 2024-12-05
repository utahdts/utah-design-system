/* eslint-disable max-len */
import {
  ExternalLink,
  joinClassNames,
} from '@utahdts/utah-design-system';
/**
 * @param {object} props
 * @param {string} [props.className]
 * @returns {import('react').JSX.Element}
 */
export function WcagRulesBlock({ className }) {
  return (
    <blockquote cite="https://www.ada.gov/notices/2024/03/08/web-rule/" className={joinClassNames('block-quote', className)}>
      <p>
        State agencies are required by statute to &quot;conform at minimum to W3C Web Content Accessibility Guidelines (WCAG) Version 2.1.
        This guide can be used to help achieve this standard.
        (<em><ExternalLink href="https://le.utah.gov/xcode/Title63A/Chapter16/63A-16-S209.html">§63A-16-209</ExternalLink> / <ExternalLink href="https://adminrules.utah.gov/public/rule/R895-14/Current%20Rules">R895-14</ExternalLink>. Access to Information Technology for Users with Disabilities.</em>)
      </p>
      <p className="mb-auto">
        In addition, all State and local government entities are required to follow the web accessibility standards under Title II of the Americans with Disabilities Act (ADA). See <cite><ExternalLink href="https://www.ada.gov/notices/2024/03/08/web-rule/">ada.gov</ExternalLink></cite>.
      </p>
    </blockquote>
  );
}
