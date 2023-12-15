import { Link } from 'react-router-dom';
import {
  Banner,
  BannerIcon,
  BannerMessage,
  useBanner
} from '@utahdts/utah-design-system';
import React, { useCallback } from 'react';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import bannerLandmarkScreenshot from '../../../../../../../static/images/screenshots/components/banners/bannerLandmark.jpg';
import bannersLargeScreenshot from '../../../../../../../static/images/screenshots/components/banners/bannersLarge.jpg';
import bannersMediumScreenshot from '../../../../../../../static/images/screenshots/components/banners/bannersMedium.jpg';
import { LightBox } from '../../../../../lightbox/LightBox';
import { SandboxExample } from '../../../../../sandbox/SandboxExample';
import BannersExampleCodeReact from './BannersExampleCodeReact';
import BannersExampleProps from './BannersExampleProps';
import BannersExampleRender from './BannersExampleRender';

const propTypes = {};
const defaultProps = {};

function BannersDocumentation() {
  const { addBanner } = useBanner();
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Banner</h1>
      <p className="lead-in">
        A banner is a box containing a message or information that needs to be conveyed to the user. Some
        banners will float on top of the content and will alert the user to important changes or status updates.
        Other banners are displayed inline with the content.
      </p>

      <hr />

      <h2 id="section-example">Example</h2>
      <SandboxExample
        defaultProps={{
          className: '',
          color: 'banner--info',
          icon: 'none',
          message: 'Here is some information.',
          position: 'top',
        }}
        CODE_EXAMPLE={BannersExampleCodeReact}
        PROPS_EXAMPLE={BannersExampleProps}
        RENDER_EXAMPLE={BannersExampleRender}
      />

      <StaticExample
        title="Small banners"
        renderedExample={(
          <div className="flex flex-col items-center">
            <Banner
              position="inline"
              onClose={useCallback(() => addBanner({
                message: 'The banner\'s close button has been triggered. You are in charge of closing your own banners.',
              }), [addBanner])}
            >
              <BannerMessage>
                So long, and thanks for all the fish.
              </BannerMessage>
            </Banner>
            <Banner
              position="inline"
              className="banner--success"
              onClose={useCallback(() => addBanner({
                message: 'The banner\'s close button has been triggered. You are in charge of closing your own banners.',
              }), [addBanner])}
            >
              <BannerIcon>
                <span className="utds-icon-before-check" aria-hidden="true" />
              </BannerIcon>
              <BannerMessage>
                Email was sent successfully.
              </BannerMessage>
            </Banner>
            <Banner
              position="inline"
              className="banner--danger"
              onClose={useCallback(() => addBanner({
                message: 'The banner\'s close button has been triggered. You are in charge of closing your own banners.',
              }), [addBanner])}
            >
              <BannerIcon>
                <span className="utds-icon-before-warning" aria-hidden="true" />
              </BannerIcon>
              <BannerMessage>
                There are errors on the page.
              </BannerMessage>
            </Banner>
            <Banner
              position="inline"
              className="banner--info"
              onClose={useCallback(() => addBanner({
                message: 'The banner\'s close button has been triggered. You are in charge of closing your own banners.',
              }), [addBanner])}
            >
              <BannerIcon>
                <span className="utds-icon-before-info" aria-hidden="true" />
              </BannerIcon>
              <BannerMessage>
                The record was updated.
              </BannerMessage>
            </Banner>
          </div>
        )}
        quickTips={(
          <ul>
            <li>A small banner appears in response to a change in an application process or as a direct result of a user action.</li>
            <li>Small banners should float above the content on the page.</li>
            <li>A banner consists of a container, one line of content, and a close button.</li>
            <li>You can include an icon to the left of the text, to help convey the overall message.</li>
            <li>Messages not related to errors are usually displayed in one of the bottom corners of the screen.</li>
            <li>
              For messages relating to a user&apos;s error on a form, please refer to the{' '}
              <Link to={pageUrls.validation}>form validation</Link> standards.
            </li>
            <li>A banner can be dismissed by the user, have a set period of time that it is displayed, or a combination of both.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Medium banners"
        renderedExample={<LightBox image={bannersMediumScreenshot} alt="Medium Banners" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>Medium banners consist of a container, content, and a close button.</li>
            <li>An icon may be included to the left of the text to help convey the overall message.</li>
            <li>Medium banners should float above the content on the page.</li>
            <li>
              Avoid using <Link to={pageUrls.button}>buttons</Link> or <Link to={pageUrls.links}>links</Link> in the banner.
              While they can guide the user to more information or to perform another action, <Link to={pageUrls.button}>buttons</Link> and{' '}
              <Link to={pageUrls.links}>links</Link> are inaccessible to people using screen readers and people navigating with a keyboard.
              Interactive elements in floating banners should never be critical for the user to accomplish a task.
            </li>
            <li>
              Medium banners are wider than a small banner and can accommodate more text.
              Medium banners are intended to have a maximum of four lines of text per banner.
            </li>
          </ul>
        )}
      />

      <StaticExample
        title="Large banners"
        renderedExample={<LightBox image={bannersLargeScreenshot} alt="Large Banners" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>Large banners are comprised of a container and content.</li>
            <li>
              A close icon should be used on all banners except for things like form validation where the issue must be
              addressed before the user can continue.
            </li>
            <li>An icon may be included to the left of the text to help convey the overall message.</li>
            <li>
              Large banners should not float above the content, but should push the content down.
              The user should be able to dismiss the message at their discretion.
            </li>
            <li>
              Since these banners are a part of the content flow, <Link to={pageUrls.button}>buttons</Link> and{' '}
              <Link to={pageUrls.links}>links</Link> may be used in these banners as they will be accessible to the user.
              However, large banners that appear spontaneously should <strong>not</strong> have interactive elements,
              since screen reader users will not be able to navigate to the banner easily.
            </li>
            <li>
              A large banner usually displays critical, time-sensitive warnings or directions so that users see them whenever they visit the site.
            </li>
            <li>
              Using the same large banner for critical messaging across agencies helps create a consistent and predictable way for users
              to find urgent information across all State of Utah websites.
            </li>
          </ul>
        )}
      />

      <StaticExample
        title="Landmark banners"
        renderedExample={<LightBox image={bannerLandmarkScreenshot} alt="Landmark Banner" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>
              A landmark banner is persistent across all sites and is visible on every page. These should only be used in association with landmark elements. E.g.{' '}
              <Link to={pageUrls.utahHeader}>Header</Link>, <Link to={pageUrls.utahHeader}>main menu</Link>
              , or <Link to={pageUrls.verticalMenu}>side menu</Link> etc.
            </li>
            <li>
              A landmark banner&apos;s content is important enough that users should be able to navigate to the section easily;
              It should allow accessible technologies to navigate to the content quickly.
            </li>
            <li>Because landmark banners are used in conjunction with landmark elements, these banners should be toggleable.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>System status, messages, or critical site notifications.</strong> A large banner delivers notifications to keep people
          informed of system information, unavailable services, or content etc.
        </li>
        <li>
          <strong>Messages that should be displayed on every page.</strong> A large banner makes critical information obvious and easy to
          find. They should be persistent until the user dismisses the banner.
        </li>
        <li>
          <strong>User initiated actions.</strong> Small or medium banners help deliver notifications for page level messaging, or a task
          that completed successfully/unsuccessfully. These notifications can have the option of a time limit where the banner is automatically
          dismissed.
        </li>
        <li>
          <strong>Long forms or individual fields.</strong> Long forms can be difficult to navigate, especially on a mobile device. Use inline
          form validation in addition to banners to indicate any errors in the form fields.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Destructive actions or required user actions.</strong> If the action will result in the removal, or deletion of the
          user&apos;s work, consider using a <Link to={pageUrls.modals}>Modal</Link>. This will interrupt the users workflow, and
          force the user&apos;s attention on the information you would like them to confirm.
        </li>
        <li>
          <strong>Too many banners is a bad user experience.</strong> Be careful with using too many banners as it will create a
          distracting user experience. Limit the number of stacked banners to 3 to reduce the cognitive load.
        </li>
        <li>
          <strong>Critical content or messaging.</strong> Use a <Link to={pageUrls.modals}>Modal</Link> to convey critical information,
          and focus the user&apos;s full attention. Modals allow the user to press a button, make a decision, or other actions that would
          be inaccessible to assistive technologies in spontaneously created banners.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>User experience.</strong> Banners should minimally impede the user&apos;s ability to work on the page.
        </li>
        <li>
          <strong>Temporary or persistent banners.</strong> All banners may or may not require the user to respond, but there
          should always be a close icon button <code>X</code> available to dismiss the alert at the user&apos;s discretion.
        </li>
        <li>
          <strong>Sticky banners.</strong> Small and medium banners are easier to predict and respond to when they appear in
          similar areas, such as the bottom left or right corners of the screen.
        </li>
        <li>
          <strong>Color mapping.</strong> Mapping the color of the banner to a specific type of alert or error can help reduce the
          cognitive load for the user by being able to recognize the alert at a glance. Avoid using too many colors, as this can have
          a negative impact on the user&apos;s emotional response.
        </li>
        <li>
          <strong>Message urgency.</strong> Consider the urgency of the message you are conveying. If it requires immediate attention,
          try a medium or large banner with the aria <code>role=&quot;alert&quot;</code>. This will interrupt the user&apos;s workflow,
          however, if used incorrectly, it can be quite jarring to those using screen readers. Use this role sparingly. For non-urgent
          messages use the aria <code>role=&quot;status&quot;</code>. This will allow the user to continue with their workflow.
        </li>
        <li>
          <strong>Zombie banners.</strong> Dismissed banners should not reappear within a short time frame from when they were dismissed.
          This can cause a frustrating user experience.
        </li>
        <li>
          <strong>Stacking floating banners.</strong> Avoid stacking more than 3 small banners. Additionally, avoid stacking medium sized
          banners, as they can cover the content and create frustration.
        </li>
        <li>
          <strong>Mixing banner sizes.</strong> Avoid stacking banners of different sizes that float (small and medium). This creates an
          inconsistent user experience.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text within a banner must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>The banner&apos;s boundary must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>
          Follow the accessibility guidelines for other elements inside the banner such as <Link to={pageUrls.links}>links</Link>
          and <Link to={pageUrls.button}>buttons</Link>.
        </li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Floating banners do not receive focus.</li>
        <li>
          Users can close a landmark banner by pressing the <code>spacebar</code> while the close{' '}
          <Link to={pageUrls.iconButton}>icon button</Link> has focus.
        </li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Use the ARIA <code>role=&quot;status&quot;</code> for non critical or time sensitive messaging. It is meant for
          notifications that do not need to interrupt the user&apos;s workflow.
        </li>
        <li>
          If immediate attention is required use the ARIA <code>role=&quot;alert&quot;</code>. This role will interrupt the user&apos;s
          current activity to deliver the message by triggering an accessible alert event.
        </li>
        <li>
          Floating banners (small and medium) should alert the user by using a persistent <code>aria-live</code> region
          where the message can be conveyed to screen reader users. The <code>aria-live</code> region should be set
          to <code>aria-live=&quot;polite&quot;</code> to not interrupt the user&apos;s current flow. Using any
          other <code>aria-live</code> setting should be avoided as it can be extremely annoying and disruptive.
        </li>
      </ul>
    </div>
  );
}

BannersDocumentation.propTypes = propTypes;
BannersDocumentation.defaultProps = defaultProps;

export default BannersDocumentation;
