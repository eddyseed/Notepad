import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortcuts from '../../../../Assets/Shortcuts'
import { setBackground } from '../../../../Assets/Colors'
export default class Format extends Component {
    static propTypes = {
        hidden: PropTypes.bool,
        x: PropTypes.number,
        y: PropTypes.number
    }
    static defaultProps = {
        hidden: false
    }
    toggleWordWrap = () => {
        if (document.getElementById('textfield').getAttribute('wrap') === 'off')
            document.getElementById('textfield').setAttribute('wrap', 'on')
        else {
            document.getElementById('textfield').setAttribute('wrap', 'off')
        }
    }
    toggleDarkMode = () => {
        const EArray = [
            'textfield',
            'fileDropDown',
            'formatDropDown',
            'editDropDown',
            'statusbar',
            'toolBar',
            'menubar'
        ]
        setBackground(EArray,'000',true)
    }
    render() {
        return (
            <div className={`top-${this.props.y} left-${this.props.x} space-y-4 ${this.props.hidden ? 'hidden' : ''}`} id={`${this.props.eID}`}>
                <ul className='sector space-y-1'>
                    <ul className='space-x-4' onClick={this.toggleWordWrap}><li><i className="fa-solid fa-cut"></i><span>Word Wrap</span></li><li>{shortcuts.wordwrap}</li></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='sector space-y-1' onClick={this.toggleDarkMode}>
                    <ul className='space-x-4'><li><i className="fa-regular fa-eye"></i><span>Dark Mode</span></li><li>{shortcuts.toggleMode}</li></ul>
                </ul>
            </div>
        )
    }
}
