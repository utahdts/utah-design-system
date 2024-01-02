/* eslint-disable max-len */
import { ExternalLink } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import imageCropped from '../../../../static/images/screenshots/examples/images-crop-example.webp';
import imagePixelated from '../../../../static/images/screenshots/examples/images-pixelated-example.webp';
import imageTextOverlay from '../../../../static/images/screenshots/examples/images-text-overlay-example.webp';
import { LightBox } from '../../lightbox/LightBox';
import { pageUrls } from '../../routing/pageUrls';
import { StaticExample } from '../../staticExamples/StaticExample';

export function ImagesDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Images</h1>
      <p className="lead-in">
        An image is a native HTML element. Used appropriately, visual elements can play an important role in storytelling, distinguishing products, and
        clarifying complex processes that may be challenging to convey with words to the user.
      </p>

      <hr />
      <h2 id="section-incorporating-multiple-mediums" className="mb-spacing">Incorporating multiple mediums</h2>
      <p>
        Illustration, photography, and icons can co-exist by creating visual interest, communicating intent, and building
        familiarity with your services, products, and processes.
      </p>

      <h3 id="section-illustrations">Illustrations</h3>
      <ul>
        <li>
          <strong>Simplified images.</strong> Use illustrations to show a simplified image of something complex. For example:
          <ul className="mb-spacing">
            <li>to demonstrate a physical interaction, like scanning a passport</li>
            <li>to help users find something on a document, like a reference number</li>
            <li>to illustrate the steps of a complicated registration process</li>
          </ul>
        </li>
      </ul>

      <h3 id="section-photography">Photography</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Establish a clear focal point.</strong> Ensure that your imagery has a distinctive focal point, as
          it affects how the images should be cropped for various sizes.
        </li>
        <li>
          <strong>Resolution and loading speed.</strong> The loading speed of imagery is primarily influenced by its
          resolution. To optimize network bandwidth, try to keep the resolution low whenever feasible. However, it is
          essential to test and determine appropriate resolution sizes for specific aspect ratios and devices, ensuring
          that assets appear crisp and devoid of pixelation.
        </li>
        <li>
          <strong>Sizing/Aspect Ratios.</strong> Cropping images to the following aspect ratios can help ensure consistent
          image sizing: <code>16:9</code>, <code>4:3</code>, <code>3:2</code>, and <code>1:1</code>.
        </li>
      </ul>

      <StaticExample
        renderedExample={<LightBox image={imageCropped} alt="cropped images example" className="flex-2up-gap" />}
        quickTips="Identify a clear focal point of your image when considering various aspect ratios."
      />

      <StaticExample
        renderedExample={<LightBox image={imagePixelated} alt="pixelated images example" className="flex-2up-gap" />}
        quickTips="Avoid images with pixelation."
      />

      <h3 id="section-icons">Icons</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Easily scan pages.</strong> Icons can prove beneficial in established working systems where users
          are familiar with the interface. In such cases, icons can assist users in swiftly scanning pages. However, it
          is generally advisable to accompany icons with visible text labels for added clarity and comprehension in most
          situations.
        </li>
        <li>
          <strong>Guidelines on icons.</strong> For more information on available icons and guidelines regarding their usage, please
          refer to <Link to={pageUrls.icons}>icons</Link>.
        </li>
      </ul>

      <h2 id="section-when-to-use">When to Use</h2>
      <ul className="mb-spacing">
        <li>
          <strong>Selecting images.</strong> Images should be chosen based on their ability to effectively convey your
          message and align with your agency&apos;s services. Whether you opt for user-generated photography, stock
          photography, professional photography, or various styles of illustration, they should all contribute to a
          consistent look and feel that represents your brand.
        </li>
        <li>
          <strong>Establishing intent.</strong> Imagery assists users in recognizing the intended purpose of different content
          elements, especially during a customer&apos;s initial interaction with your site or app.
        </li>
      </ul>

      <h2 id="section-when-to-use-something-else">When to Use Something Else</h2>
      <ul className="mb-spacing">
        <li>
          <strong>Depending on imagery to tell the entire story.</strong> Images are meant to supplement your message. If you
          are depending on an image or illustration to convey your primary message, it&apos;s probably best to revisit your
          copy to ensure that it is well-written, concise, and easily understood; Especially, for those without access to visual elements.
        </li>
        <li>
          <strong>Avoid images that contain text.</strong> Any text inside an image will be difficult to read, especially for users
          that need to read text using screen readers. Prioritize the use of written content.
        </li>
        <li>
          <strong>Pixelated images.</strong> If you don&apos;t have access to high-resolution images, consider
          utilizing services that provide quality images.
        </li>
      </ul>

      <h2 id="section-usability-guidance">Usability Guidance</h2>
      <ul className="mb-spacing">
        <li>
          Ensure that all information conveyed through images is comprehensible to individuals with visual impairments. Consider
          the needs of partially-sighted users and ensure compatibility with assistive technologies that facilitate accessibility.
        </li>
        <li>
          Rather than depending on imagery, prioritize the creation of clear and concise content as the main focus. By emphasizing
          well-written text, you can improve usability and guarantee a smooth user experience, even for individuals without access
          to visual elements.
        </li>
        <li>
          While incorporating images can enhance users&apos; understanding of instructions, it is important to remember that images
          should be used as supplementary visual aids, not the primary source of information. The written content should always
          provide comprehensive instructions for users to successfully complete the process.
        </li>
        <li>
          All images and icons that contribute to the content require meaningful alternative text. This can be achieved primarily by adding the <code>alt</code> property to the image.
        </li>
        <li>
          Make use of photography when it is essential to provide an authentic representation of something. For example, displaying
          a preview of a document uploaded by a user.
        </li>
      </ul>

      <h2 id="section-using-fills">Using Fills to Darken Images and Increase Text Visibility</h2>
      <p>
        Placing white text over an image has gained popularity. When executed effectively, it imparts a refined and professional
        appearance. However, if not done correctly, it can result in illegible content that is difficult to read.
      </p>
      <StaticExample
        renderedExample={<LightBox image={imageTextOverlay} alt="image text overlay example" className="flex-2up-gap" />}
        quickTips="Examples of this technique being applied correctly"
      />
      <p>
        In certain situations, images may have lighter areas, which can be frustrating to overlay text. Certain letters disappear when
        crossing these lighter areas. An effective remedy is to apply a dark fill to the image, or a box surrounding the text. Adjust
        the opacity until achieving a suitable balance between readability and preserving the original image&#39;s &quot;feel&quot;. Remember to achieve
        a minimum <code>3:1</code> contrast ratio for large text and <code>4.5:1</code> contrast ratio for normal size text.
      </p>

      <h2 id="section-writing-alt-text">Writing Alt text</h2>
      <p>
        Alternative text, or alt text, is read out by screen readers and displayed if an image does not load or if images have
        been switched off. It provides a concise description summarizing the contents, events, and textual elements depicted in
        an image.
      </p>
      <p>
        <strong>Example:</strong> Kids attending a swim meet, competing in the 50 Free.
      </p>

      <p className="mb-spacing-xs">When writing alt text, follow these guidelines:</p>
      <ul>
        <li>
          The Utah Design System recommends alt text be at least 20 characters long.
        </li>
        <li>
          Alt text should be no more than 2 sentences. Be concise.
        </li>
        <li>
          Convey the meaning that the image is expressing to the reader. You don&apos;t need to describe every detail in the image.
        </li>
        <li>
          Include all critical information, such as numbers and other data.
        </li>
        <li>
          Do not duplicate information that appears in the image&apos;s caption or the content of the page. If the image itself is
          described elsewhere on the page, keep the alt text minimal.
        </li>
        <li>
          Do not start alt text with phrases like &quot;Image of&quot;, &quot;Photo of&quot;, or &quot;Illustration of&quot;.
          A screen reader will announce the presence of an image for the user.
        </li>
        <li>
          Avoid adding the name of the photographer or person who created the image.
        </li>
        <li>
          Avoid adding extra information that is not in the image.
        </li>
      </ul>

      <h3 id="section-writing-captions" className="mt-spacing">Writing Captions that Complement Alt Text</h3>
      <ul>
        <li>
          If you want to add information that would benefit both sighted visitors and visitors using screen readers, put it in the caption.
        </li>
        <li>
          Captions shouldn&apos;t duplicate the alt text. The alt text and caption should supplement each other, with the alt text
          written for screen readers and the captions written for all visitors.
        </li>
      </ul>

      <h3 id="section-when-to-use" className="mt-spacing">When to use Alt text</h3>
      <p>Add alt text when you need to describe visual details you cannot practically include in the written content.</p>
      <p className="mb-spacing-xs">
        There are some cases when an empty <code>alt=&quot;&quot;</code> attribute or <code>role=&quot;presentation&quot;</code> is
        more appropriate. When using either of these tags, screen readers will not read them. Use cases where images do not require
        descriptive text include:
      </p>
      <ul className="mb-spacing">
        <li>a decorative image that does not include important content.</li>
        <li>an icon with a text label, where the alt text would repeat the text label.</li>
        <li>an image used in a link, where the image is not needed to understand the link.</li>
      </ul>

      <p>
        To decide if an image needs alt text, see the <ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree/">Web Accessibility Initiative</ExternalLink> alt decision tree.
      </p>
    </div>
  );
}
