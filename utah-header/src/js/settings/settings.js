let settings = null;

/**
 * @returns {{ size: string }} settings The current settings information
 */
export function getSettings() {
  return settings;
}

export function setSettings(newSettings) {
  settings = { ...settings || {}, ...newSettings };
}
