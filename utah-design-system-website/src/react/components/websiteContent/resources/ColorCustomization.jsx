import { PreCodeForCodeString } from '../../preCode/PreCodeForCodeString';

export function ColorCustomization() {
  return (
    <PreCodeForCodeString
      showBackgroundColor
      codeRaw={`
        <!-- Include the CSS and Javascript for the Utah Header -->
        <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css">

        <!-- Override the default design system css -->
        <style>
          /* Override the default design system colors */
          .utah-design-system {
            --primary-color: #3c7b24;
            --primary-color-dark: #2e4326;
            --primary-color-light: #e1eadd;

            --secondary-color: #0e80a7;
            --secondary-color-dark: #205162;
            --secondary-color-light: #edf5f8;

            --accent-color: #ffb100;
            --accent-color-dark: #745a1e;
            --accent-color-light: #fff9ec;

            --header-primary-color: var(--primary-color);
            --link-color: var(--primary-color);
            --link-color-dark: var(--primary-color-dark);
          }
        </style>
      `}
      className="mt-spacing"
    />
  )
}
