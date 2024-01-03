import { ComboBox, ComboBoxOption, ComboBoxOptionGroup } from '@utahdts/utah-design-system';
import { sortBy } from 'lodash';
import { useMemo } from 'react';
import { examplePresidentsData } from '../../library/components/table/exampleTables/examplePresidentsData';

/** @typedef {{category: string, symbol: string, year: number}} StateSymbol */

/**
 * @typedef PresidentBirthplace {
 *  @property {string} county
 *  @property {string} state
 * }
 */

/**
 * @typedef President {
 *  @property {string} id
 *  @property {string} name
 *  @property {string} inauguration
 *  @property {number} nthPresident
 *  @property {string} funFacts
 *  @property {PresidentBirthplace} birthplace
 *  @property {string} politicalParty
 * }
 */

export function AccessibilityTestingComboBox() {
  const presidentsByParty = useMemo(
    () => (
      sortBy(examplePresidentsData, (president) => [president.politicalParty, president.name])
        .reduce(
          (draftGroupedPresidents, president) => {
            if (!draftGroupedPresidents[president.politicalParty]) {
              draftGroupedPresidents[president.politicalParty] = /** @type {President[]} */ ([]);
            }
            draftGroupedPresidents[president.politicalParty]?.push(president);
            return draftGroupedPresidents;
          },
          /** @type {Record<string, President[]>} */({})
        )
    ),
    []
  );

  return (
    <>
      <h2>Como Box</h2>
      <h3>Combo Box Scenario #1 - Short List</h3>
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

      <h3>Combo Box Scenario #2 - Long List</h3>
      <div className="accessibility-scenario">
        <p className="lead-in">
          There are many options for selection in this Combo Box so that it is probably preferable to filter the possible options
          to narrow down to the desired option.
        </p>
        <div className="accessibility-scenario__component">
          <div className="accessibility-scenario__component">
            <ComboBox
              id="combo-box-test-scenario-2"
              label="Choose a president"
            >
              {
                examplePresidentsData.map((president) => (
                  <ComboBoxOption key={`president-${president.id}`} label={president.name} value={president.id} />
                ))
              }
            </ComboBox>
          </div>
        </div>
      </div>

      <h3>Combo Box Scenario #3 - Grouped Options</h3>
      <div className="accessibility-scenario">
        <p className="lead-in">
          The possible options in this Combo Box are in groups. The group title is not selectable but the items
          in each group are selectable.
        </p>
        <div className="accessibility-scenario__component">
          <div className="accessibility-scenario__component">
            <ComboBox
              id="combo-box-test-scenario-3"
              label="Choose a President"
            >
              {
                Object.entries(presidentsByParty)
                  .map(([politicalParty, presidents]) => (
                    <ComboBoxOptionGroup key={`president-group__${politicalParty}`} label={politicalParty}>
                      {
                        presidents.map((president) => (
                          <ComboBoxOption key={`president-${president.id}`} label={president.name} value={president.id} />
                        ))
                      }
                    </ComboBoxOptionGroup>
                  ))
              }
            </ComboBox>
          </div>
        </div>
      </div>

      <h3>Combo Box Scenario #4 - Static &amp; Disabled Options</h3>
      <div className="accessibility-scenario">
        <p className="lead-in">
          Static options are options that are not filterable nor selectable and are always displayed. Like a &quot;no more results&quot; message.
          Disabled options are not selectable but are filterable.
          In the following example, &quot;Goblin Valley&quot; is &quot;disabled&quot; and &quot;Utah is
          always an adventure&quot; is &quot;static&quot;.
        </p>
        <div className="accessibility-scenario__component">
          <div className="accessibility-scenario__component">
            <ComboBox
              id="combo-box-test-scenario-4"
              label="Choose a mighty 5"
            >
              <ComboBoxOption label="Arches National Park" value="arches" />
              <ComboBoxOption label="Bryce Canyon National Park" value="bryce" />
              <ComboBoxOption label="Utah is always an adventure" value="adventure" isStatic />
              <ComboBoxOption label="Canyonlands National Park" value="canyonlands" />
              <ComboBoxOption label="Capitol Reef National Park" value="capitol-reef" />
              <ComboBoxOption label="Goblin Valley" value="goblinvalley" isDisabled />
              <ComboBoxOption label="Zion National Park" value="zion" />
            </ComboBox>
          </div>
        </div>

        <h3>Combo Box Scenario #5 - Disabled</h3>
        <div className="accessibility-scenario">
          <p className="lead-in">
            This combo box is disabled and should have no interactivity.
          </p>
          <div className="accessibility-scenario__component">
            <div className="accessibility-scenario__component">
              <ComboBox
                id="combo-box-test-scenario-5"
                label="Choose a mighty 5"
                isDisabled
              >
                <ComboBoxOption label="Arches National Park" value="arches" />
                <ComboBoxOption label="Bryce Canyon National Park" value="bryce" />
                <ComboBoxOption label="Canyonlands National Park" value="canyonlands" />
                <ComboBoxOption label="Capitol Reef National Park" value="capitol-reef" />
                <ComboBoxOption label="Zion National Park" value="zion" />
              </ComboBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
