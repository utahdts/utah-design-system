// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved, import/order
import govOps from '../../../static/images/DTS-Color-Reversed.svg';

import {
  FooterAgencyInformation,
  FooterAgencyInformationColumn,
  FooterAgencyInformationInfo
} from '@utahdts/utah-design-system';
import '@utahdts/utah-design-system-header/src/css/index.scss';
import '@utahdts/utah-design-system/css/3-generic/normalize.css';
import '@utahdts/utah-design-system/css/index.scss';
import React from 'react';

const propTypes = {};
const defaultProps = {};

function DesignSystemFooterMainContent() {
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
        <div>Online Services</div>
        <ul>
          <li>Online service One</li>
          <li>Online service Two</li>
          <li>Online service Three</li>
          <li>Online service Four</li>
          <li>Online service Five</li>
          <li>Online service Six</li>
          <li>Online service Seven</li>
          <li>Online service Eight</li>
        </ul>
      </FooterAgencyInformationColumn>

      <FooterAgencyInformationColumn>
        <div>Another Footer</div>
        <ul>
          <li>Lorem Ipsum One</li>
          <li>Lorem Ipsum Two</li>
          <li>Lorem Ipsum Three</li>
          <li>Lorem Ipsum Four</li>
        </ul>
        <div>Footer List</div>
        <ul>
          <li>Online service One</li>
          <li>Online service Two</li>
          <li>Online service Three</li>
        </ul>
      </FooterAgencyInformationColumn>

      <FooterAgencyInformationColumn>
        Lorem Ipsum text goes here that is not understandable to read because it is just lorem ipsum mumbo jumbo.
      </FooterAgencyInformationColumn>
    </FooterAgencyInformation>
  );
}

DesignSystemFooterMainContent.propTypes = propTypes;
DesignSystemFooterMainContent.defaultProps = defaultProps;

export default DesignSystemFooterMainContent;
