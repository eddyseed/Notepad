import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortcuts from '../../../../Assets/Shortcuts'
export default class Edit extends Component {
    static propTypes = {
        hidden: PropTypes.bool,
        x: PropTypes.number,
        y: PropTypes.number
    }
    static defaultProps = {
        hidden: false
    }
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
    insertTimeCommand = () => {
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        let date = new Date()
        let hour = date.getHours()
        let min = date.getMinutes()
        let day = date.getDay()
        let dAte = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        let text = hour.toString() + ":" + min.toString() + ", " + weekdays[day] + " " + dAte.toString()+"th of "+mS[month]+" "+year.toString()
            console.log(text)
        document.getElementById('textfield').value += text
    }
    featureNotWorking = () => {
        alert("Find and Replace features are not working yet!")
    }
    render() {
        return (
            <div className={`space-y-4 top-${this.props.y} left-${this.props.x} ${this.props.hidden ? 'hidden' : ''}`} id={`${this.props.eID}`}>
                <ul className='sector space-y-1'>
                    <ul className='space-x-4' onClick={this.execCutCommand}>
                        <li><i className="fa-solid fa-cut"></i><span>Cut</span></li>
                        <li>{shortcuts.cut}</li></ul>
                    <ul className='space-x-4' onClick={this.execCopyCommand}><li><i className="fa-regular fa-copy"></i><span>Copy</span></li><li>{shortcuts.copy}</li></ul>
                    <ul className='space-x-4' onClick={this.execPasteCommand}><li><i className="fa-regular fa-paste"></i><span>Paste</span></li><li>{shortcuts.paste}</li></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='sector space-y-1'>
                    <ul className='space-x-4' onClick={this.execSelectAllCommand}><li><i className="fa-solid fa-align-justify"></i><span>Select All</span></li><li>{shortcuts.selectall}</li></ul>
                    <ul className='space-x-4' onClick={this.featureNotWorking}><li><i className="fa-solid fa-magnifying-glass"></i><span>Find</span></li><li></li></ul>
                    <ul className='space-x-4' onClick={this.featureNotWorking}><li><i className="fa-solid fa-magnifying-glass-arrow-right"></i><span>Replace</span></li><li></li></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>

                <ul className='sector space-y-1'>
                    <ul className='space-x-4' onClick={this.insertTimeCommand}><li><i className="fa-regular fa-clock "></i><span>Insert Time</span></li><li></li></ul>
                </ul>
            </div>
        )
    }
}
