import { useState } from 'react'
import './ToDoApp.css'

import EditForm from './EditForm'
import ToDoLitem from './ToDoItem'

function ToDoList({
  todos,
  toggleTodoCompleted,
  toggleTodoEditing,
  updateTodo,
  deleteTodo,
}) {
  const [inputEditingValue, setInputEditingValue] = useState('')

  return (
    <>
      <ul>
        {todos.map((v, i) => {
          // 因為i會改變，不能拿來當作key使用
          return (
            <li
              key={v.id}
              className={v.completed ? 'completed' : 'incompleted'}
            >
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  toggleTodoCompleted(v.id)
                }}
              />
              {v.editing ? (
                <EditForm
                  id={v.id}
                  updateTodo={updateTodo}
                  inputEditingValue={inputEditingValue}
                  setInputEditingValue={setInputEditingValue}
                />
              ) : (
                <ToDoLitem
                  id={v.id}
                  text={v.text}
                  toggleTodoEditing={toggleTodoEditing}
                  setInputEditingValue={setInputEditingValue}
                />
              )}
              <button
                onClick={(e) => {
                  deleteTodo(v.id)
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToDoList
