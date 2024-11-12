/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@utahdts/utah-design-system';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import delicateArch from '../../../../../../../static/images/delicate-arch-tom-gainor-unsplash.webp';
import nightPark from '../../../../../../../static/images/brad-switzer-park-unsplash.webp';
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';
import { CardCssClassesDocumentation } from './CardCssClassesDocumentation';

export function CardDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Card</h1>
      <p className="lead-in">
        A card component is a container element that houses a number of html elements. It has a singular topic on which the subject matter relates and expounds.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>

      <StaticExample
        title="Basic Cards"
        renderedExample={(
          <div className="flex gap">
            <div className="card p-spacing-xl" style={{ width: '66%' }}>
              <div className="card__title">Title</div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt
                explicabo voluptatem accusantium doloremque.
              </p>
              <div className="flex justify-end">
                <button type="button" className="button">Contact Us</button>
                <button type="button" className="button button--solid ml-spacing">
                  <span>See More</span>
                  <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
                </button>
              </div>
            </div>
            <div
              className="card card--solid primary-color-background text-on-primary-color flex flex-col items-center p-spacing-xl justify-between"
              style={{ width: '33%' }}
            >
              <span className="utds-icon-before-gear card__icon" aria-hidden="true" />
              <div className="card__title mb-spacing">A to Z</div>
              <div className="card__text mb-spacing-l">Find what you need here.</div>
              <button type="button" className="button--primary-color">Go</button>
            </div>
          </div>
        )}
        quickTips={(
          <ul>
            <li>Cards are rectangles that house other smaller elements on a page and are recognized as a single unit of information.</li>
            <li>The basic components contained in a card are: a title, and may include a call to action in the form of a button or a link.</li>
            <li>Titles can be in all capital letters, but this should be accomplished using CSS and never hard coded.</li>
            <li>A sub-title, and/or paragraph text can be added to give context or additional bits of information. </li>
            <li><Link to={pageUrls.button}>Buttons</Link> and <Link to={pageUrls.links}>links</Link> can sit under the text or to the right of the title. </li>
            <li>Cards can have a variety of styles and layouts. No matter the style or layout, just make sure to consider the purpose and keep it consistent.</li>
          </ul>
        )}
      />
      <PreCodeForCodeString
        className="gray-block mt-spacing"
        codeRaw={`
          <div class="card p-spacing-xl">
            <div class="card__title">Title</div>
            <p>Sed ut perspiciatis unde omnis iste natus error.</p>
            <div class="flex justify-end">
              <button type="button" class="button">Contact Us</button>
              <button 
                type="button" 
                class="button button--solid ml-spacing"
              >
                <span>See More</span>
                <span class="button--icon button--icon-right">
                  <span
                    class="utds-icon-before-arrow-right"
                    aria-hidden="true"
                  ></span>
                </span>
              </button>
            </div>
          </div>
        `}
      />

      <StaticExample
        title="Action Cards"
        renderedExample={(
          <div className="flex flex-col gap">
            <Link
              to={pageUrls.gettingStarted}
              className="action-card action-card--primary-color action-card--solid"
            >
              <div className="action-card__title">
                <h3>Getting Started</h3>
                <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
              </div>
              <div className="action-card__body">
                Learn how to implement the Design System.
              </div>
            </Link>
            <Link
              to={pageUrls.utahHeader}
              className="action-card action-card--primary-color white-color-background"
            >
              <div className="action-card__title">
                <h3>Utah Header and Footer</h3>
                <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
              </div>
              <div className="action-card__body">
                Start using the official header and footer.
              </div>
            </Link>
          </div>
        )}
        quickTips={(
          <ul>
            <li>
              Action cards share the same design elements as basic cards but also provide the following:
              <ul>
                <li>The entire card is actionable and, when clicked, will take the user to the intended destination. This is ideal for cards with very little content.</li>
              </ul>
            </li>
          </ul>
        )}
      />
      <PreCodeForCodeString
        className="gray-block mt-spacing"
        codeRaw={`
          <a 
            class="action-card action-card--primary-color action-card--solid" 
            href="/gettingStarted"
          >
            <div class="action-card__title">
                <h3>Getting Started</h3>
                <span class="button--icon button--icon-right">
                  <span
                    class="utds-icon-before-arrow-right" 
                    aria-hidden="true">
                  </span>
                </span>
            </div>
            <div class="action-card__body">
                Learn how to implement the Design System.
            </div>
          </a>
        `}
      />

      <StaticExample
        title="Vertical Cards"
        renderedExample={(
          <div className="flex flex-col gap items-center">
            <div className="card">
              <img src={delicateArch} alt="Delicate Arch" className="card__image" />
              <div className=" p-spacing-xl">
                <div className="card__title">The Mighty 5</div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo voluptatem accusantium doloremque.
                </p>
                <div className="flex justify-end">
                  <button type="button" className="button">Contact Us</button>
                  <button type="button" className="button button--solid ml-spacing">
                    <span>See More</span>
                    <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card gray-color-background white-color">
              <div>
                <img src={nightPark} alt="Delicate Arch" className="card__image" />
              </div>
              <div className=" p-spacing-xl">
                <div className="card__title">Dark Sky Parks in Utah</div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo voluptatem accusantium doloremque.
                </p>
                <div className="flex justify-end">
                  <button type="button" className="button">Contact Us</button>
                  <button type="button" className="button ml-spacing">
                    <span>See More</span>
                    <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex items-center flex-col">
              <div className="card__title p-spacing-l">Dark Sky Parks in Utah</div>
              <div
                className="flex flex-col items-center full-width justify-end"
                style={{
                  backgroundImage: `url(${nightPark})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 225,
                }}
              >
                <button type="button" className="button mb-spacing-xl">
                  <span>See More</span>
                  <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
                </button>
              </div>
            </div>
          </div>
        )}
        quickTips={(
          <ul>
            <li>
              Vertical cards share the same design elements as basic cards but also provide the following:
              <ul>
                <li>Vertical cards are stacked vertically with either a media image or an icon in addition to the basic card components.</li>
                <li>It is recommended that <Link to={pageUrls.button}>buttons</Link> and <Link to={pageUrls.links}>links</Link> sit under the text to provide an easy reading experience for the user.</li>
              </ul>
            </li>
          </ul>
        )}
      />
      <PreCodeForCodeString
        className="gray-block mt-spacing"
        codeRaw={`
          <div class="card">
            <img src="/my-image.png" alt="My image" class="card__image" />
            <div class="p-spacing-xl">
              <div class="card__title">Title</div>
              <p>Sed ut perspiciatis unde omnis iste natus.</p>
              <div class="flex justify-end">
                <button type="button" class="button">Contact Us</button>
                <button type="button" class="button button--solid ml-spacing">
                  <span>See More</span>
                  <span class="button--icon button--icon-right">
                    <span
                      class="utds-icon-before-arrow-right"
                      aria-hidden="true"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        `}
      />

      <StaticExample
        title="Horizontal Cards"
        renderedExample={(
          <div className="card card--horizontal">
            <img src={nightPark} alt="Delicate Arch" className="card__image" />
            <div className=" p-spacing-xl">
              <div className="card__title">Dark Sky Parks in Utah</div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt
                explicabo voluptatem accusantium doloremque.
              </p>
              <div className="flex justify-end">
                <button type="button" className="button">Contact Us</button>
                <button type="button" className="button ml-spacing">
                  <span>See More</span>
                  <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
                </button>
              </div>
            </div>
          </div>
        )}
        quickTips={(
          <ul>
            <li>
              Horizontal cards share the same design elements as basic cards but also provide the following:
              <ul>
                <li>Horizontal card components have the media or icon images sit next to the basic card components.</li>
                <li>It is recommended that <Link to={pageUrls.button}>buttons</Link> and <Link to={pageUrls.links}>links</Link> sit under the text to provide an easy reading experience for the user.</li>
              </ul>
            </li>
          </ul>
        )}
      />
      <PreCodeForCodeString
        className="gray-block mt-spacing"
        codeRaw={`
        <div class="card card--horizontal">
          <img src="/my-image.png" alt="My image" class="card__image" />
          <div class="p-spacing-xl">
            <div class="card__title">Title</div>
            <p>Sed ut perspiciatis unde omnis iste natus error.</p>
            <div class="flex justify-end">
              <button type="button" class="button">Contact Us</button>
              <button type="button" class="button ml-spacing">
                <span>See More</span>
                <span class="button--icon button--icon-right">
                  <span
                    class="utds-icon-before-arrow-right"
                    aria-hidden="true"></span>
                  </span>
              </button>
            </div>
          </div>
        </div>
        `}
      />

      <p>Please see <Link to={pageUrls.button}>buttons</Link>, <Link to={pageUrls.iconButton}>icon buttons</Link>, or <Link to={pageUrls.links}>links</Link> for reference.</p>

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Preview of a single idea or purpose.</strong> Cards act as an entry point to more information.
        </li>
        <li>
          <strong>Call to action.</strong> Cards should give the user the option to get more information related to the topic of the card and take the user to the content.
        </li>
        <li>
          <strong>Images and icons.</strong> Vertical and horizontal cards help add context at a glance. They can also help break up the monotony of text.
        </li>
        <li>
          <strong>Sequential information.</strong> If the information contained in the group of cards is sequential in nature, and is meant to be read in order, consider using a <Link to={pageUrls.lists}>list</Link> element wrapped around the cards.
        </li>
      </ul>

      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Quantity of data.</strong> If you have tabular data consider using <Link to={pageUrls.table}>tables</Link>. </li>
        <li><strong>Standalone content.</strong> Cards are used in groups, with the section of cards having one related theme. If you have stand alone content consider creating a single page or a similar standalone component.</li>
        <li><strong>Call to action overload.</strong> Consider limiting the number of cards that require the user to make a decision or perform an action. Too many calls to action can cause extra cognitive complexity and confusion.</li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Collection of ideas.</strong> Cards are usually used in a collection that supports an overarching idea or theme.
        </li>
        <li>
          <strong>Easily digestible information.</strong> Content should be laid out with a clear visual hierarchy. Each card should be easy
          to understand, summarize the information, and may include a call to action. Call to action cards should include a <Link to={pageUrls.button}>button</Link> or <Link to={pageUrls.links}>link</Link> that
          takes the user to the intended destination.
        </li>
        <li>
          <strong>Consistency.</strong> Ensure that the card component follows a consistent structure throughout the site. This includes consistent imagery,
          typography, color, and layout.
        </li>
        <li>
          <strong>Scalability.</strong> Ensure that the groups of cards and card components can be easily scaled and adapted to fit the
          needs of different browsers and devices.
        </li>
        <li>
          <strong>Reusability.</strong> The card component should be designed with reusability in mind. This means that it should be easily
          adaptable and reusable across different pages.
        </li>
        <li>
          <strong>Non-redundant content.</strong> Don&apos;t repeat images or content common to all or most cards in a collection. This increases
          the cognitive load for the user and makes it difficult to distinguish the unique content of the card.
        </li>
        <li>
          <strong>Image sizing and performance.</strong> Consider optimizing image sizes as this can affect performance. Cards often change size depending on the device.
        </li>
        <li>
          <strong>Order content semantically.</strong> If the card has an image that needs to be announced by a screen reader, place the title first and the
          media element second. This way the screen reader announces the title of the card first.
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>The card border should maintain a <code>3:1</code> contrast ratio to the background.</li>
        <li>Text within the card should maintain a <code>4.5:1</code> contrast ratio to the card background.</li>
        <li>Be careful about placing a button or text over an image! Ensure that the required contrast ratio is met. This can be very difficult since images have a variety of light and dark areas.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>The tab key should take the user through the elements of the card.</li>
        <li>Make sure that users can clearly see where the focus is when navigating with a keyboard or assistive technology by providing clear focus styles.</li>
        <li>
          Action cards
          <ul>
            <li>Wrap the entire action card in a <code>&lt;button&gt;</code>, or use the <code>role=&quot;button&quot;</code>.</li>
            <li>Use <code>tabindex=&quot;0&quot;</code> if you are not using a <code>&lt;button&gt;</code>.</li>
            <li>The <code>enter</code> or <code>return</code> keys should take the user to the corresponding page.</li>
          </ul>
        </li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>Use unordered lists <code>&lt;ul&gt;</code> for a group of cards and list items <code>&lt;li&gt;</code> for each card. This enables screen readers to catalog the list of items within the card group.</li>
        <li>Use appropriate HTML tags such as <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;button&gt;</code>, and <code>&lt;a&gt;</code> for the card content.</li>
      </ul>
      <p>For accessibility guidelines on <Link to={pageUrls.button}>buttons</Link> and <Link to={pageUrls.links}>links</Link> please refer to the documentation.</p>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="card-props-css">
          <TabList>
            <Tab id="card-props-css">CSS</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="card-props-css">
              <CardCssClassesDocumentation />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
