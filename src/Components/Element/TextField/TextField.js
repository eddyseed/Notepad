import React, { Component } from 'react'
import './TextField.css'
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
        <textarea className={`outline-none resize-none h-[95%] w-11/12 py-6 bg-inherit text-[#${this.props.foregroundColor}]`} placeholder='Get your fingers on the keyboard...' onClick={this.updateFieldText} spellCheck='false' id='textfield'></textarea>
      </div>
    )
  }
}
