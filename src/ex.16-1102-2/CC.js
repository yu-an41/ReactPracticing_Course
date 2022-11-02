import React, { Component } from 'react'

class CC extends Component {
  constructor() {
    super() // 呼叫父母類別
    this.state = { total: 0 }
    console.log('constructor')
  }

  componentDidMount() {
    // 第一次render完（虛擬DOM變真實DOM）才會呼叫
    console.log('componentDidMount')
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
