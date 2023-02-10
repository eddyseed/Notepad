import React, { Component } from 'react'
import './File.css'
export default class File extends Component {
    render() {
        return (
            <div className={`absolute bg-white space-y-4 py-2 top-14 left-8 hidden`} style={{borderRadius:"10px"}} id='fileDropDown'>
                <ul className='first-sector space-y-1'>
                    <ul className='space-x-4'><i className="fa-solid fa-plus"></i><span>New</span></ul>
                    <ul className='space-x-4'><i className="fa-regular fa-file"></i><span>Open</span></ul>
                    <ul className='space-x-4'><i className="fa-regular fa-save"></i><span>Save</span></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]'/></li></ul>
                <ul className='second-sector space-y-2'>
                    <ul className='space-x-4'><i className="fa-solid fa-print"></i><span>Print</span></ul>
                    <ul className='space-x-4'><i className="fa-regular fa-trash-can"></i><span>Discard</span></ul>
                </ul>
            </div>
        )
    }
}
