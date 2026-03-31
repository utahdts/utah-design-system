/**
 *
 * @param {string} dateString
 * @returns string
 */
export function timeSince(dateString) {
  const pastDate = new Date(dateString);
  const now = new Date();
  const differenceInSeconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000);

  if (differenceInSeconds < 3600) {
    const minutes = Math.round(differenceInSeconds / 60);
    return `${minutes}m`;
  } else if (differenceInSeconds < 86400) {
    const hours = Math.round(differenceInSeconds / 3600);
    return `${hours}h`;
  } else {
    const days = Math.round(differenceInSeconds / 86400);
    return `${days}d`;
  }
}
