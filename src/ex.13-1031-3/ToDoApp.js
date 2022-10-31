import { useState } from 'react'
import './ToDoApp.css'
import AddFrom from './AddForm'

function ToDoApp() {
  const [inputEditingValue, setInputEditingValue] = useState('')
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
  const toggleTodoCompleted = (id) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      return { ...v }
    })

    // step 3: 設定回state
    setTodos(newTodos)
  }
  const toggleTodoEditing = (id) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, editing: !v.editing }
      //這裡要關掉其它編輯中的，因為同時間只能有一個被編輯！！
      return { ...v, editing: false }
    })

    setTodos(newTodos)
  }

  // 用在某個id項目改變為某值用，合併物件值
  const updateTodo = (id, objectValue) => {
    // step 1: 拷貝新的物件陣列
    // step 2: 在新的物件陣列上修改
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, ...objectValue }

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
      <AddFrom addTodo={addTodo} />
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
                <input
                  type="text"
                  value={inputEditingValue}
                  onChange={(e) => {
                    setInputEditingValue(e.target.value)
                  }}
                />
              ) : (
                v.text
              )}
              {v.editing ? (
                <button
                  onClick={() => {
                    updateTodo(v.id, {
                      text: inputEditingValue,
                      editing: false,
                    })
                  }}
                >
                  儲存
                </button>
              ) : (
                <button
                  onClick={() => {
                    toggleTodoEditing(v.id, 'editing')
                    setInputEditingValue(v.text)
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
