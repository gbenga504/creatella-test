const MONTH = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

export const getDate = date => {
  let currentDate = new Date(),
    difference = currentDate.getTime() - new Date(date).getTime(),
    time = difference / 86400000;

  if (time > 7) {
    return `${MONTH[new Date(date).getMonth()]} ${new Date(
      date
    ).getDate()} ${new Date(date).getFullYear()} at ${new Date(
      date
    ).getHours()}:${new Date(date).getMinutes()}:${new Date(
      date
    ).getSeconds()}`;
  } else {
    return `${Math.floor(time)} days ago`;
  }
};
