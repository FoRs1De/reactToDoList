import ToDoItem from './TodoItem';
const ToDoList = ({ todos, deleteItemHandler, doneTodoItemHandler }) => {
  return (
    <div className="wrapper-todolist">
      {todos.length < 1 && <p className="nothing">Nothing to do!</p>}
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteItemHandler={deleteItemHandler}
          doneTodoItemHandler={doneTodoItemHandler}
        />
      ))}
    </div>
  );
};

export default ToDoList;
