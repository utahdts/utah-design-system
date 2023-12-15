/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { ExternalLink } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import PreCodeForCodeString from '../../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../../routing/pageUrls';
import StaticExample from '../../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function ParagraphDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Basic and Semantic Text</h1>
      <p className="lead-in mb-auto">
        In HTML the terms &quot;basic text&quot; and &quot;semantic text&quot; refer to different approaches in structuring
        and presenting textual content on a website. The term &quot;text&quot; in each of these phrases refers to the text
        within a semantic html element.
      </p>
      <ul className="mb-spacing">
        <li>Basic text focuses on visual presentation.</li>
        <li>Semantic text provides additional context and structure to your content.</li>
        <li>Semantic landmarks provide screen reader users the ability to jump to sections of a web page.</li>
      </ul>
      <p>
        These elements make it easier for search engines to index, assistive technologies to interpret, and for your website
        to adapt to different devices and screen sizes.
      </p>

      <hr />

      <h2 id="section-basic-elements" className="mb-spacing mt-spacing">Basic Text</h2>
      <p>
        Basic text refers to the content that is presented on a website with simple structural HTML elements. It typically consists
        of paragraphs, headings, and basic formatting like bold or italic text. Basic text is primarily focused on the visual presentation
        of the content, with minimal consideration for its meaning or structure. The most common elements that provide no semantic meaning
        are <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;strong&gt;</code>, and <code>&lt;em&gt;</code> tags, etc.
      </p>
      <p>See <Link to={pageUrls.typography}>typography</Link>.</p>
      <p>
        There are some exceptions for this, such as elements like <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, <code>&lt;li&gt;</code>,
        and <code>&lt;p&gt;</code> tags, etc. These not only tend to add visual structure but also adds semantic information to screen
        readers as well as search engine optimization. Additionally, they are necessary to the basic structure of a website.
      </p>
      <p>
        See <Link to={pageUrls.headings}>headings</Link>, <Link to={pageUrls.lists}>lists</Link>, and <Link to={pageUrls.links}>links</Link>.
      </p>

      <h2 id="section-semantic-text" className="mb-spacing">Semantic Text</h2>
      <p>
        Semantic text (text within a semantic html element), on the other hand, has evolved over time. It may not change the visual aspect
        of the text, but uses tags to indicate the function or convey added meaning to the content it contains. Thus allowing both humans
        and machines to understand it better. These elements include tags
        like <code>&lt;article&gt;</code>, <code>&lt;caption&gt;</code>, <code>&lt;dfn&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;small&gt;</code>, etc.
      </p>
      <p>See <Link to={pageUrls.codeBlock}>blockquote</Link>.</p>

      <h2 id="section-semantic-landmark-elements" className="mb-spacing">Semantic Landmark Elements</h2>
      <p>
        In HTML, landmark elements are used to define different sections or regions of a web page. These elements provide structural
        information to assistive technologies and help improve accessibility and navigation. However, the overuse of these particular
        elements can create confusion and a bad experience for those using assistive technologies. Here are some commonly used landmark elements in
        HTML: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>.
        Find further information about <Link to={`${pageUrls.accessibility}#section-landmark-roles`}>landmark role elements here</Link>.
      </p>
      <p>See <Link to={pageUrls.utahHeader}>Utah Header</Link>, <Link to={pageUrls.utahFooter}>Utah Footer</Link>, <Link to={pageUrls.mainMenu}>Main Menu</Link>, <Link to={pageUrls.verticalMenu}>Vertical Menu</Link>.</p>

      <p>
        You can find additional elements and information
        on <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla: HTML elements reference</ExternalLink> and <ExternalLink href="https://webaim.org/resources/htmlcheatsheet/">WebAIM: HTML Semantics and Accessibility Cheat Sheet</ExternalLink>.
      </p>

      <h2 id="section-semantic-example-comparisons" className="mb-spacing">Example Comparisons</h2>
      <StaticExample
        title="Non-Semantic Example"
        renderedExample={(
          <div>
            <span style={{ fontSize: '18px' }}>
              <strong>Important Announcement:</strong>
            </span>
            <p style={{ color: 'red' }}>Due to unforeseen circumstances, the event scheduled for this Saturday has been canceled.</p>
            <div>
              <span>
                We apologize for any inconvenience caused. Please stay tuned for updates on future events.
              </span>
            </div>
          </div>
        )}
      />
      <StaticExample
        renderedExample={(
          <PreCodeForCodeString
            codeRaw={`
              <div>
                <span style="font-size: 18px;">
                  <strong>Important Announcement:</strong>
                </span>
                <p style="color: red;">Due to unforeseen circumstances, the event scheduled for this Saturday has been canceled.</p>
                <div>
                  <span>
                    We apologize for any inconvenience caused. Please stay tuned for updates on future events.
                  </span>
                </div>
              </div>
            `}
          />
        )}
        quickTips={(
          <p>
            In this non-semantic example, the code is focused on the visual presentation to give structure.
            The <code>&lt;div&gt;</code> element is used as a generic container to group the content.
            The <code>&lt;span&gt;</code> element is used to apply font-size styling, and the <code>&lt;strong&gt;</code> element is used to
            emphasize the text. However, there is no clear indication of the purpose or meaning of the content within the code. It is important
            to note, that if this content was important to the user, in order to make this code accessible, ARIA roles and attributes would need to be added.
          </p>
        )}
      />

      <StaticExample
        title="Semantic Example"
        renderedExample={(
          <article>
            <section>
              <h1>Recipe: Lemon Blueberry Muffins</h1>
              <p>Prepare a delightful batch of lemon blueberry muffins in just 30 minutes! Follow this easy recipe for a delicious treat that everyone will love.</p>
            </section>

            <section>
              <h2>Ingredients</h2>
              <ul>
                <li>2 cups all-purpose flour</li>
                <li>1 cup granulated sugar</li>
                <li>1/2 cup unsalted butter, melted</li>
                <li>1 cup fresh blueberries</li>
                <li>1 tablespoon lemon zest</li>
                <li>1 teaspoon baking powder</li>
                <li>1/2 teaspoon salt</li>
                <li>1 cup milk</li>
              </ul>
            </section>

            <section>
              <h2>Instructions</h2>
              <ol>
                <li>Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners.</li>
                <li>In a large bowl, combine the flour, sugar, baking powder, and salt.</li>
                <li>Add the melted butter, milk, lemon zest, and gently fold in the blueberries.</li>
                <li>Divide the batter equally among the muffin cups and bake for 18-20 minutes until golden brown.</li>
                <li>Remove from the oven, let them cool for a few minutes, and enjoy!</li>
              </ol>
            </section>

            <section>
              <p>Published on <time dateTime="2023-06-06">June 6, 2023</time> by <cite>Foodie Delights</cite>.</p>
            </section>
          </article>
        )}
      />
      <StaticExample
        renderedExample={(
          <PreCodeForCodeString
            codeRaw={`
              <article>
                <section>
                  <h1>Recipe: Lemon Blueberry Muffins</h1>
                  <p>Prepare a delightful batch of lemon blueberry muffins in just 30 minutes! Follow this easy recipe for a delicious treat that everyone will love.</p>
                </section>

                <section>
                  <h2>Ingredients</h2>
                  <ul>
                    <li>2 cups all-purpose flour</li>
                    <li>1 cup granulated sugar</li>
                    <li>1/2 cup unsalted butter, melted</li>
                    <li>1 cup fresh blueberries</li>
                    <li>1 tablespoon lemon zest</li>
                    <li>1 teaspoon baking powder</li>
                    <li>1/2 teaspoon salt</li>
                    <li>1 cup milk</li>
                  </ul>
                </section>

                <section>
                  <h2>Instructions</h2>
                  <ol>
                    <li>Preheat the oven to 375°F (190°C) and line a muffin tin with paper liners.</li>
                    <li>In a large bowl, combine the flour, sugar, baking powder, and salt.</li>
                    <li>Add the melted butter, milk, lemon zest, and gently fold in the blueberries.</li>
                    <li>Divide the batter equally among the muffin cups and bake for 18-20 minutes until golden brown.</li>
                    <li>Remove from the oven, let them cool for a few minutes, and enjoy!</li>
                  </ol>
                </section>

                <section>
                    <p>Published on <time dateTime="2023-06-06">June 6, 2023</time> by <cite>Foodie Delights</cite>.</p>
                </section>
              </article>
            `}
          />
        )}
        quickTips={(
          <>
            <p>
              In this example, semantic HTML elements are used to structure the text of a recipe article.
              The <code>&lt;article&gt;</code> element signifies that the content represents independent, self-contained information. Within
              the article, we have used appropriate tags to indicate sections, headings, paragraphs, lists, and citations.
            </p>
            <p>
              The <code>&lt;h1&gt;</code> heading denotes the main title of the article, which is the recipe name. Subheadings
              for &quot;Ingredients&quot; and &quot;Instructions&quot; are represented by <code>&lt;h2&gt;</code> tags. The ingredients and
              instructions are listed using <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> tags respectively, providing a clear structure.
            </p>
            <p>
              Additionally, we&apos;ve included a <code>&lt;section&gt;</code> element to break out the sections of the menu. Assistive technologies
              will then announce the different areas of the recipe to the user. The publication date is marked with a <code>&lt;time dateTime=&quot;...&quot;&gt;</code> tag,
              providing a machine-readable format for dates. The source or author is cited using the <code>&lt;cite&gt;</code> element which defaults the content to italics
              and when a screen reader encounters it, it typically announces it as the &quot;cite&quot; or &quot;citation&quot; element.
            </p>
          </>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <ul>
        <li>
          <strong>Accessibility.</strong> Semantic elements around text are inherently accessible and do not need to have ARIA roles added.
          Remember, The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
        </li>
        <li>
          <strong>Consistency.</strong> Semantic code creates consistency. It is easier to target, which improves the ability to style or
          add custom functionality to specific elements using different programming languages.
        </li>
        <li>
          <strong>Upkeep.</strong> The Basic example is fairly simple, but if there were many <code>&lt;div&gt;</code> tags nested within each
          other it would make understanding the structure much more difficult. You&apos;ll notice in the Semantic example, the code is much easier
          to read and understand even though there is more of it, therefore it will be easier to maintain later on.
        </li>
      </ul>
    </div>
  );
}

ParagraphDocumentation.propTypes = propTypes;
ParagraphDocumentation.defaultProps = defaultProps;

export default ParagraphDocumentation;
