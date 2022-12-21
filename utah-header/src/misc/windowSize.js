import cssVars from "../../css/1-settings/_exports.scss";

export const WINDOW_SIZES = {
	HANDHELD_SMALL: 'windowHandheldSmall',
	HANDHELD: 'windowHandheld',
	SMALLER: 'windowSmaller',
	SMALL: 'windowSmall',
	MEDIUM: 'windowMedium',
	WIDE: 'windowWide'
};

const windowSize = {
	handheldSmall: parseInt(cssVars[WINDOW_SIZES.HANDHELD_SMALL],10),
	handheld: parseInt(cssVars[WINDOW_SIZES.HANDHELD],10),
	smaller: parseInt(cssVars[WINDOW_SIZES.SMALLER],10),
	small: parseInt(cssVars[WINDOW_SIZES.SMALL],10),
	medium: parseInt(cssVars[WINDOW_SIZES.MEDIUM],10),
};

export function getWindowSize() {
	const currentSize = window.innerWidth;
	let retVal = 'unknown';

	if (currentSize <= windowSize.handheldSmall) {
		retVal = WINDOW_SIZES.HANDHELD_SMALL;
	} else if (currentSize > windowSize.handheldSmall && currentSize <= windowSize.handheld) {
		retVal = WINDOW_SIZES.HANDHELD;
	} else if (currentSize > windowSize.handheld && currentSize < windowSize.smaller) {
		retVal = WINDOW_SIZES.SMALLER;
	} else if (currentSize > windowSize.smaller && currentSize < windowSize.small) {
		retVal = WINDOW_SIZES.SMALL;
	} else if (currentSize > windowSize.small && currentSize < windowSize.medium) {
		retVal = WINDOW_SIZES.MEDIUM;
	} else if (currentSize > windowSize.medium) {
		retVal = WINDOW_SIZES.WIDE;
	}
	return retVal;
}