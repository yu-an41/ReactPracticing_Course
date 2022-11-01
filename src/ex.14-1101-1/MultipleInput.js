import { useState } from 'react'

function MultipleInput() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  // 物件的初始值不要用空白物件！也不要用null

  const handleFieldChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  return (
    <>
      <label htmlFor="username">帳號</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleFieldChange}
      />
      <br />
      <label htmlFor="password">密碼</label>
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleFieldChange}
      />
    </>
  )
}

export default MultipleInput
