const NavBar = ({ unCompletedTodos }) => {
  return (
    <header className="bg-slate-600 font-bold rounded-md flex flex-row justify-center items-center mb-6 space-x-2 p-2 w-full md:w-1/4 lg:text-base text-sm">
      {!unCompletedTodos ? (
        <p>Write your today todos</p>
      ) : (
        <>
          <div className="p-2 bg-purple-500 rounded-full w-10 flex items-center justify-center shadow-md shadow-purple-900">
            <span>{unCompletedTodos}</span>
          </div>
          <h2>Todos are not complete</h2>
        </>
      )}
    </header>
  );
};

export default NavBar;
