import React, { Component } from 'react'
import './TextField.css'
export default class TextField extends Component {
  constructor() {
    super();
    this.state = {
      fieldText: "",
      "text-encoding": "UTF-8",
      "currentFile": "untitled"
    }
  }
  updateFieldText = (event) => {
    this.setState = {
      fieldText: event.target.value
    }
    document.getElementById('charCount').innerHTML = event.target.value.length
    document.getElementById('wordCount').innerHTML = event.target.value.split(" ").length
  }
  textFieldClicked = () => {
    document.getElementById('fileDropDown').classList.add('hidden')
    document.getElementById('editDropDown').classList.add('hidden')
    document.getElementById('formatDropDown').classList.add('hidden')
  }
  render() {
    return (
      <div className={`w-full h-[99.99%] bg-[#${this.props.backgroundColor}] select-none`} id='textfield-wrapper'>
        <textarea wrap='off' className={`py-8 px-14 h-full outline-none resize-none bg-inherit text-[#20C20E]`} placeholder='Get your fingers on the keyboard...' onChange={this.updateFieldText} onMouseEnter={this.textFieldClicked} spellCheck='false' id='textfield'></textarea>
        <footer className={`font-[500] bg-[#${this.props.foregroundColor}] border-x-style h-full text-[#BFFFBC]`} id='statusbar'>
          <section className='w-full h-full flex items-center justify-end px-14 space-x-8'>
            <span>File:&nbsp;<span id='fileName'>{this.state.currentFile}</span></span>
            <span onClick={this.checkText} className='self-center'>{this.state['text-encoding']}</span>
            <span>Chars:&nbsp;<span id='charCount'>{0}</span></span>
            <span>Words:&nbsp;<span id='wordCount'>{0}</span></span>
          </section>
        </footer>
      </div>
    )
  }
}
