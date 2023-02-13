import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Element Imports
import Edit from './Dropdowns/Edit/Edit'
import File from './Dropdowns/File/File'
import Format from './Dropdowns/Format/Format'

//Relative Stylesheet Imports
import './Toolbar.css'

export default class Toolbar extends Component {
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
      <div className={`${this.props.hidden?'hidden':'grid'} grid-rows-2 select-none`} id={`${this.props.eID}`}>
        <section>
          <ul className={`fileMenu flex space-x-4 w-full px-10 items-center h-full font-[500] menu-items bg-[#${this.props.backgroundColor}] outline-none text-[#${this.props.foregroundColor}]`}>
            <li onMouseEnter={this.showFileMenu}>File&nbsp;<i className="fa-solid fa-caret-down"></i></li>
            <li onMouseEnter={this.editFileMenu}>Edit&nbsp;<i className="fa-solid fa-caret-down"></i></li>
            <li onMouseEnter={this.formatFileMenu}>Format&nbsp;<i className="fa-solid fa-caret-down"></i></li>
            <li>View</li>
            <li>Help</li>
          </ul>
        </section>
        <File x={8} y={12} eID={'fileDropDown'} hidden={true}/>
        <Edit x={36} y={12} eID={'editDropDown'} hidden={true}/>
        <Format x={56} y={0} eID={'formatDropDown'} hidden={false}/>

        <section className={`flex h-full items-end justify-center text-[#${this.props.foregroundColor}] bg-[#${this.props.backgroundColor}]`} onMouseEnter={this.quickToolBarClicked} id='quickToolBar'>
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
