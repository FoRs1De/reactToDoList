import {
  faCalendarDays,
  faRepeat,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomInput = ({ warning }) => {
  return (
    <div className="form-bottom">
      <div className="form-bottom-left">
        <FontAwesomeIcon icon={faCalendarDays} className="bottom-i" />
        <FontAwesomeIcon icon={faBell} className="bottom-i" />
        <FontAwesomeIcon icon={faRepeat} className="bottom-i" />
        <p className={warning ? 'warning' : 'nowarning'}>{warning}</p>
      </div>
      <button id="add">Add</button>
    </div>
  );
};

export default BottomInput;
