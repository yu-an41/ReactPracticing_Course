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

  const getUsers = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    console.log(response)

    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h1>會員資料</h1>
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
    </>
  )
}

export default User
