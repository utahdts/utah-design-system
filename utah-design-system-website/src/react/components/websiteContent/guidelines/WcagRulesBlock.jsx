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
        State agencies are required by statute to &quot;conform at minimum to W3C Web Content Accessibility Guidelines (WCAG) Version 2.1 AA&quot;.
        This site can be used to help achieve this standard.
        (<em><ExternalLink href="https://le.utah.gov/xcode/Title63A/Chapter16/63A-16-S209.html">§63A-16-209</ExternalLink> / <ExternalLink href="https://adminrules.utah.gov/public/rule/R895-14/Current%20Rules">R895-14</ExternalLink>. Access to Information Technology for Users with Disabilities.</em>)
      </p>
      <p>
        In addition, all State and local government entities are required to follow the web accessibility standards WCAG Version 2.1 AA under Title II of the Americans with Disabilities Act (ADA). See <cite><ExternalLink href="https://www.ada.gov/notices/2024/03/08/web-rule/">ada.gov</ExternalLink></cite>.
      </p>
      <p className="mb-auto"><strong>Key dates for rule compliance:</strong></p>
      <ul>
        <li>Executive Branch Agencies: <strong>June 1, 2015</strong></li>
        <li>All State and local government entities:
          <ul>
            <li>50,000 or more persons (all State level government): <strong>April 24, 2026</strong></li>
            <li>0 to 49,999 persons: April 26, 2027</li>
            <li>Special district governments: April 26, 2027</li>
          </ul>
</li>
      </ul>
    </blockquote>
  );
}
