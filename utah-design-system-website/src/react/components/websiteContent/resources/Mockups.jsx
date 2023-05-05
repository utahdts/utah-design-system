import { Icons } from '@utahdts/utah-design-system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import LightBox from '../../lightbox/LightBox';
import pageUrls from '../../routing/pageUrls';

import header from '../../../../static/images/mockups/Header.jpg';
import footer from '../../../../static/images/mockups/Footer.jpg';
import fullPageMockup1 from '../../../../static/images/mockups/FullPageMockup1.jpg';
import fullPageMockup2 from '../../../../static/images/mockups/FullPageMockup2.jpg';
import fullPageMockup3 from '../../../../static/images/mockups/FullPageMockup3.jpg';
import fullPageMockup4 from '../../../../static/images/mockups/FullPageMockup4.jpg';
import formInputs01 from '../../../../static/images/mockups/FormInputs01.jpg';
import formInputs02 from '../../../../static/images/mockups/FormInputs02.jpg';
import formInputs03 from '../../../../static/images/mockups/FormInputs03.jpg';
import formInputs04 from '../../../../static/images/mockups/FormInputs04.jpg';
import formInputs05 from '../../../../static/images/mockups/FormInputs05.jpg';
import formInputs06 from '../../../../static/images/mockups/FormInputs06.jpg';
import formInputs07 from '../../../../static/images/mockups/FormInputs07.jpg';
import segmentedButton from '../../../../static/images/mockups/SegmentedButton.jpg';
import iconBar from '../../../../static/images/mockups/IconBar.jpg';
import tags from '../../../../static/images/mockups/Tags.jpg';
import cards1 from '../../../../static/images/mockups/Cards1.jpg';
import cards2 from '../../../../static/images/mockups/Cards2.jpg';
import cards3 from '../../../../static/images/mockups/Cards3.jpg';
import cardsActionCards from '../../../../static/images/mockups/CardsActionCards.jpg';
import breadcrumb from '../../../../static/images/mockups/Breadcrumb.jpg';
import nav1 from '../../../../static/images/mockups/SidePanelNav.jpg';
import nav2 from '../../../../static/images/mockups/SidePanelNavMobileClosed.jpg';
import nav3 from '../../../../static/images/mockups/SidePanelNavMobileOpen.jpg';

import heroLarge1 from '../../../../static/images/mockups/HeroLarge1.jpg';
import heroLarge2 from '../../../../static/images/mockups/HeroLarge2.jpg';
import heroLarge3 from '../../../../static/images/mockups/HeroLarge3.jpg';
import heroLarge4 from '../../../../static/images/mockups/HeroLarge4.jpg';
import heroMediumPlus1 from '../../../../static/images/mockups/HeroMedium+1.jpg';
import heroMediumPlus2 from '../../../../static/images/mockups/HeroMedium+2.jpg';
import heroMediumPlus3 from '../../../../static/images/mockups/HeroMedium+3.jpg';
import heroMedium1 from '../../../../static/images/mockups/HeroMedium1.jpg';
import heroMedium2 from '../../../../static/images/mockups/HeroMedium2.jpg';
import heroMedium3 from '../../../../static/images/mockups/HeroMedium3.jpg';
import heroSmall1 from '../../../../static/images/mockups/HeroSmall1.jpg';
import heroSmall2 from '../../../../static/images/mockups/HeroSmall2.jpg';
import heroSmall3 from '../../../../static/images/mockups/HeroSmall3.jpg';

import menusDropdown from '../../../../static/images/mockups/MenusDropdown.jpg';
import menusPopup from '../../../../static/images/mockups/MenusPopup.jpg';
import accordion from '../../../../static/images/mockups/Accordion.jpg';

import popupEditor from '../../../../static/images/mockups/Popup-Editor.jpg';
import popupLarge from '../../../../static/images/mockups/Popup-Large.jpg';
import popupPlacement from '../../../../static/images/mockups/Popup-Placement.jpg';
import popupVariations from '../../../../static/images/mockups/Popup-Variations.jpg';
import tooltips from '../../../../static/images/mockups/Tooltips.jpg';

import modal1 from '../../../../static/images/mockups/Modal1.jpg';
import modal2 from '../../../../static/images/mockups/Modal2.jpg';
import modal3 from '../../../../static/images/mockups/Modal3.jpg';

import banner1 from '../../../../static/images/mockups/Banner1.jpg';
import banner2 from '../../../../static/images/mockups/Banner2.jpg';
import banner3 from '../../../../static/images/mockups/Banner3.jpg';

import elevation from '../../../../static/images/mockups/Elevation.jpg';
import tables from '../../../../static/images/mockups/Tables.jpg';
import pagination from '../../../../static/images/mockups/Pagination.jpg';
import tabs from '../../../../static/images/mockups/Tabs.jpg';

import stepIndicator from '../../../../static/images/mockups/StepIndicator.jpg';
import processList from '../../../../static/images/mockups/ProcessList.jpg';

import sidePanelClosed from '../../../../static/images/mockups/SidePanelClosed.jpg';
import sidePanelFloating from '../../../../static/images/mockups/SidePanelFloating.jpg';
import sidePanelModal from '../../../../static/images/mockups/SidePanelModal.jpg';
import sidePanelPush from '../../../../static/images/mockups/SidePanelPush.jpg';

import progressBarSizes from '../../../../static/images/mockups/ProgressBarSizes.jpg';
import progressBarLabels from '../../../../static/images/mockups/ProgressBarLabels.jpg';
import progressBarVariations from '../../../../static/images/mockups/ProgressBarVariations.jpg';
import progressBarMobile from '../../../../static/images/mockups/ProgressBarMobile.jpg';
import progressBarMobileLoadingContentArea from '../../../../static/images/mockups/ProgressBarMobileLoadingContentArea.jpg';
import spinner from '../../../../static/images/mockups/Spinner.jpg';
import skeleton from '../../../../static/images/mockups/Skeleton.jpg';
import skeleton2 from '../../../../static/images/mockups/skeletonFullPage.jpg';
import skeleton3 from '../../../../static/images/mockups/skeletonLazyLoad.jpg';
import skeleton4 from '../../../../static/images/mockups/skeletonTable.jpg';

import horizontalRule from '../../../../static/images/mockups/HorizontalRule.jpg';
import horizontalRuleNeutralColor from '../../../../static/images/mockups/HorizontalRuleNeutralColor.jpg';
import horizontalRulePrimaryColor from '../../../../static/images/mockups/HorizontalRulePrimaryColor.jpg';
import badges from '../../../../static/images/mockups/Badges.jpg';
import statusIndicator from '../../../../static/images/mockups/StatusIndicator.jpg';

import blockquote1 from '../../../../static/images/mockups/Blockquote1.jpg';
import blockquote2 from '../../../../static/images/mockups/Blockquote2.jpg';
import callOuts from '../../../../static/images/mockups/CallOuts.jpg';
import links from '../../../../static/images/mockups/Links.jpg';
import headlines from '../../../../static/images/mockups/Headlines.jpg';
import leadInText from '../../../../static/images/mockups/LeadInText.jpg';
import textStyling from '../../../../static/images/mockups/TextStyling.jpg';
import list from '../../../../static/images/mockups/List.jpg';

import skipLink from '../../../../static/images/mockups/SkipLink.jpg';

import map from '../../../../static/images/mockups/Map.jpg';
import mapLocationDetails from '../../../../static/images/mockups/MapLocationDetails.jpg';
import mapLocationEdit from '../../../../static/images/mockups/MapLocationEdit.jpg';
import mapPin from '../../../../static/images/mockups/MapPin.jpg';
import mapSearch from '../../../../static/images/mockups/MapSearch.jpg';
import mapSearch1 from '../../../../static/images/mockups/MapSearch1.jpg';
import mapMobile1 from '../../../../static/images/mockups/MapMobile1.jpg';
import mapMobile2 from '../../../../static/images/mockups/MapMobile2.jpg';
import mapMobile3 from '../../../../static/images/mockups/MapMobile3.jpg';
import mapMobile4 from '../../../../static/images/mockups/MapMobile4.jpg';
import mapMobile5 from '../../../../static/images/mockups/MapMobile5.jpg';
import mapMobile6 from '../../../../static/images/mockups/MapMobile6.jpg';
import mapMobile7 from '../../../../static/images/mockups/MapMobile7.jpg';

function Mockups() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Design System Mockups</h1>
      <p className="lead-in">
        The following are mockups of the Utah Design System. These mockups are subject to change as the design system standards and guidelines
        are completed. A link to components, patterns, templates, and other guidelines will be provided near each mockup as they are completed.
      </p>
      <hr />

      <h2 id="section-utah-header">Utah.gov Header</h2>
      <p>
        The header being used on this site is the official Utah.gov Header. The header is required on all websites.
        For more information visit the Utah.gov Header page.
      </p>
      <div className="flex justify-center mb-spacing">
        <LightBox image={header} alt="Header" className="flex-4up-gap" />
      </div>
      <div className="flex justify-center mb-spacing">
        <NavLink
          to={pageUrls.utahHeader}
          className="button button--primary-color"
        >
          View Utah.gov Header Page
          <span className="button--icon button--icon-right">{Icons.IconArrowRight()}</span>
        </NavLink>
      </div>

      <h2 id="section-footer">Footer</h2>
      <p>
        The footer has 3 parts: The social bar, the main footer, and the Official Website bar.
        You have a great deal of flexibility what the main footer contains and looks like.
      </p>
      <div className="flex gap mb-spacing justify-center">
        <LightBox image={footer} alt="Footer" className="flex-4up-gap" />
      </div>

      <h2 id="section-full-page">Full Page Mockups</h2>
      <p>
        These represent full page mockup ideas. These are not an exhaustive list of ideas, other page layouts will be required to suit
        your web page individual needs.
      </p>
      <div className="flex gap mb-spacing">
        <LightBox image={fullPageMockup1} alt="Full Page Mockup 1" className="flex-4up-gap" />
        <LightBox image={fullPageMockup2} alt="Full Page Mockup 2" className="flex-4up-gap" />
        <LightBox image={fullPageMockup3} alt="Full Page Mockup 3" className="flex-4up-gap" />
        <LightBox image={fullPageMockup4} alt="Full Page Mockup 4" className="flex-4up-gap" />
      </div>

      <h2 id="section-form-inputs">Form Inputs Mockups</h2>
      <p>
        These represent general mockups for forms and inputs.
      </p>
      <div className="flex flex-wrap gap mb-spacing">
        <LightBox image={formInputs01} alt="Form Inputs 1" className="flex-4up-gap" />
        <LightBox image={formInputs02} alt="Form Inputs 2" className="flex-4up-gap" />
        <LightBox image={formInputs03} alt="Form Inputs 3" className="flex-4up-gap" />
        <LightBox image={formInputs04} alt="Form Inputs 4" className="flex-4up-gap" />
        <LightBox image={formInputs05} alt="Form Inputs 5" className="flex-4up-gap" />
        <LightBox image={formInputs06} alt="Form Inputs 6" className="flex-4up-gap" />
        <LightBox image={formInputs07} alt="Form Inputs 7" className="flex-4up-gap" />
      </div>
      <div className="flex justify-center mb-spacing">
        <NavLink
          to={pageUrls.switch}
          className="button button--primary-color"
        >
          Switch Input
          <span className="button--icon button--icon-right">{Icons.IconArrowRight()}</span>
        </NavLink>
      </div>

      <h2 id="section-buttons">Buttons and Icon Buttons</h2>
      <p>
        Buttons and Icon Buttons are complete. Visit these component pages for more information:
      </p>
      <div className="flex flex-wrap gap justify-center mb-spacing">
        <NavLink
          to={pageUrls.button}
          className="button button--primary-color"
        >
          Buttons
          <span className="button--icon button--icon-right">{Icons.IconArrowRight()}</span>
        </NavLink>
        <NavLink
          to={pageUrls.iconButton}
          className="button button--primary-color"
        >
          Icon Buttons
          <span className="button--icon button--icon-right">{Icons.IconArrowRight()}</span>
        </NavLink>
      </div>

      <h2 id="section-more-buttons">Other Buttons and Tags</h2>
      <p>
        Other types of buttons such as: Segmented Buttons, Toolbars, Action Bars, and Icon Bars, and Tags.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={segmentedButton} alt="Segmented Button" className="flex-4up-gap" />
        <LightBox image={iconBar} alt="Icon Bar / Tool Bar" className="flex-4up-gap" />
        <LightBox image={tags} alt="Tags" className="flex-4up-gap" />
      </div>

      <h2 id="section-cards">Cards and Action Cards</h2>
      <p>
        This is a small representation of cards. You may need other configurations to suit your needs.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={cards1} alt="Cards 1" className="flex-4up-gap" />
        <LightBox image={cards2} alt="Cards 2" className="flex-4up-gap" />
        <LightBox image={cards3} alt="Cards 3" className="flex-4up-gap" />
        <LightBox image={cardsActionCards} alt="Action Cards" className="flex-4up-gap" />
      </div>

      <h2 id="section-navigation">Navigation and Breadcrumbs</h2>
      <p>
        Side panel navigation and breadcrumbs mockups. This site uses the side panel navigation.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={nav1} alt="Navigation 1" className="flex-4up-gap" />
        <LightBox image={nav2} alt="Navigation 2" className="flex-4up-gap" />
        <LightBox image={nav3} alt="Navigation 3" className="flex-4up-gap" />
        <LightBox image={breadcrumb} alt="Breadcrumb" className="flex-4up-gap" />
      </div>

      <h2 id="section-hero">Hero</h2>
      <p>
        Different sizes and configurations for the main hero image on a page.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={heroLarge1} alt="Large Hero Example" className="flex-4up-gap" />
        <LightBox image={heroLarge2} alt="Large Hero Example" className="flex-4up-gap" />
        <LightBox image={heroLarge3} alt="Large Hero Example" className="flex-4up-gap" />
        <LightBox image={heroLarge4} alt="Large Hero Example" className="flex-4up-gap" />
      </div>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={heroMediumPlus1} alt="Medium+ Hero Example" className="flex-4up-gap" />
        <LightBox image={heroMediumPlus2} alt="Medium+ Hero Example" className="flex-4up-gap" />
        <LightBox image={heroMediumPlus3} alt="Medium+ Hero Example" className="flex-4up-gap" />
      </div>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={heroMedium1} alt="Medium Hero Example" className="flex-4up-gap" />
        <LightBox image={heroMedium2} alt="Medium Hero Example" className="flex-4up-gap" />
        <LightBox image={heroMedium3} alt="Medium Hero Example" className="flex-4up-gap" />
      </div>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={heroSmall1} alt="Small Hero Example" className="flex-4up-gap" />
        <LightBox image={heroSmall2} alt="Small Hero Example" className="flex-4up-gap" />
        <LightBox image={heroSmall3} alt="Small Hero Example" className="flex-4up-gap" />
      </div>

      <h2 id="section-menus">Menus</h2>
      <p>
        Popup Menus, Flyout Menus, Dropdown Menus, and Mega Menus.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={menusDropdown} alt="Dropdown Menus" className="flex-4up-gap" />
        <LightBox image={menusPopup} alt="Popup Menus" className="flex-4up-gap" />
      </div>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <NavLink
          to={pageUrls.popups}
          className="button button--primary-color"
        >
          More Information on Popups
          <span className="button--icon button--icon-right">{Icons.IconArrowRight()}</span>
        </NavLink>
        <NavLink
          to={pageUrls.verticalMenu}
          className="button button--primary-color"
        >
          More Information on Vertical Menus
          <span className="button--icon button--icon-right">{Icons.IconArrowRight()}</span>
        </NavLink>
      </div>

      <h2 id="section-popups-tooltips">Popups and Tooltips</h2>
      <p>
        Popups and Tooltips.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={popupPlacement} alt="Popup Placement" className="flex-4up-gap" />
        <LightBox image={popupVariations} alt="Popup Variations" className="flex-4up-gap" />
        <LightBox image={popupEditor} alt="Popup Editor" className="flex-4up-gap" />
        <LightBox image={popupLarge} alt="Popup Large" className="flex-4up-gap" />
        <LightBox image={tooltips} alt="Tooltips" className="flex-4up-gap" />
      </div>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <NavLink
          to={pageUrls.popups}
          className="button button--primary-color"
        >
          More Information on Popups
          <span className="button--icon button--icon-right">{Icons.IconArrowRight()}</span>
        </NavLink>
        <NavLink
          to={pageUrls.verticalMenu}
          className="button button--primary-color"
        >
          More Information on Vertical Menus
          <span className="button--icon button--icon-right">{Icons.IconArrowRight()}</span>
        </NavLink>
      </div>

      <h2 id="section-modals">Modals</h2>
      <p>
        Modals and dialogs.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={modal1} alt="Modal 1" className="flex-4up-gap" />
        <LightBox image={modal2} alt="Modal 2" className="flex-4up-gap" />
        <LightBox image={modal3} alt="Modal 3" className="flex-4up-gap" />
      </div>

      <h2 id="section-banners">Banners and Notifications</h2>
      <p>
        Banners and notifications.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={banner1} alt="Banner 1" className="flex-4up-gap" />
        <LightBox image={banner2} alt="Banner 2" className="flex-4up-gap" />
        <LightBox image={banner3} alt="Banner 3" className="flex-4up-gap" />
      </div>

      <h2 id="section-banners">Accordions</h2>
      <p>
        Accordions show and hide information. Here is an example of one way an accordion could be displayed.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={accordion} alt="Accordion" className="flex-4up-gap" />
      </div>

      <h2 id="section-elevation">Elevation</h2>
      <p>
        Elevation. The perceived distance an element (such as a banner, modal, or popup) floats above the viewport.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={elevation} alt="Elevation" className="flex-4up-gap" />
      </div>

      <h2 id="section-tables">Tables</h2>
      <p>
        Tables. Used for tabular data. Never used for layout.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={tables} alt="Tables" className="flex-4up-gap" />
      </div>

      <h2 id="section-pagination">Pagination</h2>
      <p>
        Pagination: a sequence of numbers representing pages or views.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={pagination} alt="Pagination" className="flex-4up-gap" />
      </div>

      <h2 id="section-tabs">Tabs</h2>
      <p>
        Tabs: clicking the tab reveals different views under the tab.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={tabs} alt="Tabs" className="flex-4up-gap" />
      </div>

      <h2 id="section-process-list">Process Lists and Step Indicators</h2>
      <p>
        A way to show multiple steps or the order in a process.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={processList} alt="Process Lists" className="flex-4up-gap" />
        <LightBox image={stepIndicator} alt="Step Indicators" className="flex-4up-gap" />
      </div>

      <h2 id="section-side-panel">Side Panels or Drawers</h2>
      <p>
        A view that slides in from the left or right. It can hover over the content, be modal, or push the content.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={sidePanelClosed} alt="Side Panel Closed" className="flex-4up-gap" />
        <LightBox image={sidePanelFloating} alt="Side Panel Floating" className="flex-4up-gap" />
        <LightBox image={sidePanelModal} alt="Side Panel Modal" className="flex-4up-gap" />
        <LightBox image={sidePanelPush} alt="Side Panel Pushing Content" className="flex-4up-gap" />
      </div>

      <h2 id="section-progress-bars">Progress Bars</h2>
      <p>
        Progress bars show the status of an event or an extended operation.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={progressBarSizes} alt="Progress Bar Sizes" className="flex-4up-gap" />
        <LightBox image={progressBarLabels} alt="Progress Bar Labels" className="flex-4up-gap" />
        <LightBox image={progressBarVariations} alt="Progress Bar Variations" className="flex-4up-gap" />
      </div>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={progressBarMobile} alt="Progress Bar Mobile" className="flex-4up-gap" />
        <LightBox image={progressBarMobileLoadingContentArea} alt="Progress Bar Mobile Loading Content Area" className="flex-4up-gap" />
      </div>

      <h2 id="section-spinners">Spinners and Skeletons</h2>
      <p>
        Spinners and skeletons can be used to indicate content is being loaded asynchronously.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={spinner} alt="Spinners" className="flex-4up-gap" />
        <LightBox image={skeleton} alt="Skeletons" className="flex-4up-gap" />
        <LightBox image={skeleton2} alt="Skeleton Full Page" className="flex-4up-gap" />
        <LightBox image={skeleton3} alt="Skeleton Lazy Load" className="flex-4up-gap" />
        <LightBox image={skeleton4} alt="Skeleton Table" className="flex-4up-gap" />
      </div>

      <h2 id="section-hr">Horizontal Rules</h2>
      <p>
        Horizontal rules help divide or provide a visual break in the content.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={horizontalRule} alt="Horizontal Rule" className="flex-4up-gap" />
        <LightBox image={horizontalRuleNeutralColor} alt="Horizontal Rule Neutral Color" className="flex-4up-gap" />
        <LightBox image={horizontalRulePrimaryColor} alt="Horizontal Rule Primary Color" className="flex-4up-gap" />
      </div>

      <h2 id="section-status-badges">Badges and Status Indicators</h2>
      <p>
        Badges and status indicator provide a quite status reference or notification of user message or action.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={badges} alt="Badges" className="flex-4up-gap" />
        <LightBox image={statusIndicator} alt="Status Indicator" className="flex-4up-gap" />
      </div>

      <h2 id="section-status-text">Text, Headings, Links</h2>
      <p>
        General ideas for text formatting, headings, block quotes, call outs, and links .
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={blockquote1} alt="Blockquote Option 1" className="flex-4up-gap" />
        <LightBox image={blockquote2} alt="Blockquote Option 2" className="flex-4up-gap" />
        <LightBox image={callOuts} alt="Call Outs" className="flex-4up-gap" />
        <LightBox image={links} alt="Links" className="flex-4up-gap" />
        <LightBox image={headlines} alt="Headings" className="flex-4up-gap" />
        <LightBox image={leadInText} alt="Lead In Text" className="flex-4up-gap" />
        <LightBox image={textStyling} alt="Text Styling" className="flex-4up-gap" />
        <LightBox image={list} alt="Lists" className="flex-4up-gap" />
      </div>

      <h2 id="section-status-skip-link">Skip Link</h2>
      <p>
        An accessible link for skipping past the header to the content.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={skipLink} alt="Skip Link" className="flex-4up-gap" />
      </div>

      <h2 id="section-maps">Maps</h2>
      <p>
        Components used for map views examples.
      </p>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={map} alt="Map Components" className="flex-4up-gap" />
        <LightBox image={mapLocationDetails} alt="Map Location Details" className="flex-4up-gap" />
        <LightBox image={mapLocationEdit} alt="Map Location Edit" className="flex-4up-gap" />
        <LightBox image={mapPin} alt="Map Pin" className="flex-4up-gap" />
        <LightBox image={mapSearch} alt="Map Search 1" className="flex-4up-gap" />
        <LightBox image={mapSearch1} alt="Map Search 2" className="flex-4up-gap" />
      </div>
      <div className="flex flex-wrap gap mb-spacing justify-center">
        <LightBox image={mapMobile1} alt="Map Mobile 1" className="flex-4up-gap" />
        <LightBox image={mapMobile2} alt="Map Mobile 2" className="flex-4up-gap" />
        <LightBox image={mapMobile3} alt="Map Mobile 3" className="flex-4up-gap" />
        <LightBox image={mapMobile4} alt="Map Mobile 4" className="flex-4up-gap" />
        <LightBox image={mapMobile5} alt="Map Mobile 5" className="flex-4up-gap" />
        <LightBox image={mapMobile6} alt="Map Mobile 6" className="flex-4up-gap" />
        <LightBox image={mapMobile7} alt="Map Mobile 7" className="flex-4up-gap" />
      </div>
    </div>
  );
}

export default Mockups;
