import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faObjectUngroup } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const getFormattedDate = () => {
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth();
    const week = date.getUTCDay();
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

    const weekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const monthNames = [
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

    const dayName = weekDays[week];
    const monthName = monthNames[month];

    return `${hr}:${min}:${sec} ${dayName}, ${monthName} ${today} `;
  };

  const [dateNew, setDate] = useState(getFormattedDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getFormattedDate());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
