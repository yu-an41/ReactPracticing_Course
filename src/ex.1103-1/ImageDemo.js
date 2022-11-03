import React from 'react'
import LogoImage from './logo.svg'

function ImageDemo() {
  return (
    <>
      <h1>圖片使用說明</h1>
      <hr />
      <p>1. 直接用`import`放在src目錄</p>
      <img src={LogoImage} alt="" />
    </>
  )
}

export default ImageDemo
