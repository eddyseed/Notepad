import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortcuts from '../../../../Assets/Shortcuts'
export default class File extends Component {
    static propTypes = {
        hidden: PropTypes.bool,
        x: PropTypes.number,
        y: PropTypes.number
    }
    static defaultProps = {
        hidden: false
    }

    loadNewFileDialog = () => {
        document.getElementById('mainElements').style.opacity = 0.9
        document.getElementById('newFileDialog').classList.remove('hidden')
        document.getElementById('newFileDialog').classList.add('flex')
        document.getElementById('fileDropDown').classList.add('hidden')
        document.getElementById('textfield').value = ''
    }
    openExistingFile = () => {
        let fileName = prompt("Enter file name you want to open")
        try {
            if (Boolean(localStorage[fileName])) {
                document.getElementById('textfield').value = localStorage.getItem(String(fileName))
                document.getElementById('fileDropDown').classList.add('hidden')
                document.getElementById('fileName').innerHTML = fileName
            } else {
                alert("File Not Found!")

            }
        } catch (err) {
            console.log("Error", err)
        }
    }
    saveFile = () => {
        if (String(document.getElementById('fileName').innerHTML) === 'untitled') {
            let FILENAME = prompt("What name do you want to give your file?")
            document.getElementById('fileName').innerHTML = typeof FILENAME
            localStorage.setItem(FILENAME, document.getElementById('textfield').value)
            document.title = document.getElementById('fileName').innerHTML
        }
    }
    discardFile = () => {
        let fileTitle = document.getElementById('fileName')
        localStorage.removeItem(String(fileTitle.innerHTML))
        fileTitle.innerHTML = 'untitled'
        document.getElementById('newFileDialog').classList.remove('flex');
        document.getElementById('newFileDialog').classList.add('hidden');
        document.getElementById('fileDropDown').classList.add('hidden')
        document.getElementById('textfield').value = ''
    }
    render() {
        return (
            <div className={`top-${this.props.y} left-${this.props.x} space-y-4 ${this.props.hidden ? 'hidden' : ''}`} id={`${this.props.eID}`}>
                <ul className='sector space-y-1'>
                    <ul onClick={this.loadNewFileDialog}>
                        <li><i className="fa-solid fa-plus"></i><span>New</span></li>
                        <li>{shortcuts.new}</li>
                    </ul>
                    <ul onClick={this.openExistingFile}>
                        <li><i className="fa-regular fa-file"></i><span>Open</span></li>
                        <li>{shortcuts.open}</li>
                    </ul>
                    <ul onClick={this.saveFile}>
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
                    <ul className='discard-menu-option' onClick={this.discardFile}>
                        <li><i className="fa-regular fa-trash-can"></i><span>Discard</span></li>
                        <li>{shortcuts.discard}</li>
                    </ul>
                </ul>
            </div>
        )
    }
}
