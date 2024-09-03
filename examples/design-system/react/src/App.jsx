import { useEffect } from 'react';
import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import { Accordion } from '@utahdts/utah-design-system';
import '@utahdts/utah-design-system-header/src/css/index.scss';
import '@utahdts/utah-design-system/css/index.scss';
import './App.css'

export function App() {
  useEffect(() => {
    setUtahHeaderSettings({
      title: 'My utah.gov Site',
      domLocationTarget: {
        element: document.getElementById('utah-header-target'),
      },
      footer: {
        domLocationTarget: {
          element: document.getElementById('footer-target'),
        }
      },
      mainMenu: {
        menuItems: [
          {
            actionUrl: {
              url: '/'
            },
            title: 'Home'
          },
          {
            actionUrl: {
              url: 'https://designsystem.utah.gov',
              openInNewTab: true,
            },
            title: 'Utah Design System',
          },
          {
            actionMenu: [
              {
                actionUrl: {
                  url: 'https://designsystem.utah.gov/library/utahHeader',
                  openInNewTab: true,
                },
                title: 'Utah Header',
              },
              {
                actionUrl: {
                  url: 'https://designsystem.utah.gov/library/utahFooter',
                  openInNewTab: true,
                },
                title: 'Utah Footer',
              }
            ],
            title: 'Learn More',
          }
        ],
        title: 'Menu'
      }
    });
  }, []);
  return (
    <>
      <div id="utah-header-target" />
      <main id="main-content" className="px-spacing">
        <h1 className="text-center my-spacing-l">React + Vite</h1>
        <p className="text-center">
          The header and footer are configured immediately after the initial render.<br/>
          Check the <code>App.jsx</code> file for the full code.<br/>
          Find more information on
          the <a href="https://designsystem.utah.gov" target="_blank">
          Utah Design System Website
          <span className="utds-new-tab-link-a11y">
              <span className="visually-hidden">, opens in a new tab</span>
              <span className="utds-icon-after-external-link" aria-hidden="true"></span>
            </span>
        </a>.
        </p>
        <h2 className="text-center my-spacing">CSS</h2>
        <p className="text-center">
          The CSS imported from <code>'./App.css'</code>.<br />
          The design system colors are overridden.<br />
          Find more information on
          the <a href="https://designsystem.utah.gov/resources/gettingStartedDeveloper#h3-css-color-overrides" target="_blank">
            Getting Started for Developers Page
            <span className="utds-new-tab-link-a11y">
                <span className="visually-hidden">, opens in a new tab</span>
                <span className="utds-icon-after-external-link" aria-hidden="true"></span>
              </span>
          </a>
        </p>
        <h2 className="text-center my-spacing">Learn More</h2>
        <div className="flex gap justify-center mb-spacing-xl">
          <a
            className="action-card action-card--primary-color action-card--solid"
            href="https://designsystem.utah.gov/library/utahHeader"
            target="_blank"
          >
            <div className="action-card__title">
              <h3>Utah Header</h3>
              <span className="button--icon button--icon-right">
                <span
                  className="utds-icon-before-arrow-right"
                  aria-hidden="true">
                </span>
              </span>
            </div>
            <div className="action-card__body">
              Learn how to implement the Utah Header.
            </div>
          </a>
          <a
            className="action-card action-card--secondary-color"
            href="https://designsystem.utah.gov/library/utahFooter"
            target="_blank"
          >
            <div className="action-card__title">
              <h3>Utah Footer</h3>
              <span className="button--icon button--icon-right">
                <span
                  className="utds-icon-before-arrow-right"
                  aria-hidden="true">
                </span>
              </span>
            </div>
            <div className="action-card__body">
              Learn how to implement the Utah Footer.
            </div>
          </a>
        </div>
        <div className="px-spacing-xl">
          <Accordion
            headerClassName="button--solid"
            headerContent={<span>Accordion</span>}
            headingLevel={2}
            id="accordion"
            isOpen={true}
          >
            <p>
              This component has been imported form the Utah Design System:<br/>
              <code>import &#123; Accordion &#125; from '@utahdts/utah-design-system';</code><br/>
            </p>
            <span>
              Find more information on
              the <a href="https://designsystem.utah.gov/library/components/containers/accordion" target="_blank">
                Accordion Page
                <span className="utds-new-tab-link-a11y">
                  <span className="visually-hidden">, opens in a new tab</span>
                  <span className="utds-icon-after-external-link" aria-hidden="true"></span>
                </span>
              </a>.
            </span>
          </Accordion>
        </div>
      </main>
      <footer id="footer-target" aria-label="page" className="mt-spacing-xl" />
    </>
  )
}
