import { PreCodeForCodeString } from '../../preCode/PreCodeForCodeString';

export function ColorCustomization() {
  return (
    <PreCodeForCodeString
      showBackgroundColor
      codeRaw={`
        <!-- Include the CSS for the Utah Design System and Utah Header -->
        <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css">

        <style>
          /* Override the default design system colors */
          .utah-design-system {
            --primary-color: var(--utah-brand-secondary-color-blue-03);
            --primary-color-dark: var(--utah-brand-secondary-color-blue-05);
            --primary-color-light: var(--utah-brand-secondary-color-blue-00);

            --secondary-color: var(--utah-brand-secondary-color-teal-03);
            --secondary-color-dark: var(--utah-brand-secondary-color-teal-05);
            --secondary-color-light: var(--utah-brand-secondary-color-teal-00);

            --accent-color: var(--utah-brand-primary-color-gold-light);
            --accent-color-dark: #a26100;
            --accent-color-light: #ffecc3;

            --header-primary-color: var(--primary-color);
            --header-primary-color-dark: var(--primary-color-dark);

            --link-color: var(--primary-color);
            --link-color-dark: var(--primary-color-dark);
          }
        </style>
      `}
      className="mt-spacing"
      allowScrollOverflow
    />
  )
}
