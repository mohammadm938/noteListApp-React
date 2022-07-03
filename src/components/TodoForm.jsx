import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    if (inputValue === "") return alert("It's empty string");
    e.preventDefault();
    inputRef.current.value = "";
    props.addTodoHandler(inputValue);
  };

  return (
    <form
      className="flex justify-center items-center space-x-2 bg-slate-600 p-4 w-1/2 max-w-3xl shadow-xl rounded-md"
      onSubmit={submitHandler}
    >
      {props.edit ? (
        <>
          <input
            className="py-2 px-2 w-2/4 border shadow-lg border-gray-500 bg-slate-500 focus:outline-none focus:shadow-slate-300"
            type="text"
            onChange={changeInputHandler}
            placeholder="Your Updated Text"
            ref={inputRef}
          />
          <button className="bg-slate-700 py-2 w-16  rounded-md " type="submit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            className="py-2 px-2 w-2/4 border shadow-lg border-gray-500 bg-slate-500 focus:outline-none focus:shadow-slate-300"
            type="text"
            onChange={changeInputHandler}
            placeholder="Your todo text ..."
            ref={inputRef}
          />
          <button className="bg-slate-700 py-2 w-16  rounded-md " type="submit">
            Add
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
