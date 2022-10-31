import { useState } from 'react'

function BirthSelect() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  // 製作下拉選單項目使用的函式
  // params: min(:number), max(:number)
  // return number[]
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
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value)
          }}
        >
          <option value="">請選擇</option>
          {makeOptions(1920, 2010).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
          {/* {Array(2010 - 1920 + 1)
            .fill(1)
            .map((v, i) => {
              return (
                <option key={i} value={i + 1920}>
                  {i + 1920}
                </option>
              )
            })} */}
        </select>
        年
      </span>
      <span>
        <select
          value={month}
          onChange={(e) => {
            setMonth(e.target.value)
          }}
        >
          <option value="">請選擇</option>
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
        <select
          value={day}
          onChange={(e) => {
            setDay(e.target.value)
          }}
        >
          <option value="">請選擇</option>
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
