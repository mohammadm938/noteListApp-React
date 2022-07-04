const Todo = ({ todo, onCompleteHandler, onDeleteHandler, onEdit }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 text-black p-4 w-1/2 space-y-8  ">
      <div
        className={`${
          todo.isCompleted === true && "line-through text-gray-500"
        }  w-full items-center justify-center p-2 border-t border-b border-slate-400 `}
      >
        {todo.text}
      </div>
      <div className=" flex justify-between space-x-4 items-center text-white">
        <button
          onClick={onCompleteHandler}
          className={`rounded-lg hover:shadow-md ${
            todo.isCompleted
              ? "hover:shadow-orange-200 bg-orange-400"
              : "hover:shadow-green-200 bg-green-600"
          }  p-2`}
        >
          {todo.isCompleted ? "Done" : "Complet"}
        </button>

        <button
          onClick={onEdit}
          className="rounded-lg hover:shadow-md hover:shadow-cyan-200 bg-cyan-700 p-2"
        >
          Edit
        </button>

        <button
          onClick={onDeleteHandler}
          className="rounded-lg hover:shadow-md hover:shadow-red-200 bg-red-600 p-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
