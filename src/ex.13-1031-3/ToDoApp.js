import { useState } from 'react'
import './ToDoApp.css'
function ToDoApp() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: true,
    },
    {
      id: 2,
      text: '學react',
      completed: false,
    },
  ])

  const [isComposition, setIsComposition] = useState(false)

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
            const newTodo = { id: Number(new Date()), text: e.target.value }
            const newTodos = [newTodo, ...todos]
            setTodos(newTodos)

            // 清空輸入欄
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
                  // step 1: 拷貝新的物件陣列
                  const newTodos = todos.map((v2, i2) => {
                    return { ...v2 }
                  })
                  // step 2: 在新的物件陣列上修改
                  newTodos[i].completed = !newTodos[i].completed

                  // step 3: 設定回state
                  setTodos(newTodos)

                  // 可以合併為以下
                  // setTodos(todos.map((v2, i2) => {
                  //     (v2.id === v.id)? {...v2, completed: !v2.completed}
                  //   }))
                }}
              />
              {v.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToDoApp
