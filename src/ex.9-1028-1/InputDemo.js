import React, { useState } from 'react'

export default function InputDemo() {
  const [inputText, setInputText] = useState('')
  return (
    <div>
      <h1>可控表單元件</h1>
      {/* 必續同時滿足 1. value是狀態 2. 更新事件是狀態設定方法 才是可控，只有一個的話input欄位會失效 */}
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <hr />
      <h1>不可控表單元件</h1>
      <input type="text" />
    </div>
  )
}
