import { useState } from 'react'

function BMI() {
  const [myHeight, setMyHeight] = useState(0)
  const [myWeight, setMyWeight] = useState(0)

  const [myBMI, setMyBMI] = useState(0)
  return (
    <>
      <h1>BMI線上計算表單</h1>
      <div>
        身高：
        <input
          type="number"
          // 因為一開始useState(0)，預設值就會0（0刪不掉，除非打其他數字）
          value={myHeight === 0 ? '' : myHeight}
          placeholder="請輸入身高(cm)"
          onChange={(e) => {
            setMyHeight(Number(e.target.value))
          }}
        />
      </div>
      <div>
        體重：
        <input
          type="number"
          value={myWeight === 0 ? '' : myWeight}
          placeholder="請輸入體重(kg)"
          onChange={(e) => {
            setMyWeight(Number(e.target.value))
          }}
        />
      </div>
      <button
        onClick={(e) => {
          if (myWeight < 10 || myHeight < 100) {
            alert('身高或體重有誤，請重新輸入！')
            return
          }
          setMyBMI(myWeight / Math.pow(myHeight / 100, 2))
        }}
      >
        計算
      </button>
      <br />
      {/* .toFixed()格式化數字用，括號內表示保留幾位小數後四捨五入 */}
      <p>你的BMI值為：{myBMI.toFixed(1)}</p>
    </>
  )
}

export default BMI
