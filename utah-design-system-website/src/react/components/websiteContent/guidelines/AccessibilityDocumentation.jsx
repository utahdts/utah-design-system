/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  Button,
  ExternalLink,
  Icons,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import PreCodeForCodeString from '../../preCode/PreCodeForCodeString';
import pageUrls from '../../routing/pageUrls';
import LightBox from '../../lightbox/LightBox';
import StaticExample from '../../staticExamples/StaticExample';
import goodAltAudio from '../../../../static/audio/GoodAlt.mp3';
import badAltAudio from '../../../../static/audio/BadAlt.mp3';
import goodTextOverImg from '../../../../static/images/screenshots/examples/GoodTextOverImage.png';
import badTextOverImg from '../../../../static/images/screenshots/examples/BadTextOverImage.png';
import goodColorRepImg from '../../../../static/images/screenshots/examples/GoodColorRepresentation.png';
import badColorRepImg from '../../../../static/images/screenshots/examples/BadColorRepresentation.png';
import captionsImg from '../../../../static/images/screenshots/examples/Captions.jpg';
import formFlowHorizontal from '../../../../static/images/screenshots/components/form-elements/formFlowHorizontal.jpg';
import formFlowVertical from '../../../../static/images/screenshots/components/form-elements/formFlowVertical.jpg';
import boatImage from '../../../../static/images/screenshots/examples/JordanelleBoat.jpg';
import accessibilityZoomGood from '../../../../static/images/accessibility-zoom-good.png';
import accessibilityZoomBad from '../../../../static/images/accessibility-zoom-bad.png';
import useAppContext from '../../../context/AppContext/useAppContext';

const propTypes = {};
const defaultProps = {};

function AccessibilityDocumentation() {
  const goodAltAudioVtt = new URL('../../../../static/audio/vtt/GoodAlt.vtt', import.meta.url).href;
  const badAltAudioVtt = new URL('../../../../static/audio/vtt/BadAlt.vtt', import.meta.url).href;

  const { appState: { isColorPickerShown }, setAppState } = useAppContext();

  function toggleColorPickerPopup(e) {
    e.preventDefault();
    e.stopPropagation();
    setAppState((draftAppState) => { draftAppState.isColorPickerShown = !isColorPickerShown; });
  }
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Accessibility Overview</h1>
      <p className="lead-in">
        One of the top goals at the State of Utah is to make websites and applications, across our many different agencies accessible for
        all people including those with varying impairments. By prioritizing accessibility, we demonstrate our commitment to those we serve
        by fostering a sense of inclusivity, and ultimately enhance the user experience for everyone.
      </p>
      <p className="mb-auto">
        Per the CDC, roughly <ExternalLink href="https://dhds.cdc.gov/SP?LocationId=49&CategoryId=DISEST&ShowFootnotes=true&showMode=&IndicatorIds=STATTYPE,AGEIND,SEXIND,RACEIND,VETIND&pnl0=Table,false,YR6,CAT1,BO1,,,,AGEADJPREV&pnl1=Chart,false,YR6,DISSTAT,,,,,PREV&pnl2=Chart,false,YR6,DISSTAT,,,,,AGEADJPREV&pnl3=Chart,false,YR6,DISSTAT,,,,,AGEADJPREV&pnl4=Chart,false,YR6,DISSTAT,,,,,AGEADJPREV">1 in 4 adults have some form of a disability</ExternalLink> in
        Utah. In the effort to expand accessibility access, we hope to reach those with the following disabilities:
      </p>
      <ul className="mb-spacing">
        <li>Limited or no vision</li>
        <li>Motor functionality</li>
        <li>Limited or no auditory perception</li>
        <li>Cognitive abilities</li>
      </ul>

      <p>
        The State of Utah Design System will provide accessible components as well as guidance for each component in our <Link to={pageUrls.library}>Library</Link>. The components
        are vetted using WCAG standards and the U.S. Design System.
      </p>

      <p className="mb-auto">Each component in the Utah Design System library has an accessibility section where detailed information can be found about:</p>
      <ul className="mb-spacing">
        <li>Contrast</li>
        <li>Keyboard interaction</li>
        <li>Screen readers</li>
        <li>Motion (where applicable)</li>
      </ul>
      <p>Please follow the general guidelines below and the guidance given for each library component.</p>
      <hr />

      <h2 id="section-areas-to-consider" className="mb-spacing">Areas to Consider</h2>
      <h3 id="section-limited-vision">Limited or No Vision</h3>
      <p>
        Keep in mind that people have varying levels of vision capability or may have issues with sensory overload. To account for these users
        we focus on color contrast and sizing. Both of these areas will help the user see the text and components on your site more clearly.
      </p>

      <h4 id="section-limited-vision-general-guidelines">General vision guidelines</h4>
      <ul className="mb-spacing">
        <li>
          <strong>General text.</strong> The majority of text should be a minimum of <code>16px</code> (<code>1rem</code>).
          All normal size text must maintain a minimum contrast ratio of <code>4.5:1</code>.
        </li>
        <li>
          <strong>Images and Icons.</strong>
          <ul>
            <li><strong>Contrast ratio.</strong> Icons and other graphical objects that contribute meaningful content or interaction require a contrast ratio of <code>4.5:1</code></li>
            <li><strong>Contrast ratio.</strong> Graphical objects that do not provide meaning nor interaction have no contrast requirements.</li>
            <li>
              <p>
                <strong>Alternative text.</strong> All images and icons that contribute to the content require meaningful alternative text. This can be achieved primarily by adding
                the <code>alt</code> property to the image. For non-semantic <Link to={pageUrls.images}>images</Link> or <Link to={pageUrls.icons}>icons</Link> you
                can also achieve this by applying an <code>aria-label</code> or <code>title</code> to the element.
                Using the <code>title</code> attribute has the drawback of the browser generating a tooltip when the user hovers over the element.
              </p>
              <p>
                Avoid using redundant alt text such as &quot;an image of a boat at Jordanelle State Park&quot;. A screen reader will announce the presence of an image
                for the user. Instead use something like &quot;a boat at Jordanelle State Park&quot; to correctly describe the image.
                Below are a good and bad example you can test with your screen reader.
              </p>
              <div className="flex gap justify-center mb-spacing flex-wrap">
                <div className="flex flex-col">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img src={boatImage} alt="an image of a boat at Jordanelle State Park" className="flex-3up-gap m-auto" style={{ width: '50%', minWidth: '0' }} />
                  <figure className="m-auto">
                    <figcaption>Poor alternative text: </figcaption>
                    <audio controls>
                      <source src={badAltAudio} type="audio/mpeg" />
                      <track
                        default
                        kind="captions"
                        srcLang="en"
                        src={badAltAudioVtt}
                      />
                    </audio>
                  </figure>
                </div>
                <div className="flex flex-col">
                  <img src={boatImage} alt="a boat at Jordanelle State Park" className="flex-3up-gap m-auto" style={{ width: '50%', minWidth: '0' }} />
                  <figure className="m-auto">
                    <figcaption>Best alternative text: </figcaption>
                    <audio controls>
                      <source src={goodAltAudio} type="audio/mpeg" />
                      <track
                        default
                        kind="captions"
                        srcLang="en"
                        src={goodAltAudioVtt}
                      />
                    </audio>
                  </figure>
                </div>
              </div>
              <div>Code examples:</div>
              <PreCodeForCodeString
                showBackgroundColor
                codeRaw={`
                  <img src="/goblins-lair-image.png" alt="The Goblin's Lair at Goblin Valley State Park" />
                `}
                className="mt-spacing"
              />
              <PreCodeForCodeString
                showBackgroundColor
                codeRaw={`
                  <div class="my-background-image" role="image" aria-label="Delicate Arch"></div>
                `}
              />
              <PreCodeForCodeString
                showBackgroundColor
                codeRaw={`
                  <span class="utds-icon-before-help" role="img" title="help"></span>
                `}
              />
              <p className="mb-auto">See more detailed information on <Link to={pageUrls.images}>images</Link> and <Link to={pageUrls.icons}>icons</Link>.</p>
            </li>
          </ul>
        </li>
        <li>
          <strong>Component containers.</strong> The borders or boundaries of interactive elements require a contrast ratio of <code>3:1</code>.
          When a component aids in the layout and/or functionality the contrast ratio must be met so,
          that users may identify these components and interact with them as required.
        </li>
        <li>
          <strong>Color representation.</strong> Avoid using colors to represent important information, such as red to
          mean &quot;danger&quot; or &quot;warning&quot;. Individuals that are challenged by red-green or other forms of color blindness will need additional indicators
          such as <Link to={pageUrls.typography}>text</Link> or <Link to={pageUrls.icons}>icons</Link> to convey the correct meaning.
          <StaticExample
            renderedExample={(
              <>
                <LightBox image={goodColorRepImg} alt="Best use of color and icon" className="flex-2up-gap" />
                <LightBox image={badColorRepImg} alt="Avoid relying on color alone" className="flex-2up-gap" />
              </>
            )}
            className="mb-auto mt-spacing-s"
          />
        </li>
        <li>
          <strong>Assistive technology.</strong> Many components in the Utah Design System require additional <abbr>ARIA</abbr> (Accessible Rich Internet Applications)
          attributes and testing to ensure they are usable by those using assistive technology, such as screen readers and braille reader devices. ARIA involves
          a range of <code>roles</code> and <code>attributes</code> designed to enhance web content and web applications, with a specific focus on improving accessibility
          for individuals with disabilities.
        </li>
        <li>
          <strong>Browser Zooming.</strong> Flexible layouts preserve the integrity of the site layout when utilizing the browser&apos;s zoom feature. Flexible layout models
          such as Flexbox, CSS Grid, relative widths (<code>%</code>, and <code>vw</code>), and media queries dynamically adjust the content and design of web pages based on
          the zoom level preserving the visual hierarchy, ensuring optimal readability, and optimizing image and media sizes. These layouts also prevent content clipping, and
          support different devices and orientations. By adapting to various zoom levels, flexible layouts enable users to maintain a comfortable viewing experience,
          regardless of their visual abilities or device preferences.
          <StaticExample
            renderedExample={(
            <>
              <LightBox image={accessibilityZoomGood} alt="Example of good browser zooming" className="flex-2up-gap" />
              <LightBox image={accessibilityZoomBad} alt="Example of bad browser zooming" className="flex-2up-gap" />
            </>
            )}
            className="mb-auto mt-spacing-s"
          />
        </li>
      </ul>

      <h4 id="section-limited-vision-contrast">Contrast requirement</h4>
      <p>
        State agencies are required by statute to &quot;conform at minimum to W3C Web Content Accessibility Guidelines (WCAG) Version 2.1.
        (
        <em>
          <ExternalLink href="https://le.utah.gov/xcode/Title63A/Chapter16/63A-16-S209.html">§63A-16-209</ExternalLink>
          &nbsp;/&nbsp;<ExternalLink href="https://adminrules.utah.gov/public/rule/R895-14/Current%20Rules">R895-14</ExternalLink>.
          Access to Information Technology for Users with Disabilities.
        </em>
        )
      </p>
      <p>
        The WCAG 2.1 consists of three levels of guidance: A, AA, and AAA.
        <strong>
          State agencies are required to meet WCAG 2.1 Level AA guidelines
          and are encouraged to strive to meet Level AAA guidelines whenever feasible
        </strong>.
      </p>
      <p>
        All State of Utah agency websites must provide adequate contrast between text and its background (or an object and its background)
        so that it can be read or identified by people with moderately low vision (who do not use contrast-enhancing assistive technology).
        Contrast values are measured with the foreground color and the background color in a ratio such as: <code>3:1</code>, <code>4.5:1</code>, <code>7:1</code>.
        Contrast requirements vary with the size of the text or object. Larger text/objects require less contrast, whereas smaller text/objects require more contrast.
      </p>
      <p>
        The Utah Design System provides a <a href="#" onClick={toggleColorPickerPopup}>color and contrast tool</a>. The tool can be accessed by clicking the gear icon in the Utah Header at the top.
      </p>

      <h4 id="section-limited-vision-aaa-guidelines" className="mb-spacing">AA and AAA contrast guidelines (definitions)</h4>
      <h5>Normal Text and Bold Text (14px - 18px)</h5>
      <p>General text and images of text. See <Link to={pageUrls.typography}>Typography</Link>.</p>

      <h5>Large Text (19px Bold, 24px+)</h5>
      <p>Large-scale text and images of large-scale text. See <Link to={pageUrls.typography}>Typography</Link>.</p>

      <h5>User Interface Components</h5>
      <p>
        Interface components include but are not limited to <Link to={pageUrls.button}>buttons</Link>, <Link to={pageUrls.card}>cards</Link>, <Link to={pageUrls.popups}>popups</Link>, <Link to={pageUrls.forms}>form elements</Link>,
        etc. This guideline refers to the component&apos;s outer boundary when compared to the background upon which it sits. The component&apos;s different
        states must also be considered. A component&apos;s inactive state is not subject to this guideline.
      </p>

      <h5>Graphical Objects</h5>
      <p>
        Graphical objects refers to a visual depiction of content that is not presented in text form, such as a chart, map, or <Link to={pageUrls.icons}>icons</Link>.
        These objects can provide informational value to the content on the page or give context to an interactive element.
      </p>

      <h5>Incidentals</h5>
      <p>
        <Link to={pageUrls.typography}>Text</Link>, <Link to={pageUrls.images}>images</Link> or graphics that are part of an inactive
        user interface component, or are purely for decoration, have no contrast requirement.
      </p>

      <h4 id="section-limited-vision-contrast">AA and AAA contrast guidelines (requirements)</h4>

      <TableWrapper>
        <Table className="table table--lines-x table--alt mb-spacing-l">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell className="text-left">Content</TableHeadCell>
              <TableHeadCell className="text-left">Pixel Size</TableHeadCell>
              <TableHeadCell className="text-left">REM Size</TableHeadCell>
              <TableHeadCell className="text-left">AA Contrast Ratio</TableHeadCell>
              <TableHeadCell className="text-left">AAA Contrast Ratio</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Normal text, Normal bold text</TableCell>
              <TableCell>14px - 18px</TableCell>
              <TableCell>.875rem - 1.125rem</TableCell>
              <TableCell>4.5:1</TableCell>
              <TableCell>7:1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Large bold text</TableCell>
              <TableCell>19px+</TableCell>
              <TableCell>1.1875rem+</TableCell>
              <TableCell>3:1</TableCell>
              <TableCell>4.5:1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Large text</TableCell>
              <TableCell>24px+</TableCell>
              <TableCell>1.5rem+</TableCell>
              <TableCell>3:1</TableCell>
              <TableCell>4.5:1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>User Interface component boundaries and borders</TableCell>
              <TableCell />
              <TableCell />
              <TableCell>3:1</TableCell>
              <TableCell>4.5:1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Graphical objects that contribute meaning</TableCell>
              <TableCell>14px - 18px diameter</TableCell>
              <TableCell>.875rem - 1.125rem diameter</TableCell>
              <TableCell>4.5:1</TableCell>
              <TableCell>7:1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell>19px+ diameter</TableCell>
              <TableCell>1.1875rem+ diameter</TableCell>
              <TableCell>3:1</TableCell>
              <TableCell>4.5:1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Incidentals</TableCell>
              <TableCell />
              <TableCell />
              <TableCell>NA</TableCell>
              <TableCell>NA</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>

      <h4 id="section-contrast-examples-text">Contrast examples (text)</h4>
      <div className="typography__font-family  mb-spacing-l">
        <div className="typography__font-demo">
          <div>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
            <span>
              <strong className="mr-spacing-s">Best</strong>
              <code>8.22:1</code>
            </span>
          </div>
        </div>
        <div className="typography__font-demo">
          <div className="typography__avoid-contrast">
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
            <span>
              <strong className="mr-spacing-s">Avoid</strong>
              <code>1.87:1</code>
            </span>
          </div>
        </div>
      </div>

      <h4 id="section-contrast-examples-text-img">Contrast examples (text over image)</h4>
      <StaticExample
        renderedExample={(
          <>
            <LightBox image={goodTextOverImg} alt="Good contrast for text over an image" className="flex-2up-gap" />
            <LightBox image={badTextOverImg} alt="Bad contrast for text over an image" className="flex-2up-gap" />
          </>
        )}
        className="mb-auto"
      />

      <h4 id="section-contrast-examples-boundaries">Contrast examples (boundaries)</h4>
      <div className="typography__font-family  mb-spacing-l">
        <div className="typography__font-demo">
          <Button className="m-auto" onClick={(e) => e.preventDefault()}>Button</Button>
          <div className="typography__font-name">
            <span>
              <strong className="mr-spacing-s">Best</strong>
              <code>8.22:1</code>
            </span>
          </div>
        </div>
        <div className="typography__font-demo">
          <Button className="typography__avoid-contrast--button m-auto" onClick={(e) => e.preventDefault()}>Button</Button>
          <div className="typography__font-name">
            <span>
              <strong className="mr-spacing-s">Avoid</strong>
              <code>1.66:1</code>
            </span>
          </div>
        </div>
      </div>

      <h3 id="section-motor-functionality" className="mt-spacing">Motor Functionality</h3>
      <p>
        Not all users have the ability to use a mouse or they have limited or involuntary motor control. Think of people with tremors,
        joint disorders, paralysis, or even missing limbs. In these cases they are reliant on keyboard functionality, have trouble
        clicking on small areas or have specialized hardware to help them navigate websites.
      </p>
      <p>
        The site should be designed to be navigated and functional using only the keyboard and they should never get stuck in any particular
        page element. This is crucial for those with mobility impairments.
      </p>

      <h4 id="section-motor-functionality-general-guidelines">General guidelines</h4>
      <ul>
        <li>
          <strong>Focus events.</strong> This will visually indicate to the user where they are located on the page.
        </li>
        <li>
          <strong>Hover events.</strong> These users will not be able to interact with any hover events (e.g. <Link to={pageUrls.tooltips}>tooltips</Link>). If the content
          is critical to understanding, be sure to give them an alternative source for the information.
        </li>
        <li>
          <strong>Interactive content.</strong>  When possible, ensure that the user:
          <ul>
            <li>Can activate or dismiss content using the keyboard.</li>
            <li>Will be able to easily click the object (has a large clickable area).</li>
            <li>Has enough time to complete necessary tasks.</li>
            <li>Can correct any errors that may have been made.</li>
          </ul>
        </li>
      </ul>

      <h3 id="section-auditory" className="mt-spacing">Limited or No Auditory Perception</h3>
      <p>
        Many people suffer from hearing loss, which can be present in one or both ears, and they can have different levels of hearing
        impairment. Determine the importance of the information the audible content is conveying. If it is critical or adds informational
        value then there needs to be an alternative way to provide the information to those with hearing impairments. These individuals
        rely heavily on audio alternatives like transcripts and captions.
      </p>
      <h4 id="section-auditory-general-guidelines">General guidelines</h4>
      <ul>
        <li>
          <strong>Audio Control.</strong> Depending on the type of auditory disability the user has, it may require adjustments to be
          made. Disable audio and video that starts automatically and use media players that give the user the option to play, pause, stop
          and adjust the volume.
        </li>
        <li>
          <strong>Captions.</strong> Captions provide a text based alternative that is synchronized to the audio being played. It is highly
          recommended to use a media player that also allows the user to change the size and color of the captions. These can also be
          known as &quot;sub-titles&quot; and is available with most media players. To view more information on captions see
          the <ExternalLink href="https://www.w3.org/WAI/media/av/captions/">w3.org page on Captions/Subtitles</ExternalLink>.
          <StaticExample
            renderedExample={<LightBox image={captionsImg} alt="Video providing captions" />}
            className="mb-auto mt-spacing-s"
          />
        </li>
        <li>
          <strong>Transcripts.</strong> Transcripts refers to a written version of the spoken content in an audio or video file. Not only
          does this benefit individuals who are deaf or hard of hearing, but also people who may have difficulty understanding or processing
          spoken language. For more information on how to get or create transcripts please refer to
          the <ExternalLink href="https://www.w3.org/WAI/media/av/transcripts/#creating-transcripts+">w3.orgs&apos; information on Creating Transcripts</ExternalLink>.
        </li>
      </ul>

      <h3 id="section-cognitive" className="mt-spacing">Cognitive Abilities</h3>
      <p>
        Cognitive, learning, and neurological disabilities encompass a wide spectrum of conditions. These disabilities have the potential to impact different functions
        of the nervous system, such as hearing, movement, vision, speech, and information processing. It is important to understand that these disabilities do not
        necessarily reflect a person&apos;s intelligence or cognitive capabilities.
      </p>
      <h4 id="section-cognitive-guidelines">General guidelines</h4>
      <ul>
        <li>
          <strong>Organized content.</strong> Create coherent <Link to={pageUrls.headings}>heading</Link> structures to organize information.
        </li>
        <li>
          <strong>Readable content.</strong> Consider the wording and the line length. Could a 9th grader read and understand it? If not, consider reworking the content.
        </li>
        <li>
          <strong>Predictable functionality.</strong> Not all new features are welcome. Consider
          best practices and industry standards before implementing new user interface features. Hovering over <Link to={pageUrls.button}>buttons</Link> should not activate
          a <Link to={pageUrls.modals}>modal</Link>, however it is standard practice for the cursor to change when hovering over interactive content.
        </li>
        <li>
          <strong>Create a safe space.</strong> Try to stay away from flashing and repetitive animation or alarming colors and images. These can trigger health
          issues as well as induce emotional distress.
        </li>
      </ul>

      <h4 id="section-motion" className="mt-spacing">Motion</h4>
      <ul className="mb-spacing">
        <li>
          Automatic sliding or zooming can cause issues with those who experience motion sensitivity. Allow the user to stop the animation to avoid these issues.
        </li>
        <li>
          Content that moves or auto-updates can be a barrier to anyone who has trouble reading stationary text quickly as well as anyone who has
          trouble tracking moving objects. It can also cause problems for screen readers.
        </li>
        <li>
          Moving content can also be a severe distraction for some people. Certain groups, particularly those with attention deficit disorders, find
          blinking content distracting, making it difficult for them to concentrate on other parts of the Web page. Allow five seconds between automatic motion, sliding, or repeated animation.
          This is long enough to get a user&apos;s attention, but not so long that a user cannot wait out the distraction if necessary to use the page.
        </li>
        <li>
          Consider using the following CSS to prevent animation for those with motion accessibility issues.
          <PreCodeForCodeString
            showBackgroundColor
            codeRaw={`
              @media (prefers-reduced-motion: reduce) {
                /* CSS to disable motion goes here */
              }
            `}
          />
        </li>
      </ul>

      <h2 id="section-forms" className="mt-spacing">Form Accessibility</h2>
      <ul>
        <li>
          <p>
            <strong>Use a simple vertical layout.</strong> By arranging form elements vertically, each field is presented one below the other, creating a
            natural flow and making it easier for users to understand the order in which they need to provide their inputs. This layout helps improve
            usability and accessibility by reducing the cognitive load. It aligns with the way users typically read and process information from top to bottom,
            and allows for efficient scanning and completion of form fields, reducing potential confusion and errors.
          </p>
          <p>
            The following images depict different forms with the arrows indicating different tab orders. Horizontally arranged forms can create an undesirable user experience.
            Depending on the user, they are going to expect the cursor to land in a particular place. If it doesn’t go where they expect, it increases
            the cognitive load trying to figure out where the cursor will actually land.
          </p>
          <StaticExample
            renderedExample={(
              <>
                <LightBox image={formFlowHorizontal} alt="Form Flow Horizontal" className="flex-2up-gap" />
                <LightBox image={formFlowVertical} alt="Form Flow Vertical" className="flex-3up-gap" />
              </>
            )}
            className="mb-auto"
          />
        </li>
        <li>
          <strong>Use native html elements before using role and other aria attributes.</strong> Native HTML elements are designed to be accessible by default.
          They have built-in semantics that convey meaning to both users and assistive technologies. By using native elements, you provide a solid foundation for
          creating accessible web content without relying on additional ARIA attributes.
          <br />
          <blockquote>
            <strong><em>The first rule of ARIA: Before you use ARIA, use native HTML elements and attributes first!</em></strong>
          </blockquote>
        </li>
        <li>
          <strong>Provide visible focus indicators.</strong> Native html elements have default focus behavior that activates when the user clicks or tabs into it. If
          you customize a form element, the focus boundary requires a <code>3:1</code> contrast ratio to its background. Test to make sure that there is a visible focus state
          on each element, to guide the user through the form.
          <StaticExample
            renderedExample={(
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/DKfsAFhknAU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
            className="mb-auto mt-spacing-s"
          />
        </li>
        <li>
          <strong>Tie a label to each form element.</strong> Use the form element <code>&lt;label&gt;</code> or <code>&lt;legend&gt;</code> depending on the form element
          being used, to associate the label and the form element. This enables the user to click anywhere on the label to activate or focus on the input, thus expanding
          the surface area of the form element.
          <PreCodeForCodeString
            showBackgroundColor
            codeRaw={`
              <div>
                <label for="input1">My Label</label>
                <input type="text" id="input1" … />
              </div>
            `}
          />
          <PreCodeForCodeString
            showBackgroundColor
            codeRaw={`
              <label>
                <span>My Label<span>
                <input type="text" … />
              <label>
            `}
          />
        </li>
        <li>
          <strong>Group related form controls.</strong> The <code>&lt;fieldset&gt;</code> element is useful when you have a logical grouping of form controls that belong together, such
          as a group of <Link to={pageUrls.radioButton}>radio buttons</Link>, <Link to={pageUrls.checkbox}>checkboxes</Link>, or related input fields. It is typically used
          in combination with a single <code>&lt;legend&gt;</code> element, which provides a caption or description for the group of <Link to={pageUrls.forms}>form elements</Link>.
          <PreCodeForCodeString
            showBackgroundColor
            codeRaw={`
            <fieldset>
              <legend>Choose your monster's features:</legend>
              <div>
                <input type="checkbox" id="scales" name="scales" checked>
                <label for="scales">Scales</label>
              </div>
              <div>
                <input type="checkbox" id="horns" name="horns">
                <label for="horns">Horns</label>
              </div>
            </fieldset>
            `}
          />
        </li>
        <li>
          <strong>Don&apos;t control element order.</strong> Ensure that the form controls are presented in the <code>HTML</code> exactly as they are displayed on the screen,
          without relying on <code>CSS</code> to rearrange them. This preserves the order in which form elements are narrated by screen readers, as they follow the sequence
          specified in the <code>HTML</code>. Also, do not alter the <code>tabindex</code> of the form element to control the tab order.
        </li>
      </ul>

      <h2 id="section-pdfs" className="mt-spacing">PDF Accessibility</h2>
      <p>
        When PDFs are embedded or displayed on a web page for viewing, it is crucial to recognize that they should adhere to the same accessibility guidelines
        as the rest of the website&apos;s content. However, in order to be considered accessible, PDFs should be broken into 3 different layers: visual, content,
        and tags. Tags are fundamental in order to &quot;present&quot; the site to those using screen readers, but they have no visual presentation.
      </p>
      <p>
        When creating a PDF consider first formatting the document in an application and then convert the file into an accessible PDF. Below is a table,
        from <ExternalLink href="https://webaim.org/techniques/acrobat/converting#source">WebAIM&apos;s site</ExternalLink>, of applications that can convert into
        PDFs and a comparison of the &quot;Tags Structure Quality&quot;.
      </p>
      <TableWrapper>
        <Table className="table table--lines-x table--alt table--full-width mb-spacing-l">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell className="text-left">Source Application</TableHeadCell>
              <TableHeadCell>Good tags structure</TableHeadCell>
              <TableHeadCell>No/poor tags structure</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Adobe Illustrator</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell className="text-center">
                <Icons.IconSadFace className="icon-24" altText="sad face" />
                {/* <span className="visually-hidden">Sad Face</span> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Adobe InDesign</TableCell>
              <TableCell className="text-center">
                <div>
                  <span
                    className="utds-icon-before-check"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">
                    has good tags structure
                  </span>
                </div>
              </TableCell>
             <TableCell>&nbsp;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Canva</TableCell>
             <TableCell>&nbsp;</TableCell>
              <TableCell className="text-center">
                <Icons.IconSadFace className="icon-24" altText="sad face" />
                <span className="visually-hidden">Sad Face</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Google Docs</TableCell>
             <TableCell>&nbsp;</TableCell>
              <TableCell className="text-center">
                <Icons.IconSadFace className="icon-24" altText="sad face" />
                <span className="visually-hidden">Sad Face</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Google Slides</TableCell>
             <TableCell>&nbsp;</TableCell>
              <TableCell className="text-center">
              <Icons.IconSadFace className="icon-24" altText="sad face" />
                <span className="visually-hidden">Sad Face</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microsoft PowerPoint</TableCell>
              <TableCell className="text-center">
                <div>
                  <span
                    className="utds-icon-before-check"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">
                    has good tags structure
                  </span>
                </div>
              </TableCell>
             <TableCell>&nbsp;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microsoft Word</TableCell>
              <TableCell className="text-center">
                <div>
                  <span
                    className="utds-icon-before-check"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">
                    has good tags structure
                  </span>
                </div>
              </TableCell>
             <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
      <p>
        For more in depth information regarding reviewing, repairing, or adding forms to a PDF, consider reading
        the <ExternalLink href="https://webaim.org/techniques/acrobat/">PDF Accessibility</ExternalLink> documentation provided
        by <ExternalLink href="https://webaim.org/">WebAIM</ExternalLink>.
      </p>
    </div>
  );
}

AccessibilityDocumentation.propTypes = propTypes;
AccessibilityDocumentation.defaultProps = defaultProps;

export default AccessibilityDocumentation;
