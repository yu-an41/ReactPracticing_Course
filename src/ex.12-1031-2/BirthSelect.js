import { useState } from 'react'
import './BirthSelect.css'
function BirthSelect() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const [text, setText] = useState('')

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
          {/* 當年+月沒選擇時，不能選擇日 */}
          {year !== '' &&
            month !== '' &&
            makeOptions(1, new Date(year, month, 0).getDate()).map((v, i) => {
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
      <button
        onClick={() => {
          if (year === '' || month === '' || day === '') {
            alert('請選擇完整日期')
            return
          }

          // 18年的微秒值 = 18 * 365.25 * 24 * 60 * 60 * 1000
          const ms18years = 568036800000

          // 使用者生日的微秒值 +new Date跟Number(new Date)是一樣的
          const msBirth = +new Date(`${year}/${month}/${day}`)

          // 目前時間的微秒值
          const msNow = +new Date()

          if (msNow - msBirth > ms18years) {
            setText('滿18歲了！')
          } else {
            setText('未滿18歲！')
          }
        }}
      >
        檢查是否已滿18歲
      </button>
      <hr />
      <p className={text === '滿18歲了！' ? 'over18' : 'under18'}>{text}</p>
    </>
  )
}

export default BirthSelect
