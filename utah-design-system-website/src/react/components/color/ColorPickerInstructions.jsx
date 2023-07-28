/* eslint-disable max-len */
import { Icons } from '@utahdts/utah-design-system';
import colorPickerInstuctionsImage from '../../../static/images/screenshots/colorPicker/colorPickerInstructions.webp';

function ColorPickerInstructions() {
  return (
    <div className="color-picker-instructions">
      <img src={colorPickerInstuctionsImage} alt="screenshot of color picker" className="color-picker-instructions__image" />
      <div className="color-picker-instructions__text">
        <ol className="mt-spacing">
          <li>
            <strong>Select the color</strong> you wish to change, such as Primary, Primary Dark, Secondary, etc.
            The selected color will be indicated by a blue selection border.
          </li>
          <li>
            <strong>Enter the color</strong> in the text input as a hex color.
            Or you can <strong>pick the color</strong> from the provided color palette.
            The selected color in the color palette is indicated as a circle.
          </li>
          <li>
            <strong>The color contrast ratio</strong> is indicated here based on normal size text.
            The contrast color will either be light or dark, depending on the color you have chosen.
          </li>
          <li>
            <strong>The contrast color</strong> is indicated here as a solid box with the hex color value.
          </li>
          <li type="disc">
            Use the <strong>&quot;Contrast&quot; tab</strong> to compare any colors you have picked (as well as a set of neutral colors)
            to see their contrast values and WCAG rating (AA, AAA, or not passing).
          </li>
          <li type="disc">
            <Icons.IconReset /><strong>Reset</strong> the color pickers to the default.
          </li>
          <li type="disc">
            <Icons.IconShare /><strong>Share</strong> your colors with others.
            When you click this button a share link will be copied to your clipboard.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ColorPickerInstructions;
