import TodoItem from "./TodoItem";

function TodoList({todos}){
    return (<>

    <div>
        <h1 className="text-2xl">Todo List:</h1>
        {
            todos.map(
            (todo)=><TodoItem
             key={todo.id} 
             text={todo.text} 
             iscompleted={todo.completed}/>)
             }
        
     
    </div>


    </>)
}


export default TodoList;