import dotImageUrl from '../static/images/utah-dot.png';
import heroImageUrl from '../static/images/department-hero.png';
import kidnapperImageUrl from '../static/images/kidnapper.png';
import babyImageUrl from '../static/images/baby.png';
import traxImageUrl from '../static/images/trax.png';
import chattersImageUrl from '../static/images/chatters.png';
import utahDotGreyImageUrl from '../static/images/utah-dot-grey.png';

function DemoContent() {
  return (
    <div className="demo-content">
      <div className="header">
        <img src={dotImageUrl} alt="Utah Logo" />
        <span className="header__department">| Department of Health and Human Services</span>
        <button className="header__sign-in" type="button">Sign In</button>
      </div>

      <div className="menu-bar">
        <ul>
          <li><a href="#online-services">Online Services v</a></li>
          <li><a href="#government">Government v</a></li>
          <li><a href="#visit-utah">Visit Utah v</a></li>
          <li><a href="#residents">Residents</a></li>
          <li><a href="#business">Business</a></li>
        </ul>
      </div>

      <div className="hero">
        <img src={heroImageUrl} alt="Department Hero" />
      </div>

      <div className="squares">
        <div className="squares__square">
          <div className="square__title">
            Utah State Tax Commission
          </div>
          <ul>
            <li>Division of Motor Vehicles (DMV) &gt;</li>
            <li>Temporary Permits &gt;</li>
            <li>Renew Your Motor Vehicle registration &gt;</li>
            <li>Vehicle inspections &gt;</li>
          </ul>
          <div className="square__button">
            <button type="button">View More</button>
          </div>
        </div>

        <div className="squares__square">
          <div className="square__title">
            Department of Cultural &amp; Community Engagement
          </div>
          <ul>
            <li>Arts and Museums &gt;</li>
            <li>Housing and Community Development &gt;</li>
            <li>Utah State Library &gt;</li>
            <li>Services for hte Deaf and Hard of Hearing &gt;</li>
          </ul>
          <div className="square__button">
            <button type="button">View More</button>
          </div>
        </div>

        <div className="squares__square">
          <div className="square__title">
            Department of Health &amp; Human Services
          </div>
          <ul>
            <li>Office of Vital Records &gt;</li>
            <li>Epidemiology &gt;</li>
            <li>Coronavirus &gt;</li>
            <li>Mental Health Resources &gt;</li>
          </ul>
          <div className="square__button">
            <button type="button">View More</button>
          </div>
        </div>

        <div className="squares__square--double">
          <div className="square__title">
            Title of This Section
          </div>

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
          <img src={kidnapperImageUrl} alt="Kidnapper" />
          <div className="square__button">
            <button type="button">View More</button>
          </div>
        </div>
      </div>

      <div className="form">
        <img src={babyImageUrl} alt="baby" />

        <div className="form__section">
          <div className="section__title">
            <span className="title__number">1</span>
            <span className="title__name">Personal Information</span>
          </div>

          <div className="section__inputs">
            <div className="section__input">
              <div className="input__label" htmlFor="firstName">First Name</div>
              <div className="input__input">
                <input id="firstName" name="firstName" />
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
