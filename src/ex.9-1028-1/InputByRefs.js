import { useRef } from 'react'

function InputByRefs() {
  const inputRef = useRef(null)

  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = '123@gmail.com'
        }}
      >
        載入資料
      </button>
    </>
  )
}

export default InputByRefs
