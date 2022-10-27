import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [parentData, setParentData] = useState('parent data')

  const [dataFromChildB, setDataFromChildB] = useState('')
  return (
    <>
      <h1>Parent</h1>
      <p>來自Child B的資料：{dataFromChildB}</p>
      <hr />
      <ChildA parentData={parentData} />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default Parent
