import React from 'react'

function TodoInput() {
  return (
    <>
    <form className='flex gap-2'>
      <input type="text" className='p-2 w-full border-solid border-black border-2 rounded-xl' placeholder='Input Your List'/>
      <button className='p-2 border-solid border-black border-2 rounded-lg'>Add</button>
    </form>
    </>
  )
}

export default TodoInput