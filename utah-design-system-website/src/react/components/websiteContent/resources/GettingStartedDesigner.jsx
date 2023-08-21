/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// navigation
import { Link } from 'react-router-dom';
import useAppContext from '../../../context/AppContext/useAppContext';
import pageUrls from '../../routing/pageUrls';
// content
import xdScreenshot from '../../../../static/images/screenshots/utah-design-system-mockups-xd.webp';
import LightBox from '../../lightbox/LightBox';

const propTypes = {};
const defaultProps = {};

function GettingStartedDesigner() {
  const { appState: { isColorPickerShown }, setAppState } = useAppContext();

  function toggleColorPickerPopup(e) {
    e.preventDefault();
    e.stopPropagation();
    setAppState((draftAppState) => { draftAppState.isColorPickerShown = !isColorPickerShown; });
  }

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Getting Started for Designers</h1>
      <p className="lead-in mt-spacing">
        The importance of using The Utah Design System to create mockups for clients cannot be overstated. A design system provides a centralized and comprehensive
        collection of design guidelines, components, and patterns that ensures consistency and efficiency throughout the design process. When designing mockups, a
        design system allows designers to work within established visual and interaction frameworks, eliminating the need to reinvent the wheel for each new project. This not only saves time but also ensures a cohesive user experience across various applications, sites, and devices.
      </p>
      <p className="lead-in mt-spacing">
        However, with so much information available, here we’ve broken down the most applicable parts to get you started.
      </p>
      <h2 id="section-accessibility" className="mb-spacing mt-spacing">Accessibility</h2>
      <p>
        While accessibility is usually associated with the development process, it should actually begin much earlier! By planning accessibility into the design, it not only assists developers when implementing your design, it also ensures your content will be accessible to more people.
        We’ve created a few pages to help demystify and to help check for accessibility.
        The <Link to={pageUrls.accessibility}>Accessibility</Link> page condenses this massive topic down to the most important parts of why accessibility is important and whose needs we are trying to address.
        The <Link to={pageUrls.accessibilityChecklist}>Accessibility Checklist & Testing</Link> page is a list of items for developers and designers that should be checked. For an alternate view of this list specific to designers, checkout the “Web Accessibility FOR Designers - Infographic below:
      </p>
      <a href="http://webaim.org/resources/designers/" target="_blank" rel="noreferrer"><img src="http://webaim.org/resources/designers/media/designers.svg" alt="Web Accessibility for Designers infographic with link to text version at WebAIM.org" /></a>

      <h2 id="section-color" className="mb-spacing mt-spacing">Color</h2>
      <div>
        <p>Color is foundational to every design. When viewed through the lens of accessibility, it can become confusing. Because of this, there is a page dedicated to just the <Link to={pageUrls.colorGuidelines}>Color Guidelines Overview</Link> and to the <a href="#" onClick={toggleColorPickerPopup}>Color picker tool <span className="utds-icon-before-gear" aria-hidden="true" /><span className="visually-hidden" /></a>.</p>
        <p>The Color Picker Tool is perhaps one of the most useful tools in the design system. Some of the benefits are the ability to create a color palette and share it via a url, as well as easy to understand contrast requirements. After picking your palette you can view a <Link to={pageUrls.demoPage}>Demo Page</Link> that has multiple types of components to see how the palette colors work together.</p>
      </div>

      <h2 id="section-mockups" className="mb-spacing mt-spacing">Mockups</h2>
      <p>
        The Utah Design System mockups provide a set of predefined elements and styles that can be easily reused, enabling designers to focus on the creative aspects of their work rather than the repetitive tasks.
        Follow this link for a quick look at the <a href={pageUrls.mockups}>Component Mockups</a>
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
      <h2 id="section-showcases" className="mb-spacing mt-spacing">Showcases</h2>
      <p>Looking for some inspiration or want to check out other state sites using the design system? Checkout our <Link to={pageUrls.showcase}>Design System Showcases</Link>.</p>

      <h2 id="section-library" className="mb-spacing mt-spacing">The Library</h2>
      <div>
        <p>The Library is important to designers when picking components for mockups. Every component in the library has static examples*, usage guidelines and component specific accessibility requirements.  See the <Link to={pageUrls.library}>Library Landing Page</Link> for more information on how components are structured.</p>
        <p>*Future releases will include interactive components. See the <Link to={pageUrls.button}>Button</Link> component for reference.</p>
        <p>To give feedback or make a request please reach out to <a href="mailto:dts_ui@utah.gov">dts_ui@utah.gov</a>.</p>
      </div>
    </div>
  );
}

GettingStartedDesigner.propTypes = propTypes;
GettingStartedDesigner.defaultProps = defaultProps;

export default GettingStartedDesigner;
