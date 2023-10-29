import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, editTodo } from '../redux/actions/todo-action'

function TodoInput() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("")
  const [isEdit, setIsEdit] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    console.log(input)
    let newTodo = {
      value: input,
      status: false
    }
    dispatch(addTodo(newTodo))
    setInput("")
  }

  const handleEdit = (todoId, todoValue) => {
    setEditId(todoId);
    setEditValue(todoValue);
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditValue("");
    setIsEdit(false);
  };

  const handleSaveEdit = () => {
    if(editValue.trim() !== ""){
      dispatch(editTodo(editId, editValue));
      setEditId(null);
      setEditValue("");
      setIsEdit(false);
    }
  };


  return (
    <>
    <div className='text-center'>
      <h1 className='text-xl mb-3 font-bold font-sans md:Roboto'>My ToDo List In Week</h1>
    </div>
    <div className='py-5'>
      <form className='flex gap-2'>
        <input type="text" className='px-4 py-2 w-full border-solid border-black border-2 rounded-xl bg-slate-50' placeholder='Input Your List' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className='p-2 border-solid border-black border-2 rounded-lg bg-blue-400 hover:bg-blue-500' onClick={handleClick}>Add</button>
      </form>
    </div>
    </>
  )
}

export default TodoInput