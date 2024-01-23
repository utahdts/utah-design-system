import { useMemo } from 'react';
import { shuffle } from 'lodash';
import absWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/abs-utah-gov.webp';
import bewiseWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/bewise-utah-gov.webp';
import businessWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/business-utah-gov.webp';
import chipWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/chip-utah-gov.webp';
import dhhsWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/dhhs-utah-gov.webp';
import dhrmWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/dhrm-utah-gov.webp';
import healthcarestatsWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/healthcarestats-utah-gov.webp';
import medicalcannabisWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/medicalcannabis-utah-gov.webp';
import ogmWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/ogm-utah-gov.webp';
import oneutahsummitWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/oneutahsummit-utah-gov.webp';
import startupWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/startup-utah-gov.webp';
import thrivingWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/thriving-utah-gov.webp';
import utahStateCapitolWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/utahstatecapitol-utah-gov.webp';
import vitalRecordsWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/vitalrecords-utah-gov.webp';
import { ShowcaseExample } from './ShowcaseExample';

export function Showcase() {
  // site screenshots 1750 X 1024
  const sites = useMemo(
    () => shuffle([
      {
        agency: 'Department of Alcoholic Beverage Services',
        id: 'dabs',
        image: absWebsiteScreenshot,
        title: 'ABS Website',
        url: 'https://abs.utah.gov',
      },
      {
        agency: 'Capitol Preservation Board',
        id: 'cpb',
        image: utahStateCapitolWebsiteScreenshot,
        title: 'Utah State Capitol',
        url: 'https://utahstatecapitol.utah.gov',
      },
      {
        agency: 'Governor\'s Office of Economic Opportunity',
        id: 'goeo',
        image: businessWebsiteScreenshot,
        title: 'Business Website',
        url: 'https://business.utah.gov',
      },
      {
        agency: 'Department of Natural Resources',
        id: 'ogm',
        image: ogmWebsiteScreenshot,
        title: 'Oil, Gas, and Mining',
        url: 'https://ogm.utah.gov',
      },
      {
        agency: 'Department of Health and Human Services',
        id: 'chip',
        image: chipWebsiteScreenshot,
        title: 'CHIP Website',
        url: 'https://chip.utah.gov',
      },
      {
        agency: 'Department of Health and Human Services',
        id: 'dhhs',
        image: dhhsWebsiteScreenshot,
        title: 'DHHS Website',
        url: 'https://dhhs.utah.gov',
      },
      {
        agency: 'Governors Office of Economic Opportunity',
        id: 'oneutahsummit',
        image: oneutahsummitWebsiteScreenshot,
        title: 'One Utah Summit',
        url: 'https://oneutahsummit.utah.gov',
      },
      {
        agency: 'Department of Cultural and Community Engagement',
        id: 'thriving',
        image: thrivingWebsiteScreenshot,
        title: 'Thriving Website',
        url: 'https://thriving.utah.gov',
      },
      {
        agency: 'Department of Government Operations',
        id: 'dhrm',
        image: dhrmWebsiteScreenshot,
        title: 'DHRM Website',
        url: 'https://dhrm.utah.gov',
      },
      {
        agency: 'Department of Health and Human Services',
        id: 'bewise',
        image: bewiseWebsiteScreenshot,
        title: 'BeWise Website',
        url: 'https://bewise.utah.gov',
      },
      {
        agency: 'Department of Health and Human Services',
        id: 'healthcarestats',
        image: healthcarestatsWebsiteScreenshot,
        title: 'Healthcare Stats Website',
        url: 'https://healthcarestats.utah.gov',
      },
      {
        agency: 'Department of Health and Human Services',
        id: 'medicalcannabis',
        image: medicalcannabisWebsiteScreenshot,
        title: 'Medical Cannabis Website',
        url: 'https://medicalcannabis.utah.gov',
      },
      {
        agency: 'Department of Health and Human Services',
        id: 'vitalrecords',
        image: vitalRecordsWebsiteScreenshot,
        title: 'Office of Vital Records',
        url: 'https://vitalrecords.utah.gov',
      },
      {
        agency: 'Governors Office of Economic Opportunity',
        id: 'startupstate',
        image: startupWebsiteScreenshot,
        title: 'Startup State',
        url: 'https://startup.utah.gov',
      },
    ]),
    []
  );

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Design System Showcase</h1>
      <p className="lead-in">
        The following are websites and applications that are currently using the Utah Design System.
      </p>
      <p>
        By exploring these showcases, one can witness the power and versatility of the Utah Design System in action.
        Each website represents a unique blend of cohesive elements, consistent patterns, and harmonious aesthetics,
        all made possible by the implementation of a well-defined design system. These sites demonstrate how state Agencies
        can enhance the user experience, streamline development processes, and elevate trust with visitors.
      </p>
      <hr />
      <div className="showcase">
        {sites.map((site) => (
          <ShowcaseExample
            agency={site.agency}
            id={site.id}
            image={site.image}
            title={site.title}
            url={site.url}
          />
        ))}

      </div>
      <hr />
      <h2 id="coming-soon">Coming Soon</h2>
      <p>The following websites and applications that are currently in progress will be using the design system.</p>
      <ul>
        <li>Department of Public Safety</li>
        <li>Board of Pardons</li>
        <li>Utah Employee Gateway</li>
        <li>Utah Environmental Quality Interactive Map</li>
        <li>Department of Natural Resources</li>
        <li>travel.utah.gov</li>
        <li>UGRC High Resolution GPS Bill Pay App</li>
      </ul>
    </div>
  );
}
