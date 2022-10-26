import { useState } from 'react'
import './Menu.css'

function Menu() {
  const [activeTab, setActiveTab] = useState(0)
  const menuItems = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setActiveTab(v)
              }}
            >
              <a href="#/" className={activeTab === v ? 'active' : ''}>
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
