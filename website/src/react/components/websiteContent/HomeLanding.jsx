/* eslint-disable react/jsx-one-expression-per-line */
import { NavLink } from 'react-router-dom';
import { Icons } from '@utahdts/utah-design-system';
import travolta from '../../../static/images/travolta.gif';
import pageUrls from '../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function HomeLanding() {
  return (
    <div className="landing-page-template">
      <div className="content-width">
        <h1 className="my-spacing-l">Welcome to the State of Utah Design System</h1>

        <p className="lead-in">
          A design system is a collection of reusable UI components, elements, patterns and
          templates—guided by a complete set of clear standards and design principles based on
          industry best practices. It will allow teams across the State of Utah to create a consistent
          experience across a range of products and services.
        </p>
        <p>
          The State of Utah Design System will act as a single source of truth for the entire Executive Branch by using a common design language
          to guide the development of web assets that will positively impact the residents of Utah.
        </p>
        <h2>What&apos;s going on here?</h2>

        <p>This site is currently under construction. You can check back to see our progress.</p>

        <div className="flex flex-col items-center mb-spacing">
          <img src={travolta} alt="John Travolta" />
          <NavLink
            to={pageUrls.demoPage}
            className="button button--primary-color"
          >
            View Demo Page
            <span className="button--icon button--icon-right">{Icons.IconArrowRight()}</span>
          </NavLink>
        </div>

        <h2>Progress Log</h2>
        <ul className="mb-spacing">
          <li>
            <NavLink to={pageUrls.button}>Button documentation</NavLink> page is complete.
          </li>
        </ul>

        <h2>Why a design system?</h2>
        <p>
          The Utah State Legislature and Governor have expressed interest in standardizing the look and feel
          of websites in the State in order to improve the user experience of residents who wish to use State of Utah online resources.
        </p>

        <p>
          In 2019 the Utah State Legislature passed H.B. 284 for Utah State Code 63A-16-104 to require DTS and Executive
          Branch Agencies coordinate on the creation of a set of “basic website standards for agencies that address common
          design standards and navigation standards”
        </p>

      </div>
    </div>
  );
}

HomeLanding.propTypes = propTypes;
HomeLanding.defaultProps = defaultProps;

export default HomeLanding;
