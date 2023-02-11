import React, { Component } from 'react'

export default class Edit extends Component {
    execCutCommand = () => {
        document.execCommand('cut')
        document.getElementById('editDropDown').classList.add('hidden')
    }
    execCopyCommand = () => {
        document.execCommand('copy')
        document.getElementById('editDropDown').classList.add('hidden')
    }
    execPasteCommand = () => {
        navigator.clipboard.readText().then(txt => {
            document.getElementById('textfield').value += txt
            document.getElementById('editDropDown').classList.add('hidden')
        })
    }
    execSelectAllCommand = () => {
        document.getElementById('textfield').select()
        document.getElementById('editDropDown').classList.add('hidden')
    }
    insertTimeCommand=()=>{
        let date = new Date()
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let text = String(date.getDate()+"th of "+month[date.getMonth()])
        document.getElementById('textfield').value += text
    }
    render() {
        return (
            <div className={`bg-[#080302] text-[#bfffbc] absolute space-y-4 py-2 top-12 left-36 hidden`} style={{ borderRadius: "10px" }} id='editDropDown'>
                <ul className='first-sector space-y-1'>
                    <ul className='space-x-4' onClick={this.execCutCommand}>
                        <li><i className="fa-solid fa-cut"></i><span>Cut</span></li>
                        <li>Ctrl + X</li></ul>
                    <ul className='space-x-4' onClick={this.execCopyCommand}><li><i className="fa-regular fa-copy"></i><span>Copy</span></li><li>Ctrl + C</li></ul>
                    <ul className='space-x-4' onClick={this.execPasteCommand}><li><i className="fa-regular fa-paste"></i><span>Paste</span></li><li>Ctrl + V</li></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='second-sector space-y-1'>
                    <ul className='space-x-4' onClick={this.execSelectAllCommand}><li><i className="fa-solid fa-align-justify"></i><span>Select All</span></li><li>Ctrl + A</li></ul>
                    <ul className='space-x-4'><li><i className="fa-solid fa-magnifying-glass"></i><span>Find</span></li><li></li></ul>
                    <ul className='space-x-4'><li><i className="fa-solid fa-magnifying-glass-arrow-right"></i><span>Replace</span></li><li></li></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>

                <ul className='second-sector space-y-1'>
                    <ul className='space-x-4' onClick={this.insertTimeCommand}><li><i className="fa-regular fa-clock "></i><span>Insert Time</span></li><li></li></ul>
                </ul>
            </div>
        )
    }
}
