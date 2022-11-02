import FC from './FC'
import CC from './CC'
import { useState } from 'react'

function Lifecycle() {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && <CC />}
      {/* <FC /> */}
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '再見' : '回來吧'}
      </button>
    </>
  )
}

export default Lifecycle
