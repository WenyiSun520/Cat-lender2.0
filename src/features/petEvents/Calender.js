import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { PetEventsList } from "./petEventsList.js";

const Month = [
  "January",
  "Febuary",
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
const curDate = new Date();
export default function Calender() {
  const [days, setDays] = useState(DisplayCalender());
  const [renderedDate, setrenderedDate] = useState(
    curDate.getFullYear() +
      "-" +
      curDate.getMonth() +
      1 +
      "-" +
      curDate.getDate()
  );
  console.log("renderedDate is: "+renderedDate)

  const datePicker = (e) => {
    let selectDate = new Date();
    let list = e.target.classList;
    selectDate.setDate(list[0]); //change the date to user selected
   setrenderedDate(
      selectDate.getFullYear() +
      "-" +
      selectDate.getMonth() +
      1 +
      "-" +
      selectDate.getDate()
    );
  };
  let key = -1;
  let displayDays = days.map((d) => {
    if (d === curDate.getDate()) {
      return (
        <div
          className={`${d} today add-events`}
          key={key++}
          onClick={datePicker}
        >
          {d}
        </div>
      );
    } else {
      return (
        <div className={`${d} add-events`} key={key++} onClick={datePicker}>
          {d}
        </div>
      );
    }
  });

  //getMonth is 0-based, it will return the index of the month
  // July: return 6
  const curMonthIndex = curDate.getMonth();
  const prevCalender = () => {
    curDate.setMonth(curDate.getMonth() - 1);
    setDays(DisplayCalender());
  };

  const nextCalender = () => {
    curDate.setMonth(curDate.getMonth() + 1);
    setDays(DisplayCalender());
  };
  const navigate = useNavigate();
  const handleFormClicked = () => {
    navigate("/addEventForm");
  };

  return (
    <div id="calender-page">
      <div className="calender-container">
        <div className="month">
          <FontAwesomeIcon
            className="prev"
            onClick={prevCalender}
            icon={faArrowAltCircleLeft}
          />
          <div className="cur-date">
            <h1 className="cur-month">{Month[curMonthIndex]}</h1>
            <p>{curDate.toDateString()}</p>
          </div>
          <FontAwesomeIcon
            className="next"
            onClick={nextCalender}
            icon={faArrowAltCircleRight}
          />
        </div>
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days">{displayDays}</div>
        <button id="addpetsEventBtn" onClick={handleFormClicked}>
          Add Reminder
        </button>
      </div>
      <PetEventsList selectedDate={renderedDate} />
    </div>
  );
}

// get the days in sequence of a month
function DisplayCalender() {
  const lastDateOfCurMonth = new Date( // specify how many days in curr month: 30, 31...
    curDate.getFullYear(),
    curDate.getMonth() + 1,
    0 // set the day 0, will return the ending date of previous month
  ).getDate();

  //find how many days of previous month should display on calender:
  const lastDayOfCurMonth = new Date( // specify the index of week of the last day
    curDate.getFullYear(),
    curDate.getMonth() + 1,
    0
  ).getDay();
  const firstDateOfCurMonth = new Date( // specify the first day of current Month
    curDate.getFullYear(),
    curDate.getMonth(),
    1
  );
  //get the day of the first date
  //getDay():0-based; 0 represents Sunday
  const firstDayOfCurMonth = firstDateOfCurMonth.getDay();

  // last date of Previous Month
  const lastDateOfPrevMonth = new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    0
  );
  const lastDayOfPrevMonth = lastDateOfPrevMonth.getDate(); // specify how many days in the previous month

  let days = [];
  //displayed days of previous month
  for (let x = firstDayOfCurMonth - 1; x >= 0; x--) {
    days.push(lastDayOfPrevMonth - x);
  }
  //displayed days of current month
  for (let i = 1; i <= lastDateOfCurMonth; i++) {
    days.push(i);
  }
  //displayed days of next Month
  for (let j = 0; j < 6 - lastDayOfCurMonth; j++) {
    days.push(j + 1);
  }
  return days;
}
