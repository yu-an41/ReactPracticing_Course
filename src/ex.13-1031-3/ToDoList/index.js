import TodoItem from './TodoItem'

function TodoList({
  todos,
  toggleTodoCompleted,
  toggleTodoEditing,
  updateTodo,
  deleteTodo,
}) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          // 因為i會改變，不能拿來當作key使用
          return (
            <TodoItem
              key={v.id}
              todo={v}
              toggleTodoCompleted={toggleTodoCompleted}
              toggleTodoEditing={toggleTodoEditing}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
