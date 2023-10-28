import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, deleteTodo, editTodo } from '../redux/actions/todo-action';

function TodoList() {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector(state => state.todo);

  const [editingId, setEditingId] = useState(null);
  const [editedValue, setEditedValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const [crossedIds, setCrossedIds] = useState([]);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleEdit = (todoId, todoValue) => {
    setEditingId(todoId);
    setEditedValue(todoValue);
    setIsEditing(true);
  };

  const handleDelete = (todoId) => {
    const confirmed = window.confirm("Apakah anda yakin akan menghapus?")
    if(confirmed) {
      dispatch(deleteTodo(todoId))
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedValue('');
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    if (editedValue.trim() !== '') {
      dispatch(editTodo(editingId, editedValue));
      setEditingId(null);
      setEditedValue('');
      setIsEditing(false);
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
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        todos.map(todo => (
          <div key={todo.id} className="flex flex-row justify-between">
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span className={crossedIds.includes(todo.id) ? 'line-through' : ''}
              onClick={() => handleCrossOut(todo.id)}>{todo.value}</span>
                <div>
                  <button onClick={() => handleEdit(todo.id, todo.value)}>✏️</button>
                  <button onClick={() => handleDelete(todo.id)}>❌</button>
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
