import { BUTTON_APPEARANCE, Button, CharacterCount, Checkbox, DateInput, ExternalLink, Form, MultiSelect, MultiSelectOption, RadioButton, RadioButtonGroup, Switch, TextArea, TextInput, TimeInput, componentColors, useBanner } from '@utahdts/utah-design-system';
import { startCase } from 'lodash';
import { useCallback } from 'react';
import { useImmer } from 'use-immer';
import { StaticExample } from '../staticExamples/StaticExample';

/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextBanner} UtahDesignSystemContextBanner */

/**
 * @typedef FormErrorInfo {
 *  @property {string} message
 *  @property {string} fieldId
 * }
 */
/** @typedef {Record<keyof FormState, FormErrorInfo>} FormErrors */

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
 * @param {Partial<FormErrors>} draftErrors
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
      draftErrors[field] = {
        message: errorMessage,
        fieldId: field,
      };
    }
  }
}

/**
 * @param {FormState} state
 * @param {Partial<FormErrors>} previousFormErrors
 * @param {(banner: UtahDesignSystemContextBanner) => void} addBannerFn
 * @param {keyof FormState} [fieldToValidate]
 * @returns {{ errors: Partial<FormErrors>, isValid: boolean }}
 */
function validateForm(state, previousFormErrors, addBannerFn, fieldToValidate) {
  const errors = fieldToValidate ? { ...previousFormErrors } : /** @type {FormErrors} */ ({});

  validateField(errors, state, 'approved', (value) => !!value, 'Approval must be given to proceed', fieldToValidate);
  validateField(errors, state, 'approvedDate', (value) => !!/^\d{2}\/\d{2}\/\d{4}$/.exec(value), 'Date must be in the format mm/dd/yyyy', fieldToValidate);
  validateField(errors, state, 'approvedTime', (value) => !!/^\d{1,2}:\d{2} (am|pm)$/.exec(value), 'Time must be in the format hh:mm am', fieldToValidate);
  validateField(errors, state, 'eyeColor', (value) => value.length <= 2, 'No more than two colors may be selected', fieldToValidate);
  validateField(errors, state, 'comment', (value) => value.length <= 100, 'Comment length is beyond length limits; Reduce below 100 character threshold immediately', fieldToValidate);
  validateField(errors, state, 'firstName', (value) => !!value, 'Enter your first name', fieldToValidate);
  validateField(errors, state, 'lastName', (value) => !!value, 'Enter your last name', fieldToValidate);
  validateField(errors, state, 'radioBand', (value) => !!value, 'Select a Radio Band jam', fieldToValidate);
  validateField(errors, state, 'rockGenre', (value) => !!value, 'You must be sure', fieldToValidate);
  validateField(errors, state, 'phoneNumber', (value) => !value || !!/^\d{3}-\d{3}-\d{4}$/.exec(value), 'Phone number must be in the format of ###-###-####', fieldToValidate);

  if (!fieldToValidate) {
    if (Object.values(errors).length) {
      addBannerFn({
        className: 'banner--danger',
        icon: <span className="utds-icon-before-warning" aria-hidden="true" />,
        message: 'There are errors in the form. Please resolve the issues and try again.',
      });
    } else {
      addBannerFn({
        className: 'banner--success',
        icon: <span className="utds-icon-before-check" aria-hidden="true" />,
        message: 'Form passed validation and was submitted.',
      });
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
 * @returns {React.JSX.Element}
 */
export function DemoForm() {
  const [formState, setFormState] = useImmer(defaultFormState);

  const [formErrors, setFormErrors] = useImmer(/** @type {Partial<FormErrors>} */({}));
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
    <>
      <StaticExample
        renderedExample={(
          <Form>
            {
              formErrorsItems.length
                ? (
                  <div className="info-box mb-spacing">
                    <div className="info-box__content">
                      <div className="form-example__errors">
                        <div className="form-example__errors-list">
                          <div>
                            <span><strong>Some errors have been found:</strong></span>
                            <ul>
                              {
                                formErrorsItems.map(([field, error]) => (
                                  <li key={`form-example__error__${field}`}>
                                    <a
                                      href={`#${error.fieldId}`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        const input = document.getElementById(error.fieldId);
                                        input?.focus();

                                        const label = input?.closest('.input-wrapper')?.querySelector('label');
                                        label?.scrollIntoView();
                                      }}
                                    >
                                      {error.message}
                                    </a>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                )
                : null
            }
            <div className="form-example__inputs">
              <TextInput
                errorMessage={formErrors.firstName?.message}
                id="firstName"
                isRequired
                label="First Name"
                onChange={(e) => setFormState((draftState) => {
                  draftState.firstName = e.target.value;
                })}
                value={formState.firstName}
                // @ts-expect-error
                onBlur={onBlurCurry('firstName')}
              />
              <TextInput
                errorMessage={formErrors.lastName?.message}
                id="lastName"
                isRequired
                label="Last Name"
                onChange={(e) => setFormState((draftState) => {
                  draftState.lastName = e.target.value;
                })}
                value={formState.lastName}
                // @ts-expect-error
                onBlur={onBlurCurry('lastName')}
              />
              <TextInput
                errorMessage={formErrors.phoneNumber?.message}
                id="phoneNumber"
                label="Phone Number"
                onChange={(e) => setFormState((draftState) => {
                  draftState.phoneNumber = e.target.value;
                })}
                value={formState.phoneNumber}
                // @ts-expect-error
                onBlur={onBlurCurry('phoneNumber')}
              />
              <div className="info-box mb-spacing">
                <div className="info-box__content">
                  Phone number should match the format: ###-###-####
                </div>
              </div>
              <MultiSelect
                allowCustomEntry
                errorMessage={formErrors.eyeColor?.message}
                id="eyeColor"
                label="Eye Color"
                onChange={(newValues) => setFormState((draftState) => {
                  draftState.eyeColor = newValues;
                })}
                onCustomEntry={(newValue) => setEyeColorOptions((draftColors) => {
                  const formattedColor = startCase(newValue);
                  draftColors.push({ name: formattedColor, hex: '' });
                  draftColors.sort((a, b) => a.name.localeCompare(b.name));
                })}
                values={formState.eyeColor}
                // @ts-expect-error
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
                errorMessage={formErrors.radioBand?.message}
                isRequired
                id="radioBand"
                label="What's your Radio Band jam?"
                onChange={(newValue) => setFormState((draftState) => {
                  draftState.radioBand = newValue;
                })}
                value={formState.radioBand}
                // @ts-expect-error
                onBlur={onBlurCurry('radioBand')}
              >
                {
                  [
                    // 'HF (0.003 to 0.03 GHz)',
                    'VHF (0.03 to 0.3 GHz)',
                    'UHF (0.3 to 1 GHz)',
                    // 'L (1 to 2 GHz)',
                    // 'S (2 to 4 GHz)',
                    // 'C (4 to 8 GHz)',
                    // 'X (8 to 12 GHz)',
                    // 'Ku (12 to 18 GHz)',
                    // 'K (18 to 27 GHz)',
                    // 'Ka (27 to 40 GHz)',
                    // 'V (40 to 75 GHz)',
                    // 'mm or G (110 to 300 GHz)',
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
                errorMessage={formErrors.rockGenre?.message}
                id="rockGenre"
                label="Are you sure?"
                labelOn="Not Sure"
                labelOff="Sure"
                onChange={(e) => setFormState((draftState) => {
                  onBlurCurry('rockGenre')();
                  // @ts-expect-error
                  draftState.rockGenre = e.target.checked;
                })}
                size="large"
                value={formState.rockGenre}
                width={100}
              />
              <TextArea
                errorMessage={formErrors.comment?.message}
                id="comment"
                label="Comment"
                onChange={(e) => setFormState((draftState) => {
                  // @ts-expect-error
                  draftState.comment = e.target.value;
                })}
                value={formState.comment}
                // @ts-expect-error
                onBlur={onBlurCurry('comment')}
              />
              <CharacterCount
                id="commentCount"
                maxLength={100}
                text={formState.comment}
                // @ts-expect-error
                onBlur={onBlurCurry('commentCount')}
              />
              <Checkbox
                errorMessage={formErrors.approved?.message}
                id="approved"
                isRequired
                label="Do you approve?"
                onChange={(e) => setFormState((draftState) => {
                  draftState.approved = e.target.checked;
                })}
                value={formState.approved}
                // @ts-expect-error
                onBlur={onBlurCurry('approved')}
              />
              {
                formState.approved
                  ? (
                    <>
                      <DateInput
                        errorMessage={formErrors.approvedDate?.message}
                        id="approvedDate"
                        isClearable
                        isRequired
                        label="Approved Date"
                        onChange={(newValue) => setFormState((draftState) => {
                          draftState.approvedDate = newValue;
                        })}
                        showCalendarTodayButton
                        value={formState.approvedDate}
                        // @ts-expect-error
                        onBlur={onBlurCurry('approvedDate')}
                      />
                      <TimeInput
                        errorMessage={formErrors.approvedTime?.message}
                        id="approvedTime"
                        isClearable
                        isRequired
                        label="Approved Time"
                        onChange={(newValue) => setFormState((draftState) => {
                          draftState.approvedTime = newValue;
                        })}
                        timeRangeIncrement={30}
                        value={formState.approvedTime}
                        // @ts-expect-error
                        onBlur={onBlurCurry('approvedTime')}
                      />
                    </>
                  )
                  : null
              }
            </div>
            <div className="form-example__buttons">
              <Button
                appearance={BUTTON_APPEARANCE.SOLID}
                color={componentColors.SECONDARY}
                onClick={() => {
                  setFormState(defaultFormState);
                  setFormErrors({});
                }}
              >
                Cancel
              </Button>
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
        )}
      />
      <p className="text-center">
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/blob/main/utah-design-system-website/src/react/components/demo/DemoForm.jsx"
        >
          Click here to see the React code for this Form
        </ExternalLink>
      </p>
    </>
  );
}
