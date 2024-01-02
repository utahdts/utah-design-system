import { ExternalLink } from '@utahdts/utah-design-system';
import { NavLink } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';

export function DataPrivacyDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Data Privacy</h1>
      <p className="lead-in">
        A privacy policy typically addresses an agency&apos;s commitment to compliance with ensuring transparency in data practices.
      </p>
      <hr />
      <h2 id="section-areas-to-consider" className="mt-spacing mb-spacing">Areas to Consider</h2>
      <p className="mb-spacing">
        In the state of Utah, agencies utilize privacy policies and terms of use to establish clear guidelines
        and expectations for individuals interacting with their online platforms and services.
        <br />
        These documents play a crucial role in safeguarding the privacy of users by outlining how personal information
        is collected, used, and protected.
      </p>
      <p>
        By implementing these policies, Utah state agencies aim to foster trust, protect user rights, and ensure a secure
        and accountable digital environment for individuals engaging with government services online.
      </p>
      <p>For more information, please refer to the state of Utah <ExternalLink href="https://www.utah.gov/support/privacypolicy.html">Privacy Policy</ExternalLink>.</p>
      <p>
        Note: The Utah Footer offers a way for developers to customize the <NavLink to={`${pageUrls.utahFooter}#section-config-custom-links`}>privacy policy and/or terms of use links</NavLink>.
      </p>
    </div>
  );
}
