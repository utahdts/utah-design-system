import { Link } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';
import { LightBox } from '../../lightbox/LightBox';
import badge from '../../../../static/images/screenshots/credentials/stamp.png';
import danger from '../../../../static/images/screenshots/credentials/danger.png';
import verifed from '../../../../static/images/screenshots/credentials/verified.png';
import unverified from '../../../../static/images/screenshots/credentials/unable-verified.png';
import { StaticExample } from '../../staticExamples/StaticExample';

export function DigitalCredentials() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Verifiable Digital Credentials</h1>
      <p className="lead-in mt-spacing">
        Verifiable Digital Credentials is an initiative at the State of Utah to provide secured versions of credentials that
        people can present to organizations that need them for verification. These credentials could include things like diplomas,
        licenses, certifications, and other forms of identity verification.
      </p>

      <div className="flex justify-center mb-spacing-l">
        <img src={badge} alt="Verified Digital Credentials Badge" width="150px" className="m-auto" />
      </div>
      <hr />

      <h2 id="section-areas-to-consider" className="mb-spacing mt-spacing">Areas to Consider</h2>
      <h3 id="section-icon-badge">Icon Badge: Trusted and Authentic</h3>
      <p>
        This icon badge represents a Verifiable Credential and should only be used in conjunction
        with verified credentials originating from the State of Utah.
      </p>
      <p>
        When a verifiable credential has been correctly verified this icon badge should be prominently displayed.
      </p>

      <h3 id="section-badge-usage">Icon Badge Usage Mockups</h3>
      <StaticExample
        renderedExample={(
          <>
            <LightBox image={verifed} alt="Credentials verified" className="flex-3up-gap" />
            <LightBox image={unverified} alt="Unable to verify crendentials" className="flex-3up-gap" />
          </>
        )}
      />

      <h3 id="section-purpose">Purpose of Verifiable Digital Credentials</h3>
      <ol className="mb-spacing-l">
        <li>
          <strong>Secure Information Verification:</strong> Verifiable digital credentials provide a secure way to verify information
          about a subject, ensuring the information is accurate and trustworthy.
        </li>
        <li>
          <strong>Tamper-Proof Records:</strong> These credentials are designed to be tamper-proof, ensuring the integrity and
          authenticity of the information they contain.
        </li>
        <li>
          <strong>Easy Validation:</strong> They can be easily validated as issued by trusted authorities,
          reducing the risk of fraud and misinformation.
        </li>
        <li>
          <strong>Privacy Protection:</strong> Holders have control over their information,
          sharing only what is necessary while maintaining their privacy.
        </li>
      </ol>

      <hr />

      <h2 id="section-guidance" className="mb-spacing mt-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing-l">
        <li>
          <strong>Verified.</strong> This icon should only be used for a successful verification of a digital credential.
        </li>
        <li>
          <strong>Verified text.</strong> This icon should be accompanied by text such as: “The following credential is verified” or “Verified”.
        </li>
        <li>
          <strong>Verification information.</strong> The icons should be accompanied by pertinent information so
          that the person trying to verify the authenticity of the credential can correctly tie it to the individual holder.
        </li>
      </ul>

      <h3 id="section-when-to-use-else">When to use something else</h3>
      <div className="flex justify-center my-spacing-l">
        <img src={danger} alt="Danger Icon" width="150px" className="m-auto" />
      </div>
      <ul className="mb-spacing-l">
        <li>
          <strong>Not verified.</strong> The icon badge should not be used in conjunction with an unverified credential.
          The icon color should not be altered. The icon should not be altered in any way graphically or crossed out.
        </li>
        <li>
          <strong>Warning icon.</strong> When a digital credential is not verified it should be accompanied by a warning icon.
          The warning icon should also be accompanied by text such as: “Unable to verify credential”.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing-l">
        <li><strong>Size.</strong> The icon badge should be sized large enough so that the text can be easily read.</li>
        <li><strong>Color.</strong> The icon color should draw attention to itself and not blend with other colors.</li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul>
        <li>The icons for both verified and not verified must maintain a <code>4.5:1</code> contrast ratio or better at a readable size.</li>
      </ul>

      <h4>Screen readers</h4>
      <ul>
        <li>
          These icons must have some kind of descriptive text that conveys the meaning of the icon to screen readers such as:
          <ul>
            <li>“State of Utah, Verified Credential”</li>
            <li>“Warning”</li>
          </ul>
        </li>
        <li>See <Link to={pageUrls.icons}>Resources: Icons</Link> for additional information on how to provide descriptive text for icons.</li>
      </ul>
    </div>
  );
}
