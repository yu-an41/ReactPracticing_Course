import React from 'react'

function InputById() {
  return (
    <>
      <input type="text" id="email" />
      <button
        onClick={() => {
          document.getElementById('email').value = '123@gmail.com'
        }}
      >
        載入資料
      </button>
    </>
  )
}

export default InputById
