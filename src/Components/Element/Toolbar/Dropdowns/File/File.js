//React Node Elements
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Custom Imports
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
    constructor() {
        super();
        this.state = {
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
                this.discardCurrentFile()
            }
        })
    }
    selectFileFunc = () => {
        for (let i = 0; i < document.getElementById('file_grid').childElementCount; i++) {
            document.getElementById(`file_box_${i}`).addEventListener('click', (e) => {
                document.getElementById('textfield').value = localStorage.getItem(document.getElementById(`file_box_${i}`).children[1].innerHTML)
                this.formalities(document.getElementById(`file_box_${i}`).children[1].innerHTML)
                this.closeDialog();
            })
        }
    }
    deleteFileFunc = () => {
        let n = []
        for (let i = 0; i < document.getElementById('file_grid').childElementCount; i++) {
            document.getElementById(`trash_icn_${i}`).addEventListener('click', (e) => {
                // To add event listener to delete icon in OpenFileDialog...
            })
        }
    }
    loadNewFileDialog = () => {
        document.getElementById('newFileDialog').style.display = 'flex'
    }
    loadOpenFileDialog = () => {
        document.getElementById('openFileDialog').style.display = 'flex'
        document.getElementById('file_grid').innerHTML = ''
        let pushBox = (file_box_index, _files) => {
            let box =
                `<div class='file_box' id='file_box_${file_box_index}'>
                <i class="fa-regular fa-file"></i>
                <span class='file_x'>${_files[file_box_index]}</span>
                <i class="fa-regular fa-trash-can" id='trash_icn_${file_box_index}'></i>
            </div>`
            document.getElementById('file_grid').innerHTML += box
        }
        let files = []
        let file_box_number = 0
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).endsWith('.txt')) {
                files.push(localStorage.key(i))
                pushBox(file_box_number, files)
                file_box_number++;
            }
        }
        this.selectFileFunc()
    }
    loadSaveFileDialog = () => {
        if (document.getElementById('fileName').innerHTML === 'untitled') {
            document.getElementById('saveFileDialog').style.display = 'flex'
        } else {
            let a = document.getElementById('fileName').innerHTML + ".txt"
            console.log(a)
            localStorage.setItem(a, document.getElementById('textfield').value)
            this.formalities(a)
            document.getElementById('saveFileDialog').style.display = 'none'
        }
    }
    formalities = (a) => {
        let date = new Date();
        document.getElementById('fileName').innerHTML = a;
        document.title = `${a} | VNote`
        document.getElementById('textfield').value = ''
    }
    discardCurrentFile = () => {
        let deleteTextFile = (index) => {
            let files = []
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).endsWith('.txt')) {
                    files.push(localStorage.key(i))
                }
            }
            localStorage.removeItem(files[files.length - 1])
            this.formalities('untitled')
        }
        document.getElementById('fileName').innerHTML = this.state.defaultFile
        document.getElementById('lastSavedDate').innerHTML = this.state.defaultDate
        deleteTextFile(0)

    }
    closeDialog = () => {
        document.getElementById('openFileDialog').style.display = 'none'
    }
    printFile = () => {
        window.print()
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
                <ul className='sector space-y-2'>
                    <ul onClick={this.printFile}>
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
