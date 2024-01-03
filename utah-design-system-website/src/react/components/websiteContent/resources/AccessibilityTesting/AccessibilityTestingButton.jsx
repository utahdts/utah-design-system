import { Button, useBanner } from '@utahdts/utah-design-system';

export function AccessibilityTestingButton() {
  const { addBanner } = useBanner();
  return (
    <>
      <h2>Button</h2>
      <h3>Button Scenario #1 - Clickable Button</h3>
      <div className="accessibility-scenario">
        <p className="lead-in">A button should be clickable and announce its title.</p>
        <div className="accessibility-scenario__component">
          <Button
            onClick={() => addBanner({ message: 'Button clicked in scenario Button-1' })}
          >
            Please click this button
          </Button>
        </div>
      </div>

      <h3>Button Scenario #2 - Disabled Button</h3>
      <div className="accessibility-scenario">
        <p className="lead-in">The button is disabled. It should not receive focus nor be clickable.</p>
        <div className="accessibility-scenario__component">
          <Button
            isDisabled
            onClick={() => addBanner({ message: 'Button clicked in scenario Button-2' })}
          >
            You can not click this button
          </Button>
        </div>
      </div>
    </>
  );
}
