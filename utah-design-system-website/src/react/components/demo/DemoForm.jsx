import { BUTTON_APPEARANCE, Button, CharacterCount, Checkbox, DateInput, Form, MultiSelect, MultiSelectOption, RadioButton, RadioButtonGroup, Switch, TextArea, TextInput, TimeInput, componentColors, useBanner } from '@utahdts/utah-design-system';
import { startCase } from 'lodash';
import { useCallback } from 'react';
import { useImmer } from 'use-immer';

/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextBanner} UtahDesignSystemContextBanner */

/**
 * @typedef FormState {
 *  @property {boolean} approved
 *  @property {string} approvedDate
 *  @property {string} approvedTime
 *  @property {string} comment
 *  @property {string[]} eyeColor
 *  @property {string} firstName
 *  @property {string} lastName
 *  @property {string} radioBand
 *  @property {boolean} rockGenre
 *  @property {string} phoneNumber
 * }
 */

/**
 * @param {Partial<Record<keyof FormState, string>>} draftErrors
 * @param {FormState} record
 * @param {keyof FormState} field
 * @param {(value: any, record: Record<string, any>) => boolean} isValidFn
 * @param {string} errorMessage
 * @param {string} [theFieldToValidate]
 */
function validateField(draftErrors, record, field, isValidFn, errorMessage, theFieldToValidate) {
  const isValid = isValidFn(record[field], record);
  const shouldValidate = !theFieldToValidate || (field === theFieldToValidate);

  if (shouldValidate) {
    if (isValid) {
      delete draftErrors[field];
    } else {
      draftErrors[field] = errorMessage;
    }
  }
}

/**
 * @param {FormState} state
 * @param {Partial<Record<keyof FormState, string>>} previousFormErrors
 * @param {(banner: UtahDesignSystemContextBanner) => void} addBannerFn
 * @param {keyof FormState} [fieldToValidate]
 * @returns {{ errors: Partial<Record<keyof FormState, string>>, isValid: boolean }}
 */
function validateForm(state, previousFormErrors, addBannerFn, fieldToValidate) {
  const errors = fieldToValidate ? { ...previousFormErrors } : /** @type {Record<keyof FormState, string>} */ ({});

  validateField(errors, state, 'approved', (value) => !!value, 'Approval must be given to proceed', fieldToValidate);
  validateField(errors, state, 'approvedDate', (value) => !!/^\d{2}\/\d{2}\/\d{4}$/.exec(value), 'Date must be in the format mm/dd/yyyy', fieldToValidate);
  validateField(errors, state, 'approvedTime', (value) => !!/^\d{1,2}:\d{2} (am|pm)$/.exec(value), 'Time must be in the format hh:mm am', fieldToValidate);
  validateField(errors, state, 'eyeColor', (value) => value.length <= 2, 'No more than two colors may be selected', fieldToValidate);
  validateField(errors, state, 'comment', (value) => value.length <= 100, 'Comment length is beyond length limits; Reduce below 100 character threshold immediately', fieldToValidate);
  validateField(errors, state, 'firstName', (value) => !!value, 'Enter your first name', fieldToValidate);
  validateField(errors, state, 'lastName', (value) => !!value, 'Enter your last name', fieldToValidate);
  validateField(errors, state, 'radioBand', (value) => !!value, 'Select a Radio Band jam', fieldToValidate);
  validateField(errors, state, 'rockGenre', (value) => value, 'The only valid rock genre is "!!! ROCK & ROLL !!!"', fieldToValidate);
  validateField(errors, state, 'phoneNumber', (value) => !!/^\d{3}-\d{3}-\d{4}$/.exec(value), 'Phone number must be in the format of ###-###-####', fieldToValidate);

  if (!fieldToValidate) {
    if (Object.values(errors).length) {
      addBannerFn({ message: 'There are errors in the form. Please resolve the issues and try again.' });
    } else {
      addBannerFn({ message: 'Form passed validation and was submitted.' });
    }
  }
  return { errors, isValid: !Object.values(errors).length };
}

/** @type {FormState} */
const defaultFormState = {
  approved: false,
  approvedDate: '',
  approvedTime: '',
  comment: '',
  eyeColor: [],
  firstName: '',
  lastName: '',
  radioBand: '',
  rockGenre: false,
  phoneNumber: '',
};

/**
 * @returns {JSX.Element}
 */
export function DemoForm() {
  const [formState, setFormState] = useImmer(defaultFormState);
  const [formErrors, setFormErrors] = useImmer(/** @type {Partial<Record<keyof FormState, string>>} */({}));
  const [eyeColorOptions, setEyeColorOptions] = useImmer([
    { name: 'Amaranth', hex: '#e63356' },
    { name: 'Amber', hex: '#ffcf8c' },
    { name: 'Atrovirens', hex: '#087371' },
    { name: 'Aureolin', hex: '#fbf017' },
    { name: 'Burlywood', hex: '#dfbb8b' },
    { name: 'Caput Mortuum', hex: '#77975f' },
    { name: 'Celadon', hex: '#b2dab2' },
    { name: 'Coquelicot', hex: '#ff3e08' },
    { name: 'Eburnean', hex: '#f5f1e7' },
    { name: 'Falu', hex: '#83211f' },
    { name: 'Feldgrau', hex: '#546359' },
    { name: 'Gamboge', hex: '#eda127' },
    { name: 'Gingerline', hex: '#fda40a' },
    { name: 'Glaucous', hex: '#6686ba' },
    { name: 'Pink Kong', hex: '#fe94b1' },
    { name: 'Puce', hex: '#987bb3' },
    { name: 'Sarcoline', hex: '#ffdead' },
    { name: 'Skobeloff', hex: '#377979' },
    { name: 'Vermillion', hex: '#e5483b' },
    { name: 'Viridian', hex: '#478673' },
    { name: 'Xanadu', hex: '#4c83a6' },
    { name: 'Zaffre', hex: '#303d96' },
  ]);

  const { addBanner } = useBanner();
  const formErrorsItems = Object.entries(formErrors);
  const onBlurCurry = useCallback(
    /**
     * @param {keyof FormState} field
     * @returns {() => void}
     */
    (field) => () => setFormErrors(validateForm(formState, formErrors, addBanner, field).errors),
    [formState, formErrors]
  );

  return (
    <Form setState={setFormState} state={formState}>
      {
        formErrorsItems.length
          ? (
            <div className="form-example__errors">
              <span>Some errors have been found:</span>
              <div className="form-example__errors-list">
                <span className="utds-icon-before-mail" aria-hidden="true" />
                <div>
                  <ul>
                    {
                      formErrorsItems.map(([field, error]) => (
                        <li key={`form-example__error__${field}`}>{error}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          )
          : null
      }
      <div className="form-example__inputs">
        <TextInput
          errorMessage={formErrors.firstName}
          id="firstName"
          isRequired
          label="Fist Name"
          // @ts-ignore
          onBlur={onBlurCurry('firstName')}
        />
        <TextInput
          errorMessage={formErrors.lastName}
          id="lastName"
          isRequired
          label="Last Name"
          // @ts-ignore
          onBlur={onBlurCurry('lastName')}
        />
        <TextInput
          errorMessage={formErrors.phoneNumber}
          id="phoneNumber"
          label="Phone Number"
          // @ts-ignore
          onBlur={onBlurCurry('phoneNumber')}
        />
        <MultiSelect
          allowCustomEntry
          errorMessage={formErrors.eyeColor}
          id="eyeColor"
          label="Eye Color"
          onChange={(newValue) => {
            setFormState((draftState) => {
              draftState.eyeColor = newValue;
            });
          }}
          onCustomEntry={(newValue) => setEyeColorOptions((draftColors) => {
            const formattedColor = startCase(newValue);
            draftColors.push({ name: formattedColor, hex: '' });
            draftColors.sort((a, b) => a.name.localeCompare(b.name));
          })}
          values={formState.eyeColor}
          // @ts-ignore
          onBlur={onBlurCurry('eyeColor')}
        >
          {
            eyeColorOptions.map(({ hex, name }) => (
              <MultiSelectOption
                key={`form-example__eye-color__${name}`}
                label={name}
                value={name}
              >
                <div className="form-example__eye-color-option">
                  <div className="form-example__eye-color-swatch" style={{ backgroundColor: hex || name }} />
                  <div>{name}</div>
                </div>
              </MultiSelectOption>
            ))
          }
        </MultiSelect>
        <RadioButtonGroup
          errorMessage={formErrors.radioBand}
          isRequired
          id="radioBand"
          label="What's your Radio Band jam?"
          // @ts-ignore
          onBlur={onBlurCurry('radioBand')}
        >
          {
            [
              'HF (0.003 to 0.03 GHz)',
              'VHF (0.03 to 0.3 GHz)',
              'UHF (0.3 to 1 GHz)',
              'L (1 to 2 GHz)',
              'S (2 to 4 GHz)',
              'C (4 to 8 GHz)',
              'X (8 to 12 GHz)',
              'Ku (12 to 18 GHz)',
              'K (18 to 27 GHz)',
              'Ka (27 to 40 GHz)',
              'V (40 to 75 GHz)',
              'mm or G (110 to 300 GHz)',
            ].map((band) => (
              <RadioButton
                id={`form-example__radio-band__${band}`}
                key={`form-example__radio-band__${band}`}
                label={band}
                value={band}
              />
            ))
          }
        </RadioButtonGroup>
        <Switch
          errorMessage={formErrors.rockGenre}
          id="rockGenre"
          label="Music Genre"
          labelOn="!!! ROCK & ROLL !!!"
          labelOff="Rock & Roll"
          size="large"
          // @ts-ignore
          onBlur={onBlurCurry('rockGenre')}
        />
        <TextArea
          errorMessage={formErrors.comment}
          id="comment"
          label="Comment"
          // @ts-ignore
          onBlur={onBlurCurry('comment')}
        />
        <CharacterCount
          id="commentCount"
          maxLength={100}
          text={formState.comment}
          // @ts-ignore
          onBlur={onBlurCurry('commentCount')}
        />
        <Checkbox
          errorMessage={formErrors.approved}
          id="approved"
          isRequired
          label="Do you approve?"
          // @ts-ignore
          onBlur={onBlurCurry('approved')}
        />
        {
          formState.approved
            ? (
              <>
                <DateInput
                  errorMessage={formErrors.approvedDate}
                  id="approvedDate"
                  isClearable
                  isRequired
                  label="Approved Date"
                  showCalendarTodayButton
                  // @ts-ignore
                  onBlur={onBlurCurry('approvedDate')}
                />
                <TimeInput
                  errorMessage={formErrors.approvedTime}
                  id="approvedTime"
                  isClearable
                  isRequired
                  label="Approved Time"
                  timeRangeIncrement={30}
                  // @ts-ignore
                  onBlur={onBlurCurry('approvedTime')}
                />
              </>
            )
            : null
        }
      </div>
      <div className="form-example__buttons">
        <Button appearance={BUTTON_APPEARANCE.SOLID} color={componentColors.SECONDARY} onClick={() => setFormState(defaultFormState)}>Cancel</Button>
        <Button
          appearance={BUTTON_APPEARANCE.SOLID}
          color={componentColors.PRIMARY}
          onClick={() => {
            const { isValid, errors } = validateForm(formState, formErrors, addBanner);
            if (isValid) {
              setFormState(defaultFormState);
              setFormErrors({});
            } else {
              setFormErrors(errors);
            }
          }}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}
