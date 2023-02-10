import React, { Component } from 'react'
import Edit from './Dropdowns/Edit/Edit'
import File from './Dropdowns/File/File'
import Format from './Dropdowns/Format/Format'
import './Toolbar.css'
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
  showFileMenu=()=>{
    document.getElementById('fileDropDown').classList.toggle('hidden')
  }
  editFileMenu=()=>{
    document.getElementById('editDropDown').classList.toggle('hidden')
  }
  formatFileMenu=()=>{
    document.getElementById('formatDropDown').classList.toggle('hidden')
  }
  render() {
    return (
      <div className={`text-[#${this.props.foregroundColor}] grid grid-rows-2 select-none`}>
        <section>
          <ul className={`flex space-x-4 w-full px-14 items-center h-full font-[500] menu-items bg-[#${this.props.backgroundColor}] outline-none`}>
            <li className='cursor-pointer' onClick={this.showFileMenu}>File&nbsp;<i class="fa-solid fa-caret-down"></i></li>
            <li className='cursor-pointer' onClick={this.editFileMenu}>Edit <i class="fa-solid fa-caret-down"></i></li>
            <li className='cursor-pointer' onClick={this.formatFileMenu}>Format <i class="fa-solid fa-caret-down"></i></li>
            <li className='cursor-pointer'>View</li>
            <li className='cursor-pointer'>Help</li>
          </ul>
        </section>
        <File/>
        <Edit/>
        <Format/>
        <section className='flex h-full items-center justify-center'>
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
