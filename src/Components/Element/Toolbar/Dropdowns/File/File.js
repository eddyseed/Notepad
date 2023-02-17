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
    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key.toLowerCase() === 's') {
                e.preventDefault();
                this.saveFile()
            } else if (e.altKey && e.key.toLowerCase() === 'n') {
                e.preventDefault()
                this.loadNewFileDialog()
            } else if (e.ctrlKey && e.key.toLocaleLowerCase() === 'o') {
                e.preventDefault()
                this.openExistingFile();
            }else if(e.altKey && e.key.toLowerCase()==='d'){
                e.preventDefault()
                this.discardFile()
            }
        })
    }
    loadNewFileDialog = () => {
        document.getElementById('mainElements').style.opacity = 0.9
        document.getElementById('newFileDialog').classList.remove('hidden')
        document.getElementById('newFileDialog').classList.add('flex')
        document.getElementById('fileDropDown').classList.add('hidden')
    }
    openExistingFile = () => {
        document.getElementById('mainElements').style.opacity = 0.9
        document.getElementById('openFileDialog').classList.remove('hidden')
        document.getElementById('openFileDialog').classList.add('flex')
        document.getElementById('fileDropDown').classList.add('hidden')

    }
    saveFile = () => {
        if (String(document.getElementById('fileName').innerHTML) === 'untitled') {
            document.getElementById('mainElements').style.opacity = 0.9
            document.getElementById('saveFileDialog').classList.remove('hidden')
            document.getElementById('saveFileDialog').classList.add('flex')
            document.getElementById('fileDropDown').classList.add('hidden')

        } else {
            localStorage.setItem(document.getElementById('fileName').innerHTML, document.getElementById('textfield').value)
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
