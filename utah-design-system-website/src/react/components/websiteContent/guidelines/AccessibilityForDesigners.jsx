/* eslint-disable max-len */
import {
  ExternalLink,
  LinkCallback,
} from '@utahdts/utah-design-system';
import { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext/useAppContext';
import { pageUrls } from '../../routing/pageUrls';
import { WcagRulesBlock } from './WcagRulesBlock';

export function AccessibilityForDesigners() {
  const { setAppState } = useAppContext();
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Accessibility for Designers</h1>
      <p className="lead-in">
        Below are some accessibility tips for designers. For more in depth information, view the <NavLink to={pageUrls.accessibility}>accessibility overview page</NavLink> or the <NavLink to={pageUrls.accessibilityChecklist}>accessibility checklist</NavLink>.
      </p>

      <WcagRulesBlock />

      <h2 id="section-designers-role">The Designer’s Role in Accessibility</h2>
      <p>
        Designers play a critical role in ensuring accessibility by creating interface and web designs that accommodate people with varying degrees of
        vision, mobility, and cognitive abilities. Accessibility is about real people trying to access vital public information and state services,
        and a well-thought-out design can be the difference between inclusion and exclusion. By considering factors like color contrast, text size,
        navigation simplicity, and compatibility with assistive technologies, designers can create experiences that are usable by everyone, leading
        to more positive outcomes for all users.
      </p>
      <p>
        Designers are the tip of the spear when it comes to accessibility, leading the charge in creating inclusive digital experiences. It’s important
        to embrace the challenges of accessibility, as they present opportunities to innovate and improve the overall user experience. By prioritizing
        accessibility in design, we ensure that public information and services are available to everyone, regardless of their abilities.
      </p>
      <h3 id="section-questions">Questions</h3>
      <p>Below are some questions every design team should ask themselves as they are creating accessible digital experiences.</p>
      <ul>
        <li>
          <strong>Can users quickly understand the content flow and user interface?</strong><br />
          A well-designed interface should allow users to easily grasp how to interact with it, minimizing confusion or frustration. Clear labeling,
          consistent design patterns, and accessible features (like readable fonts and contrasting colors) all contribute to helping users quickly
          understand and use the platform effectively.
        </li>
        <li>
          <strong>Are you designing generously with color contrast and size?</strong><br />
          When designing for accessibility, using higher color contrast and larger font sizes ensures that users with visual impairments can easily
          read and interact with content. These design choices make your interface more inclusive and improve usability for a wider audience.
        </li>
        <li>
          <strong>Are you being consistent and following industry best practices in your designs?</strong><br />
          Consistency and adherence to industry best practices are key to effective design. By using standardized design patterns, clear navigation,
          and accessible features, you create a more intuitive and user-friendly experience.
        </li>
        <li>
          <strong>Can users navigate your design using only their keyboard?</strong><br />
          Ensuring users can navigate your design using only their keyboard is essential for accessibility. Many individuals with disabilities
          rely on keyboard navigation to interact with websites and applications. Your design should allow users to access all features,
          including forms, menus, and buttons, through clear tabbing, focus states, and logical flow, without requiring a mouse.
          This enhances usability for everyone, especially those with mobility impairments.
        </li>
        <li>
          <strong>Can the information be understood by individuals using screen readers and other assistive technologies?</strong><br />
          Your design must be compatible with screen readers and other assistive technologies. This means providing clear, structured content
          with proper heading hierarchy, descriptive alt text for images, and accessible labels for buttons and forms. As a designer you lay
          the groundwork for ensuring that all elements are properly coded and labeled so that individuals using assistive technologies
          can navigate and understand the information just as effectively as other users.
        </li>
      </ul>

      <h3 id="section-color-contrast" className="mt-spacing-l">Color Contrast</h3>
      <p>
        <strong>The required color contrast is AA or AAA for text, images of text, icons, and interactive elements.</strong><br />
        Using generous contrast means not merely meeting the bare minimum WCAG AA requirements, but striving to exceed them when possible.
        It involves creating a more inclusive and accessible design by ensuring elements are highly distinguishable, improving readability
        for users with visual impairments or in challenging viewing conditions.
      </p>
    </div>
  );
}
