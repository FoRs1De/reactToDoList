import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ToDoItem = ({
  todo,
  deleteItemHandler,
  doneTodoItemHandler,
  editTodoItemHandler,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  let clickHandler = () => {
    doneTodoItemHandler(todo.id);
  };

  let editForm = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setUpdatedText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      editTodoItemHandler(todo.id, updatedText);
      setIsEditing(false);
    }
  };
  return (
    <div className="wrapper-todoitem">
      <div className="left-todo">
        <AiOutlineCheckCircle
          className={!todo.done ? 'unchecked' : 'checked'}
          onClick={clickHandler}
        />
        {isEditing ? (
          <input
            className="todoInput"
            type="text"
            value={updatedText}
            onChange={handleInputChange}
            onKeyPress={handleSubmit}
          />
        ) : (
          <p className={!todo.done ? 'uncrossed' : 'crossed'}>{todo.text}</p>
        )}
      </div>
      <div className="right-todo">
        {!isEditing && !todo.done && (
          <FiEdit className="icon" onClick={editForm} />
        )}
        <AiOutlineDelete
          className="icon"
          onClick={() => deleteItemHandler(todo.id)}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
