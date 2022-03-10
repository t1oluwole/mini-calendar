/* ===== STYLESHEET ===== */
/* ===== DEFINE VARIABLE ===== */

var a = new Date();

/* ===== DEFINE DAYS ===== */

var dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/* ===== DEFINE MONTHS ===== */

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/* ===== DATE FORMAT ===== */

var date =
  dayNames[a.getDay() - 1] +
  "  " +
  a.getDate() +
  " " +
  monthNames[a.getMonth()] +
  " " +
  a.getFullYear();

document.getElementById("date").innerHTML = date;
