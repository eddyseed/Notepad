//React Node Elements
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Element Imports
import Edit from './Dropdowns/Edit/Edit'
import File from './Dropdowns/File/File'
import Format from './Dropdowns/Format/Format'

//Relative Stylesheet Imports
import './Toolbar.css'
import shortcuts from '../../Assets/Shortcuts'

export default class Toolbar extends Component {
  static propTypes = {
    hidden: PropTypes.bool,
    eID: PropTypes.string
  }
  static defaultProps = {
    hidden: false
  }
  constructor() {
    super();
    this.state = {
      githubPage: `https://github.com/rishabhjms`
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
    document.getElementById('formatDropDown').classList.add('hidden')
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
  ribbonBarMouseEnter = () => {
    document.getElementById('fileDropDown').classList.add('hidden')
    document.getElementById('editDropDown').classList.add('hidden')
    document.getElementById('formatDropDown').classList.add('hidden')
  }
  emptyTextField = () => {
    document.getElementById('textfield').value = ''
  }
  render() {
    return (
      <div className={`${this.props.hidden ? 'hidden' : 'grid'} grid-rows-2 select-none`} id={`${this.props.eID}`}>
        <section>
          <ul className={`flex items-center w-full h-full space-x-4 px-10 font-[500]`} id={`menuBar`}>
            <li onMouseEnter={this.showFileMenu}>File&nbsp;<i className="fa-solid fa-caret-down"></i></li>
            <li onMouseEnter={this.editFileMenu}>Edit&nbsp;<i className="fa-solid fa-caret-down"></i></li>
            <li onMouseEnter={this.formatFileMenu}>Format&nbsp;<i className="fa-solid fa-caret-down"></i></li>
          </ul>
        </section>
        <File x={8} y={14} eID={'fileDropDown'} hidden={true} />
        <Edit x={36} y={14} eID={'editDropDown'} hidden={true} />
        <Format x={56} y={14} eID={'formatDropDown'} hidden={true} />

        <section className={`flex h-full justify-center`} onMouseEnter={this.ribbonBarMouseEnter} id='ribbonBar'>
          <section className='flex items-center h-full w-11/12 text-2xl space-x-6'>
            <button onClick={this.execCutCommand} title={shortcuts.cut}><span><i className="fa-solid fa-scissors"></i></span></button>
            <button onClick={this.execCopyCommand} title={shortcuts.copy}><span><i className="fa-regular fa-copy"></i></span></button>
            <button onClick={this.execPasteCommand} title={shortcuts.paste}><span><i className="fa-regular fa-paste"></i></span></button>
            <button className='cursor-default'><span><span >|</span></span></button>
            <button onClick={this.emptyTextField} title='Clear the Text Field'><i className="fa-solid fa-rotate-right"></i></button>
            <a href={this.state.githubPage} target={'_blank'} rel="noreferrer"> <button><i className="fa-regular fa-circle-question"></i></button></a>
          </section>
        </section>
      </div>
    )
  }
}
