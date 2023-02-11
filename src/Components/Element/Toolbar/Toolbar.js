import React, { Component } from 'react'
import Edit from './Dropdowns/Edit/Edit'
import File from './Dropdowns/File/File'
import Format from './Dropdowns/Format/Format'
import './Toolbar.css'
export default class Toolbar extends Component {
  constructor() {
    super()
    this.state = {
      activeDropdown: ""
    }
  }
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
  showFileMenu = (e) => {
    document.getElementById('fileDropDown').classList.toggle('hidden')
    document.getElementById('editDropDown').classList.add('hidden')
  }
  editFileMenu = () => {
    document.getElementById('editDropDown').classList.toggle('hidden')
    document.getElementById('fileDropDown').classList.add('hidden')
    document.getElementById('formatDropDown').classList.add('hidden')
  }
  formatFileMenu = () => {
    document.getElementById('formatDropDown').classList.toggle('hidden')
    document.getElementById('editDropDown').classList.add('hidden')
    document.getElementById('fileDropDown').classList.add('hidden')
  }
  quickToolBarClicked = () => {
    document.getElementById('fileDropDown').classList.add('hidden')
    document.getElementById('editDropDown').classList.add('hidden')
    document.getElementById('formatDropDown').classList.add('hidden')
  }
render() {
  return (
    <div className={`grid grid-rows-2 select-none border-style-x`} id='toolbar_parent'>
      <section>
        <ul className={`fileMenu flex space-x-4 w-full px-10 items-center h-full font-[500] menu-items bg-[#${this.props.backgroundColor}] outline-none text-[#${this.props.foregroundColor}]`}>
          <li className='cursor-pointer' onMouseEnter={this.showFileMenu}>File&nbsp;<i className="fa-solid fa-caret-down"></i></li>
          <li className='cursor-pointer' onMouseEnter={this.editFileMenu}>Edit <i className="fa-solid fa-caret-down"></i></li>
          <li className='cursor-pointer' onMouseEnter={this.formatFileMenu}>Format <i className="fa-solid fa-caret-down"></i></li>
          <li className='cursor-pointer'>View</li>
          <li className='cursor-pointer'>Help</li>
        </ul>
      </section>
      <File cutCommand={this.execCutCommand}/>
      <Edit />
      <Format />
      <section className={`flex h-full items-end justify-center text-[#${this.props.foregroundColor}] bg-[#${this.props.backgroundColor}]`} onMouseEnter={this.quickToolBarClicked}>
        <section className='text-2xl space-x-6 w-11/12 h-full flex items-center'>
          <button onClick={this.execCutCommand} title='Ctrl + X'><span><i className="fa-solid fa-scissors"></i></span></button>
          <button onClick={this.execCopyCommand} title='Ctrl + C'><span><i className="fa-regular fa-copy"></i></span></button>
          <button onClick={this.execPasteCommand} title='Ctrl + V'><span><i className="fa-regular fa-paste"></i></span></button>
        </section>
      </section>
    </div>
  )
}
}
