import React, { useMemo } from 'react';

/** @typedef {import('@utahdts/utah-design-system').AriaLiveType} AriaLiveType */

/**
 * @typedef MessageObject {
 *  @property {string} id
 *  @property {import('react').ReactNode} message
 * }
 */

/**
 * @param {number} numberOfLists
 * @returns {MessageObject[][]}
 */
function setupDefaultLists(numberOfLists) {
  return Array.from({ length: numberOfLists }).map(() => []);
}

const NUMBER_REGIONS = 100;

/**
 * @param {object} props
 * @param {AriaLiveType} props.ariaLiveType
 * @param {import('react').ReactNode[]} props.messages
 * @returns {import('react').JSX.Element}
 */
export function AriaLiveMessages({ ariaLiveType, messages }) {
  const messagesLists = useMemo(
    () => (
      // divide out messages in to equally chunked lists
      // NUMBER_REGIONS specifies how many queues there are for this list
      // when a new message comes in it goes to the list that was most stale
      // this way new messages rotate through the divs
      messages.reduce(
        (lists, message, i) => {
          // give messages an ID for their react key
          lists[i % NUMBER_REGIONS]?.push({ id: `${i}-${message}`, message });
          return lists;
        },
        setupDefaultLists(NUMBER_REGIONS)
      )
    ),
    [messages]
  );

  return (
    <div className="aria-live-regions visually-hidden" key={`aria-live-region-${ariaLiveType}`}>
      {
        messagesLists
          // pull the last message off each list queue
          .map((messagesList) => messagesList[messagesList.length - 1])

          // regions: must have same key no matter the message for each region AND must always have all the regions (otherwise it may stutter)
          .map((messagesListMessage, i) => (
            messagesListMessage
              ? (
                // eslint-disable-next-line react/no-array-index-key
                <div aria-live={ariaLiveType} key={`${ariaLiveType}-messages-${i}`} role="alert">
                  {messagesListMessage.message}
                </div>
              )
              : (
                // eslint-disable-next-line react/no-array-index-key
                <div aria-live={ariaLiveType} key={`${ariaLiveType}-messages-${i}`} role="alert" />
              )
          ))
      }
    </div>
  );
}
