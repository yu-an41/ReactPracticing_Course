import React, { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textAreaText, setTextAreaText] = useState('')

  const [agree, setAgree] = useState(false)

  const [gender, setGender] = useState('')
  const genderOptions = ['male', 'female', 'none']

  const [pet, setPet] = useState('')
  const petOptions = ['dog', 'cat', 'goldfish']

  const [likeList, setLikeList] = useState([])
  const fruitOptions = ['mango', 'apple', 'banana']

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
      <br />
      <h1>文字輸入區域(textarea)</h1>
      <textarea
        value={textAreaText}
        onChange={(e) => {
          setTextAreaText(e.target.value)
        }}
      />
      <br />
      <h1>核取方塊(checkbox single)</h1>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>同意會員註冊條款</label>
      <br />
      <h1>選項按鈕群組(radio grouop)</h1>
      {genderOptions.map((v, i) => {
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
      <br />
      <h1>下拉式選單(select)</h1>
      <select
        value={pet}
        onChange={(e) => {
          setPet(e.target.value)
        }}
      >
        <option value="">--choose your pet--</option>
        {petOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <br />
      <h1>核取方塊群組(checkbox group)</h1>
      {fruitOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={likeList.includes(v)}
              value={v}
              onChange={(e) => {
                const value = e.target.value

                if (likeList.includes(value)) {
                  // 如果在state陣列中->移出陣列(filter)
                  const newLikeList = likeList.filter((v, i) => v !== value)
                  setLikeList(newLikeList)
                } else {
                  // 如果不在state陣列中->加到陣列
                  const newLikeList = [...likeList, value]
                  setLikeList(newLikeList)
                }
              }}
            />
            <label htmlFor={v}>{v}</label>
          </div>
        )
      })}
    </>
  )
}
export default HTML5Form
