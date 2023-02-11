import React, { Component } from 'react'

export default class Format extends Component {
    render() {
        return (
            <div className={`bg-[#080302] text-[#bfffbc] absolute space-y-4 py-2 top-12 left-56 hidden`} style={{ borderRadius: "10px" }} id='formatDropDown'>
                <ul className='first-sector space-y-1'>
                    <ul className='space-x-4'><li><i className="fa-solid fa-cut"></i><span>Word Wrap</span></li><li>Alt + Z</li></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='first-sector space-y-1'>
                    <ul className='space-x-4'><li><i className="fa-regular fa-eye"></i><span>Dark Mode</span></li><li>Shift + N</li></ul>
                </ul>
            </div>
        )
    }
}
