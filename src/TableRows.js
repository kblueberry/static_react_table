import { STATUS, STATUS_CONCLUSION } from "./Constants";

function createData(event, advocate, friend, status) {
  return { event: event, advocate: advocate, friend: friend, status: status };
}

export const ROWS = [
  createData(
    { heading: "Purchase", date: "06/17/2020 at 7:13 PM PDT", price: "120$" },
    { email: "autouser1234@gmail.com", title: "Advocate" },
    { email: "fr64673@gmail.com", title: "Friend" },
    { status: STATUS.Pending, result: STATUS_CONCLUSION.passedChecks },
  ),
  createData(
    { heading: "Purchase", date: "07/10/2020 at 5:10 PM PDT", price: "100$" },
    { email: "autouser7784@gmail.com", title: "Advocate" },
    { email: "ad7735@gmail.com", title: "Friend" },
    { status: STATUS.Flagged, result: STATUS_CONCLUSION.markedAsFraud },
  ),
  createData(
    { heading: "Purchase", date: "07/11/2020 at 2:02 PM PDT", price: "28$" },
    { email: "autouser8874@gmail.com", title: "Advocate" },
    { email: "ae88353@gmail.com", title: "Friend" },
    { status: STATUS.Approved, result: STATUS_CONCLUSION.passedChecks },
  ),
  createData(
    { heading: "Purchase", date: "06/17/2020 at 7:13 PM PDT", price: "120$" },
    { email: "autouser1234@gmail.com", title: "Advocate" },
    { email: "fr64673@gmail.com", title: "Friend" },
    { status: STATUS.Blocked, result: STATUS_CONCLUSION.markedAsFraud },
  ),
  createData(
    { heading: "Purchase", date: "06/17/2020 at 7:13 PM PDT", price: "120$" },
    { email: "autouser1234@gmail.com", title: "Advocate" },
    { email: "fr64673@gmail.com", title: "Friend" },
    { status: STATUS.Voided, result: STATUS_CONCLUSION.markedAsFraud },
  ),
];
