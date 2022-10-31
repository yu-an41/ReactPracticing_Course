import { useState } from 'react'
import './ToDoApp.css'
function ToDoApp() {
  const [inputValue, setInputValue] = useState('')
  const [isComposition, setIsComposition] = useState(false)

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: true,
      editing: false,
    },
    {
      id: 2,
      text: '學react',
      completed: false,
      editing: false,
    },
  ])

  const addTodo = (text) => {
    // id
    // 1. 用加入當下的時間微秒值(ps. 不適合多人使用系統)
    // 2. id是均是數字，可求出最大值後遞增
    // 3. 隨機產生函式庫 例如 uuid/nanoid 等函式庫
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    }
    const newTodos = [newTodo, ...todos]
    setTodos(newTodos)
  }

  // 用某個property，為布林值，true/false互換
  const toggleTodo = (id, property) => {
    // step 1: 拷貝新的物件陣列
    // step 2: 在新的物件陣列上修改
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, [property]: !v[property] }
      return { ...v }
    })

    // step 3: 設定回state
    setTodos(newTodos)
  }

  const updateTodo = (id, property, value) => {
    // step 1: 拷貝新的物件陣列
    // step 2: 在新的物件陣列上修改
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, [property]: value }

      return { ...v }
    })
    // step 3: 設定回state
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((v, i) => {
      return v.id !== id
    })

    setTodos(newTodos)
  }

  return (
    <>
      <h1>My To Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        // 中文輸入法用
        onCompositionStart={() => {
          setIsComposition(true)
        }}
        onCompositionEnd={() => {
          setIsComposition(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && isComposition === false) {
            addTodo(e.target.value)
            setInputValue('')
          }
        }}
      />
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
                  toggleTodo(v.id, 'completed')
                }}
              />
              {v.editing ? <input type="text" value={v.text} /> : v.text}
              {v.editing ? (
                <button
                  onClick={() => {
                    toggleTodo(v.id, 'editing')
                  }}
                >
                  儲存
                </button>
              ) : (
                <button
                  onClick={() => {
                    toggleTodo(v.id, 'editing')
                  }}
                >
                  編輯
                </button>
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

export default ToDoApp
