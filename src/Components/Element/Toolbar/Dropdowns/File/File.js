import React, { Component } from 'react'
import './File.css'
export default class File extends Component {
    createNewFile = () => {
        document.getElementById('mainElements').style.opacity = 0.8
        document.getElementById('getWin').classList.remove('hidden')
        document.getElementById('getWin').classList.add('flex')
        document.getElementById('fileDropDown').classList.add('hidden')
        document.getElementById('textfield').value = ''
    }
    openExistingFile = () => {
        let fileName = prompt("Enter file name you want to open")
        if (Boolean(localStorage[fileName])) {
            document.getElementById('textfield').value = localStorage.getItem(String(fileName))
            document.getElementById('fileDropDown').classList.add('hidden')
            document.getElementById('fileName').innerHTML = fileName
        } else {
            alert("File Not Found!")

        }
    }
    saveFile = () => {
        localStorage.setItem(String(document.getElementById('fileName').innerHTML), String(document.getElementById('textfield').value))
    }
    discardFile = () => {
        let fileTitle = document.getElementById('fileName')
        localStorage.removeItem(String(fileTitle.innerHTML))
        fileTitle.innerHTML = 'untitled'
        document.getElementById('getWin').classList.remove('flex');
        document.getElementById('getWin').classList.add('hidden');
        document.getElementById('textfield').value = ''
    }
    printFile=(e)=>{
        alert(`Sorry, print feature is not yet working!\nI'm working on it! It will be available soon!`)
    }
    render() {
        return (
            <div className={`bg-[#080302] text-[#bfffbc] absolute space-y-4 py-2 top-12 left-8 hidden`} style={{ borderRadius: "10px" }} id='fileDropDown'>

                <ul className='first-sector space-y-1'>
                    <ul onClick={this.createNewFile}>
                        <li><i className="fa-solid fa-plus"></i><span>New</span></li>
                        <li>Ctrl + N</li>
                    </ul>
                    <ul onClick={this.openExistingFile}>
                        <li><i className="fa-regular fa-file"></i><span>Open</span></li>
                        <li>Ctrl + O</li>
                    </ul>
                    <ul onClick={this.saveFile}>
                        <li><i className="fa-regular fa-save"></i><span>Save</span></li>
                        <li>Ctrl + S</li>
                    </ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='second-sector space-y-2' onClick={this.printFile}>
                    <ul>
                        <li><i className="fa-solid fa-print"></i><span>Print</span></li>
                        <li>Ctrl + P</li>
                    </ul>
                    <ul className='discard-menu-option' onClick={this.discardFile}>
                        <li><i className="fa-regular fa-trash-can"></i><span>Discard</span></li>
                        <li>Shift + D</li>
                    </ul>
                </ul>
            </div>
        )
    }
}
