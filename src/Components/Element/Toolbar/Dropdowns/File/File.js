import React, { Component } from 'react'
import './File.css'
export default class File extends Component {
    render() {
        return (
            <div className={`bg-[#080302] text-[#bfffbc] absolute space-y-4 py-2 top-12 left-8 hidden`} style={{ borderRadius: "10px" }} id='fileDropDown'>
                <ul className='first-sector space-y-1'>
                    <ul>
                        <li><i className="fa-solid fa-plus"></i><span>New</span></li>
                        <li>Ctrl + N</li>
                    </ul>
                    <ul>
                        <li><i className="fa-regular fa-file"></i><span>Open</span></li>
                        <li>Ctrl + O</li>
                    </ul>
                    <ul>
                        <li><i className="fa-regular fa-save"></i><span>Save</span></li>
                        <li>Ctrl + S</li>
                    </ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='second-sector space-y-2'>
                    <ul>
                        <li><i className="fa-solid fa-print"></i><span>Print</span></li>
                        <li>Ctrl + P</li>
                    </ul>
                    <ul className='discard-menu-option'>
                        <li><i className="fa-regular fa-trash-can"></i><span>Discard</span></li>
                        <li>Shift + D</li>
                    </ul>
                </ul>
            </div>
        )
    }
}
