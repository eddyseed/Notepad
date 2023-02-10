import React, { Component } from 'react'

export default class Edit extends Component {
    render() {
        return (
            <div className={`absolute bg-white space-y-4 py-2 top-14 left-36 hidden`} style={{ borderRadius: "10px" }} id='editDropDown'>
                <ul className='first-sector space-y-1'>
                    <ul className='space-x-4'><i className="fa-solid fa-cut"></i><span>Cut</span></ul>
                    <ul className='space-x-4'><i className="fa-regular fa-copy"></i><span>Copy</span></ul>
                    <ul className='space-x-4'><i className="fa-regular fa-paste"></i><span>Paste</span></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='second-sector space-y-1'>
                    <ul className='space-x-4'><i className="fa-solid fa-align-justify"></i><span>Select All</span></ul>
                    <ul className='space-x-4'><i className="fa-solid fa-magnifying-glass"></i><span>Find</span></ul>
                    <ul className='space-x-4'><i class="fa-solid fa-magnifying-glass-arrow-right"></i><span>Replace</span></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>

                <ul className='second-sector space-y-1'>
                    <ul className='space-x-4'><i className="fa-regular fa-clock "></i><span>Insert Time</span></ul>
                </ul>
            </div>
        )
    }
}
