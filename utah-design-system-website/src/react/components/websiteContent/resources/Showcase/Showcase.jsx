import { shuffle } from 'lodash-es';
import { useMemo } from 'react';
import absWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/abs-utah-gov.webp';
import archivesWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/archives.webp';
import businessWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/business-utah-gov.webp';
import chipWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/chip-utah-gov.webp';
import correctionsWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/corrections.webp';
import dhhsWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/dhhs-utah-gov.webp';
import dhrmWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/dhrm-utah-gov.webp';
import earlyChildhoodWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/early-childhood.webp';
import governorWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/governor.webp';
import guardWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/national-guard.webp';
import healthcarestatsWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/healthcarestats-utah-gov.webp';
import insuranceWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/insurance-department.webp';
import kidsReadyToReadWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/kids-ready-to-read.webp';
import landTrustsAdvocacyWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/land-trusts-advocacy.webp';
import medicalcannabisWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/medicalcannabis-utah-gov.webp';
import naturalResourcesWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/natural-resources.webp';
import ogmWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/ogm-utah-gov.webp';
import oneutahsummitWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/oneutahsummit-utah-gov.webp';
import onlineLibraryWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/online-library.webp';
import publicSafetyWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/public-safety.webp';
import siacWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/dps-siac.webp';
import startupWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/startup-utah-gov.webp';
import utahStateCapitolWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/utahstatecapitol-utah-gov.webp';
import utahsOwnWebsiteScreenshot from '../../../../../static/images/screenshots/showcase/utahs-own.webp';
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
        agency: 'Governor\'s Office of Economic Opportunity',
        id: 'startupstate',
        image: startupWebsiteScreenshot,
        title: 'Startup State',
        url: 'https://startup.utah.gov',
      },
      {
        agency: 'Governor\'s Office of Economic Opportunity',
        id: 'oneutahsummit',
        image: oneutahsummitWebsiteScreenshot,
        title: 'One Utah Summit',
        url: 'https://oneutahsummit.utah.gov',
      },
      {
        agency: 'Department of Natural Resources',
        id: 'ogm',
        image: ogmWebsiteScreenshot,
        title: 'Oil, Gas, and Mining',
        url: 'https://ogm.utah.gov',
      },
      {
        agency: 'Department of Natural Resources',
        id: 'natural-resources',
        image: naturalResourcesWebsiteScreenshot,
        title: 'Natural Resources',
        url: 'https://naturalresources.utah.gov',
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
        agency: 'Department of Cultural and Community Engagement',
        id: 'online-library',
        image: onlineLibraryWebsiteScreenshot,
        title: 'Online Library Website',
        url: 'https://onlinelibrary.utah.gov',
      },
      {
        agency: 'Department of Cultural and Community Engagement',
        id: 'kids-ready-to-read',
        image: kidsReadyToReadWebsiteScreenshot,
        title: 'Kids Ready to Read Website',
        url: 'https://kidsreadytoread.utah.gov',
      },
      {
        agency: 'Department of Government Operations',
        id: 'dhrm',
        image: dhrmWebsiteScreenshot,
        title: 'DHRM Website',
        url: 'https://dhrm.utah.gov',
      },
      {
        agency: 'Department of Government Operations',
        id: 'archives',
        image: archivesWebsiteScreenshot,
        title: 'Archives Website',
        url: 'https://archives.utah.gov',
      },
      {
        agency: 'Department of Public Safety',
        id: 'dps',
        image: publicSafetyWebsiteScreenshot,
        title: 'Public Safety Website',
        url: 'https://dps.utah.gov',
      },
      {
        agency: 'Department of Public Safety',
        id: 'siac',
        image: siacWebsiteScreenshot,
        title: 'SIAC Website',
        url: 'https://siac.utah.gov',
      },
      {
        agency: 'Utah Insurance Department',
        id: 'insurance',
        image: insuranceWebsiteScreenshot,
        title: 'Insurance Website',
        url: 'https://insurance.utah.gov',
      },
      {
        agency: 'Land Trusts Advocacy Office',
        id: 'land-trusts-advocacy',
        image: landTrustsAdvocacyWebsiteScreenshot,
        title: 'Land Trusts Advocacy Website',
        url: 'https://landtrustsadvocacy.utah.gov/',
      },
      {
        agency: 'Department of Agriculture and Food',
        id: 'utahs-own',
        image: utahsOwnWebsiteScreenshot,
        title: 'Utah\'s Own Website',
        url: 'https://utahsown.org/',
      },
      {
        agency: 'Department of Corrections',
        id: 'corrections',
        image: correctionsWebsiteScreenshot,
        title: 'Utah\'s Department of Corrections Website',
        url: 'https://corrections.utah.gov/',
      },
      {
        agency: 'Department of Health and Human Services',
        id: 'early-childhood',
        image: earlyChildhoodWebsiteScreenshot,
        title: 'Early Childhood',
        url: 'https://earlychildhood.utah.gov/',
      },
      {
        agency: 'Executive Branch',
        id: 'governor',
        image: governorWebsiteScreenshot,
        title: 'Governor of Utah Website',
        url: 'https://governor.utah.gov/',
      },
      {
        agency: 'Utah National Guard',
        id: 'national-guard',
        image: guardWebsiteScreenshot,
        title: 'Utah National Guard Website',
        url: 'https://guard.utah.gov/',
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
            key={`${site.title}__${site.url}`}
            title={site.title}
            url={site.url}
          />
        ))}

      </div>
    </div>
  );
}
