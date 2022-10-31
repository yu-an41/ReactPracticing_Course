function BirthSelect() {
  const makeOptions = (min, max) => {
    const options = []

    for (let i = min; i < max + 1; i++) {
      options.push(i)
    }
    return options
  }

  return (
    <>
      <span>
        西元
        <select>
          {makeOptions(1920, 2010).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        年
      </span>
      <span>
        <select>
          {makeOptions(1, 12).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        月
      </span>
      <span>
        <select>
          {makeOptions(1, 29).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        日
      </span>
      <br />
      <button>檢查</button>
    </>
  )
}

export default BirthSelect
