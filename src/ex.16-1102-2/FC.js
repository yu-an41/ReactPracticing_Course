import { useState, useEffect } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    console.log('模擬componentDidMount')
  }, [])

  return (
    <>
      {console.log('模擬render')}

      <h1>函式型元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
