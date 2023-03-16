import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortcuts from '../../../../Assets/Shortcuts'
let date = new Date();
export default class File extends Component {
    static propTypes = {
        hidden: PropTypes.bool,
        x: PropTypes.number,
        y: PropTypes.number
    }
    static defaultProps = {
        hidden: false
    }
    constructor(){
        super();
        this.state={
            defaultFile: 'untitled',
            defaultDate: 'unknown'
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key.toLowerCase() === 's') {
                e.preventDefault();
                this.loadSaveFileDialog()
            } else if (e.altKey && e.key.toLowerCase() === 'n') {
                e.preventDefault()
                this.loadNewFileDialog()
            } else if (e.ctrlKey && e.key.toLocaleLowerCase() === 'o') {
                e.preventDefault()
                this.loadOpenFileDialog();
            } else if (e.altKey && e.key.toLowerCase() === 'd') {
                e.preventDefault()
                this.discardFile()
            }
        })
    }
    loadNewFileDialog = () => {
        document.getElementById('newFileDialog').style.display = 'flex'
    }
    loadOpenFileDialog = () => {
        document.getElementById('openFileDialog').style.display = 'flex'
    }
    loadSaveFileDialog = () => {
        document.getElementById('openFileDialog').style.display = 'flex'
    }
    discardCurrentFile=()=>{
        document.getElementById('fileName').innerHTML = this.state.defaultFile
        document.getElementById('lastSavedDate').innerHTML = this.state.defaultDate
    }
    render() {
        return (
            <div className={`top-${this.props.y} left-${this.props.x} space-y-4 ${this.props.hidden ? 'hidden' : ''}`} id={`${this.props.eID}`}>
                <ul className='sector space-y-1'>
                    <ul onClick={this.loadNewFileDialog}>
                        <li><i className="fa-solid fa-plus"></i><span>New</span></li>
                        <li>{shortcuts.new}</li>
                    </ul>
                    <ul onClick={this.loadOpenFileDialog}>
                        <li><i className="fa-regular fa-file"></i><span>Open</span></li>
                        <li>{shortcuts.open}</li>
                    </ul>
                    <ul onClick={this.loadSaveFileDialog}>
                        <li><i className="fa-regular fa-save"></i><span>Save</span></li>
                        <li>{shortcuts.save}</li>
                    </ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-4/5' /></li></ul>
                <ul className='sector space-y-2' onClick={this.printFile}>
                    <ul>
                        <li><i className="fa-solid fa-print"></i><span>Print</span></li>
                        <li>{shortcuts.print}</li>
                    </ul>
                    <ul className='discard-menu-option' onClick={this.discardCurrentFile}>
                        <li><i className="fa-regular fa-trash-can"></i><span>Discard</span></li>
                        <li>{shortcuts.discard}</li>
                    </ul>
                </ul>
            </div>
        )
    }
}
