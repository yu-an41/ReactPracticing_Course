import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'

import InputIME from './InputIME'
import _ from 'lodash'

function UserDemo() {
  // [{
  //   "id": "107001",
  //   "name": "張佳蓉",
  //   "birth": "990101"
  // }]
  const [users, setUsers] = useState([])

  const [searchWord, setSearchWord] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  // 錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('')

  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      )
      // console.log(response)

      setUsers(response.data)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }

  const getUsersBySearchWord = async (keyword) => {
    // 先開啟載入指示器
    setIsLoading(true)

    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?name_like=' +
          keyword
      )
      // console.log(response)

      //設定到state裡
      setUsers(response.data)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }

  const handleSearch = (keyword) => {
    if (keyword === '') {
      getUsers()
      return
    }

    getUsersBySearchWord(keyword)
  }

  // debounce function + useCallback
  // 用途: 當不斷輸入input時，同一時間內要先停止觸發事件，直到輸入停止，400ms為等待時間
  // 使用debounce的主因，是因項目呈現、退場動畫、重新排位動畫三者均需計算與時間
  // 觸發太頻繁時，會造成動畫卡頓或卡住的現象
  const debounceHandleSearch = useCallback(_.debounce(handleSearch, 400), [])

  const handleChange = (e) => {
    // 可控元件綁用state使用
    setSearchWord(e.target.value)

    // 搜尋用 - trim去除空白，toLowerCase轉小寫英文
    const newSearchWord = e.target.value.trim().toLowerCase()

    // 傳至debounceFn中
    debounceHandleSearch(newSearchWord)
  }

  // 延後1.5秒才關掉指示器
  useEffect(() => {
    setIsLoading(true)

    getUsers()

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  )

  const display = errorMessage ? (
    errorMessage
  ) : (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr>
              <td>{v.id}</td>
              <td>{v.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
  return (
    <>
      <h1>會員資料</h1>
      <hr />
      InputIME + debounce
      <br />
      <InputIME
        type="text"
        value={searchWord}
        placeholder="輸入名稱搜尋"
        onChange={handleChange}
      />
      <br />
      一般input+按鈕
      <br />
      <hr />
      <input
        // 不要過度頻繁的跟伺服器要資料
        type="text"
        value={searchWord}
        placeholder="輸入名稱搜尋"
        onChange={(e) => {
          const newSearchWord = e.target.value

          setSearchWord(newSearchWord)

          getUsersBySearchWord(newSearchWord)
        }}
      />
      <button
        onClick={() => {
          // setIsLoading(true)

          getUsersBySearchWord(searchWord)

          // 延後1.5秒才關掉指示器
          // setTimeout(() => {
          //  setIsLoading(false)
          // }, 2000)
        }}
      >
        搜尋
      </button>
      <hr />
      {isLoading ? spinner : display}
    </>
  )
}

export default UserDemo
