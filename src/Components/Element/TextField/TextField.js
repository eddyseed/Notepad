import React, { Component } from 'react'
import './TextField.css'
import PropTypes from 'prop-types'
export default class TextField extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    foregroundColor: PropTypes.string,
    hidden: PropTypes.bool,
    eID: PropTypes.string
  }
  static defaultProps = {
    backgroundColor: "070C20",
    foregroundColor: "fbf5f3",
    hidden: false
  }
  constructor() {
    super();
    this.state = {
      fieldText: "",
      "text-encoding": "UTF-8",
      "currentFile": "untitled",
      "lastSaved": "unknown "
    }
  }
  updateFieldText = (event) => {
    this.setState({
      fieldText: event.target.value,
      fieldLength: event.target.value.length
    })
    document.getElementById('charCount').innerHTML = event.target.value.length
    if (Number(event.target.value) === 0) {
      document.getElementById('wordCount').innerHTML = 0
    } else {
      document.getElementById('wordCount').innerHTML = event.target.value.split(" ").length
    }
  }
  textFieldClicked = () => {
    document.getElementById('fileDropDown').classList.add('hidden')
    document.getElementById('editDropDown').classList.add('hidden')
    document.getElementById('formatDropDown').classList.add('hidden')
  }
  render() {
    return (
      <div className={`w-full h-[99.99%] select-none`} id={`${this.props.eID}`}>
        <textarea wrap='off' className={`ss-3 text-lg py-8 px-14 h-full outline-none resize-none bg-inherit`} placeholder='Get your fingers on the keyboard...' onChange={this.updateFieldText} onMouseEnter={this.textFieldClicked} spellCheck='false' id='textfield'></textarea>
        <footer className={`font-[500] border-x-style h-full`} id='statusbar'>
          <section className='w-full h-full flex items-center justify-end px-14 space-x-8'>
            <span>Last Saved:&nbsp;<span id='lastSavedDate'>{this.state.lastSaved}</span></span>
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
