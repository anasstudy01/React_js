import React from 'react'
import './App.css'

import Todoinput from './Component/TodoInput'
import { useSelector } from 'react-redux'
import TodoList from './Component/TodoList'

function App() {

const todos =useSelector((state)=>state.todoState.todos)
  return (
    <>
<h1 className='text-3xl'>To-DO App</h1>
<Todoinput/>
<TodoList todos={todos}/>
    </>
  )
}

export default App
