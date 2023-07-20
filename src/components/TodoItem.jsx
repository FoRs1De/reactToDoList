import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ToDoItem = ({ todo, deleteItemHandler, doneTodoItemHandler }) => {
  let [clickClass, setClickClass] = useState('unchecked');
  let [textClass, setTextClass] = useState('uncrossed');
  let clickHandler = () => {
    if (clickClass === 'unchecked') {
      setClickClass('checked');
      setTextClass('crossed');
      doneTodoItemHandler(todo.id);
    } else {
      setClickClass('unchecked');
      setTextClass('uncrossed');
      doneTodoItemHandler(todo.id);
    }
  };
  return (
    <div className="wrapper-todoitem">
      <div className="left-todo">
        <AiOutlineCheckCircle className={clickClass} onClick={clickHandler} />
        <p className={textClass}>{todo.text}</p>
      </div>
      <div>
        <FiEdit className="icon" />
        <AiOutlineDelete
          className="icon"
          onClick={() => deleteItemHandler(todo.id)}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
