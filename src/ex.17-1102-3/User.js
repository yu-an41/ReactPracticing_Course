import axios from 'axios'
import { useState, useEffect } from 'react'

function User() {
  const [users, setUsers] = useState([
    {
      //   id: '123456',
      //   name: 'Bambi',
      //   birth: '150521',
    },
  ])

  const [isLoading, setIsLoading] = useState(false)

  // 錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('')

  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      )
      console.log(response)

      setUsers(response.data)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }

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
      {isLoading ? spinner : display}
    </>
  )
}

export default User
