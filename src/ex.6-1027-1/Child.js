function Child({ total, setTotal }) {
  // const {cat, name, price} = props
  return (
    <>
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

export default Child
