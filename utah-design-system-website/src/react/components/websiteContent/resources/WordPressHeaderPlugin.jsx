/* eslint-disable no-useless-escape */
// navigation
import { Link } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';
import { PreCodeForCodeString } from '../../preCode/PreCodeForCodeString';
// content

export function WordPressHeaderPlugin() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">WordPress Header Plugin</h1>
      <p className="lead-in mt-spacing">
        A WordPress plugin has been created to ease the adoption of the Utah Header in a WordPress website environment.
        This plugin enables tight integration with WordPress&#39; menu and the state of Utah header.
      </p>
      <h2 id="download-and-installation">Download and installation</h2>
      <p>Use the link below to download the latest version of the plugin.</p>
      <div className="flex justify-center mt-spacing"><a href="https://drive.google.com/file/d/1BjLm6KZkPx0T6GvXnBm9hdvzIUuLsoCC/view?usp=sharing" className="button button--primary-color button--solid">Download Utah Header Plugin</a></div>
      <h3 id="installation-instructions" className="mt-spacing">Installation instructions</h3>
      <ol>
        <li>On the WordPress plugins admin page click the &quot;Add New&quot; button.</li>
        <li>On the &quot;Add Plugins&quot; page click the &quot;Upload Plugin&quot; button.</li>
        <li>Find the plugin zip file you downloaded above and upload it.</li>
        <li>Activate the plugin.</li>
        <li>The Utah Header will begin working immediately. You should continue to the plugin&#39;s settings page to customize it for your site.</li>
      </ol>

      <h2 id="plugin-settings-description" className="mt-spacing">Plugin settings</h2>
      <ul>
        <li>
          <strong>Title.</strong> Provide a title that describes the site. A title is always required even if it is not visible.
          The title will be used to provide an accessible description of the logo. You can use both a logo and a title,
          as has been done on this website.
        </li>
        <li>
          <strong>Show Title.</strong> Controls whether the title is visible or not. An invisible title will be used to describe
          the logo. You must show a logo, title, or both.
        </li>
        <li>
          <strong>Logo (Image).</strong> Choose an image and/or upload a new image in the WordPress media files.
          Ideally the image will be 106px tall (2 X 53px) for a PNG or JPG. This will render the image crisply on a high density
          screen. Using an image larger than 106px tall in not recommended. A larger image will require additional load
          times for website visitors.
        </li>
        <li>
          <strong>Default Menu.</strong> Choose the menu you wish to render with the Utah Header. For sites that require a different menu based on
          the page or section of the website you can utilize the <code>[utah_custom_header_config]</code> shortcode to provide
          a <code>menu_name</code> setting value.
          <br />
          <br />
          For example:
          <PreCodeForCodeString
            codeRaw={`
              [utah_custom_header_config menu_name="Other Menu"]
            `}
            allowScrollOverflow
            showBackgroundColor
          />
          <ul>
            <li>
              <strong>Mega Menu.</strong> You can render a parent menu item&#39;s children as a &quot;Mega Menu&quot; by including a css class
              for the menu item called <code>mega-menu</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Search.</strong> The header can be configured to display a search icon on the right side of the menu bar.
          There are three options for search setting: None, Google, WordPress.
          <ul>
            <li>
              <strong>None.</strong> The menu will not display the search icon.
            </li>
            <li>
              <strong>Google.</strong> This setting is designed to use a Google Programmable Search Engine. In other words the site will utilize
              Google to search the content of the site.
              <br />
              <br />
              Overview of steps to use this setting:
              <ul>
                <li>Create a page with the slug <code>search-results</code></li>
                <li>Create a Google Programmable Search using the &quot;Results only&quot; look and feel</li>
                <li>Place the Google Programmable Search code on the page above.</li>
                <li>The header search popup will load the search page with the search query input by the site visitor.</li>
                <li><a href="https://devnotes.dts.utah.gov/wordpress/google-search-using-the-utah-header-plugin">More detailed instructions can be found here.</a></li>
              </ul>
            </li>
            <li>
              <strong>WordPress.</strong> The search form popup will trigger a normal WordPress search.
            </li>
          </ul>
        </li>
        <li>
          <strong>Skip Link Target.</strong> This allows screen reader users to skip past the header and menus directly to the
          main content of the site. This is usually the ID of the main content element of your website, for example: <code>#main-content</code>.
          If your site is not rendering a targetable ID you can also implement the skip link for any query selectable element like so:
          <PreCodeForCodeString
            codeRaw={`
              javascript:document.querySelector(\\'.x-main\\').tabIndex = 0; document.querySelector(\\'.x-main\\').focus();
            `}
            showBackgroundColor
          />
        </li>
        <li>
          <strong>Other Settings.</strong> The Utah Header has many options beyond the ones listed above. This field allows you to configure
          the Utah Header with those additional options. The value must be a valid javascript object fragment. It will be inserted into the
          configuration call for the Utah Header. A simple example:
          <PreCodeForCodeString
            codeRaw={`
              footer: {
                  showHorizontalRule: true
                }
            `}
            showBackgroundColor
          />
          Please refer to the <Link to={pageUrls.utahHeader}>Utah Design System Header documentation page</Link> for all the
          options you can configure.
        </li>
      </ul>

      <h2 id="short-code" className="mt-spacing">Shortcode</h2>
      <ul className="mb-spacing">
        <li>
          <strong>Shortcode Example.</strong> As you are changing the header settings the shortcode example will be updated with those settings.
          This will give you a good example of how to use the shortcode.
        </li>
        <li>
          <strong>Why Use It.</strong> The shortcode will allow you to make changes to the header configuration on a page by page basis.
          For example, if you have certain pages that require a different menu or header logo.
        </li>
        <li>
          <strong>Shortcode options.</strong> The option <code>menu_name</code> allows you to configure the header to use a certain menu.
        </li>
        <li>
          <strong>Shortcode content.</strong> The content of the shortcode will be inserted directly into the rendered web page.
          Consequently this allows you to call the <code>setUtahHeaderSettings</code> via javascript as shown below.
        </li>
      </ul>
      <PreCodeForCodeString
        codeRaw={`
          [utah_custom_header_config menu_name='Main Menu']
            document.addEventListener('utahHeaderLoaded', () => {
              window["@utahdts/utah-design-system-header"].setUtahHeaderSettings({
                logo: {
                  imageUrl: 'https://dts.utah.gov/wp-content/uploads/DTS-Color.svg'
                },
                title: 'My Utah.gov Website',
                showTitle: false,
                footer: {
                  showHorizontalRule: true
                },
              });
            });
          [/utah_custom_header_config]
        `}
        allowScrollOverflow
        showBackgroundColor
      />

      <h2 id="header-colors">Header Colors</h2>
      <p>
        You can customize the header colors by adding the following css to your website. Modify the <code style={{ whiteSpace: 'nowrap' }}>--primary-color</code> or
        the <code style={{ whiteSpace: 'nowrap' }}>--header-primary-color</code> to change the colors in the header.
        <strong>
          The color must meet a minimum of <code>4.5:1</code> contrast
          ratio or greater since this color is used to render text and other interactive elements in the header.
        </strong> {' '}
        The color variables must be scoped under <code>.utah-design-system</code>. See example below:
      </p>

      <PreCodeForCodeString
        codeRaw={`
          .utah-design-system {
            --primary-color: #175ae2;
            --primary-color-dark: #2f3d5a;
            --primary-color-light: #eef3fc;

            --secondary-color: #0e496f;
            --secondary-color-dark: #2a4058;
            --secondary-color-light: #edf2f4;

            --accent-color: #ad360d;
            --accent-color-dark: #5d3122;
            --accent-color-light: #f9f0ed;

            --header-primary-color: var(--primary-color);
            --link-color: var(--primary-color);
            --link-color-dark: var(--primary-color-dark);

            --gray-color: #474747;
            --gray-medium-color: #616161;
            --gray-medium-light-color: #d7d7d7;
            --gray-light-color: #f1f1f1;
            --gray-dark-color: #333333;

            --hover-gray-color: rgba(0, 0, 0, 0.07);
            --hover-gray-color-opaque: rgba(233, 233, 233);
          }
        `}
        allowScrollOverflow
        showBackgroundColor
      />
      <h2 id="get-help">Get help</h2>
      <p>You can <a href="mailto:dts_ui@utah.gov">contact the DTS Digital Experience Team (dts_ui@utah.gov)</a> for help with this plugin.</p>
    </div>
  );
}
