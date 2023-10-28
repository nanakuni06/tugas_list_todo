import React from 'react'
import TodoInput from '../components/todo-input'
import TodoList from '../components/todo-list'
import TodoInfo from '../components/todo-info'

function Todo() {
  return (
    <>
    <div className='item-center justify-center'>
      <div className="p-8 my-20 mx-0 w-100 md:-8 lg:my-20 lg:mx-80 bg-white shadow-md rounded-xl"> 

        <TodoInput/>

        <TodoList/>

        <TodoInfo/>

      </div>
    </div>
</>
  )
}

export default Todo