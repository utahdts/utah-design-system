import { MainContent } from '@utahdts/utah-design-system';
import { AccessibilityTestingButton } from './AccessibilityTestingButton';
import { AccessibilityTestingComboBox } from './AccessibilityTestingComboBox';
import { AccessibilityTestingMessages } from './AccessibilityTestingMessages';

export function AccessibilityTesting() {
  return (
    <MainContent className="landing-page-template">
      <div className="documentation-content content-width">
        <h1 id="h1-top" className="mt-spacing">Accessibility Testing</h1>
        <p className="lead-in">
          This page contains scenarios for accessibility testing.
          &quot;h2&quot; headings separate individual components.
          &quot;h3&quot; headings separate scenarios within each component.
        </p>

        <AccessibilityTestingButton />
        <AccessibilityTestingComboBox />
        <AccessibilityTestingMessages />
      </div>
    </MainContent>
  );
}
