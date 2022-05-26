// import kidnapperImageUrl from '../../static/images/kidnapper.png';
import dhhsBrand from '../../static/images/DHHS-Logo.svg';
import babyImageUrl from '../../static/images/baby.png';
import traxImageUrl from '../../static/images/trax.png';
import chattersImageUrl from '../../static/images/chatters.png';
import utahDotGreyImageUrl from '../../static/images/utah-dot-grey.png';
import getBorderClass from '../../color/getBorderClass';
import { useCssContext } from '../../context/cssContext/CssContext';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
// import Icons from '../icons/Icons';

function DemoContent() {
  const { cssState } = useCssContext();

  return (
    <div className="demo-content">
      <div className="header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 52" className="header__utah-brand">
          <g>
            <circle id="Ellipse_1" data-name="Ellipse 1" cx="26" cy="26" r="26" />
            <path id="Path_1" data-name="Path 1" d="M22.978,8.151q-9.623,0-14.295-5.584T4.012-14.748v-23.6H16.094v25.007q0,6.111,1.651,8.6a5.821,5.821,0,0,0,5.233,2.494,6,6,0,0,0,5.3-2.494Q30-7.232,30-13.343V-38.35h11.66v23.6q0,11.731-4.566,17.315T22.978,8.151Zm37.229-.843V-28.235H48.125V-38.35H84.37v10.115H72.289V7.308Zm39.9-22.2-.773,3.161h8.429l-.773-3.161q-.843-3.3-1.686-7.165t-1.686-7.305h-.281q-.773,3.512-1.58,7.34T100.1-14.889ZM82.544,7.308,96.452-38.35h14.611L124.971,7.308H112.187l-2.248-9.694H97.155L94.907,7.308Zm46.782,0V-38.35h12.082v17h13.627v-17h12.082V7.308H155.035V-10.815H141.408V7.308Z" transform="translate(65.883 40.35)" />
          </g>
        </svg>

        <span className="header__vertical-rule" />
        <span className="header__department">Department of Health and Human Services</span>
        <button className="header__sign-in button--solid" type="button">Sign In</button>
      </div>

      <div className="menu-bar dark-text">
        <ul>
          <li>
            <a href="#online-services">
              Online Services
              <span className="material-symbols-outlined icon-chevron-down">expand_more</span>
            </a>
          </li>
          <li>
            <a href="#government">
              Government
              <span className="material-symbols-outlined icon-chevron-down">expand_more</span>
            </a>
          </li>
          <li>
            <a href="#visit-utah" className="menu-item--selected">
              Visit Utah
              <span className="material-symbols-outlined icon-chevron-down">expand_more</span>
            </a>
          </li>
          <li><a href="#residents">Residents</a></li>
          <li><a href="#business">Business</a></li>
          <li className="menu-item__search"><a href="#search"><span className="material-symbols-outlined menu-item__search-icon">search</span></a></li>
        </ul>
      </div>

      <div className="hero mb-spacing-l">
        <div className="hero__image" />
        <svg className="hero__slant-color" viewBox="0 0 4000 400"><g><path d="M0,0H4000V400H268L0,0Z" /></g></svg>
        <div className="hero__branding"><img src={dhhsBrand} alt="Health and Human Services Logo" /></div>
        <div className="hero__title-wrapper text-on-primary-color">
          <div className="hero__title">Department of Health &amp; Human Services</div>
          <div className="hero__title-h-divider" />
          <div className="hero__sub-title">Office of Vital Records</div>
        </div>
      </div>

      <div className="grid-wrapper px-spacing-ls">
        <div className="grid-fixed grid-fixed--3col mb-spacing-l">
          <div className="card primary-color-background text-on-primary-color">
            <div className="material-symbols-outlined card__icon">settings_suggest</div>
            <div className="card__title mb-spacing text-center">A to Z</div>
            <div className="card__text mb-spacing-l">Find what you need here</div>
            <button type="button" className={`button--secondary-color button--solid mb-spacing-l action-button ${getBorderClass({ backgroundColor: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], foregroundColor: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR] })}`}>Find Services</button>
          </div>
          <div className="card primary-color-background text-on-primary-color">
            <div className="material-symbols-outlined card__icon">volunteer_activism</div>
            <div className="card__title mb-spacing">Providers</div>
            <div className="card__text mb-spacing-l mx-spacing text-center">Apply for a license, get a contract, or look up a policy</div>
            <button type="button" className={`button--secondary-color button--solid mb-spacing-l action-button ${getBorderClass({ backgroundColor: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], foregroundColor: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR] })}`}>Find Services</button>
          </div>
          <div className="card primary-color-background text-on-primary-color">
            <div className="material-symbols-outlined card__icon">campaign</div>
            <div className="card__title mb-spacing">Services</div>
            <div className="card__text mb-spacing-l text-center">Programs and services we provide</div>
            <button type="button" className={`button--secondary-color button--solid mb-spacing-l action-button ${getBorderClass({ backgroundColor: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], foregroundColor: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR] })}`}>Find Services</button>
          </div>
        </div>
      </div>

      <div className="grid-wrapper px-spacing-ls">
        <div className="grid-fixed grid-fixed--3col mb-spacing-l">

          <div className="card card--align-flex-start primary-color-light-background text-on-primary-color-light primary-color">
            <div className="card__title mx-spacing-l mb-spacing mt-spacing-l">Utah State Tax Commission</div>
            <hr className="primary-color-background" />
            <ul>
              <li><a href="#dmv">Division of Motor Vehicles (DMV) <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
              <li><a href="#permits">Temporary Permits <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
              <li><a href="#dmv">Renew Your Motor Vehicle Registration <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
              <li><a href="#dmv">Vehicle inspections <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
            </ul>
            <button type="button" className={`mb-spacing-l mx-spacing-l button--primary-color button--solid action-button ${getBorderClass({ backgroundColor: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT], foregroundColor: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR] })}`} style={{ alignSelf: 'flex-end' }}>View More</button>
          </div>

          <div className="card card--align-flex-start primary-color-light-background text-on-primary-color-light primary-color">
            <div className="card__title mx-spacing-l mb-spacing mt-spacing-l">Department of Cultural &amp; Community Engagement</div>
            <hr className="primary-color-background" />
            <ul>
              <li><a href="#dmv">Division of Motor Vehicles (DMV) <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
              <li><a href="#permits">Temporary Permits <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
              <li><a href="#dmv">Utah State Library <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
              <li><a href="#dmv">Services for the Deaf and Hard of Hearing <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
            </ul>
            <button type="button" className={`mb-spacing-l mx-spacing-l button--primary-color button--solid action-button ${getBorderClass({ backgroundColor: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT], foregroundColor: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR] })}`} style={{ alignSelf: 'flex-end' }}>View More</button>
          </div>

          <div className="card card--align-flex-start primary-color-light-background text-on-primary-color-light primary-color">
            <div className="card__title mx-spacing-l mb-spacing mt-spacing-l">Department of Health &amp; Human Services </div>
            <hr className="primary-color-background" />
            <ul>
              <li><a href="#dmv">Office of Vital Records <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
              <li><a href="#permits">Epidemiology <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
              <li><a href="#dmv">Coronavirus <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
              <li><a href="#dmv">Mental Health Resources <span className="material-symbols-outlined link-icon">chevron_right</span></a></li>
            </ul>
            <button type="button" className={`mb-spacing-l mx-spacing-l button--primary-color button--solid action-button ${getBorderClass({ backgroundColor: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT], foregroundColor: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR] })}`} style={{ alignSelf: 'flex-end' }}>View More</button>
          </div>

        </div>
      </div>

      <div className="grid-wrapper px-spacing-ls">
        <div className="grid-fixed grid-fixed--3col mb-spacing-l">
          <div className="card card--align-flex-start gray-color-background dark-background-color white-color p-spacing-l grid-column-span-2">
            <div className="card__title mb-spacing">Card Title Goes Here</div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architectobeate vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>

            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat boluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam.
            </p>
            <button type="button" className={`button--accent-color button ${getBorderClass({ backgroundColor: cssState[CSS_VARIABLES_KEYS.GRAY_COLOR], foregroundColor: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR] })}`} style={{ alignSelf: 'flex-end' }}>Find Services</button>
          </div>
          <div className="card card--align-flex-start gray-color-background white-color p-spacing-l">
            Something
          </div>
        </div>
      </div>

      <div className="grid-wrapper px-spacing-ls">
        <div className="grid-fixed grid-fixed--2col mb-spacing-l">
          <div className="gray-color-background dark-background-color p-spacing-l">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }} className="mb-spacing">
              <button type="button" className="button ">This is a default button</button>
              <button type="button" className="button button--solid">This is a solid default button</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }} className="mb-spacing">
              <button type="button" className="button button--primary-color">This is a primary button</button>
              <button type="button" className="button button--primary-color button--solid">This is a solid primary button</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }} className="mb-spacing">
              <button type="button" className="button button--secondary-color">This is a secondary button</button>
              <button type="button" className="button button--secondary-color button--solid">This is a solid secondary button</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button type="button" className="button button--accent-color">This is a accent button</button>
              <button type="button" className="button button--accent-color button--solid">This is a solid accent button</button>
            </div>
          </div>
          <div className="gray-color-light-background p-spacing-l">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }} className="mb-spacing">
              <button type="button" className="button ">This is a default button</button>
              <button type="button" className="button button--solid">This is a solid default button</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }} className="mb-spacing">
              <button type="button" className="button--primary-color">This is a primary button</button>
              <button type="button" className="button button--primary-color button--solid">This is a solid primary button</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }} className="mb-spacing">
              <button type="button" className="button--secondary-color">This is a secondary button</button>
              <button type="button" className="button button--secondary-color button--solid">This is a solid secondary button</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button type="button" className="button--accent-color">This is a accent button</button>
              <button type="button" className="button button--accent-color button--solid">This is a solid accent button</button>
            </div>
          </div>
        </div>
      </div>

      <div className="heading-section secondary-color-light-background p-spacing-l">
        <h1>Heading 1 - This is a heading</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Heading 2 - This is a heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Heading 3 - This is a heading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4>Heading 4 - This is a heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h5>Heading 5 - This is a heading</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h6>Heading 6 - This is a heading</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/*

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architectobeate vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>

        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat boluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam.
        </p>

        <div className="square__button">
          <button type="button">View More</button>
        </div>

      </div>

      <div className="squares__square">
        <div className="square__title">
          Baby Your Baby
        </div>
        <img src={kidnapperImageUrl} alt="" />
        <div className="square__button">
          <button type="button">View More</button>
        </div>
      </div>
    </div> */}

      <div className="fonts-demo primary-color-background">
        <div className="text-on-primary-color">
          <div className="font-size-2xs">font-size-2xs .8125rem 13px</div>
          <div className="font-size-xs ">font-size-xs  .875rem 14px</div>
          <div className="font-size-s  ">font-size-s   .9375rem 15px</div>
          <div className="font-size    ">font-size     1rem 16px</div>
          <div className="font-size-l  ">font-size-l   1.25rem 20px</div>
          <div className="font-size-xl ">font-size-xl  1.5rem 24px</div>
          <div className="font-size-2xl">font-size-2xl 1.75rem 28px</div>
          <div className="font-size-3xl">font-size-3xl 2rem 32px</div>
          <div className="font-size-4xl">font-size-4xl 2.5rem 40px</div>
          <div className="font-size-5xl">font-size-5xl 3rem 48px</div>
          <div className="font-size-6xl">font-size-6xl 3.5rem 56px</div>
          <div className="font-size-7xl">font-size-7xl 4.5rem 72px</div>
        </div>
        <div className="text-on-primary-color font-bold">
          <div className="font-size-2xs">font-size-2xs .8125rem 13px</div>
          <div className="font-size-xs ">font-size-xs  .875rem 14px</div>
          <div className="font-size-s  ">font-size-s   .9375rem 15px</div>
          <div className="font-size    ">font-size     1rem 16px</div>
          <div className="font-size-l  ">font-size-l   1.25rem 20px</div>
          <div className="font-size-xl ">font-size-xl  1.5rem 24px</div>
          <div className="font-size-2xl">font-size-2xl 1.75rem 28px</div>
          <div className="font-size-3xl">font-size-3xl 2rem 32px</div>
          <div className="font-size-4xl">font-size-4xl 2.5rem 40px</div>
          <div className="font-size-5xl">font-size-5xl 3rem 48px</div>
          <div className="font-size-6xl">font-size-6xl 3.5rem 56px</div>
          <div className="font-size-7xl">font-size-7xl 4.5rem 72px</div>
        </div>
      </div>

      <div className="form grid-wrapper">
        <img src={babyImageUrl} alt="baby" width="100%" />

        <div className="form__section py-spacing">
          <div className="section__title">
            <span className="title__number mx-spacing">1</span>
            <span className="title__name">Personal Information</span>
          </div>

          <div className="section__inputs  pl-spacing-l mb-spacing">
            <div className="section__input ">
              <div className="input-wrapper">
                <label>
                  First Name
                  <input type="text" id="firstName" name="firstName" />
                </label>
              </div>
            </div>

            <div className="section__input">
              <div className="input__label" htmlFor="lastName">Last Name</div>
              <div className="input__input">
                <input id="lastName" name="lastName" />
              </div>
            </div>

            <div className="section__input">
              <div className="input__label" htmlFor="phoneNumber">Phone Number</div>
              <div className="input__input">
                <input id="phoneNumber" name="phoneNumber" />
              </div>
            </div>

            <div className="section__input">
              <div className="input__label" htmlFor="streetAddress">Street Address</div>
              <div className="input__input">
                <input id="streetAddress" name="streetAddress" />
              </div>
            </div>

            <div className="section__input">
              <div className="input__label" htmlFor="city">City</div>
              <div className="input__input">
                <input id="city" name="city" />
              </div>
            </div>

            <div className="section__input">
              <div className="input__label" htmlFor="zip">Zip</div>
              <div className="input__input">
                <input id="zip" name="zip" />
              </div>
            </div>
          </div>
        </div>
        <div className="form__section">
          <div className="section__title">
            <span className="title__number">2</span>
            <span className="title__name">Vehicle Information</span>
          </div>

          <div className="section__inputs">
            <div className="section__input">
              <div className="input__label">Do you have your renewal notice?</div>
              <div className="input__input">

                <label htmlFor="renewalNotice-no">
                  no
                  <input id="renewalNotice-no" type="radio" name="renewalNotice" value="no" />
                </label>
                <label htmlFor="renewalNotice-yes">
                  yes
                  <input id="renewalNotice-yes" type="radio" name="renewalNotice" value="yes" />
                </label>
              </div>
            </div>

            <div className="section__input">
              <div className="input__label" htmlFor="currentOwnerLastName">Current Owner Last Name</div>
              <div className="input__input">
                <input id="currentOwnerLastName" name="currentOwnerLastName" />
              </div>
            </div>

            <div className="section__input">
              <div className="input__label" htmlFor="physicalZipCode">Physical ZIP Code</div>
              <div className="input__input">
                <input id="physicalZipCode" name="physicalZipCode" />
              </div>
            </div>

            <div className="section__input">
              <div className="input__label">Does your vehicle have a license plate?</div>
              <div className="input__input">

                <label htmlFor="licensePlate-no">
                  no
                  <input id="licensePlate-no" type="radio" name="licensePlate" value="no" />
                </label>
                <label htmlFor="licensePlate-yes">
                  yes
                  <input id="licensePlate-yes" type="radio" name="licensePlate" value="yes" />
                </label>
              </div>
            </div>

            <div className="section__input">
              <div className="input__label" htmlFor="licensePlate">License Plate</div>
              <div className="input__input">
                <input id="licensePlate" name="licensePlate" />
              </div>
            </div>

            <div className="section__input">
              <div className="input__label" htmlFor="vin">VIN (last 8 digits)</div>
              <div className="input__input">
                <input id="vin" name="vin" />
              </div>
            </div>

            <div className="section__input--notice">
              <div className="input__notice">
                Your license plate and VIN can be found on a previous registration
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="collapsible-section">
        <div className="collapsible-section__bar">
          <div className="collapsible-section-bar__title">Title of this Section</div>
          <div className="collapsible-section-bar__arrow">v</div>
        </div>
      </div>

      <div className="collapsible-section">
        <div className="collapsible-section__bar">
          <div className="collapsible-section-bar__title">Title of this Section</div>
          <div className="collapsible-section-bar__arrow">v</div>
        </div>
        <div className="collapsible-section__content">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolrem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sedquia non numquam eius modi tempora incidunt ut labore et
            dolore
            <a href="#magnam">magnam aliquam quaerat volupatem</a>
            . Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
          <img src={traxImageUrl} alt="trax" />
        </div>
      </div>

      <div className="follow-container">
        <p>Follow DHHS</p>
        <img src={chattersImageUrl} alt="chatters" />
      </div>

      <div className="footer">
        <div className="footer__line">
          <div className="footer__menus">

            <div className="footer__menu">
              <div className="footer-menu__title">
                Online Services
              </div>
              <ul>
                <li><a href="#Online Service One">Online Service One</a></li>
                <li><a href="#Online Service And More">Online Service And More</a></li>
                <li><a href="#Online Service Another One">Online Service Another One</a></li>
                <li><a href="#Online Service More">Online Service More</a></li>
                <li><a href="#Online Service">Online Service</a></li>
                <li><a href="#Online Service One At A Location">Online Service One At A Location</a></li>
                <li><a href="#Online Service Please">Online Service Please</a></li>
                <li><a href="#Online Serv">Online Serv</a></li>
                <li><a href="#Online Service Thirteen">Online Service Thirteen</a></li>
                <li><a href="#Online Service">Online Service</a></li>
                <li><a href="#More Online Services">More Online Services</a></li>
              </ul>

            </div>

            <div className="footer__menu">
              <div className="footer-menu__title">
                Another Footer
              </div>
              <ul>
                <li><a href="#Sed ut perspiciatis">Sed ut perspiciatis</a></li>
                <li><a href="#Unde omnis iste natus error sit">Unde omnis iste natus error sit</a></li>
                <li><a href="#Eaque ipsa quae ab ilio inventore veritalis">Eaque ipsa quae ab ilio inventore veritalis</a></li>
                <li><a href="#Aspernatur aut odit aut fugit">Aspernatur aut odit aut fugit</a></li>
              </ul>
            </div>

            <div className="footer__menu">
              <div className="footer-menu__title">
                Footer List
              </div>
              <ul>
                <li><a href="#Online Service One">Online Service One</a></li>
                <li><a href="#ONline Service And More">ONline Service And More</a></li>
                <li><a href="#Online Service Another One">Online Service Another One</a></li>
                <li><a href="#Online service More">Online service More</a></li>
                <li><a href="#Online service">Online service</a></li>
                <li><a href="#Online Service One At A Location">Online Service One At A Location</a></li>
              </ul>
            </div>

          </div>

          <div>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dororenque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sut explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspenatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed
          </div>
        </div>

        <div className="footer__line">
          <img src={utahDotGreyImageUrl} alt="utah dot" />
          | An official website of the state of utah
          <ul className="footer__site-links">
            <li>UTAH.GOV</li>
            <li>Utah.gov Home</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Accessibility</li>
            <li>Translate</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default DemoContent;
