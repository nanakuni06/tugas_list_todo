import React from 'react'
import { useSelector } from 'react-redux'

function TodoInfo() {
  const {todos} = useSelector(state => state.todo)
  return (
    <div className="my-10 ">
        <div className="font-bold text-sm text-red-500">{todos.length} ToDo</div>
    </div>
  )
}

export default TodoInfo