import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNumber } from "../redux/actions/TodoActions";

function Todoinput() {

    const dispach = useDispatch();
    const [todo, setTodo] = useState("");



     function addTodoTOStore() {
    
      dispach(addNumber(todo));
      }



  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          className=" border-1 rounded-lg mx-4 my-2 "
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-xl"
          onClick={addTodoTOStore}
        >
          Add
        </button>
      </div>
    </>
  );
}
export default Todoinput;
