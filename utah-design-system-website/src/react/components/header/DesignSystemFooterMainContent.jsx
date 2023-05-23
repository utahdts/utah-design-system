/* eslint-disable react/jsx-one-expression-per-line */
// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved, import/order
import govOps from '../../../static/images/DTS-Color-Reversed.svg';

import {
  FooterAgencyInformation,
  FooterAgencyInformationColumn,
  FooterAgencyInformationInfo,
  useUtahHeaderContext
} from '@utahdts/utah-design-system';
import '@utahdts/utah-design-system-header/src/css/index.scss';
import '@utahdts/utah-design-system/css/3-generic/normalize.css';
import '@utahdts/utah-design-system/css/index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import packageJSON from '../../../../package.json';
import pageUrls from '../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function DesignSystemFooterMainContent() {
  const { settings: utahHeaderSettings } = useUtahHeaderContext();
  return (
    <FooterAgencyInformation>
      <FooterAgencyInformationColumn>
        <FooterAgencyInformationInfo
          address={{
            city: 'Taylorsville',
            state: 'UT',
            streetAddress1: '4315 South 2700 West',
            zipCode: '84129',
          }}
          agencyTitleSecondLine="Utah Design System"
          agencyTitleFirstLine="Department of Government Operations"
          email="dts_ui@utah.gov"
          logo={<img src={govOps} alt="Division of Technology Services" />}
        />
      </FooterAgencyInformationColumn>

      <FooterAgencyInformationColumn>
        <div className="footer-agency-information__column-title">Main Menu</div>
        <ul className="footer-agency-information__menu">
          {
            utahHeaderSettings.mainMenu?.menuItems?.map((menuItem) => (
              <li key={`footer-main-menu_${menuItem.title}`}>
                <Link to={menuItem.actionFunctionUrl?.url || menuItem.actionUrl?.url || '/'}>{menuItem.title}</Link>
              </li>
            ))
          }
        </ul>
      </FooterAgencyInformationColumn>

      <FooterAgencyInformationColumn>
        <div className="footer-agency-information__column-title">Helpful Links</div>
        <ul className="footer-agency-information__menu">
          <li><Link to={pageUrls.gettingStarted}>Getting Started</Link></li>
          <li><Link to={pageUrls.mockups}>Design Mocks</Link></li>
          <li><Link to={pageUrls.github}>GitHub</Link></li>
          <li><Link to={pageUrls.help}>Help</Link></li>
        </ul>
      </FooterAgencyInformationColumn>

      <FooterAgencyInformationColumn>
        <div className="footer-agency-information__column-title">Utah Design System</div>
        Version: {packageJSON.version}
      </FooterAgencyInformationColumn>
    </FooterAgencyInformation>
  );
}

DesignSystemFooterMainContent.propTypes = propTypes;
DesignSystemFooterMainContent.defaultProps = defaultProps;

export default DesignSystemFooterMainContent;
