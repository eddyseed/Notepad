import React, { Component } from 'react'
import jQuery from 'jquery'
import $ from 'jquery'
export default class Toolbar extends Component {
  execCutCommand = () => {
    document.execCommand('cut')
  }
  execCopyCommand = () => {
    document.execCommand('copy')
  }
  execPasteCommand = () => {
    navigator.clipboard.readText().then(txt => {
      document.getElementById('textfield').value += txt
    })
  }
  render() {
    return (
      <div className={`bg-[#${this.props.backgroundColor}] text-[#${this.props.foregroundColor}] grid grid-rows-2 select-none`}>
        <section>
          <ul className='flex space-x-8 w-4/5 px-14 items-center h-full'>
            <li>File</li>
            <li>Edit</li>
            <li>Format</li>
            <li>View</li>
            <li>Help</li>
          </ul>
        </section>
        <section className='text-2xl space-x-6 px-14'>
          <button onClick={this.execCutCommand} title='Ctrl + X'><span><i className="fa-solid fa-scissors"></i></span></button>
          <button onClick={this.execCopyCommand} title='Ctrl + C'><span><i className="fa-regular fa-copy"></i></span></button>
          <button onClick={this.execPasteCommand} title='Ctrl + V'><span><i className="fa-regular fa-paste"></i></span></button>
        </section>
      </div>
    )
  }
}
