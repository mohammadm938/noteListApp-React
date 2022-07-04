import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({
  todos,
  onCompleteHandler,
  onDeleteHandler,
  onUpdateTodo,
  setIsEditingState,
  status,
  onSelectHandler,
}) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const submitTodo = (newText) => {
    onUpdateTodo(edit.id, newText);
    setEdit({ id: null, text: "", isCompleted: false });
    setIsEditingState(false);
  };

  const renderTodos = () => {
    return (
      <div className="flex flex-col justify-center items-center space-y-4 bg-slate-600 p-4 w-full lg:w-3/4 max-w-3xl  shadow-xl rounded-md mt-8 text-sm lg:text-base">
        <select
          className="p-2 bg-slate-800 rounded-md"
          onChange={onSelectHandler}
          value={status}
        >
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Uncomplete">Uncomplete</option>
        </select>
        {todos.length === 0 ? (
          <p className="bg-slate-700 p-2 w-full md:w-1/2 flex justify-center items-center font-bold drop-shadow-md">
            Add some todos
          </p>
        ) : (
          todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onCompleteHandler={() => onCompleteHandler(todo.id)}
                onDeleteHandler={() => onDeleteHandler(todo.id)}
                onEdit={() => {
                  setEdit(todo);
                  setIsEditingState(true);
                }}
              />
            );
          })
        )}
      </div>
    );
  };
  return edit.id ? (
    <TodoForm addTodoHandler={submitTodo} edit={edit} />
  ) : (
    renderTodos()
  );
};

export default TodoList;
