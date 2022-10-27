import { useState } from 'react'

function Child({ increment = 1 }) {
  // const {cat, name, price} = props
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + increment)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default Child
