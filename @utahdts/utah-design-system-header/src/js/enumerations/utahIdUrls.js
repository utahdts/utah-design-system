/** @enum {string} */
export const utahIdUrls = {
  PROFILE: 'https://mylogin.utah.gov',
  SIGN_IN: `https://mylogin.utah.gov/login?goto=${window.location}`,
  SIGN_OUT: `https://mylogin.utah.gov/logout?goto=${window.location}`,
  USER_INFO: 'https://mylogin.utah.gov/profile/#/account-info',
};
