/* eslint-disable max-len */
import {
  Accordion,
  ExternalLink,
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
import { PreCodeForCodeString } from '../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../routing/pageUrls';

export function TypographyDocumentation() {
  return (
    <div className="documentation-content typography">
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
      <h1 id="h1-top">Typography</h1>
      <p className="lead-in">
        To assist developers in achieving a cohesive and user-friendly design, we offer a range of formatting functions and typography guidelines. These
        resources enable the creation of clear and consistent headings, highly legible body paragraphs, and easily recognizable UI elements on your
        website. Typefaces have been chosen for their brand identity, legibility, and accessibility across different user environments.
      </p>
      <p>
        When utilizing a content management system, such as WordPress, you will be using the built in tools to make changes to font sizes, weights, and other
        settings. You may consider establishing a baseline in your theme so these changes can be made globally as you edit content. For example, setting
        your <code>&lt;h2&gt; (Heading 2)</code> to render at a certain font size in a global CSS file will allow you to make changes across the entire site,
        as opposed to making font size changes individually on every page.
      </p>

      <hr />

      <h2 id="section-font-family" className="mt-spacing">Design System Font Families</h2>
      <p>
        The Utah Design System recommends the following font families, each selected for its legibility, professional appearance, and
        alignment with the state's brand identity. These fonts are ideal for most State of Utah websites and applications, provided
        they are applied according to their designated use cases.
      </p>
      <p>
        When designing digital content and user interfaces for webpages and applications, <strong>using a sans-serif font for body text is a critical best practice for accessibility</strong>.
        Because digital text is read on-screen rather than in print, the decorative strokes of serif fonts can significantly degrade legibility, especially for users with
        low vision. While serif fonts are perfectly acceptable for larger headings or brief moments of emphasis, a clean sans-serif typeface is essential for main body copy
        and user interface elements to ensure fluid reading and an accessible user experience.
      </p>

      <h3 id="font-family-ut-industry">UT Industry</h3>
      <p>
        As a key component of our branding strategy, the UT Industry font was custom-designed exclusively for the State of Utah.
      </p>
      <div className="typography__font-family mb-spacing">
        <div className="typography__font-demo">
          <div className="typography__ut-industry-font">
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> UT Industry Regular (400)</div>
            <div><strong>Usage:</strong> Use only for high-impact, short-form text like callouts and quotes. Never use for main body copy, as it reduces readability. Can also be used for Headings.</div>
          </div>
        </div>
        <div className="typography__font-demo">
          <div className="typography__ut-industry-font typography__ut-industry-font--medium">
            Expect a dazzling, unique journey with off-roading, mountain biking, hiking, and river rafting in Moab with access to Arches National Park, Canyonlands National Park, and Dead Horse Point State Park.
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> UT Industry Medium (500)</div>
            <div><strong>Usage:</strong> Use only for high-impact, short-form text like callouts and quotes. Never use for main body copy, as it reduces readability. Can also be used for Headings.</div>
          </div>
        </div>
        <div className="typography__font-demo">
          <div className="typography__ut-industry-font typography__ut-industry-font--bold">
            A quick journey from Capitol Reef National Park to Goblin Valley State Park amazes crowds with its hoodoos, fixing extreme boredom.
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> UT Industry Bold (700)</div>
            <div><strong>Usage:</strong> Use only for large, high-impact text elements such as Headings. Never use for any text smaller than 20px, as the heavy weight compromises legibility at smaller sizes.</div>
          </div>
        </div>
        <div className="typography__font-demo">
          <div className="typography__ut-industry-font typography__ut-industry-font--heavy">
            Just marvel at the exquisite, crazy, glowing hoodoos found while exploring Bryce Canyon National Park and Kodachrome Basin State Park.
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> UT Industry Heavy (900)</div>
            <div><strong>Usage:</strong> Use only for large, high-impact text elements such as Headings. Never use for any text smaller than 28px, as the heavy weight compromises legibility at smaller sizes.</div>
          </div>
        </div>
      </div>

      <Accordion
        headerContent={<span>Download UT Industry Font</span>}
        headerClassName="button--primary-color button--solid download-font-heading"
        headingLevel={4}
        id="opened-accordion"
      >
        <p>You can <ExternalLink href="https://drive.google.com/drive/folders/1ksXhzCfi9C-v0sBW56078XWxMpQpZzIQ?usp=drive_link">download the desktop version (and the web versions) of the UT Industry font</ExternalLink> from the Utah Branding shared folder.</p>
        <p className="mb-spacing-xs">The UT Industry web font can also be found on the state CDN:</p>
        <TableWrapper className="my-spacing">
          <Table className="full-width table--lines-x">
            <TableHead>
              <TableHeadRow>
                <TableHeadCell className="text-left">Format</TableHeadCell>
                <TableHeadCell className="text-left">Weight</TableHeadCell>
                <TableHeadCell className="text-left">Link</TableHeadCell>
              </TableHeadRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><code>.woff2</code></TableCell>
                <TableCell>Regular</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/woff2/UTIndustry-Regular.woff2">UT Industry (Regular)</ExternalLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>.woff2</code></TableCell>
                <TableCell className="font-semi-bold">Medium</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/woff2/UTIndustry-Medium.woff2">UT Industry (Medium)</ExternalLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>.woff2</code></TableCell>
                <TableCell className="font-bold">Bold</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/woff2/UTIndustry-Bold.woff2">UT Industry (Bold)</ExternalLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>.woff2</code></TableCell>
                <TableCell className="font-black">Heavy</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/woff2/UTIndustry-Heavy.woff2">UT Industry (Heavy)</ExternalLink></TableCell>
              </TableRow>

              <TableRow>
                <TableCell><code>.woff</code></TableCell>
                <TableCell>Regular</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/woff/UTIndustry-Regular.woff">UT Industry (Regular)</ExternalLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>.woff</code></TableCell>
                <TableCell className="font-semi-bold">Medium</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/woff/UTIndustry-Medium.woff">UT Industry (Medium)</ExternalLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>.woff</code></TableCell>
                <TableCell className="font-bold">Bold</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/woff/UTIndustry-Bold.woff">UT Industry (Bold)</ExternalLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>.woff</code></TableCell>
                <TableCell className="font-black">Heavy</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/woff/UTIndustry-Heavy.woff">UT Industry (Heavy)</ExternalLink></TableCell>
              </TableRow>

              <TableRow>
                <TableCell><code>.ttf</code></TableCell>
                <TableCell>Regular</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/ttf/UTIndustry-Regular.ttf">UT Industry (Regular)</ExternalLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>.ttf</code></TableCell>
                <TableCell className="font-semi-bold">Medium</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/ttf/UTIndustry-Medium.ttf">UT Industry (Medium)</ExternalLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>.ttf</code></TableCell>
                <TableCell className="font-bold">Bold</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/ttf/UTIndustry-Bold.ttf">UT Industry (Bold)</ExternalLink></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>.ttf</code></TableCell>
                <TableCell className="font-black">Heavy</TableCell>
                <TableCell><ExternalLink href="https://cdn.utah.gov/design-system/fonts/ut-industry/ttf/UTIndustry-Heavy.ttf">UT Industry (Heavy)</ExternalLink></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </Accordion>

      <p className="mb-spacing-xs mt-spacing">Example on how to import UT Industry Regular using CSS:</p>
      <PreCodeForCodeString
        codeRaw={`
@font-face {
  font-family: "UT Industry";
  src:
    url("https://cdn.utah.gov/design-system/fonts/ut-industry/woff2/UTIndustry-Regular.woff2") format("woff2");
    url("https://cdn.utah.gov/design-system/fonts/ut-industry/woff/UTIndustry-Regular.woff") format("woff"),
    url("https://cdn.utah.gov/design-system/fonts/ut-industry/ttf/UTIndustry-Regular.ttf") format("truetype"),
  font-weight: 400;
  font-style: normal;
}
        `}
        allowScrollOverflow
        showBackgroundColor
      />

      <p>
        <strong>Please note:</strong> the UT Industry Font is imported and ready to use if you're using the Utah Header (v5.0 or later).
        You will not need to import the font as shown above if this is the case. Additionally a css variable is provided by the header to
        enable quick access to the font family.
      </p>

      <p><strong>CSS variable:</strong> <code>--ut-industry-font-family</code></p>

      <p className="mb-auto"><strong>Example:</strong></p>

      <PreCodeForCodeString
        codeRaw={`
h1, h2 {
  font-family: var(--ut-industry-font-family);
}
        `}
        allowScrollOverflow
        showBackgroundColor
      />

      <h3 id="font-family-source-sans" className="mt-spacing">Source Sans 3</h3>
      <p>
        Source Sans 3 is an exceptional choice for a state websites and applications because it was specifically engineered for high readability,
        user interface (UI) design, and digital accessibility.
      </p>
      <div className="typography__font-family mb-spacing">
        <div className="typography__font-demo">
          <div className="typography__source-sans">
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> Source Sans 3 Regular (400)</div>
            <div><strong>Usage:</strong> Can be universally used.</div>
          </div>
        </div>
        <div className="typography__font-demo">
          <div className="typography__source-sans typography__source-sans--medium">
            Expect a dazzling, unique journey with off-roading, mountain biking, hiking, and river rafting in Moab with access to Arches National Park, Canyonlands National Park, and Dead Horse Point State Park.
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> Source Sans 3 Medium (500)</div>
            <div><strong>Usage:</strong> Can be universally used.</div>
          </div>
        </div>
        <div className="typography__font-demo">
          <div className="typography__source-sans typography__source-sans--bold">
            A quick journey from Capitol Reef National Park to Goblin Valley State Park amazes crowds with its hoodoos, fixing extreme boredom.
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> Source Sans 3 Bold (700)</div>
            <div><strong>Usage:</strong> Can be universally used.</div>
          </div>
        </div>
        <div className="typography__font-demo">
          <div className="typography__source-sans typography__source-sans--heavy">
            Just marvel at the exquisite, crazy, glowing hoodoos found while exploring Bryce Canyon National Park and Kodachrome Basin State Park.
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> Source Sans 3 Black (900)</div>
            <div><strong>Usage:</strong> This weight should not be used at sizes smaller than 20px to ensure that it is legible.</div>
          </div>
        </div>
      </div>

      <h4>Download Source Sans 3</h4>
      <p>This font is highly available via <ExternalLink href="https://fonts.google.com/specimen/Source+Sans+3">Google Fonts (Source Sans 3)</ExternalLink></p>
      <p className="mb-auto">The Utah Header includes a few weights of Source Sans 3:</p>
      <ul className="mb-spacing">
        <li>Font style: Normal
          <ul>
            <li>Regular (400)</li>
            <li>Semi-Bold (600)</li>
            <li>Bold (700)</li>
          </ul>
        </li>
        <li>Font style: Italic
          <ul>
            <li>Italic (400)</li>
            <li>Bold Italic (700)</li>
          </ul>
        </li>
      </ul>

      <p><strong>CSS variable:</strong> <code>--source-sans-font-family</code></p>

      <p className="mb-auto"><strong>Example:</strong></p>

      <PreCodeForCodeString
        codeRaw={`
body {
  font-family: var(--source-sans-font-family);
}
        `}
        allowScrollOverflow
        showBackgroundColor
      />


      <h3 id="source-code-pro">Source Code Pro (Monospace)</h3>
      <p>
        A companion to Source Sans, this complementary family is a monospaced version for coding applications. Source Code preserves
        the design features and vertical proportions of Source Sans, but alters the glyph widths so that they are uniform across all glyphs and weights.
      </p>
      <div className="typography__font-family mb-spacing">
        <div className="typography__font-demo">
          <div className="typography__source-code-pro">
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> Source Code Pro Regular (400)</div>
            <div><strong>Usage:</strong> Can be universally used, but most useful to display code.</div>
          </div>
        </div>
        <div className="typography__font-demo">
          <div className="typography__source-code-pro typography__source-code-pro--bold">
            A quick journey from Capitol Reef National Pa rk to Goblin Valley State Park amazes crowds with its hoodoos, fixing extreme boredom.
          </div>
          <div className="typography__font-name">
            <div><strong>Font Name / Weight:</strong> Source Code Pro Bold (700)</div>
            <div><strong>Usage:</strong> Can be universally used, but most useful to display code.</div>
          </div>
        </div>
      </div>
      <h4>Download Source Code Pro</h4>
      <p>
        This font is highly available via <ExternalLink href="https://fonts.google.com/specimen/Source+Code+Pro">Google Fonts (Source Code Pro)</ExternalLink>
      </p>

      <h2 id="choose-fonts">Choosing additional fonts</h2>
      <p className="mb-auto">
        There may be times were other fonts are needed.
        Consider these points when choosing fonts as they may impact your site&apos;s professional appearance and
        the font&apos;s readability especially at lower contrast levels:
      </p>
      <ul>
        <li>Fonts with extraordinarily thin strokes</li>
        <li>Unusual features and characteristics that reduce the familiarity of their letter forms</li>
        <li>Handwritten or script typefaces</li>
        <li>Comic Sans ☹️</li>
      </ul>

      <h2 id="section-font-color" className="mt-spacing">Font Color</h2>
      <ul className="mb-spacing">
        <li>
          <strong>Color and accessibility guidelines.</strong> Color plays a vital role in the legibility of text. Our color palette is built upon our steadfast commitment
          to meeting the <ExternalLink href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">Web Content Accessibility Guidelines</ExternalLink> 2.1 AA
          standard contrast ratios, ensuring accessibility. When feasible we try to achieve the AAA &quot;enhanced&quot; standard.
          <ul>
            <li>AA requires a <code>4.5:1</code> color contrast between text and background for normal text, and <code>3:1</code> for large text.</li>
            <li>AAA requires a <code>7:1</code> color contrast between text and background for normal text, and <code>4.5:1</code> for large text.</li>
            <li>The default color for text on a white background in the Utah Design System is <code>#474747</code> which achieves a <code>9.29:1</code> contrast ratio.</li>
            <li>Use our color contrast tool to measure the contrast between two colors.</li>
            <li>Information about <Link to={{pathname: pageUrls.accessibility, hash: "section-limited-vision-aaa-guidelines"}}>font sizes and required contrast ratios.</Link></li>
          </ul>
        </li>
        <li>
          <strong>Recommended font colors.</strong> When working with light backgrounds, it is recommended to utilize darker text, while white text is preferred for
          dark backgrounds. If your application incorporates both light and dark themes, make certain that the text is available in a contrasting color for each respective theme.
        </li>
      </ul>

      <h2 id="section-font-size">Font Size</h2>
      <ul className="mb-spacing">
        <li>
          <strong>Use a comfortable reading size for body text.</strong> For most text, including body copy, use at least an effective size of <code>1rem</code> (<code>16px</code> is
          generally the default font size for modern browsers). The Utah Design System has therefore set <code>16px (1rem)</code> as the base font size. Smaller and larger text can
          be used sparingly for special purposes (like headings, captions, photo credits, footnotes, data tables, or specialized UI elements).
        </li>
        <li>
          <strong>Font size.</strong> We recommend using the following css variables or classes to size text:
          <TableWrapper className="my-spacing">
            <Table className="full-width table--condensed table--lines-x">
              <TableHead>
                <TableHeadRow>
                  <TableHeadCell className="text-left">CSS Variable</TableHeadCell>
                  <TableHeadCell className="text-left">CSS Utility Class</TableHeadCell>
                  <TableHeadCell className="text-left">REM Size</TableHeadCell>
                  <TableHeadCell className="text-left">Pixel Size</TableHeadCell>
                </TableHeadRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell>--font-size-xs</TableCell><TableCell>.font-size-xs</TableCell><TableCell> .875rem</TableCell><TableCell>14px</TableCell></TableRow>
                <TableRow><TableCell>--font-size-s</TableCell><TableCell>.font-size-s</TableCell><TableCell> .9375rem</TableCell><TableCell>15px</TableCell></TableRow>
                <TableRow><TableCell>--font-size</TableCell><TableCell>.font-size</TableCell><TableCell>1rem</TableCell><TableCell>16px <em className="ml-spacing">(Base Font Size)</em></TableCell></TableRow>
                <TableRow><TableCell>--font-size-m</TableCell><TableCell>.font-size-m</TableCell><TableCell> 1.125rem</TableCell><TableCell>18px</TableCell></TableRow>
                <TableRow><TableCell>--font-size-l</TableCell><TableCell>.font-size-l</TableCell><TableCell> 1.25rem</TableCell><TableCell>20px</TableCell></TableRow>
                <TableRow><TableCell>--font-size-xl</TableCell><TableCell>.font-size-xl</TableCell><TableCell> 1.5rem</TableCell><TableCell>24px</TableCell></TableRow>
                <TableRow><TableCell>--font-size-2xl</TableCell><TableCell>.font-size-2xl</TableCell><TableCell> 1.75rem</TableCell><TableCell>28px</TableCell></TableRow>
                <TableRow><TableCell>--font-size-3xl</TableCell><TableCell>.font-size-3xl</TableCell><TableCell> 2rem</TableCell><TableCell>32px</TableCell></TableRow>
                <TableRow><TableCell>--font-size-4xl</TableCell><TableCell>.font-size-4xl</TableCell><TableCell> 2.5rem</TableCell><TableCell>40px</TableCell></TableRow>
                <TableRow><TableCell>--font-size-5xl</TableCell><TableCell>.font-size-5xl</TableCell><TableCell> 3rem</TableCell><TableCell>48px</TableCell></TableRow>
                <TableRow><TableCell>--font-size-6xl</TableCell><TableCell>.font-size-6xl</TableCell><TableCell> 3.5rem</TableCell><TableCell>56px</TableCell></TableRow>
                <TableRow><TableCell>--font-size-7xl</TableCell><TableCell>.font-size-7xl</TableCell><TableCell> 4.5rem</TableCell><TableCell>72px</TableCell></TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </li>
      </ul>

      <h2 id="section-font-weight">Font Weight</h2>
      <ul>
        <li>
          <strong>Use font weight for emphasis.</strong> For most text, including body copy, use the base font weight of <code>normal</code>.
          Other weights can be used sparingly for special purposes (like headings, to provide emphasis, or specialized UI elements).
        </li>
        <li>
          <strong>Font weight</strong>. We recommend using the following css variables or classes to apply font weights:
          <TableWrapper className="my-spacing">
            <Table className="full-width table--condensed table--lines-x">
              <TableHead>
                <TableHeadRow>
                  <TableHeadCell className="text-left">CSS Variable</TableHeadCell>
                  <TableHeadCell className="text-left">CSS Utility Class</TableHeadCell>
                  <TableHeadCell className="text-left">Font Weight</TableHeadCell>
                  <TableHeadCell className="text-left">Demo</TableHeadCell>
                </TableHeadRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell>--font-weight-normal</TableCell><TableCell>.font-normal</TableCell><TableCell>400 <em className="ml-spacing">(Base Font Weight)</em></TableCell><TableCell className="font-normal">Demo Font Weight</TableCell></TableRow>
                <TableRow><TableCell>--font-weight-medium</TableCell><TableCell>.font-medium</TableCell><TableCell>500</TableCell><TableCell className="font-medium">Demo Font Weight</TableCell></TableRow>
                <TableRow><TableCell>--font-weight-semi-bold</TableCell><TableCell>.font-semi-bold</TableCell><TableCell>600</TableCell><TableCell className="font-semi-bold">Demo Font Weight</TableCell></TableRow>
                <TableRow><TableCell>--font-weight-bold</TableCell><TableCell>.font-bold</TableCell><TableCell>700</TableCell><TableCell className="font-bold">Demo Font Weight</TableCell></TableRow>
                <TableRow><TableCell>--font-weight-black</TableCell><TableCell>.font-black</TableCell><TableCell>900</TableCell><TableCell className="font-black">Demo Font Weight</TableCell></TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </li>
      </ul>

      <h2 id="section-text-alignment">Text Alignment</h2>
      <ul className="mb-spacing">
        <li>
          <strong>Text alignment.</strong> While <code>right-aligned</code> and <code>centered</code> text have their place for specific use cases, websites benefit from
          the consistent use of <code>left-aligned</code> text. Never use justified text. While common in print, <code>justified</code> text creates uneven word spacing
          on digital screens that can severely hinder reading for users with cognitive or visual disabilities. Setting the type to the left provides a consistent
          starting point and a "ragged" right edge, which helps the eye easily track from the end of one line to the beginning of the next.
        </li>
        <li>
          Utah Design System Alignment Options:
          <ul>
            <li><code>.text-left &#123; text-align: left; &#125;</code></li>
            <li><code>.text-center &#123; text-align: center; &#125;</code></li>
            <li><code>.text-right &#123; text-align: right; &#125;</code></li>
          </ul>
        </li>
        <li>
          Examples

          <PreCodeForCodeString
            showBackgroundColor
            codeRaw={`
              <div class="text-left">Apples are delicious</div>
              <div class="text-center">Apples are delicious</div>
              <div class="text-right">Apples are delicious</div>
            `}
          />
        </li>
      </ul>

      <h2 id="section-line-height">Line Height</h2>
      <ul className="mb-spacing">
        <li>
          <strong>Line Height.</strong> Line height controls the vertical rhythm and density of a block of text. It is written as a unitless multiplier of
          the text&apos;s font size — for instance, a line height of <code>1.4</code> on <code>16px</code> text results in a line height of <code>22.4px</code>.
        </li>
        <li>
          <strong>Recommend.</strong> The Utah Design System recommends a line height of <code>1.4</code>. However, different line heights may provide a
          better user experience. Line heights below <code>1.4</code> will make it more difficult to read and track.
        </li>
      </ul>

      <h2 id="section-whitespace">Whitespace</h2>
      <ul className="mb-spacing">
        <li>
          <strong>Whitespace.</strong>  The space around your content elements affects the relationship between these elements. Use less whitespace
          to group elements and more whitespace to distinguish them from each other.
          <ul>
            <li>
              <strong>Don&apos;t indent paragraphs, use whitespace before.</strong> While most longform print design uses indented lines to distinguish
              paragraphs; It&apos;s more conventional on the web to use unindented paragraphs separated by whitespace.
            </li>
            <li>
              <strong>Use at least one spacing unit (<code>--spacing</code> = <code>1rem</code>) of whitespace between paragraphs.</strong> To properly
              separate paragraphs from one another, use the equivalent of one blank line of whitespace between them. See <Link to={pageUrls.spacing}>spacing</Link> variables.
            </li>
            <li>
              <strong>Headings should be closer to the text they introduce than the text that precedes them.</strong> It&apos;s important that headings
              are more visually connected to the text for which they&apos;re the heading than the text of the previous section to reduce ambiguity and
              cognitive dissonance. Use at least <code>1.5</code> times the amount of whitespace above the heading as below it.
            </li>
          </ul>
        </li>
      </ul>

      <h2 id="section-font-style">Font Style</h2>
      <p>
        The style of a typeface affects its readability. Follow the guidelines below to achieve the best user experience and meet accessibility requirements.
      </p>
      <ul className="mb-spacing">
        <li className="typography__lora-font normal">
          <strong>Serif vs Sans Serif Fonts:</strong> When designing digital content and user interfaces for webpages and applications, <strong>using a sans-serif font for body text is a critical best practice for accessibility</strong>.
          Because digital text is read on-screen rather than in print, the decorative strokes of serif fonts can significantly degrade legibility, especially for users with
          low vision. While serif fonts are perfectly acceptable for larger headings or brief moments of emphasis, a clean sans-serif typeface is essential for main body copy
          and user interface elements to ensure fluid reading and an accessible user experience.
        </li>
        <li>
          <strong>Use sans serif fonts for user interfaces (Source Sans 3).</strong> UIs are the practical expression of a
          site&apos;s organization and functionality. A font such as Source Sans 3 can help the user focus on using the interface as a tool.
        </li>
        <li>
          <strong>Avoid long sections of italic or bold text.</strong> Both italic and bold text can degrade readability. Both are best used for limited
          sections of contrast. Consider replacing long sections of bold or italic text with a callout box, a section header, or some other technique that
          avoids extended stretches of styled text.
        </li>
        <li>
          <strong>Avoid long sections of uppercase text.</strong> Uppercase text has a serious negative effect on readability. Unless mandated by law,
          consider other type treatments for any uppercase text longer than just a few words.
        </li>
        <li>
          <a href="#section-font-family">See Font Family for more information.</a>
        </li>
      </ul>

      <h3 id="section-bold">Bold</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Grab attention.</strong> The purpose of using bold text is to highlight certain words or phrases, grab the reader&apos;s attention,
          and improve the readability of the content.
        </li>
        <li>
          <strong>Add emphasis.</strong> Use bold to add emphasis to text. (For example: <code>&lt;strong&gt;</code> tag or <code>font-weight: bold;</code>) Alternatively,
          the use of italics can provide emphasis as well.

        </li>
        <li>
          <strong>Use sparingly.</strong> Remember, if all text is emphasized, then the emphasis becomes meaningless as there is no contrast
          between important and unimportant information.
        </li>
      </ul>

      <h3 id="section-italics">Italics</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Stand out.</strong> Italicized text distinguishes itself from the surrounding type, making it stand out visually.
        </li>
        <li>
          <strong>Increase comprehension.</strong> By utilizing contrast in formatting, readers can more easily identify important words,
          spot differences, and quickly locate them in the text if needed.
        </li>
        <li>
          <strong>Use cases.</strong> The use of italics is prevalent in conversational sentences, dialogue, and when emphasizing names
          in written text. As well as:
          <ul>
            <li>Used to highlight quotes.</li>
            <li>Used to highlight names of books, blogs, newspapers, etc.</li>
            <li>Conversations or dialogues.</li>
            <li>Foreign words.</li>
          </ul>
        </li>
      </ul>

      <h3 id="section-underline">Underline</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Use bold or italics.</strong> Never use underlines for emphasis; reserve them exclusively for links. Instead, use bold or
          italics to draw attention to specific words or phrases.
        </li>
        <li>
          <strong>Underline is often mistaken for links.</strong> It is a common assumption that underlined text indicates a hyperlink,
          therefore, it is best to avoid using underlines altogether.
        </li>
      </ul>

      <h3 id="section-all-caps">All Caps</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Use sparingly.</strong> The use of all caps in text can impede readability and make it more difficult to scan for
          information. Therefore, avoid long lines of all caps text.
        </li>
        <li>
          <strong>Transform text with CSS.</strong> When using all caps, use CSS to transform the text.
        </li>
        <li>
          <strong>Why are you shouting?!?</strong> When all caps are utilized in text, it can create an impression of shouting to the reader.
        </li>
        <li>
          <strong>Adding emphasis to key elements.</strong> All caps can add emphasis to key elements of your design and create a better
          experience for your users. For example, in <Link to={pageUrls.button}>buttons</Link>, <Link to={pageUrls.badges}>badges</Link>, short subtitles
          and <Link to={pageUrls.table}>table headings</Link>.
        </li>
        <li>
          <strong>Text meant to be scanned, not read.</strong> All caps may be an appropriate choice for situations where the sentence or phrase
          is not intended to be read, such as in titles or headings.
        </li>
      </ul>

      <h2 id="section-accessibility-summary">Accessibility Summary</h2>
      <ul className="mb-spacing">
        <li>
          Use <strong>sans serif fonts</strong> (Source Sans 3) for the body copy and user interface elements for a website or application.
        </li>
        <li>
          Use <strong>serif fonts</strong> (UT Industry) for headings and emphasis. Don't use serif fonts for body copy because the decorative strokes
          of serif fonts can significantly degrade legibility, especially for users with low vision. {' '}
          <ExternalLink href="https://www.section508.gov/develop/fonts-typography/">Font accessibility reference from 508.</ExternalLink>
        </li>
        <li>
          Text must maintain a <strong><code>4.5:1</code> contrast ratio</strong> or better.
        </li>
        <li>
          Selecting an appropriate font size for body text is crucial to ensure comfortable reading. While a <strong>minimum font size of <code>16px</code></strong> is
          recommended, it&apos;s important to account for potential variations based on the specific design of the font.
        </li>
        <li>
          <p>
            <strong>Font weight</strong> can also play a factor in the perceivability and readability. For example, it is not recommended to set entire paragraphs
            of text in a light, extra-light, or thin font. Thin weights inherently make the text harder to see. Thin weights may be used at larger
            font sizes for headings. <strong>The following example is not accessible!</strong>
          </p>
          <p className="typography__light-font ml-spacing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum efficitur. Donec condimentum,
            magna et rutrum elementum, massa urna placerat odio, ut varius nisl eros ut odio. Vivamus eget lacus et nibh porttitor
            ultricies quis vel lacus.
          </p>

          <p>
            It is also recommended that you don&apos;t set entire paragraphs in a bold or heavy weight as this will also impact the readability of the text.
            On rare occasions you may have the need to dramatically emphasize text. <strong>The following example is not accessible because the font is using
            a heavy font! The size of the text should be increased to 20px or larger when using a heavy font.</strong>
          </p>
          <p className="typography__black-font ml-spacing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum efficitur. Donec condimentum,
            magna et rutrum elementum, massa urna placerat odio, ut varius nisl eros ut odio. Vivamus eget lacus et nibh porttitor
            ultricies quis vel lacus.
          </p>
        </li>
        <li>
          <strong>Text alignment:</strong> Don't use <code>justified</code> text because it creates uneven word spacing on digital screens that can
          severely hinder reading for users with cognitive or visual disabilities. Use <code>right-aligned</code> and <code>centered</code> text for specific use cases.
          Use <code>left-aligned</code> in the vast majority of cases for body copy text.
        </li>
        <li>
          To make text easy to read, the Utah Design System uses a <strong>line height of <code>1.4</code></strong> for body text.
        </li>
        <li>
          <strong>Font style:</strong>
          <ul>
            <li>Use <strong>bold</strong>, <strong>italic</strong>, and <strong>all caps</strong> sparingly to provide emphasis.</li>
            <li>Reserve <strong>underline</strong> exclusively for links.</li>
          </ul>
        </li>
        <li>
          <strong>Headings</strong> can effectively communicate hierarchy in your content. Their size, weight, and typeface can help distinguish them
          from paragraph text. This makes headings stand out, which aids in scanning the content. More on <Link to={pageUrls.headings}>headings</Link>.
        </li>
        <li>
          Choose a typeface that emphasizes clarity and legibility.
          <ul>
            <li>
              Factors to consider:
              <ul>
                <li>
                  It performs well when it is small or large.
                </li>
                <li>
                  It has a large <code>x-height</code>. This the distance between the baseline of a line of type and tops of the main body
                  of lower case letters.
                </li>
                <li>
                  The character is large for its point size.
                </li>
                <li>
                  Individual letterforms are distinct in shape and can&apos;t be confused with other characters. For example: I, l, and
                  1 are distinct. 0 and O are distinct.
                  <ul>
                    <li>l, I, 1, 0, O (Source Sans 3)</li>
                    <li className="typography__arial-font">l, I, 1, 0, O (Arial)</li>
                  </ul>
                </li>
                <li>The typeface supports all of the characters and font styles that are needed.</li>
              </ul>
            </li>

          </ul>
        </li>
      </ul>
    </div>
  );
}
