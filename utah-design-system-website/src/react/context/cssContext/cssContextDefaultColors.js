import { CSS_VARIABLES_KEYS } from '../../enums/cssVariablesKeys';
import { colors, colorsIndexes } from '../../util/color/colors';

export const cssContextDefaultColors = {
  // default --primary-color for website
  [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: colors.CELTIC.swatches[colorsIndexes.primeIndex],
  [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: colors.CELTIC.swatches[0],
  [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: colors.CELTIC.swatches[17],
  [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: colors.NEUTRAL_GRAY.swatches[colorsIndexes.primeIndex],

  [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: colors.CELEDON_BLUE.swatches[colorsIndexes.primeIndex],
  [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: colors.CELEDON_BLUE.swatches[1],
  [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: colors.CELEDON_BLUE.swatches[17],
  [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: colors.NEUTRAL_GRAY.swatches[colorsIndexes.primeIndex],

  [CSS_VARIABLES_KEYS.ACCENT_COLOR]: colors.ELECTRIC_YELLOW.swatches[colorsIndexes.primeIndex],
  [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: colors.ELECTRIC_YELLOW.swatches[1],
  [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: colors.ELECTRIC_YELLOW.swatches[17],
  [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: colors.NEUTRAL_GRAY.swatches[colorsIndexes.primeIndex],
};
