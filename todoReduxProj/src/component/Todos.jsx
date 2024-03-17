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
            className="mt-2 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-2xl"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                />
                <button className="text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded-xl text-md" onClick={() => handleUpdateTodo(todo.id)}>
                  📁
                </button>

              </>
            ) : (
              <>
                <div className='text-white'>{todo.text}</div>
                <div>
                  <button
                    onClick={() => toggleEditMode(todo.id, todo.text)}
                    className="text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded-xl text-md"
                    title="Edit Todo"
                  >
                    ✏️
                  </button>
                  <span style={{ margin: '0 0.5rem' }}></span>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded-xl text-md"
                    title="Delete Todo"
                  >
                    🗑️
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
