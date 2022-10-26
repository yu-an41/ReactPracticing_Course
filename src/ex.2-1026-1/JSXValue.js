function JSXValue() {
  return (
    <>
      <h1>JSX中的值與表達式</h1>
      <hr />
      <h3>Number</h3>
      {123}
      {NaN}
      <h3>String</h3>
      {'abc'}
      {`total = ${100 - 45}`}
      <h3>Boolean</h3>
      {true}
      {false}
      <h3>Object</h3>
      {/* {{a: 1, b: 2}} */}
      <h3>Array</h3>
      {[1, 2, 3, 4]}
      <h3>Function</h3>
      {(() => 1)()}
      {/* 要變成立即執行才會跑，依照return的布林值決定會不會渲染 */}
    </>
  )
}

export default JSXValue
