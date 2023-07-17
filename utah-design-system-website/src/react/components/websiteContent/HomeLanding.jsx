/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import { Accordion, ExternalLink } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import layoutScreenshot from '../../../static/images/screenshots/layout.webp';
import LightBox from '../lightbox/LightBox';
import pageUrls from '../routing/pageUrls';
import IconsWebsite from './IconsWebsite';

const propTypes = {};
const defaultProps = {};

function HomeLanding() {
  return (
    <div className="landing-page-template">
      <div className="home-banner">
        <div className="home-banner__title">Utah<br />Design<br />System</div>
      </div>
      <div className="content-width">
        <h1 className="my-spacing-l text-center">Designed for Utah</h1>

        <p className="lead-in">
          The Utah Design System consists of reusable user interface components, valuable resources, and guiding principles that empower teams to craft consistent, accessible, secure, and scalable user experiences for websites and applications.
        </p>
        <div className="flex justify-center mb-spacing-xl">
          <Link
            to={pageUrls.gettingStarted}
            className="button button--primary-color button--solid button--large"
          >
            Start Using the Design System
            <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
          </Link>
        </div>

        <h2 className="text-center mb-spacing-l">Benefits of a Design System</h2>

      </div>
      <div className="home-page__benefits-section">
        <div className="home-page__card-grid">
          <div className="home-page__card home-page__card-wide">
            <div className="home-page__card-title">
              <IconsWebsite.IconShieldCheck />
              <h3>Trust and Perception</h3>
            </div>
            <p>
              Consistency and user experience significantly influence the perceived quality of the services offered by State Agencies.
              Utilizing a design system yields long-term benefits by fostering efficiency, maintaining high standards, and positively shaping
              public perception. Agencies will enhance their credibility and establish a trustworthy digital presence.
              Consistent visual branding and user experience instills confidence in citizens, reinforcing the integrity and professionalism of public institutions.
            </p>
          </div>
          <div className="home-page__card home-page__card-narrow">
            <div className="home-page__card-title">
              <IconsWebsite.IconA11y />
              <h3>Accessibility</h3>
            </div>
            <p>
              One of the top goals at the State of Utah is to make websites and applications across our many agencies accessible for all people,
              including those with varying impairments.  Each component in the Utah Design System library includes an accessibility section where
              detailed information can be found about contrast, keyboard interaction, and screen readers.
            </p>
          </div>
          <div className="home-page__card home-page__card-narrow">
            <div className="home-page__card-title">
              <IconsWebsite.IconCollaboration />
              <h3>Collaboration</h3>
            </div>
            <p>
              We value collaboration and encourage teams to provide feedback and contribute to the ongoing improvement of the design system.
              This collaborative approach fosters a creative community where ideas are shared, evaluated, and refined.
            </p>
          </div>
          <div className="home-page__card home-page__card-wide">
            <div className="home-page__card-title">
              <IconsWebsite.IconStarHollow />
              <h3>Best Practices and Standards</h3>
            </div>
            <p>
              The design system establishes standards and best practices that have been vetted and are common-place among industry professionals.
              By adhering to these standards, designers and developers ensure consistency in design and functionality, resulting in a cohesive and
              intuitive user experience.
            </p>
          </div>
          <div className="home-page__card home-page__card-wide">
            <div className="home-page__card-title">
              <IconsWebsite.IconBadgeStar />
              <h3>Efficiency and Scalability</h3>
            </div>
            <p>
              Instead of worrying about the color and shape of a button, designers and developers can now spend more time on the details of their
              project, whether that be developing efficient user journeys, business logic, or determining what combination of components will best
              meet their customer&apos;s needs.
            </p>
          </div>
          <div className="home-page__card home-page__card-narrow">
            <div className="home-page__card-title">
              <IconsWebsite.IconHeartTag />
              <h3>Consistency</h3>
            </div>
            <p>
              By employing consistent patterns across all your products, users will experience a seamless and familiar interface, making their
              interactions more effortless. In addition, consistency influences the perceived quality of your site or application.
            </p>
          </div>
        </div>
      </div>
      <div className="content-width">
        <h2 className="text-center mb-spacing-l">How Do I Get Started?</h2>
        <div className="home-page__action-cards mb-spacing-xl">

          <Link
            to={pageUrls.gettingStarted}
            className="action-card action-card--primary-color action-card--solid"
          >
            <div className="action-card__title">
              <h3>Getting Started</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              Learn how to implement the Design System.
            </div>
          </Link>

          <Link
            to={pageUrls.utahHeader}
            className="action-card action-card--primary-color action-card--solid"
          >
            <div className="action-card__title">
              <h3>Utah Header and Footer</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              Start using the official header and footer.
            </div>
          </Link>

          <Link
            to={pageUrls.demoPage}
            className="action-card action-card--primary-color action-card--solid"
          >
            <div className="action-card__title">
              <h3>View Demo Page</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              View a page created with working components.
            </div>
          </Link>

          <Link
            to={pageUrls.mockups}
            className="action-card action-card--primary-color action-card--solid"
          >
            <div className="action-card__title">
              <h3>View Mockups</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              Mockups of all the Utah Design System components.
            </div>
          </Link>

          <Link
            to={pageUrls.showcase}
            className="action-card action-card--primary-color action-card--solid action-card--center"
          >
            <div className="action-card__title">
              <h3>Design System Showcase</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              Look at sites that are already using the design system.
            </div>
          </Link>

        </div>
      </div>

      <div className="home-page__gray-section py-spacing">
        <div className="content-width">
          <h2 className="text-center mt-spacing-l">Why a Design System?</h2>
          <p>
            In 2019 the Utah State Legislature passed <ExternalLink href="https://le.utah.gov/~2019/bills/static/HB0284.html">H.B. 284</ExternalLink> for
            Utah State Code <ExternalLink href="https://le.utah.gov/xcode/Title63A/Chapter16/63A-16-S104.html">§63A-16-104</ExternalLink> to require that DTS and Executive
            Branch Agencies coordinate on the creation of a set of “basic website standards for agencies that address common
            design standards and navigation standards”.
          </p>
          <Accordion
            headerContent="View details of Utah Code: §63A-16-104 - (10)"
            headingLevel={3}
            headerClassName="button button--secondary-color button--solid"
            className="mb-spacing-l home-page--accordion-small"
          >
            [The Division of Technology Services shall:]<br />
            (10) coordinate with executive branch agencies to provide basic website standards for agencies that address common design standards and navigation standards, including:
            <ol type="a">
              <li>accessibility for individuals with disabilities in accordance with:
                <ol type="i">
                  <li>the standards of 29 U.S.C. Sec. 794d; and</li>
                  <li>Section 63A-16-209;</li>
                </ol>
              </li>
              <li>consistency with standardized government security standards;</li>
              <li>designing around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continual testing of the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;</li>
              <li>providing users of the website, web-based form, web-based application, or digital service with the option for a more customized digital experience that allows users to complete digital transactions in an efficient and accurate manner; and</li>
              <li>full functionality and usability on common mobile devices;</li>
            </ol>
          </Accordion>
          <p>
            State agencies are required by statute to &quot;conform at minimum to W3C Web Content Accessibility Guidelines (WCAG) Version 2.1.
            (<em><ExternalLink href="https://le.utah.gov/xcode/Title63A/Chapter16/63A-16-S209.html">§63A-16-209</ExternalLink> / <ExternalLink href="https://adminrules.utah.gov/public/rule/R895-14/Current%20Rules">R895-14</ExternalLink>. Access to Information Technology for Users with Disabilities.</em>)
          </p>
          <p>The Utah Design System has been approved as the official web standard by the Architecture Review Board (ARB).</p>
        </div>
      </div>

      <div className="content-width mt-spacing-l">
        <h2 className="text-center">Library Components</h2>
        <p>
          Components serve as the foundational building blocks of the Utah Design System. Each component fulfills a distinct interaction or UI requirement
          and is meticulously designed to seamlessly integrate with one another, forming cohesive patterns and intuitive user experiences.
        </p>
      </div>

      <div className="content-width mt-spacing-l">
        <h2 className="text-center">Valuable Resources</h2>
        <p>
          Does the thought of choosing what colors to use, how much spacing should be applied to elements and what fonts you should use for
          body copy and headlines cause you stress at the beginning of a project?  No idea where to turn to ensure that your content,
          components and layouts are fully accessible?  Well, the Utah Design System can alleviate that stress without a copay.
        </p>
      </div>

      <div className="home-page__color-card-grid content-width">
        <div className="home-page__color-card home-page__card-wide">
          <h3 className="home-page__color-card-title">Color</h3>
          <p>
            How many design systems provide a color picker to assist you in selecting the primary and secondary colors of your site?
            How many show you in real-time what your components will look like once you’ve selected these colors? Do they tell you if
            your color selections are accessible? With a resounding yes, the Utah Design System does all of this. Starting to feel better?
          </p>
        </div>

        <div className="home-page__color-card home-page__card-narrow home-page__color-card--secondary">
          <h3 className="home-page__color-card-title">Spacing</h3>
          <p>
            To simplify and ensure consistency in implementing spacing, the Utah Design System provides predefined classes and variables.
            These classes and variables can be readily used, making the process of managing spacing more convenient and uniform.
          </p>
        </div>

        <div className="home-page__color-card home-page__card-narrow home-page__color-card--secondary">
          <h3 className="home-page__color-card-title">Typography</h3>
          <p>
            With a focus on comfort and readability, six different fonts and thirteen different sizing options can be used to bring your content and headlines to life.
            To make things even easier, our typographers have even taken the time to pair the various fonts with one another, should you want to go with the
            &quot;What would you recommend?&quot; option.
          </p>
        </div>

        <div className="home-page__color-card home-page__card-wide">
          <h3 className="home-page__color-card-title">Accessibility</h3>
          <p>
            All web interfaces at the State of Utah should be designed with accessibility in mind.
            Let&apos;s be honest, many times the best accessibility is not always clear, approachable, or easy. Every component in the Utah Design System has
            been designed with an &quot;accessibility first&quot; approach. The goal is to make accessability more accessible by providing clear guidance on
            every component. Thoughtful consideration has been give to each component to achieve the best possible user experience for everyone.
          </p>
        </div>
      </div>

      <div className="content-width mt-spacing-l">
        <h2 className="text-center">Anatomy of a Layout</h2>
        <LightBox image={layoutScreenshot} alt="Layout example" className="flex-2up-gap" />
      </div>

      <div className="home-page__gray-section home-page__contact-section mt-spacing-xl">
        <div className="content-width">
          <IconsWebsite.IconChatBubbles />
          <h2 className="text-center mt-spacing-l">Don&apos;t be Shy!</h2>
          <p>
            Have a question? <a href="mailto:dts_ui@utah.gov">Contact us</a>. Got a suggestion? <a href="mailto:dts_ui@utah.gov">Contact us</a>.<br />
            We like hearing from you, and this space is for all of us; Help us make it better!
          </p>
        </div>
      </div>

    </div>
  );
}

HomeLanding.propTypes = propTypes;
HomeLanding.defaultProps = defaultProps;

export default HomeLanding;
