// import Counter from './ex.1-1025/Counter'
// import JSXValue from './ex.2-1026-1/JSXValue'
// import StudentList from './ex.3-1026-2/StudentList'
import { useState } from 'react'
import { examples } from './examples'

function App() {
  const [displayIndex, setDisplayIndex] = useState(0)

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        setDisplayIndex(Number(e.target.value))
      }}
    >
      {examples.map((v, i) => {
        return (
          <option key={i} value={i}>
            {v.name}
          </option>
        )
      })}
    </select>
  )

  const MyComponent = examples[displayIndex].component
  return (
    <>
      {selection}
      <hr />
      <MyComponent />
    </>
  )
}

export default App
