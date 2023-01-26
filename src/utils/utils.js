export const daysLeft = (lastday) => {
  const today = new Date().getTime() / 1000;
  const deadline = new Date(lastday).getTime() / 1000;
  const remainingSecs = Math.floor(deadline - today);
  const remainingDays = Math.floor(remainingSecs / 86400);

  if (remainingDays > 1) {
    return `${remainingDays} days`;
  } else if (remainingDays === 1) {
    return '1 day';
  } else {
    if (remainingSecs > 0) {
      return 'Last day';
    } else {
      return 'Time is up';
    }
  }
};
