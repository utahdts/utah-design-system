import React from 'react';

/** @typedef {(param: {className?: string}) => React.JSX.Element} IconsWebsiteFunc */

/** @enum {IconsWebsiteFunc} */
export const IconsWebsite = {
  IconA11y: /** @type {IconsWebsiteFunc} */ (({ className }) => (<svg className={`icon-svg icon-a11y ${className || ''}`} viewBox="0 0 28.8 32" aria-hidden="true"><g><path d="m14.4,5.84c-.78.01-1.52-.3-2.06-.86-.56-.54-.87-1.28-.86-2.06-.01-.78.3-1.52.86-2.06C12.87.3,13.62-.01,14.39,0c.78-.01,1.52.3,2.06.86.56.54.87,1.28.86,2.06.01.78-.3,1.52-.86,2.06-.54.56-1.28.87-2.06.86Zm-4.32,26.16V10.68H0v-2.4h28.8v2.4h-10.08v21.32h-2.4v-10.4h-3.84v10.4h-2.4Z" /></g></svg>)),
  IconBadgeStar: /** @type {IconsWebsiteFunc} */ (({ className }) => (<svg className={`icon-svg icon-badge-star ${className || ''}`} viewBox="0 0 24.38 31.99" aria-hidden="true"><g><path d="m8.57,17.82l1.37-4.38-3.62-2.82h4.42l1.45-4.53,1.41,4.53h4.46l-3.62,2.82,1.33,4.38-3.58-2.7-3.62,2.7Zm-5.37,14.17v-11.58c-1.09-1.11-1.93-2.45-2.46-3.92C.26,15.11,0,13.65,0,12.19c-.08-3.25,1.19-6.4,3.5-8.69C5.79,1.19,8.94-.08,12.19,0c3.25-.08,6.4,1.19,8.69,3.5,2.31,2.29,3.58,5.43,3.5,8.69,0,1.46-.26,2.92-.74,4.3-.53,1.47-1.36,2.81-2.46,3.92v11.58l-8.99-3.01-8.98,3.01Zm8.99-9.9c2.64.05,5.18-.99,7.03-2.88,1.89-1.85,2.93-4.39,2.88-7.03.05-2.64-.99-5.18-2.88-7.03-1.85-1.89-4.39-2.93-7.03-2.88-2.64-.05-5.18.99-7.03,2.88-1.89,1.85-2.93,4.39-2.88,7.03-.05,2.64.99,5.18,2.88,7.03,1.85,1.89,4.39,2.93,7.03,2.88Zm-6.7,6.7l6.7-2.1,6.7,2.1v-6.51c-.99.72-2.1,1.26-3.28,1.6-1.11.32-2.27.49-3.43.5-1.16,0-2.31-.18-3.43-.5-1.18-.34-2.29-.88-3.28-1.6v6.51Z" /></g></svg>)),
  IconChatBubbles: /** @type {IconsWebsiteFunc} */ (({ className }) => (<svg className={`icon-svg icon-chat-bubbles ${className || ''}`} viewBox="0 0 65.08 65" aria-hidden="true"><g><path d="m16.35,52.07c-.87-.05-1.68-.47-2.24-1.14-.65-.59-1.05-1.4-1.1-2.28v-7.97h40.68V13.02h8.13c.86.05,1.66.46,2.2,1.14.64.62,1.02,1.47,1.06,2.36v48.49l-12.93-12.93H16.35ZM0,48.81V3.42c.05-.87.43-1.68,1.06-2.28C1.6.46,2.4.05,3.26,0h42.22c.88.03,1.71.43,2.28,1.1.65.6,1.03,1.44,1.06,2.32v28.96c-.05.87-.43,1.68-1.06,2.28-.56.69-1.39,1.1-2.28,1.14H13.02L0,48.81Zm43.93-17.9V4.88H4.88v32.54l6.02-6.51h33.03Z" /></g></svg>)),
  IconCollaboration: /** @type {IconsWebsiteFunc} */ (({ className }) => (<svg className={`icon-svg icon-collaboration ${className || ''}`} viewBox="0 0 32 23.27" aria-hidden="true"><g><path d="m0,23.27v-5.82c-.01-.68.26-1.33.74-1.8.47-.49,1.12-.76,1.8-.74h5.13c.41,0,.82.11,1.18.31.38.21.71.5.96.85.68,1,1.61,1.81,2.69,2.36,1.08.55,2.28.84,3.49.84,1.21,0,2.41-.28,3.49-.84,1.09-.55,2.02-1.37,2.73-2.36.25-.35.57-.64.94-.85.35-.2.76-.31,1.16-.31h5.13c.68-.01,1.33.26,1.8.74.49.47.76,1.12.75,1.8v5.82h-9.45v-4.33c-.87.8-1.89,1.43-3,1.85-1.13.44-2.33.66-3.54.66-1.21,0-2.4-.22-3.53-.66-1.11-.43-2.13-1.06-3.02-1.85v4.33H0Zm16-6.18c-.85,0-1.7-.21-2.46-.6-.77-.38-1.42-.95-1.91-1.66-.37-.54-.85-1-1.4-1.34-.54-.34-1.14-.57-1.76-.69.93-.85,2.07-1.43,3.31-1.67,1.38-.37,2.79-.57,4.22-.58,1.43.02,2.85.21,4.24.58,1.24.24,2.39.82,3.33,1.67-.63.12-1.22.35-1.76.69-.55.35-1.03.81-1.4,1.34-.49.7-1.14,1.27-1.91,1.66-.77.4-1.62.6-2.49.6Zm-11.64-4.73c-1.06.01-2.08-.42-2.82-1.18-.77-.74-1.19-1.76-1.18-2.82-.02-1.07.41-2.1,1.18-2.84.74-.76,1.76-1.18,2.82-1.16,1.07-.02,2.09.4,2.84,1.16.76.74,1.18,1.77,1.16,2.84.01,1.06-.41,2.08-1.16,2.82-.74.77-1.77,1.2-2.84,1.18Zm23.27,0c-1.06.01-2.08-.42-2.82-1.18-.77-.74-1.19-1.76-1.18-2.82-.02-1.07.41-2.1,1.18-2.84.74-.76,1.76-1.18,2.82-1.16,1.07-.02,2.09.4,2.84,1.16.76.74,1.18,1.77,1.16,2.84.01,1.06-.41,2.08-1.16,2.82-.74.77-1.77,1.2-2.84,1.18h0Zm-11.64-4.36c-1.06.01-2.08-.42-2.82-1.18-.77-.74-1.19-1.76-1.18-2.82-.02-1.07.41-2.1,1.18-2.84C13.92.41,14.94-.01,16,0c1.07-.02,2.09.4,2.84,1.16.76.74,1.18,1.77,1.16,2.84.01,1.06-.41,2.08-1.16,2.82-.74.77-1.77,1.2-2.84,1.18Z" /></g></svg>)),
  IconHeartTag: /** @type {IconsWebsiteFunc} */ (({ className }) => (<svg className={`icon-svg icon-heart-tag ${className || ''}`} viewBox="0 0 32.04 32" aria-hidden="true"><g><path d="m17.74,24.69l5.59-5.59c.28-.28.5-.61.64-.98.13-.36.2-.75.2-1.14.01-.82-.31-1.61-.9-2.18-.57-.59-1.36-.91-2.18-.9-.57.01-1.13.19-1.6.52-.66.47-1.26,1.04-1.76,1.68-.5-.64-1.09-1.21-1.76-1.68-.47-.33-1.03-.51-1.6-.52-.82-.01-1.61.31-2.18.9-.59.57-.91,1.36-.9,2.18,0,.39.07.77.2,1.14.14.37.36.7.64.98l5.6,5.59Zm1.4,6.59c-.46.47-1.08.73-1.74.72-.65.01-1.28-.25-1.74-.72L.68,16.3c-.24-.23-.43-.52-.54-.84C.05,15.16,0,14.85,0,14.54V2.4c-.02-.64.23-1.26.68-1.72C1.13.23,1.76-.02,2.4,0h12.14c.32,0,.65.05.96.14.33.1.64.29.88.54l14.9,14.9c.49.46.76,1.11.76,1.78,0,.67-.27,1.32-.76,1.78l-12.14,12.15Zm-1.64-1.64l12.14-12.14L14.54,2.4H2.4v12.15l15.1,15.1ZM6.59,8.63c.55,0,1.08-.22,1.46-.62.4-.38.62-.91.62-1.46,0-.55-.22-1.08-.62-1.46-.38-.4-.91-.62-1.46-.62-.55,0-1.08.22-1.46.62-.4.38-.62.91-.62,1.46,0,.55.22,1.08.62,1.46.38.4.91.62,1.46.62Z" /></g></svg>)),
  IconShieldCheck: /** @type {IconsWebsiteFunc} */ (({ className }) => (<svg className={`icon-svg icon-shield-check ${className || ''}`} viewBox="0 0 25.6 32" aria-hidden="true"><g><path d="m11.04,21.36l9.12-9.12-1.68-1.64-7.32,7.32-4.04-4.04-1.76,1.76,5.68,5.72Zm1.76,10.64c-3.76-.95-7.04-3.27-9.2-6.5C1.25,22.25-.01,18.33,0,14.32V4.8L12.8,0l12.8,4.8v9.52c.01,4.01-1.25,7.93-3.6,11.18-2.16,3.23-5.44,5.55-9.2,6.5Zm0-2.48c3.07-1.02,5.71-3.04,7.5-5.74,1.92-2.78,2.94-6.08,2.9-9.46v-7.84l-10.4-3.92L2.4,6.48v7.84c-.04,3.38.98,6.68,2.9,9.46,1.79,2.7,4.43,4.72,7.5,5.74Z" /></g></svg>)),
  IconStarHollow: /** @type {IconsWebsiteFunc} */ (({ className }) => (<svg className={`icon-svg icon-star-hollow ${className || ''}`} viewBox="0 0 33.68 32" aria-hidden="true"><g><path d="m10.23,26.74l6.61-3.96,6.61,4-1.77-7.49,5.81-5.05-7.66-.67-2.99-7.07-2.99,7.03-7.66.67,5.81,5.05-1.77,7.49Zm-3.79,5.26l2.74-11.83L0,12.21l12.13-1.05L16.84,0l4.72,11.16,12.13,1.05-9.18,7.96,2.74,11.83-10.4-6.27-10.4,6.27Z" /></g></svg>)),
};
