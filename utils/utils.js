const weddingDate = new Date('August 13, 2022 17:30:00');

// calculate time till the wedding!
export const timeTillWedding = () => {
  const totalSeconds = Math.round((weddingDate.getTime() - Date.now()) / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  const days = totalSeconds > 0 ? Math.floor(totalSeconds / (60 * 60 * 24)) : 0;
  const hours = totalHours > 0 ? totalHours % 24 : 0;
  const minutes = totalMinutes > 0 ? totalMinutes % 60 : 0;
  // console.log(`${days} days, ${hours} hours, ${minutes} minutes`);

  return { days: days, hours: hours, minutes: minutes }
}