/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
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
import PreCode from '../../preCode/PreCode';
import pageUrls from '../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function TypographyDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Typography</h1>
      <p className="lead-in">
        To assist developers in achieving a cohesive and user-friendly design, we offer a range of formatting functions and typography guidelines. These
        resources enable the creation of clear and consistent headings, highly legible body paragraphs, and easily recognizable UI elements on your
        website. Our default typefaces are thoughtfully chosen for their legibility and accessibility across different user environments.
      </p>
      <p>
        When utilizing a content management system, such as WordPress, you will be using the built in tools to make changes to font sizes, weights, and other
        settings. You may consider establishing a baseline in your theme so these changes can be made globally as you edit content. For example, setting
        your <code>&lt;h2&gt; (Heading 2)</code> to render at a certain font size in a global CSS file will allow you to make changes across the entire site,
        as opposed to making font size changes individually on every page.
      </p>

      <hr />

      <h2 id="section-font-family" className="mb-spacing">Font Family</h2>
      <p>
        The Utah Design System recommends the follow font family pairings.
        In the majority of cases these fonts are adequate for websites and applications within the State of Utah.
        These fonts were carefully chosen for ease of reading and professional appearance.
      </p>
      <p className="mb-auto">
        However, there may be times were other fonts are warranted.
        Consider these points when choosing fonts as they may impact your site&apos;s professional appearance and the font&apos;s readability especially at lower contrast levels:
      </p>
      <ul>
        <li>Fonts with extraordinarily thin strokes</li>
        <li>Unusual features and characteristics that reduce the familiarity of their letter forms</li>
        <li>Handwritten or script typefaces</li>
        <li>Comic Sans ☹️</li>
      </ul>

      <h3 id="font-family-source-sans" className="mt-spacing">Source Sans Pro</h3>
      <p>Font pairing: Source Sans Pro, Lora, Source Code Pro</p>
      <div className="typography__font-family">
        <div className="typography__font-demo">
          <div>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
           <ExternalLink href="https://fonts.google.com/specimen/Source+Sans+Pro">Source Sans Pro <br />(Sans Serif)</ExternalLink>
          </div>
        </div>
        <div className="typography__font-demo typography__lora-font">
          <div>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
           <ExternalLink href="https://fonts.google.com/specimen/Lora">Lora <br />(Serif)</ExternalLink>
          </div>
        </div>
        <div className="typography__font-demo typography__source-code-pro">
          <div>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
           <ExternalLink href="https://fonts.google.com/specimen/Source+Code+Pro">Source Code Pro <br />(Monospace)</ExternalLink>
          </div>
        </div>
      </div>

      <h3 id="font-family-roboto" className="mt-spacing">Roboto</h3>
      <p>Font pairing: Roboto, Merriweather, Roboto Mono</p>
      <div className="typography__font-family mb-spacing">
        <div className="typography__font-demo typography__roboto-font">
          <div>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
           <ExternalLink href="https://fonts.google.com/specimen/Roboto">Source Sans Pro <br />(Sans Serif)</ExternalLink>
          </div>
        </div>
        <div className="typography__font-demo typography__merriweather-font">
          <div>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
           <ExternalLink href="https://fonts.google.com/specimen/Merriweather">Merriweather <br />(Serif)</ExternalLink>
          </div>
        </div>
        <div className="typography__font-demo typography__roboto-mono-font">
          <div>
            In Zion National Park expect to be welcomed by majestic views, people having fun, and quaint local attractions!
          </div>
          <div className="typography__font-name">
           <ExternalLink href="https://fonts.google.com/specimen/Roboto+Mono">Roboto Mono <br />(Monospace)</ExternalLink>
          </div>
        </div>
      </div>

      <h2 id="section-font-size" className="mb-spacing">Font Size</h2>
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
                <TableRow><TableCell>--font-size-2xs</TableCell><TableCell>.font-size-2xs</TableCell><TableCell> .8125rem</TableCell><TableCell>13px</TableCell></TableRow>
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

      <h2 id="section-font-weight" className="mb-spacing">Font Weight</h2>
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
                <TableRow><TableCell>--font-weight-extra-light</TableCell><TableCell>.font-extra-light</TableCell><TableCell>200</TableCell><TableCell className="font-extra-light">Demo Font Weight</TableCell></TableRow>
                <TableRow><TableCell>--font-weight-light</TableCell><TableCell>.font-light</TableCell><TableCell>300</TableCell><TableCell className="font-light">Demo Font Weight</TableCell></TableRow>
                <TableRow><TableCell>--font-weight-normal</TableCell><TableCell>.font-normal</TableCell><TableCell>400 <em className="ml-spacing">(Base Font Weight)</em></TableCell><TableCell className="font-normal">Demo Font Weight</TableCell></TableRow>
                <TableRow><TableCell>--font-weight-semi-bold</TableCell><TableCell>.font-semi-bold</TableCell><TableCell>600</TableCell><TableCell className="font-semi-bold">Demo Font Weight</TableCell></TableRow>
                <TableRow><TableCell>--font-weight-bold</TableCell><TableCell>.font-bold</TableCell><TableCell>700</TableCell><TableCell className="font-bold">Demo Font Weight</TableCell></TableRow>
                <TableRow><TableCell>--font-weight-black</TableCell><TableCell>.font-black</TableCell><TableCell>900</TableCell><TableCell className="font-black">Demo Font Weight</TableCell></TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </li>
      </ul>

      <h2 id="section-text-alignment" className="mb-spacing">Text Alignment</h2>
      <ul className="mb-spacing">
        <li>
          <strong>Text alignment.</strong> While <code>right-aligned</code>, <code>centered</code>, and <code>justified</code> text have their place, most websites
          benefit from a consistent use of <code>left-aligned</code> text. Justified text, common in print, does not yet display well enough in a web browser to
          be considered a best practice. Setting the type to the left provides the eye a constant starting point for each line, making text easier for the user to read.
        </li>
        <li>
          Utah Design System Alignment Options:
          <ul>
            <li><code>.text-left &#123; text-align: left; &#125;</code></li>
            <li><code>.text-center &#123; text-align: center; &#125;</code></li>
            <li><code>.text-right &#123; text-align: right; &#125;</code></li>
            <li><code>.text-justify &#123; text-align: justify; &#125;</code></li>
          </ul>
        </li>
        <li>
          Examples

          <PreCode
            showBackgroundColor
            codeRaw={`
              <div class="text-left">Apples are delicious</div>
              <div class="text-center">Apples are delicious</div>
              <div class="text-right">Apples are delicious</div>
              <div class="text-justify">Apples are delicious</div>
              (font used above, Source Code Pro)
            `}
          />
        </li>
      </ul>

      <h2 id="section-line-height" className="mb-spacing">Line Height</h2>
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

      <h2 id="section-whitespace" className="mb-spacing">Whitespace</h2>
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

      <h2 id="section-font-color" className="mb-spacing">Font Color</h2>
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
          </ul>
        </li>
        <li>
          <strong>Recommended font colors.</strong> When working with light backgrounds, it is recommended to utilize darker text, while white text is preferred for
          dark backgrounds. If your application incorporates both light and dark themes, make certain that the text is available in a contrasting color for each respective theme.
        </li>
      </ul>

      <h2 id="section-font-style" className="mb-spacing">Font Style</h2>
      <p>
        The style of a typeface affects its readability. In general, serif typefaces are more appropriate for long blocks of text and sans serif typefaces are more
        appropriate for UIs — but this norm is not a hard-and-fast rule. The conventions of the web are more forgiving of longer, sans serif texts and
        serif UIs are not out of the question for sites of a certain tone.
      </p>
      <ul className="mb-spacing">
        <li className="typography__lora-font normal">
          <strong>Serif typefaces can be a good choice for long texts</strong> <i>(font used: Lora)</i>. Serif typefaces tend to be designed for
          readability. While they are most useful for true extended longform reading like novels, nonfiction, and essays, any site that requires
          long stretches of continuous reading, such as documentation manuals, could benefit from using a serif body
          typeface. <i>If in doubt, use the recommended sans serif font.</i>
        </li>
        <li>
          <strong>Neutral typefaces can be a good choice for interfaces</strong> <i>(font used: Source Sans Pro)</i>. UIs are the practical expression of a site’s organization and functionality. A straightforward and neutral typeface can help the user focus on using the interface as a tool.
        </li>
        <li>
          <strong>Avoid long sections of italic or bold text.</strong> Both italic and bold text can degrade readability. Both are best used for limited sections of contrast. Consider replacing long sections of bold or italic text with a callout box, a section header, or some other technique that avoids extended stretches of styled text.
        </li>
        <li>
          <strong>Avoid long sections of uppercase text.</strong> Uppercase text has a serious negative effect on readability. Unless mandated by law, consider other type treatments for any uppercase text longer than just a few words.
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
          <strong>Use bold or italics first.</strong> When it comes to writing for the web, it is recommended to use the underline tag
          very sparingly (if at all). Rather than relying on underlines, you can utilize bold or italics to add emphasis to certain
          words or phrases.
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

      <h2 id="section-accessibility-summary" className="mb-spacing">Accessibility Summary</h2>
      <ul className="mb-spacing">
        <li>
          Text must maintain a <code>4.5:1</code> contrast ratio or better.
        </li>
        <li>
          Selecting an appropriate font size for body text is crucial to ensure comfortable reading. While a minimum font size of <code>16px</code> is
          recommended, it&apos;s important to account for potential variations based on the specific design of the font.
        </li>
        <li>
          <p>
            Font weight can also play a factor in the perceivability and readability. For example, it is not recommended to set entire paragraphs
            of text in a light, extra-light, or thin font. Thin weights inherently make the text harder to see. Thin weights may be used at larger
            font sizes for headings.
          </p>
          <p className="typography__light-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum efficitur molestie. Donec condimentum,
            magna et rutrum elementum, massa urna placerat odio, ut varius nisl eros ut odio. Vivamus eget lacus et nibh porttitor
            ultricies quis vel lacus.
          </p>

          <p>
            It is also recommended that you don’t set entire paragraphs in a bold or heavy weight as this will also impact the readability of the text.
            On rare occasions you may have the need to dramatically emphasize text.
          </p>
          <p className="typography__black-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum efficitur molestie. Donec condimentum,
            magna et rutrum elementum, massa urna placerat odio, ut varius nisl eros ut odio. Vivamus eget lacus et nibh porttitor
            ultricies quis vel lacus.
          </p>
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
                    <li>l, I, 1, 0, O (Source Sans Pro)</li>
                    <li className="typography__arial-font">l, I, 1, 0, O (Arial)</li>
                  </ul>
                </li>
                <li>The typeface supports all of the characters and font styles that are needed.</li>
              </ul>
            </li>
            <li>
              Some designers suggest using sans-serif typefaces for user interfaces and serif typefaces for long-form reading. However,
              this is ultimately a matter of personal preference and context.
            </li>
            <li>
              Headings can effectively communicate hierarchy in your content. Their size, weight, and typeface can help distinguish them
              from paragraph text. This makes headlines stand out, which aids in scanning the content. More on <Link to={pageUrls.headlines}>headings</Link>.
            </li>
            <li>
              To make text easy to read, the Utah Design System uses a line height of <code>1.4</code> for body text.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

TypographyDocumentation.propTypes = propTypes;
TypographyDocumentation.defaultProps = defaultProps;

export default TypographyDocumentation;
