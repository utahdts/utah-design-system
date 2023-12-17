/** @enum {string} */
export const utahIdUrls = {
  PROFILE: 'https://id.utah.gov',
  SIGN_IN: `https://id.utah.gov/login?goto=${window.location}`,
  SIGN_OUT: `https://id.utah.gov/logout?goto=${window.location}`,
  USER_INFO: 'https://id.utah.gov/api/userInfo',
};
