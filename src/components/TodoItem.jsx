import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ToDoItem = ({ todo, deleteItemHandler, doneTodoItemHandler }) => {
  let clickHandler = () => {
      doneTodoItemHandler(todo.id);
  };

  return (
    <div className="wrapper-todoitem">
      <div className="left-todo">
        <AiOutlineCheckCircle className={!todo.done ? 'unchecked' : 'checked'} onClick={clickHandler} />
        <p className={!todo.done ? 'uncrossed' : 'crossed'}>{todo.text}</p>
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
