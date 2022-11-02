import React, { Component } from 'react'

class CC extends Component {
  constructor() {
    super() // 呼叫父母類別
    this.state = { total: 0, name: '' }
    console.log('constructor')
  }

  componentDidMount() {
    // 第一次render完（虛擬DOM變真實DOM）才會呼叫
    console.log('componentDidMount')
    this.setState({ total: 2 })
  }

  componentDidUpdate(prevProps, prevState) {
    // render完才會呼叫DidUpdate
    // 可以得到「最後」的狀態值
    console.log('componentDidUpdate', ' total=', this.state.total)
    // 如果把setState()放在這邊會造成無窮迴圈(一直render->DidUpdate)
    if (prevState === 5) {
      this.setState({ name: 'Bambi' })
    }
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>類別型元件</h1>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
