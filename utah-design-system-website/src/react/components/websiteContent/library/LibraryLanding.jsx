import { LightBox } from '../../lightbox/LightBox';
// images
import libraryOverview from '../../../../static/images/layout-overview.jpg';
import atomicTemplate from '../../../../static/images/atomicTemplate.svg';
import atomicPatterns from '../../../../static/images/atomicPatterns.svg';
import atomicComponents from '../../../../static/images/atomicComponents.svg';

const propTypes = {};
const defaultProps = {};

function LibraryLanding() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Welcome to the Library!</h1>
      <p className="lead-in mt-spacing">
        The Design System Library is a resource that empowers designers, and developers to create
        exceptional digital experiences. Components are the building blocks of every website, and the
        user experience is directed by the Guidelines and Standards. However, it is the user interface
        that is made up using the collection of components. This library is an accumulation of reusable
        UI components, patterns, and templates that are purposeful and already reviewed for accessibility.
      </p>
      <div className="content-width  my-spacing-xl">
        <LightBox image={libraryOverview} alt="Layout example" className="flex-2up-gap" />
      </div>

      <h2 id="section-areas-to-consider">Areas to Consider</h2>
      <h3 id="section-component" className="mb-spacing">Components</h3>
      <ul>
        <li>
          <strong>Intention.</strong>{' '}
          Components have a specific purpose or singular functionality and are reusable.
        </li>
        <li>
          <strong>Structure.</strong>{' '}
          Simple components can be used individually or combined to create a more complex component.
          <ul>
            <li><span>Simple components:</span> headings, hyperlinks, images, etc.</li>
            <li><span>Complex components:</span> cards, navigation bars, accordions, etc.</li>
          </ul>
        </li>
        <li>
          <strong>Vetted.</strong>{' '}
          Each component has been researched for best practices and industry standards then summarized to help
          clarify usage recommendations as well as speed up implementation.
        </li>
      </ul>
      <div className="flex justify-center my-spacing-xl">
        <img
          src={atomicComponents}
          alt="Simple components can combine to make complex components"
          style={{ height: 275 }}
        />
      </div>
      <h3 id="section-patterns" className="mb-spacing">Patterns</h3>
      <ul>
        <li>
          <strong>Intention.</strong>{' '}
          Patterns have a specific purpose but can have multiple functionalities within them.
        </li>
        <li>
          <strong>Structure.</strong>{' '}
          They have a combination of simple and complex components within the pattern.
        </li>
        <li>
          <strong>Vetted.</strong>{' '}
          Each pattern has been tested for accessibility and responsiveness prior to being added. After any changes
          or customizations have been done, it is necessary to re-test individual components.
        </li>
      </ul>
      <div className="flex justify-center my-spacing-xl">
        <img
          src={atomicPatterns}
          alt="Components, both simple and complex, are combined to make patterns"
          style={{ height: 275 }}
        />
      </div>
      <h3 id="section-templates" className="mb-spacing">Templates</h3>
      <ul>
        <li>
          <strong>Intention.</strong>{' '}
          Templates are commonly used pages that have a specific purpose.
        </li>
        <li>
          <strong>Structure.</strong>{' '}
          They have a combination of simple, and complex components as well as patterns.
        </li>
        <li>
          <strong>Vetted.</strong>{' '}
          Each layout has been tested for accessibility and responsiveness prior to being added. After any changes or customizations
          have been done,  it is necessary to re-test individual templates.
        </li>
      </ul>
      <div className="flex justify-center my-spacing-xl">
        <img
          src={atomicTemplate}
          alt="Components and patterns are combined to make a template"
          style={{ height: 275 }}
        />
      </div>
      <h2 id="section-direction-guidance">Direction and Guidance</h2>
      <h3 id="section-page-structure" className="mb-spacing">Page Structure</h3>
      <p>
        The library is solely focused on the components and how components are combined.
        Within every component page, you&apos;ll find the following documentation:
      </p>
      <ul>
        <li>
          <strong>Interactive sandbox.</strong> Available for many of the complex components to help visualize the look and functionality.
          (The color picker will also have an impact here)
        </li>
        <li>
          <strong>Starter code.</strong> A code block, that is connected to the sandbox, which allows you to copy and paste the code
          into a project. Technical guidance for implementation is also provided.
        </li>
        <li>
          <strong>Static examples.</strong> To show the basic look and feel.
        </li>
        <li>
          <strong>Usability guidance.</strong> To help define the purpose of when and when not to use the component.
        </li>
        <li>
          <strong>Accessibility considerations.</strong> Tips for you as you implement the component into your site.
        </li>
      </ul>
    </div>
  );
}

LibraryLanding.propTypes = propTypes;
LibraryLanding.defaultProps = defaultProps;

export default LibraryLanding;
