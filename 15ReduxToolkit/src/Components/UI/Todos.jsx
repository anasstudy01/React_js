import { useSelector ,useDispatch} from "react-redux";
import {removetodo} from "../../features/todo/todoSlice"


function Todos(){
    const todos =useSelector(state=>state.todos)
   const dispatch = useDispatch();

   
   return (<>


<div className="todos font-bold mt-5 text-2xl text-center"> 
Todos:</div>
{todos.map((todo)=>(
    <li key={todo.id} className="mx-3 my-4 flex justify-between">{todo.text}
    <button className="bg-red-500  px-2 py-1 mx-3 rounded-lg shadow-lg" onClick={()=>dispatch(removetodo(todo.id))}>Delete</button>
    </li>
))}

    </>)
}


export default Todos;