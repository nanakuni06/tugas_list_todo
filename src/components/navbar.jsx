import React from 'react'

function Navbar() {
  return (
    <header className='bg-slate-600'>
        <nav className='max-w-6xl mx-auto flex flex-row justify-between items-center p-4'>
            <h1 className="font-bold text-2xl text-white">ToDoList</h1>
            <ul className="flex flex-row gap-4 text-white">
            </ul>
        </nav>
    </header>
  )
}

export default Navbar