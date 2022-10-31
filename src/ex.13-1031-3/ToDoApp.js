import { useState } from 'react'

function ToDoApp() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(['買牛奶', '學react'])

  return (
    <>
      <h1>My To Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const newTodo = [e.target.value, ...todos]
            setTodos(newTodo)

            // 清空輸入欄
            setInputValue('')
          }
        }}
      />
      <ul>
        {todos.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}

export default ToDoApp
