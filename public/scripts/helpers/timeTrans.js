/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function formatTime(timestamp) {
  const now = new Date();
  timestamp = new Date(timestamp);
  // timestamp.setTime(timestamp.getTime() - 60 * 60 * 1000);
  const createdAtDate = new Date(timestamp);
  const difference = now.getTime() - createdAtDate.getTime();
  if (difference < 0) {
    return 'in the future';
  }
  if (difference < 1000) {
    return 'just now';
  }
  if (difference < 60 * 1000) {
    const seconds = Math.floor(difference / 1000);
    return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
  }
  if (difference < 60 * 60 * 1000) {
    const minutes = Math.floor(difference / (60 * 1000));
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  }
  if (difference < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(difference / (60 * 60 * 1000));
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  }
  const days = Math.floor(difference / (24 * 60 * 60 * 1000));
  return `${days} day${days === 1 ? '' : 's'} ago`;
}
