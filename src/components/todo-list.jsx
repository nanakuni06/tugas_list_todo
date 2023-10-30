import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, deleteTodo, editTodo } from '../redux/actions/todo-action';
import load from '/MSIB/tugas-todolist/assets/loading.gif'

function TodoList() {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector(state => state.todo);

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const [crossedIds, setCrossedIds] = useState([]);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleEdit = (todoId, todoValue) => {
    setEditId(todoId);
    setEditValue(todoValue);
    setIsEdit(true);
  };

  const handleDelete = (todoId) => {
    const confirmed = window.confirm("Apakah anda yakin akan menghapus?")
    if(confirmed) {
      dispatch(deleteTodo(todoId))
    }
  }

  const handleCancelEdit = () => {
    setEditId(null);
    setEditValue('');
    setIsEdit(false);
  };

  const handleSaveEdit = () => {
    if (editValue.trim() !== '') {
      dispatch(editTodo(editId, editValue));
      setEditId(null);
      setEditValue('');
      setIsEdit(false);
    }
  };

  const handleCrossOut = (todoId) => {
    if (!crossedIds.includes(todoId)) {
      setCrossedIds([...crossedIds, todoId]);
    } else {
      setCrossedIds(crossedIds.filter(id => id !== todoId));
    }
  };

  return (
    <div className='space-y-2'>
      {isLoading ? (
        <div>
          <img src={load} alt="loading..." className='mx-40 w-auto'/>
        </div>
      ) : (
        todos.map(todo => (
          <div key={todo.id} className="flex flex-row justify-between px-5 py-1 shadow-lg rounded-xl bg-violet-500 items-center">
            {editId === todo.id ? (
              <>
                <input type="text" className='px-2 py-1 w-80 border-solid border-black border-2 rounded-xl' value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
                <div className='px-0 py-3 flex flex-row items-center'>
                  <button className='border border-black bg-blue-500 text-white text-sm rounded-md px-2 py-2  transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline' onClick={handleSaveEdit}><svg className="h-5 w-5 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="9 11 12 14 22 4" />  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></button>
                  <button className='border border-black bg-red-500 text-white text-sm rounded-md px-2 py-2 mx-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline' onClick={handleCancelEdit}><svg className="h-5 w-5 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg></button>
                </div>
              </>
            ) : (
              <>
                <span className={`${crossedIds.includes(todo.id) ? 'line-through' : ''} text-lg text-white`} onClick={() => handleCrossOut(todo.id)}>{todo.value}</span>
                <div className='gap-0 flex flex-row items-center'>
                  <button className='border border-yellow-500 bg-yellow-500 text-white rounded-md px-1 py-1 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline' onClick={() => handleEdit(todo.id, todo.value)}>
                    <svg className="h-6 w-6 text-black"  viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg></button>
                  <button className='border border-red-500 bg-red-500 text-white rounded-md px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline' onClick={() => handleDelete(todo.id)}><svg className="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg></button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
