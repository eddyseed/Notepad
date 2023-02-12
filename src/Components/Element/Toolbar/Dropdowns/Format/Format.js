import React, { Component } from 'react'

export default class Format extends Component {
    toggleWordWrap = () => {
        if (document.getElementById('textfield').getAttribute('wrap') === 'off')
            document.getElementById('textfield').setAttribute('wrap', 'on')
        else {
            document.getElementById('textfield').setAttribute('wrap', 'off')
        }
    }
    toggleDarkMode=()=>{
        document.getElementById('textfield').style.background='#fff'
        document.getElementById('textfield').style.color='#0a210f'
        document.getElementById('fileDropDown').style.background='#fff'
        document.getElementById('fileDropDown').style.color='#0a210f'
        document.getElementById('formatDropDown').style.background='#fff'
        document.getElementById('formatDropDown').style.color='#0a210f'
        document.getElementById('editDropDown').style.background='#fff'
        document.getElementById('editDropDown').style.color='#0a210f'
        document.getElementById('statusbar').style.backgroundColor='#bfffbc'
        document.getElementById('statusbar').style.color='#0a210f'
        document.getElementById('quickToolBar').style.backgroundColor='#bfffbc'
        document.getElementById('quickToolBar').style.color='#0a210f'
        document.getElementById('menubar').style.backgroundColor='#bfffbc'
        document.getElementById('menubar').style.color='#0a210f'
    }
    render() {
        return (
            <div className={`bg-[#080302] text-[#bfffbc] absolute space-y-4 py-2 top-12 left-56 hidden`} style={{ borderRadius: "10px" }} id='formatDropDown'>
                <ul className='first-sector space-y-1'>
                    <ul className='space-x-4' onClick={this.toggleWordWrap}><li><i className="fa-solid fa-cut"></i><span>Word Wrap</span></li><li>Alt + Z</li></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='first-sector space-y-1' onClick={this.toggleDarkMode}>
                    <ul className='space-x-4'><li><i className="fa-regular fa-eye"></i><span>Dark Mode</span></li><li>Shift + N</li></ul>
                </ul>
            </div>
        )
    }
}
