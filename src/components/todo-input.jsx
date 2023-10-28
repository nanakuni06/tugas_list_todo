import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function TodoInput() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    console.log(input)
    let newTodo = {
      value: input,
      status: false
    }
    dispatch(addTodo(newTodo))
  }
  return (
    <>
    <div className='text-center'>
      <h1 className='text-xl mb-3 font-bold font-sans md:Roboto'>My ToDo List In Week</h1>
    </div>
    <div className='py-5'>
      <form className='flex gap-2'>
        <input type="text" className='p-2 w-full border-solid border-black border-2 rounded-xl' placeholder='Input Your List' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className='p-2 border-solid border-black border-2 rounded-lg' onClick={handleClick}>Add</button>
      </form>
    </div>
    </>
  )
}

export default TodoInput