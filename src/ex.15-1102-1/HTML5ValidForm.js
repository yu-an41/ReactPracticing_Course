import { useState } from 'react'

function HTML5ValidForm() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  // 物件的初始值不要用空白物件！也不要用null

  // true = 顯示密碼 / false = 不顯示
  const [show, setShow] = useState(false)

  const handleFieldChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  return (
    <>
      <form>
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
          type={show ? 'text' : 'password'}
          name="password"
          value={user.password}
          onChange={handleFieldChange}
        />
        <input
          type="checkbox"
          name="show"
          checked={show}
          onChange={() => {
            setShow(!show)
          }}
        />
        <label>顯示密碼</label>
      </form>
    </>
  )
}

export default HTML5ValidForm
