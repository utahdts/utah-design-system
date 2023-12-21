import { AccessibilityTestingButton } from './AccessibilityTestingButton';
import { AccessibilityTestingComboBox } from './AccessibilityTestingComboBox';

export function AccessibilityTesting() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Accessibility Testing</h1>
      <p className="lead-in">
        This page contains scenarios for accessibility testing.
        &quot;h2&quot; headings separate individual components.
        &quot;h3&quot; headings separate scenarios within each component.
      </p>

      <AccessibilityTestingButton />
      <AccessibilityTestingComboBox />
    </div>
  );
}
