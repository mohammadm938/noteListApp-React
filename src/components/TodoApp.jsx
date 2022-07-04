import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  const addTodoHandler = (input) => {
    console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    // console.log(id);
    const clonedState = [...todos];
    const selectedTodo =
      clonedState[clonedState.findIndex((todo) => todo.id === id)];
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    setTodos(clonedState);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newText) => {
    const clonedState = [...todos];
    const selectedTodo =
      clonedState[clonedState.findIndex((todo) => todo.id === id)];
    selectedTodo.text = newText;
    setTodos(clonedState);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Complete":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncomplete":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const selectHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div className="flex flex-col items-center bg-slate-700 h-screen p-4 text-white">
      <NavBar
        unCompletedTodos={todos.filter((t) => t.isCompleted === false).length}
      />
      {isEditing === false ? (
        <TodoForm addTodoHandler={addTodoHandler} />
      ) : null}
      <TodoList
        todos={filteredTodos}
        onCompleteHandler={completeHandler}
        onDeleteHandler={deleteHandler}
        onUpdateTodo={updateTodo}
        setIsEditingState={setIsEditing}
        status={status}
        onSelectHandler={selectHandler}
      />
    </div>
  );
};

export default TodoApp;
