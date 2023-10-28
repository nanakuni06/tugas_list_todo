import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../redux/actions/todo-action'

function TodoList() {
  const dispatch = useDispatch()
  const {isLoading, todos} = useSelector(state => state.todo)
  console.log(isLoading, todos)

  useEffect(() => {
    dispatch(getTodo())
  }, []);

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
              <button>❌</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default TodoList