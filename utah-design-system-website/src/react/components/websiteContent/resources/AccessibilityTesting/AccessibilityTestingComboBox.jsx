import {
  Button, ComboBox, ComboBoxOption, useBanner
} from '@utahdts/utah-design-system';

export function AccessibilityTestingComboBox() {
  const { addBanner } = useBanner();
  return (
    <>
      <h2>Como Box</h2>
      <h3>Scenario: Combo Box #1 - Short List</h3>
      <div className="accessibility-scenario">
        <p className="lead-in">
          The number of options for selection in this Combo Box is relatively short so that selecting items by using the arrow keys is plausible.
          Use the Down arrow key to jump to the list of options.
          Use the Up arrow key to go back to the filtering text input.
          Use the Enter/Return key to make a selection.
          Press the Backspace key to delete the current selection.
        </p>
        <ul aria-label="test criteria">
          <li>Popup List of options announces the correct # of items as the list is filtered</li>
          <li>Use arrow keys to navigate combo box options</li>
        </ul>
        <div className="accessibility-scenario__component">
          <ComboBox
            id="combo-box-test-scenario-1"
            label="Choose a mighty 5"
          >
            <ComboBoxOption label="Arches National Park" value="arches" />
            <ComboBoxOption label="Bryce Canyon National Park" value="bryce" />
            <ComboBoxOption label="Canyonlands National Park" value="canyonlands" />
            <ComboBoxOption label="Capitol Reef National Park" value="capitol-reef" />
            <ComboBoxOption label="Zion National Park" value="zion" />
          </ComboBox>
        </div>
      </div>

      {/* // option that uses combo box option groups */}
      {/*  * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.identifiesWithOptionGroupId] some things like group labels are focusable in the list, but not filterable, this is their `id`
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isStatic] static options are always visible and not filterable
 * @param {string} props.label
 * @param {string} props.value
 */}

      <h3>Scenario: Combo Box #2 - Long List</h3>
      <div className="accessibility-scenario">
        <p className="lead-in">The button is disabled. It should not receive focus nor be clickable.</p>
        <div className="accessibility-scenario__component">
          <Button
            isDisabled
            onClick={() => addBanner({ message: 'Button clicked in scenario Button-1' })}
          >
            You can not click this button
          </Button>
        </div>
      </div>
    </>
  );
}
