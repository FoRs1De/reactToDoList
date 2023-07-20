import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faObjectUngroup } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  let date = new Date();
  let today = date.getDate();
  let month = date.getMonth();
  let week = date.getUTCDay();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hr < 10) {
    hr = '0' + hr;
  }

  if (min < 10) {
    min = '0' + min;
  }

  if (sec < 10) {
    sec = '0' + sec;
  }

  if (today < 10) {
    today = '0' + today;
  }

  let weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Monday',
  ];

  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let dayName = weekDays[week - 1];

  let monthName = monthNames[month];

  let showDate = `${hr}:${min}:${sec} ${dayName}, ${monthName} ${today} `;

  let [dateNew, setDate] = useState(showDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(showDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="wrapper-header">
      <div className="left-header">
        <div className="sun">
          <FontAwesomeIcon icon={faSun} className="sunIcon" />
          <h2>My Day</h2>
        </div>
        {dateNew}
      </div>
      <div className="right-header">
        <ul>
          <li>
            <FontAwesomeIcon icon={faArrowDownShortWide} className="i" />
            Sort
          </li>
          <li>
            <FontAwesomeIcon icon={faObjectUngroup} className="i" />
            Group
          </li>
          <li>
            <FontAwesomeIcon icon={faLightbulb} className="i" />
            Suggestions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
