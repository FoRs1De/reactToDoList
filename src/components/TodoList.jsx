import ToDoItem from './TodoItem';
const ToDoList = ({
  todos,
  deleteItemHandler,
  doneTodoItemHandler,
  editTodoItemHandler,
}) => {
  const doneTodos = todos.filter((todo) => !todo.done);
  const unDoneTodos = todos.filter((todo) => todo.done);
  return (
    <div className="wrapper-todolist">
      {todos.length < 1 && <p className="nothing">Nothing to do!</p>}
      {doneTodos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteItemHandler={deleteItemHandler}
          doneTodoItemHandler={doneTodoItemHandler}
          editTodoItemHandler={editTodoItemHandler}
        />
      ))}
      {!todos.length < 1 && !unDoneTodos.length < 1 && (
        <center>
          <h3>Completed tasks</h3>
          <hr />
        </center>
      )}

      {unDoneTodos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteItemHandler={deleteItemHandler}
          doneTodoItemHandler={doneTodoItemHandler}
          editTodoItemHandler={editTodoItemHandler}
        />
      ))}
    </div>
  );
};

export default ToDoList;
