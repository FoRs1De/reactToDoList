import { useState } from 'react';
import BottomInput from './BottomInput';

// eslint-disable-next-line react/prop-types
const Input = ({ addTodoItemHandler }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodoItemHandler(text);
    setText('');
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
        {display == true && <BottomInput />}
      </form>
    </div>
  );
};

export default Input;
