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
      let payload = [...todos, newItem];
      setTodos(payload);
      localStoreFunk(payload);
    },
    [todos]
  );

  // delete items from todos array by id
  let deleteItemHandler = (id) => {
    let payload = todos.filter((todo) => todo.id !== id);
    setTodos(payload);
    localStoreFunk(payload);
  };

  //done or not done
  const doneTodoItemHandler = (id) => {
    let payload = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return { ...todo };
      }
    });
    setTodos(payload);
    localStoreFunk(payload);
  };

  //EDIT TEXT
  const editTodoItemHandler = (id, text) => {
    let payload = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: text };
      } else {
        return { ...todo };
      }
    });
    setTodos(payload);
    localStoreFunk(payload);
  };

  const localStoreFunk = (payload) =>
    localStorage.setItem('todos', JSON.stringify(payload));

  useEffect(() => {
    let storagePayload = JSON.parse(localStorage.getItem('todos')) ?? [];
    setTodos(storagePayload);
  }, []);

  return (
    <div className="wrapper-body">
      <Input addTodoItemHandler={addTodoItemHandler}></Input>
      <ToDoList
        todos={todos}
        deleteItemHandler={deleteItemHandler}
        doneTodoItemHandler={doneTodoItemHandler}
        editTodoItemHandler={editTodoItemHandler}
      ></ToDoList>
    </div>
  );
};

export default Body;
