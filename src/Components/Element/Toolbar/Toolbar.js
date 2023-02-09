import React, { Component } from 'react'

export default class Toolbar extends Component {
  render() {
    return (
      <div className={`bg-[#${this.props.backgroundColor}] text-[#${this.props.foregroundColor}]`}>Toolbar</div>
    )
  }
}
