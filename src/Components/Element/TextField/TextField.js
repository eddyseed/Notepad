import React, { Component } from 'react'

export default class TextField extends Component {
  state = {
    fieldText: ""
  }
  updateFieldText=(event)=>{
    this.setState={
      fieldText: event.target.value
    }
  }
  render() {
    return (
      <div className={`flex items-center justify-center bg-[#${this.props.backgroundColor}]`}>
        <textarea className={`outline-none resize-none h-[95%] w-full px-14 bg-inherit text-green-600`} placeholder='Get your fingers on the keyboard...' onClick={this.updateFieldText} spellCheck='false' id='textfield'></textarea>
      </div>
    )
  }
}
