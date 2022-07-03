import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

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

  return (
    <div className="flex flex-col items-center bg-slate-700 h-screen p-4 text-white">
      {isEditing === false ? (
        <TodoForm addTodoHandler={addTodoHandler} />
      ) : null}
      <TodoList
        todos={todos}
        onCompleteHandler={completeHandler}
        onDeleteHandler={deleteHandler}
        onUpdateTodo={updateTodo}
        setIsEditingState={setIsEditing}
      />
    </div>
  );
};

export default TodoApp;
