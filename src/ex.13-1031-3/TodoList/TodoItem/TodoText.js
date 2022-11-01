function TodoText({ id, text, toggleTodoEditing, setInputEditingValue }) {
  return (
    <>
      {text}
      <button
        onClick={() => {
          toggleTodoEditing(id)
          // setInputEditingValue(text)
        }}
      >
        編輯
      </button>
    </>
  )
}
export default TodoText
