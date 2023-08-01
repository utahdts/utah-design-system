/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import xdScreenshot from '../../../../static/images/screenshots/utah-design-system-mockups-xd.webp';
import LightBox from '../../lightbox/LightBox';
import pageUrls from '../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function GettingStartedDesigner() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Getting Started for Designers</h1>
      <p className="lead-in">
        The importance of using The Utah Design System to create mockups for clients cannot be overstated. A design system provides a centralized and comprehensive
        collection of design guidelines, components, and patterns that ensures consistency and efficiency throughout the design process. When designing mockups,
        a design system allows designers to work within established visual and interaction frameworks, eliminating the need to reinvent the wheel for each new project.
        This not only saves time but also ensures a cohesive user experience across various applications, sites, and devices.
      </p>
      <p className="lead-in">
        The Utah Design System mockups provide a set of pre-defined
        elements and styles that can be easily reused, enabling designers to focus on the creative aspects of their work rather than the repetitive tasks.
        Moreover, by utilizing a design system, designers can collaborate seamlessly with developers, as they both refer to the same set of guidelines and
        assets, fostering a more efficient and harmonious workflow.
      </p>
      <LightBox alt="Utah Design System Mockups" image={xdScreenshot} />
      <div className="flex justify-center mt-spacing"><a href="https://dts.utah.gov/wp-content/uploads/UtahDesignSystem.xd_.zip" className="button button--primary-color button--solid">Download Adobe XD Document</a></div>
      <p className="text-center"><em>75 MB</em></p>
      <Link
        to={pageUrls.mockups}
        className="button button--primary-color button--solid button--large"
      >
        View mock details
        <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
      </Link>

    </div>
  );
}

GettingStartedDesigner.propTypes = propTypes;
GettingStartedDesigner.defaultProps = defaultProps;

export default GettingStartedDesigner;
