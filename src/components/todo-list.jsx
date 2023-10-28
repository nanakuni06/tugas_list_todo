import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getTodo } from '../redux/actions/todo-action'

function TodoList() {
  const dispatch = useDispatch()
  const {isLoading, todos} = useSelector(state => state.todo)
  console.log(isLoading, todos)

  useEffect(() => {
    dispatch(getTodo())
  }, []);

  const handleDelete = (todoId) => {
    const confirmed = window.confirm("Apakah anda yakin akan menghapus?")
    if(confirmed) {
      dispatch(deleteTodo(todoId))
    }
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ): (
        todos.map(todo => (
          <div key={todo.id} className="flex flex-row justify-between">
            <span>{todo.value}</span>
            <div>
              <button>✏️</button>
              <button onClick={() => handleDelete(todo.id)}>❌</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default TodoList