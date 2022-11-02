import { useState, useEffect } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  // 模擬DidMount
  useEffect(() => {
    console.log('模擬componentDidMount')
  }, [])

  // 模擬DidMount + DidUpdate（一開始就Update一次）
  useEffect(() => {
    console.log('模擬componentDidUpdate')
  }, [total])

  // 模擬DidUpdate，用if控制初始值
  useEffect(() => {
    if (total !== 0) {
      console.log('模擬componentDidUpdate')
    }
  }, [total])

  // 模擬WillUnmount
  useEffect(() => {
    return () => {
      console.log('模擬WillUnmount')
    }
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
