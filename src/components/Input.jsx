import { useState } from 'react';
import BottomInput from './BottomInput';

// eslint-disable-next-line react/prop-types
const Input = ({ addTodoItemHandler }) => {
  const [text, setText] = useState('');
  let [warning, setWarning] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (document.querySelector('#txt').value.length > 0) {
      addTodoItemHandler(text);
      setText('');
      setWarning('');
    } else {
      {
        setWarning('Add a task!');
      }
    }
  };
  let [display, setDisplay] = useState(false);
  let show = () => {
    setDisplay(true);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-top">
          <input
            className="radio"
            type="radio"
            onClick={(e) => {
              e.target.checked = false;
            }}
          />
          <input
            id="txt"
            type="text"
            placeholder="Add a task"
            onFocus={show}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {display == true && <BottomInput warning={warning} />}
      </form>
    </div>
  );
};

export default Input;
