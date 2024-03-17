import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../feature/todo/todoSlice';

export function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState('');

  const toggleEditMode = (todoId, currentText) => {
    setEditingTodoId(todoId);
    setEditedTodoText(currentText);
  };

  // Function to handle updating todo text
  const handleUpdateTodo = (todoId) => {
    dispatch(updateTodo({ id: todoId, updatedTodoData: { text: editedTodoText } }));
    setEditingTodoId(null); // Exit edit mode
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                />
                <button className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md" onClick={() => handleUpdateTodo(todo.id)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <div className='text-white'>{todo.text}</div>
                <button
                  onClick={() => toggleEditMode(todo.id, todo.text)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                  title="Edit Todo"
                >
                  ✏️
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  title="Delete Todo"
                >
                  🗑️
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
