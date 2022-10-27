import { useState } from 'react'
import Child from './Child'

function Parent() {
  const [total, setTotal] = useState(0)
  //要用變數傳入的話可以用useState
  return (
    <>
      <Child total={total} setTotal={setTotal} />
      {/* props名稱不要自己亂改（用跟變數一樣就好） */}
      {/* 不可以寫成<Child total setTotal/>， 會被視作<Child total={true} setTotal={true}/>*/}
      {/* <Child cat="mobile" name="iPhone" price={199} /> */}
    </>
  )
}

export default Parent
