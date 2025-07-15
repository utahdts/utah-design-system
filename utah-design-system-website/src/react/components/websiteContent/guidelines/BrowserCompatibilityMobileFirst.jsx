/* eslint-disable max-len */
import {
  ExternalLink,
} from '@utahdts/utah-design-system';

export function BrowserCompatibilityMobileFirst() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Browser Compatibility, Mobile-First, Acceptance Testing, and SDLC</h1>
      <p className="lead-in">
        The Utah Design System is meticulously crafted and rigorously tested to ensure optimal functionality
        and visual consistency across all major web browsers. Adhering to the guidelines outlined below is
        crucial for providing a consistent and high-quality user experience for all Utah citizens.
      </p>

      <h2 id="section-browser-compatibility" className="mb-spacing">Browser Compatibility Standard</h2>
      <p>
        <strong>It is a requirement for all websites and applications developed for
        the State of Utah to adhere to the following browser compatibility standard:</strong>
      </p>
      <ul>
        <li>
          The last two previous stable versions of major desktop web browsers. This includes,
          (but does not have to be limited to), Google Chrome, Mozilla Firefox, Microsoft Edge,
          and Apple Safari.
        </li>
        <li>
          The last two previous stable versions of the mobile equivalents of each major browser.
          This ensures optimal performance and display on smartphones and tablets, encompassing
          browsers like Chrome for Android, Safari for iOS, and Firefox Mobile.
        </li>
      </ul>
      <p className="mt-spacing">
        This standard ensures that the vast majority of users can access and interact with state
        services without encountering significant rendering or functionality issues. While efforts
        are made to support older browsers where feasible, the focus remains on modern browser
        capabilities to leverage new web technologies and provide a secure, efficient, and rich
        user experience.
      </p>

      <h2 id="section-mobile-first" className="mb-spacing">Mobile-First Design Principles</h2>
      <p>
        In today's digital world, a significant portion of web traffic originates from mobile devices.
        To ensure that applications and websites can be optimally viewed and interacted with on a mobile
        device, a <strong>Mobile-First design approach is paramount</strong>.
      </p>
      <p>
        Mobile-First design advocates for starting the design and development process with the <strong>smallest
        screen size in mind</strong> (e.g., smartphones) and progressively enhancing the experience
        for larger screens (e.g., tablets, desktops). This approach offers several key benefits:
      </p>
      <ul>
        <li>
          <strong>Improved User Experience (UX) on Mobile:</strong> By prioritizing mobile, designs are inherently
          optimized for touch interactions, smaller screens, and slower network speeds, leading to a
          superior experience for mobile users.</li>
        <li>
          <strong>Performance Optimization:</strong> Focusing on mobile first encourages lean code,
          efficient image loading, and minimal resource usage, which translates to faster load times
          across all devices.</li>
        <li>
          <strong>Enhanced Accessibility:</strong> Designing for constrained environments often leads
          to simpler layouts and clearer content hierarchy, which benefits users with disabilities.
        </li>
        <li>
          <strong>Future-Proofing:</strong> As mobile technology continues to evolve, a mobile-first
          strategy positions applications and websites to adapt more readily to new devices and form factors.
        </li>
        <li>
          <strong>SEO Benefits:</strong> Search engines, particularly Google, prioritize mobile-friendly
          websites in their ranking algorithms.
        </li>
      </ul>
      <p className="mt-spacing">
        Developers and designers should utilize:
      </p>
      <ul>
        <li>
          <strong>Responsive Layouts:</strong> Utilizing flexible grids and media queries to adapt content
          and design elements to various screen sizes.
        </li>
        <li>
          <strong>Touch-Friendly Interfaces:</strong> Large, easily tappable buttons and interactive elements.
        </li>
        <li>
          <strong>Concise Content:</strong> Prioritizing essential information and using clear, scannable text.
        </li>
        <li>
          <strong>Performance Optimization:</strong> Minimizing file sizes, optimizing images, and leveraging
          efficient coding practices.
        </li>
      </ul>

      <h2 id="section-sdlc" className="my-spacing">Acceptance Testing and the Software Development Lifecycle (SDLC)</h2>
      <p>
        To guarantee browser compatibility and accessibility compliance, robust <strong>Acceptance Testing</strong> is an
        indispensable part of the <ExternalLink href="https://services.dts.utah.gov/esc?id=kb_article&sysparm_article=KB0010291&table=kb_knowledge&searchTerm=sdlc">Software Development Lifecycle (SDLC)</ExternalLink> for all State of Utah web projects.
      </p>
      <p>
        <strong>Acceptance Testing</strong> involves verifying that the developed software meets the specified requirements
        and is ready for deployment. For browser compatibility and accessibility, this includes:
      </p>
      <ul>
        <li>
          <strong>Cross-Browser Testing:</strong> Thoroughly testing the application or website across all
          required browser versions (desktop and mobile) to identify and rectify rendering inconsistencies,
          functional issues, and layout discrepancies. This can involve both manual testing and automated
          testing tools.
        </li>
        <li>
          <strong>Device Testing:</strong> Verifying functionality and display on a range of actual mobile
          devices and emulators to account for varying screen sizes, resolutions, and operating system nuances.
        </li>
        <li>
          <strong>Accessibility Testing:</strong> Ensuring compliance with Web Content Accessibility
          Guidelines (WCAG) standards. This includes testing for keyboard navigation, screen reader
          compatibility, color contrast, alternative text for images, and other accessibility best
          practices. Tools and manual audits should be employed for comprehensive accessibility testing.
        </li>
      </ul>
      <h3 className="mt-spacing">
        The Importance of a Sound Software Development Lifecycle (SDLC):
      </h3>
      <p>
        A well-defined and rigorously followed SDLC is crucial for ensuring quality, including browser
        compatibility and accessibility, from the outset of a project. Key aspects of a sound SDLC that
        contribute to these goals include:
      </p>
      <ul>
        <li>
          <strong>Requirements Gathering:</strong> Clearly defining browser compatibility and accessibility
          standards as non-negotiable requirements at the very beginning of the project.
        </li>
        <li>
          <strong>Design Phase:</strong> Incorporating Mobile-First principles and accessibility
          considerations into the design specifications.
        </li>
        <li>
          <strong>Development Phase:</strong> Adhering to coding best practices, using semantic HTML,
          and utilizing responsive design techniques.
        </li>
        <li>
          <strong>Testing Phase:</strong> Implementing comprehensive unit, integration, and acceptance
          testing, with a strong focus on browser compatibility and accessibility.
        </li>
        <li>
          <strong>Deployment and Maintenance:</strong> Ensuring that ongoing updates and new features
          continue to meet these standards and that regular monitoring for compatibility issues is performed.
        </li>
      </ul>
      <p className="mt-spacing">
        By integrating these practices throughout the SDLC, the State of Utah can ensure that all its
        digital services are robust, accessible, and deliver an optimal experience to all users,
        regardless of their chosen device or browser.
      </p>
    </div>
  );
}
