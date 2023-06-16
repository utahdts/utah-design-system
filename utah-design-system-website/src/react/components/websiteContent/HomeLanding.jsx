/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import pageUrls from '../routing/pageUrls';
import ProgressLog from './ProgressLog/ProgressLog';
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
          The Utah Design System consists of reusable UI components, valuable resources, and guiding principles that empower teams to craft consistent, accessible, secure, and scalable user experiences.
        </p>
        <div className="flex justify-center mb-spacing-l">
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
              One of the top goals at the State of Utah, is to make websites and applications, across our many agencies accessible for all people,
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
        <h2 className="text-center mb-spacing-l">How do I get started?</h2>
        <div className="home-page__action-cards">

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

          {/* TODO: Make a page for a list of example sites */}
          <Link
            to={pageUrls.mockups}
            className="action-card action-card--primary-color action-card--solid action-card--center"
          >
            <div className="action-card__title">
              <h3>Design System Examples</h3>
              <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
            </div>
            <div className="action-card__body">
              Look at sites that are already using the design system.
            </div>
          </Link>

        </div>

        <h2 className="text-center mt-spacing-l">Why a Design System?</h2>
        <p>
          The Utah State Legislature and Governor have expressed interest in standardizing the look and feel
          of websites in the State in order to improve the user experience of residents who wish to use State of Utah online resources.
        </p>

        <p>
          In 2019 the Utah State Legislature passed H.B. 284 for Utah State Code 63A-16-104 to require that DTS and Executive
          Branch Agencies coordinate on the creation of a set of “basic website standards for agencies that address common
          design standards and navigation standards”.
        </p>

        <h2>Progress Log</h2>
        <p>The Utah Design System is currently under construction. You can check back to see our progress.</p>
        <ProgressLog />
      </div>
    </div>
  );
}

HomeLanding.propTypes = propTypes;
HomeLanding.defaultProps = defaultProps;

export default HomeLanding;
