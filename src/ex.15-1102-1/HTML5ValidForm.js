import { useState } from 'react'

function HTML5ValidForm() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  // 物件的初始值不要用空白物件！也不要用null
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 記錄欄位有錯誤時的訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  // true = 顯示密碼 / false = 不顯示
  const [show, setShow] = useState(false)

  const handleFieldChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  const handleFormSubmit = (e) => {
    // 阻擋表單送出
    e.preventDefault()

    // 得到輸入值的方式
    // 1. 直接從state得到
    console.log(user)
    // 2. 用FormData
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    )
    // 其它驗証…修改

    // 送到伺服器
  }

  const handleFormInvalid = (e) => {
    e.preventDefault()

    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  // 使用者回頭修正欄位時，先把錯誤訊息清掉
  const handleFormChange = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        onInvalid={handleFormInvalid}
        onChange={handleFormChange}
      >
        <label htmlFor="username">帳號</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleFieldChange}
          required
        />
        <span>{fieldErrors.username}</span>
        <br />
        <label htmlFor="email">信箱</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleFieldChange}
        />
        <span>{fieldErrors.email}</span>
        <br />
        <label htmlFor="password">密碼</label>
        <input
          type={show ? 'text' : 'password'}
          name="password"
          value={user.password}
          onChange={handleFieldChange}
          required
        />
        <span>{fieldErrors.password}</span>
        <input
          type="checkbox"
          name="show"
          checked={show}
          onChange={() => {
            setShow(!show)
          }}
        />
        <label>顯示密碼</label>
        <br />
        <button type="submit">送出</button>
        {/* 沒寫button type 相當於type="submit" */}
        <button
          type="button"
          onClick={() => {
            setUser({
              username: 'bambi123',
              email: 'test@gmail.com',
              password: '123456',
            })
          }}
        >
          自動填入
        </button>
      </form>
    </>
  )
}

export default HTML5ValidForm
