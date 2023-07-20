import Input from './Input';
import ToDoList from './TodoList';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';
import { useCallback } from 'react';
const Body = () => {
  let [todos, setTodos] = useState([]);

  // add items into todos array
  const addTodoItemHandler = useCallback(
    (text) => {
      const newItem = {
        text: text,
        done: false,
        id: uuid(),
      };

      setTodos([...todos, newItem]);
      console.log(newItem);
    },
    [todos]
  );
  // delete items from todos array by id

  let deleteItemHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //done or not done
  const doneTodoItemHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return { ...todo };
        }
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [addTodoItemHandler, todos]);

  return (
    <div className="wrapper-body">
      <Input addTodoItemHandler={addTodoItemHandler}></Input>
      <ToDoList
        todos={todos}
        deleteItemHandler={deleteItemHandler}
        doneTodoItemHandler={doneTodoItemHandler}
      ></ToDoList>
    </div>
  );
};

export default Body;
