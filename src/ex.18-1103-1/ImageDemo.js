import React from 'react'
import LogoImage from './logo.svg'

import { imgUrl } from '../config'

function ImageDemo() {
  return (
    <>
      <h1>圖片使用說明</h1>
      <hr />
      <p>1. 直接用`import`放在src目錄</p>
      <img src={LogoImage} alt="" width="200" height="200" />
      <p>2. 放在public目錄，用絕對網址存取</p>
      <img
        //  套用config/index.js 中的設定值
        src={`${imgUrl}/Images/Screenshot%202022-10-23%20at%2011.30.16%20AM.png`}
        alt=""
        height="200"
      />
      <img
        // 套用 .env中的設定值
        src={`${process.env.REACT_APP_DEV_URL}/Images/Screenshot 2022-10-23 at 9.56.03 AM.png`}
        alt=""
        height="200"
      />
      <p>3. 圖片在Node(或其他伺服器上的)public目錄，用絕對網址存取</p>
      <img
        //  套用config/index.js 中的設定值
        src={`${imgUrl}/Images/Screenshot%202022-10-23%20at%2011.30.16%20AM.png`}
        alt=""
        height="200"
      />
      <p>
        4. 圖片在Node(或其他伺服器上的)public目錄，用3.
        方式存取(注意：開發用，且須先設定proxy)
      </p>
      <img
        //  套用config/index.js 中的設定值
        src={`${imgUrl}/Images/Screenshot%202022-10-23%20at%2011.30.16%20AM.png`}
        alt=""
        height="200"
      />
    </>
  )
}

export default ImageDemo
