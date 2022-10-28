import React, { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textAreaText, setTextAreaText] = useState('')

  const [agree, setAgree] = useState(false)

  const [gender, setGender] = useState('')
  const genderOPtions = ['male', 'female', 'none']

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
        value={textAreaText}
        onChange={(e) => {
          setTextAreaText(e.target.value)
        }}
      />
      <hr />
      <h1>核取方塊(checkbox single)</h1>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>同意會員註冊條款</label>
      <hr />
      <h1>選項按鈕群組(radio grouop)</h1>
      {genderOPtions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              checked={gender === v}
              value={v}
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
            <label>{v}</label>
          </div>
        )
      })}
    </>
  )
}
export default HTML5Form
