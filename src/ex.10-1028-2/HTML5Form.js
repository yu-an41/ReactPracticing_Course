import React, { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')

  return (
    <>
      <h1>文字輸入框(input-text)</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <hr />
      <h1>文字輸入區域(textarea)</h1>
      <textarea
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
    </>
  )
}
export default HTML5Form
