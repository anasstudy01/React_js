import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../../features/todo/todoSlice";
import Todos from "./Todos";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addtodo(inputValue));
    setInputValue(""); // Clear the input field after adding the todo
  }

  return (
    <>
      <div className="add-todo-container  h-130 w-100 mx-auto my-10 p-5 bg-gray-400 rounded-lg shadow-xl">
       <div>
       <form className="add-todo-form   " onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Add Task"
            className="add-todo-input rounded-lg shadow-lg border-2 px-2 py-1 "
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button
            type="submit"
            className="add-todo-button bg-green-400 px-2 py-2  font-semibold rounded-lg shadow-lg mx-3"
          >
            Add Task
          </button>
        </form>
       </div>
        <div><Todos/></div>
      </div>
    </>
  );
}

export default AddTodo;
